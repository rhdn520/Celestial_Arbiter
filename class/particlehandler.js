class ParticleHandler {
  constructor(_globalVar) {
    this.globalVar = _globalVar;
    this.particles = [];
    this.pixelSteps = 6; // 숫자가 클수록 덜 촘촘
    this.drawAsPoints = true; // 점 또는 원으로 그릴 수 있음
    this.bgColor = color(0);
    // this.fontName = "script";
    this.pg = createGraphics(width, height);
    this.eyePosArr = [];
    this.current = 0;
  }
  updateParticles() {
    this.pixelSteps = 6;
    this.pg.pixelDensity(1);
    this.pg.clear();
    this.pg.background(0);
    this.pg.push();
    this.pg.scale(0.25);
    judge.display(); //그리는 그림 제어는 judgehandler에서
    this.pg.pop();
    // this.pg.show();
    this.pg.loadPixels();
    // console.log(this.pg.pixels);

    let newColor = color(
      random(255.0, 255.0),
      random(255.0, 255.0),
      random(255.0, 255.0)
    );

    let particleCount = this.particles.length;
    let particleIndex = 0;

    let coordsIndexes = [];
    for (
      let i = 0;
      i < this.pg.width * this.pg.height - 1;
      i += this.pixelSteps
    ) {
      if(this.pg.pixels[i] === 0) continue;
      coordsIndexes.push(i);
    }

    for (let i = 0; i < coordsIndexes.length; i++) {
      console.log(coordsIndexes.length);
      let randomIndex = floor(random(0, coordsIndexes.length));
      let coordIndex = coordsIndexes[randomIndex];
      coordsIndexes.splice(randomIndex, 1);

      // if (this.pg.pixels[coordIndex] === 0) continue;

      let x = coordIndex % this.pg.width;
      let y = floor(coordIndex / this.pg.width);

      let newParticle;

      if (particleIndex < particleCount) {
        // console.log("new");
        newParticle = this.particles[particleIndex];
        newParticle.isKilled = false;
        particleIndex += 1;
      } else {
        newParticle = new Particle();

        let randomPos = this.generateRandomPos(
          this.pg.width / 2,
          this.pg.height / 2,
          (this.pg.width + this.pg.height) / 2
        );
        newParticle.pos.x = randomPos.x;
        newParticle.pos.y = randomPos.y;
        // console.log(newParticle.pos.x, newParticle.pos.y);

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

      newParticle.target.x = x * (width / this.pg.width);
      newParticle.target.y = y * (height / this.pg.height);

    }

    if (particleIndex < particleCount) {
      for (let i = particleIndex; i < particleCount; i++) {
        this.particles[i].kill();
      }
    }
    this.resetParticleStopped();
    // pg.updatePixels();
  }

  resetParticleStopped() {
    this.particles.forEach((particle) => {
      particle.stopped = false;
    });
  }

  draw() {
    noStroke();
    background(0);

    for (let x = this.particles.length - 1; x > -1; x--) {
      let particle = this.particles[x];
      if (!particle.stopped) {
        particle.move();
        particle.draw(this.globalVar.judgeEmotion);
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
        // console.log(4);
        // this.drawAgain();
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

  drawStatic() {
    noStroke();
    background(0);

    for (let x = this.particles.length - 1; x > -1; x--) {
      let particle = this.particles[x];
      particle.pos = particle.target;
      particle.draw();
      particle.jiggle();
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
    }
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

  makeEyeArr() {
    for (let i = 0; i < 10; i++) {
      let ipg = createGraphics(width, height);
      let eyeInstance = new EyeVector();
      let instantArr = [];
      ipg.pixelDensity(1);
      ipg.push();
      ipg.scale(0.25);
      eyeInstance.draw(ipg, i);
      ipg.pop();
      ipg.loadPixels();

      let coordsIndexes = [];
      for (let i = 0; i < ipg.width * ipg.height - 1; i += this.pixelSteps) {
        coordsIndexes.push(i);
      }

      for (let i = 0; i < coordsIndexes.length; i++) {
        let randomIndex = floor(random(0, coordsIndexes.length));
        let coordIndex = coordsIndexes[randomIndex];
        coordsIndexes.splice(randomIndex, 1);

        if (ipg.pixels[coordIndex] !== 0) {
          let x = coordIndex % ipg.width;
          let y = floor(coordIndex / ipg.width);

          instantArr.push(
            createVector(x * (width / ipg.width), y * (height / ipg.height))
          );
        }
      }
      this.eyePosArr.push(instantArr);
    }
    console.log(this.eyePosArr);
  }

  drawEyeParticles(n) {
    background(0);
    let eyeArr = this.eyePosArr[n];
    // stroke(255);
    for (let i = 0; i < eyeArr.length; i++) {
      strokeWeight(3);
      stroke(random(100, 255));
      // strokeWeight(this.randomSize);
      point(eyeArr[i].x, eyeArr[i].y);
    }
  }

  blink() {
    if (frameCount % 30 === 0 && this.current < 11) {
      this.drawEyeParticles(this.current);
      // this.current = (this.current + 1) % 10; // Increment current and loop back to 0 after reaching 9
      this.current = this.current + 1; // Increment current and loop back to 0 after reaching 9
    }
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
