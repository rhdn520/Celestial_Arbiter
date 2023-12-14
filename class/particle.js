class Particle {
  constructor() {
    this.pos = createVector(0, 0);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.target = createVector(0, 0);
    this.closeEnoughTarget = 100;
    this.maxSpeed = 1.0;
    this.maxForce = 0.1;
    this.particleSize = 10;
    this.isKilled = false;
    this.startColor = color(0);
    this.targetColor = color(0);
    this.colorWeight = 0;
    this.colorBlendRate = 0.01;
    this.randomColor = random(100, 255);
    // this.randomSize = random(1.5, 2);
  }

  move() {
    let proximityMult = 1;
    let distance = dist(this.pos.x, this.pos.y, this.target.x, this.target.y);
    if (distance < this.closeEnoughTarget) {
      proximityMult = distance / this.closeEnoughTarget;
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

  draw() {
    let currentColor = lerpColor(
      this.startColor,
      this.targetColor,
      this.colorWeight
    );
    if (ptcl.drawAsPoints) {
      // stroke(255);
      strokeWeight(3);
      stroke(this.randomColor);
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

  kill() {
    if (!this.isKilled) {
      //   console.log("killed");
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
}
