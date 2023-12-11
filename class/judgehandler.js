class Judge {
  constructor(_globalVar) {
    this.globalVar = _globalVar;
    this.status = "think"; //think or talk
    this.judgeVector = new JudgeVector();
  }

  display() {
    if (this.globalVar.conversationStatus !== "before") {
      this.status = this.globalVar.gptIsRequestPending ? "think" : "talk";
    }

    switch (this.status) {
      case "think":
        this.displayThinking();
        break;

      case "talk":
        this.displayTalking();
        break;
    }
  }

  displayThinking() {
    ptcl.pg.ellipse(width / 2, height / 2, 200, 200);
  }

  displayTalking() {
    this.judgeVector.display(ptcl.pg);
  }

  isJudgeTalking(ttsAudio) {
    //원래는 shouldShowImage() 였던 부분
    return ttsAudio.isPlaying(); //
  }
}
