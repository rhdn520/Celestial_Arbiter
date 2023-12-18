class Judge {
  constructor(_globalVar) {
    this.globalVar = _globalVar;
    this.status = "think"; //think or talk
    this.judgeVector = new JudgeVector();
    this.eyeVector = new EyeVector();
  }

  display() {
    if (this.globalVar.conversationStatus !== "before") {
      this.status = this.globalVar.gptIsRequestPending ? "think" : "talk";
    } else {
      this.status = "before";
    }

    switch (this.status) {
      case "think":
        this.displayThinking();
        break;

      case "talk":
        this.displayTalking();
        break;

      case "before":
        this.displayBefore();
        break;
    }
  }

  displayBefore() {
    this.eyeVector.drawBefore(ptcl.pg);
  }

  displayThinking() {
    // this.eyeVector.drawOutline(ptcl.pg);
    // this.eyeVector.drawPupil(ptcl.pg);
    this.eyeVector.draw(ptcl.pg, 9);
    // ptcl.pg.ellipse(width / 2, height / 2 + 5, 200, 200);
    // this.judgeThinking.draw(ptcl.pg);
  }

  displayTalking() {
    // this.judgeVector.display(ptcl.pg);
    this.eyeVector.drawOutline(ptcl.pg);
    this.eyeVector.drawPupil(ptcl.pg);
  }

  isJudgeTalking(ttsAudio) {
    //원래는 shouldShowImage() 였던 부분
    return ttsAudio.isPlaying(); //
  }
}
