class Judge {
    constructor() {
      this.isTTSPlaying = false;
    }
  
    updateTTSStatus(status) {
      this.isTTSPlaying = status;
    }
  
    shouldShowImage() {
      return this.isTTSPlaying;
    }
  }