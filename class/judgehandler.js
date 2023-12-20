class Judge {
  constructor(_globalVar) {
    this.globalVar = _globalVar;
    this.status = "think"; //think or talk
    this.judgeVector = new JudgeVector();
    this.eyeVector = new EyeVector();
  }

  display(n) {
    if (this.globalVar.conversationStatus !== "before") {
      this.status = this.globalVar.gptIsRequestPending ? "think" : "talk";
    } else {
      this.status = "before";
    }

    switch (this.status) {
      case "think":
        this.displayThinking(n);
        break;

      case "talk":
        this.displayTalking(n);
        break;

      case "before":
        this.displayBefore(n);
        break;
    }
  }

  displayBefore(n) {
    this.eyeVector.drawBefore(ptcl.pg, n);
  }

  displayThinking(n) {
    this.eyeVector.draw(ptcl.pg, 9);
  }

  displayTalking(n) {
    // this.judgeVector.display(ptcl.pg);
    this.eyeVector.draw(ptcl.pg, n);
  }

  isJudgeTalking(ttsAudio) {
    //원래는 shouldShowImage() 였던 부분
    return ttsAudio.isPlaying(); //
  }
}
