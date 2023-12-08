class Arm {
    constructor(startingAngle) {
      this.joints = [];
      this.numSegments = numSegments;
      this.angle = startingAngle;
      this.rotationSpeed = 0.005;
  
      for (let i = 0; i < this.numSegments; i++) {
        this.joints.push(createVector(0, 0));
      }
    }
  
    update() {
      this.angle += this.rotationSpeed;
  
      let currentAngle = this.angle;
      for (let i = 0; i < this.numSegments; i++) {
        const nextX = this.joints[i].x + cos(currentAngle) * segmentLength;
        const nextY = this.joints[i].y + sin(currentAngle) * segmentLength;
  
        this.joints[i + 1] = createVector(nextX, nextY);
        currentAngle += 0.2;
      }
    }
  
    display() {
      stroke(70,0,80,100);
      strokeWeight(30);
  
      for (let i = 0; i < this.numSegments; i++) {
        line(
          this.joints[i].x,
          this.joints[i].y,
          this.joints[i + 1].x,
          this.joints[i + 1].y
        );
      }
    }
  }