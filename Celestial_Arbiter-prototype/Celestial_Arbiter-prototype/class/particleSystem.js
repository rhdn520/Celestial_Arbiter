class ParticleSystem {
    constructor(num, v, img_) {
      this.particles = [];
      this.origin = v.copy();
      this.img = img_;
  
      for (let i = 0; i < num; ++i) {
        this.particles.push(new Particle(this.origin, this.img));
      }
    }
  
    run() {
      for (let i = this.particles.length - 1; i >= 0; i--) {
        const particle = this.particles[i];
        particle.run();
  
        if (particle.isDead()) {
          this.particles.splice(i, 1);
        }
      }
    }
  
    applyForce(dir) {
      this.particles.forEach((particle) => {
        particle.applyForce(dir);
      });
    }
  
    addParticle() {
      this.particles.push(new Particle(this.origin, this.img));
    }
  }
  