class Particle {
    constructor(pos, img_) {
      this.loc = pos.copy();
      const vx = randomGaussian() * 0.3;
      const vy = randomGaussian() * 0.3 - 1.0;
      this.vel = createVector(vx, vy);
      this.acc = createVector();
      this.lifespan = 100.0;
      this.texture = img_;
    }
  
    run() {
      this.update();
      this.render();
    }
  
    render() {
      imageMode(CENTER);
      tint(255, this.lifespan);
      image(this.texture, this.loc.x, this.loc.y);
    }
  
    applyForce(f) {
      this.acc.add(f);
    }
  
    isDead() {
      return this.lifespan <= 0.0;
    }
  
    update() {
      this.vel.add(this.acc);
      this.loc.add(this.vel);
      this.lifespan -= 2.5;
      this.acc.mult(0);
    }
  }
  