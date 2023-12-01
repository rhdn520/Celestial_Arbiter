class Sound {
    constructor(soundFile) {
      this.sound = loadSound(soundFile, this.loaded.bind(this));
      this.isPlaying = false;
    }
  
    loaded() {
      this.duration = this.sound.duration();
    }
  
    play() {
      if (!this.isPlaying) {
        this.sound.play();
        this.isPlaying = true;
        setTimeout(() => {
          this.isPlaying = false;
        }, this.duration * 1000);
      }
    }
  
    isPlayingNow() {
      return this.isPlaying;
    }
  }