class Particle {
  constructor() {
    this.pos = createVector(0, 0); // 파티클의 현재위치
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.target = createVector(0, 0); //파티클의 목표위치(그래픽 상 위치)
    this.closeEnoughTarget = 80; // 작아지면 튐
    this.maxSpeed = 1.0;
    this.maxForce = 0.1;
    this.particleSize = 10;
    this.isKilled = false;
    this.startColor = color(0);
    this.targetColor = color(0);
    this.colorWeight = 0;
    this.colorBlendRate = 1;
    this.randomColor = random(100, 255);
    this.stopped = false; //closeEnoughTarget에 들어오면 그냥
    // this.randomSize = random(1.5, 2);
  }

  //pos(현재위치)를 조정해 파티클을 움직이는 함수
  //파티클은 항상 pos(현재위치)에서 target(그래픽 상 위치)로 움직인다.
  move() {
    let proximityMult = 1;
    let distance = dist(this.pos.x, this.pos.y, this.target.x, this.target.y);
    if (distance < this.closeEnoughTarget) {
      proximityMult = distance / this.closeEnoughTarget;
    }
    if (distance < 1) {
      this.stopped = true;
    } else {
      this.stopped = false;
    }

    let towardsTarget = createVector(this.target.x, this.target.y);
    towardsTarget.sub(this.pos);
    towardsTarget.normalize();
    towardsTarget.mult(this.maxSpeed * proximityMult);

    let steer = createVector(towardsTarget.x, towardsTarget.y);
    steer.sub(this.vel);
    steer.normalize();
    steer.mult(this.maxForce);
    this.acc.add(steer);

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  //파티클 하나를 그리는 함수
  //감정에 따른 색변화를 이곳에서 준다
  draw(emotion) {
    // let currentColor = lerpColor(
    //   this.startColor,
    //   this.targetColor,
    //   this.colorWeight
    // );
    if (ptcl.drawAsPoints) {
      // stroke(255);
      strokeWeight(2.5);
      if (emotion != undefined) {
        // console.log(emotion);
        this.changeColor(emotion);
      }
      stroke(this.randomColor);
      // fill(this.randomColor);
      // strokeWeight(this.randomSize);
      point(this.pos.x, this.pos.y);
    } else {
      noStroke();
      fill(255);
      ellipse(this.pos.x, this.pos.y, this.particleSize, this.particleSize);
    }

    if (this.colorWeight < 1.0) {
      this.colorWeight = min(this.colorWeight + this.colorBlendRate, 1.0);
    }
  }

  //파티클의 target 위치를 그래픽상 위치에서 화면밖의 랜덤 위치로 재선언하는 함수
  //move()가 실행되고 있을 경우 파티클이 화면밖으로 빠져나가게 한다
  kill() {
    if (!this.isKilled) {
      let randomPos = ptcl.generateRandomPos(
        width / 2,
        height / 2,
        (width + height) / 2
      );
      this.target.x = randomPos.x;
      this.target.y = randomPos.y;

      this.startColor = lerpColor(
        this.startColor,
        this.targetColor,
        this.colorWeight
      );
      this.targetColor = color(0);
      this.colorWeight = 0;

      this.isKilled = true;
    }
  }

  //pos에 미세한 랜덤값을 주어 와글와글 움직이게 하는 함수
  jiggle(emotion) {
    // console.log(0);
    this.pos.x +=
      emotion !== "negative" ? random(-0.2, 0.2) : random(-0.5, 0.5);
    this.pos.y +=
      emotion !== "negative" ? random(-0.2, 0.2) : random(-0.5, 0.5);
  }

  changeColor(emotion) {
    // console.log(emotion);
    switch (emotion) {
      case "neutral":
        this.randomColor = random(100, 255);
        break;
      case "positive":
        this.randomColor = color(255, 255, 0);
        break;
      case "negative":
        this.randomColor = color(255, 0, 0);
        break;
    }
  }
}
