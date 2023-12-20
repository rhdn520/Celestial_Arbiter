class ParticleHandler {
  constructor(_globalVar) {
    this.globalVar = _globalVar;
    this.particles = [];
    this.pixelSteps = 4; // 숫자가 클수록 덜 촘촘
    this.drawAsPoints = true; // 점 또는 원으로 그릴 수 있음
    this.bgColor = color(0);
    // this.fontName = "script";
    this.pg = createGraphics(width, height);
  }

  //아래 계속 나오는 'isMoving'은 boolean, 좀 더 다이내믹하게 움직이느냐의 차이
  //scene간 전환 (before-during-after) : isMoving=true
  //scene 내부 움직임(애니메이션) : isMoving=false
  updateParticles(n, isMoving) {
    console.log("updateParticles");
    this.pixelSteps = 4;
    this.pg.pixelDensity(1);
    this.pg.clear();
    this.pg.background(0);
    this.pg.push();
    this.pg.scale(0.25);
    judge.display(n); //그리는 그림 제어는 judgehandler에서
    this.pg.pop();
    // this.pg.show();
    this.pg.loadPixels();
    // console.log(this.pg.pixels);

    let newColor = color(
      random(255.0, 255.0),
      random(255.0, 255.0),
      random(255.0, 255.0)
    );

    let particleCount = this.particles.length; //현재 파티클 개수
    let particleIndex = 0;

    let coordsIndexes = [];
    for (
      let i = 0;
      i < this.pg.width * this.pg.height - 1;
      i += this.pixelSteps
    ) {
      if (this.pg.pixels[i] === 0) continue;
      coordsIndexes.push(i);
    }

    for (let i = 0; i < coordsIndexes.length; i++) {
      // console.log(coordsIndexes.length);
      //랜덤 인덱스로 불러서 매 트렌지션마다 섞여보이게 하는 듯
      let randomIndex;
      // if (isMoving) {
      randomIndex = floor(random(0, coordsIndexes.length));
      // } else {
      //   randomIndex = i;
      // }
      let coordIndex = coordsIndexes[randomIndex];
      coordsIndexes.splice(randomIndex, 1);

      // if (this.pg.pixels[coordIndex] === 0) continue;

      let x = coordIndex % this.pg.width;
      let y = floor(coordIndex / this.pg.width);

      let newParticle;

      if (particleIndex < particleCount) {
        newParticle = this.particles[particleIndex];
        newParticle.isKilled = false;
        particleIndex += 1;
      } else {
        //이전 그래픽보다 현재 그래픽에 파티클이 더 많이 필요한 경우 새 Particle 인스턴스 생성
        newParticle = new Particle();

        //⭐️⭐️여기서 randomPos를 주면 화면 안팎으로 파티클이 돌아다니기 때문에 애니메이팅이 어려워짐
        //isMoving일 경우(scene간 전환)만 randomPos를 줘서 다이내믹한 파티클 움직임을 구현한다
        if (isMoving) {
          let randomPos = this.generateRandomPos(
            this.pg.width / 2,
            this.pg.height / 2,
            (this.pg.width + this.pg.height) / 2
          );
          newParticle.pos.x = randomPos.x;
          newParticle.pos.y = randomPos.y;
          // console.log(newParticle.pos.x, newParticle.pos.y);
        } else {
          //isMoving이 아닌 경우(scene내 전환) pos=target으로 지정하여 움직임이지 않게 한다
          newParticle.pos.x = x * (width / this.pg.width);
          newParticle.pos.y = y * (height / this.pg.height);
        }

        newParticle.maxSpeed = random(4.0, 10.0);
        newParticle.maxForce = newParticle.maxSpeed * 0.05;
        newParticle.particleSize = random(6, 12);
        newParticle.colorBlendRate = random(0.0025, 0.03);

        this.particles.push(newParticle);
      }

      newParticle.startColor = lerpColor(
        newParticle.startColor,
        newParticle.targetColor,
        newParticle.colorWeight
      );
      newParticle.targetColor = newColor;
      newParticle.colorWeight = 0;

      //target = 그래픽 상 위치 를 정해주는 곳
      newParticle.target.x = x * (width / this.pg.width);
      newParticle.target.y = y * (height / this.pg.height);
    }

    //이전 그래픽보다 현재 그래픽 파티클 수가 더 적다면 남은 파티클을 kill
    if (particleIndex < particleCount) {
      for (let i = particleIndex; i < particleCount; i++) {
        this.particles[i].kill();
      }
    }

    //stopped된 파티클은 리셋
    this.resetParticleStopped();

    //깔끔한 애니메이션 위해 isMoving 아닌 경우 프로퍼티 조정
    this.particles.forEach((particle) => {
      if (isMoving) {
        particle.maxSpeed = random(4.0, 10.0);
      } else {
        particle.closeEnoughTarget = 150;
        particle.maxSpeed = random(10.0, 15.0);
      }
    });
  }

  resetParticleStopped() {
    this.particles.forEach((particle) => {
      particle.stopped = false;
    });
  }

  //sceneManager에 들어가 상시호출되는 함수
  //파티클을 매 프레임 그린다
  draw() {
    noStroke();
    background(0);

    for (let x = this.particles.length - 1; x > -1; x--) {
      let particle = this.particles[x];
      if (!particle.stopped) {
        particle.move(); //pos -> target으로 움직임
        particle.draw(this.globalVar.judgeEmotion); //그 경로를 매 프레임 그림
        if (particle.isKilled) {
          if (
            particle.pos.x < 0 ||
            particle.pos.x > width ||
            particle.pos.y < 0 ||
            particle.pos.y > height
          ) {
            this.particles.splice(x, 1);
          }
        }
      } else {
        //stopped된 파티클은 pos=target 강제 지정하여 move()가 먹히지 않는다
        //stopped해야 지글이 가능
        particle.draw();
        particle.jiggle(this.globalVar.judgeEmotion);
        if (frameCount % 180 < 90) {
          particle.pos.y += 0.2;
        } else {
          particle.pos.y -= 0.2;
        }
      }
    }
    // this.update();
  }

  generateRandomPos(x, y, mag) {
    let sourcePos = createVector(x, y);
    let randomPos = createVector(random(0, width), random(0, height));

    let direction = p5.Vector.sub(randomPos, sourcePos);
    direction.normalize();
    direction.mult(mag);
    sourcePos.add(direction);

    return sourcePos;
  }
}

// function mouseDragged() {
//   if (mouseButton === LEFT) {
//     for (let particle of particles) {
//       if (dist(particle.pos.x, particle.pos.y, mouseX, mouseY) < 50) {
//         particle.kill();
//       }
//     }
//   }
// }
