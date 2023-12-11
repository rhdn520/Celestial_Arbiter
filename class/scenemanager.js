class SceneManager {
  constructor(_globalVar) {
    this.globalVar = _globalVar;
    this.afterSceneLoadMillis = null;
    this.progressRealWidth = 0;
    this.progresstargetWidth = 0;
  }

  loadScene() {
    background(0);
    fill(255);
    textAlign(CENTER);
    switch (this.globalVar.conversationStatus) {
      case "before":
        this.loadScene_before();
        break;

      case "during":
        this.loadScene_during();
        break;

      case "after":
        this.loadScene_after();
        break;
    }
  }

  loadScene_before() {
    rectMode(CENTER);
    imageMode(CENTER);
    image(mainDummyImg, width / 2, height / 2);
    mainDummyImg.resize(
      width,
      mainDummyImg.height * (width / mainDummyImg.width)
    );

    fill(255);
    textSize(25);
    textFont(typewriterFont);
    text("Life Receipt", width / 2, height / 4);

    textFont(pretendardFont);
    textSize(20);
    text("Press ENTER to Start", width / 2, (height * 4) / 5);
    fill(0);
    textSize(15);
    text("당신의 인생을\n결산해보세요", width / 2, height / 2);
  }

  loadScene_during() {
    rectMode(CENTER);
    imageMode(CENTER);
    if (this.globalVar.gptIsRequestPending) {
      //   ptcl.nextWord("pending");
      ptcl.draw();
      // image(thinkingDummyImg, width/2,height/2);
      // thinkingDummyImg.resize(width,thinkingDummyImg.height*(width/thinkingDummyImg.width));
    } else {
      //   ptcl.nextWord("talking");
      ptcl.draw();
      //   image(talkingDummyImg, width / 2, height / 2);
      //   talkingDummyImg.resize(
      //     width,
      //     thinkingDummyImg.height * (width / thinkingDummyImg.width)
      //   );
    }

    //stage bar
    rectMode(CORNERS);
    fill("#b2b2b2");
    rect(width, 0, width, 7);
    fill("#fff");
    if (this.globalVar.isDecisionMade) {
      this.progressTargetWidth = width;
    } else {
      let progressLevel = int(this.globalVar.chatLog.length);
      this.progressTargetWidth = (width / 24) * progressLevel;
    }

    if (this.progressRealWidth < this.progressTargetWidth) {
      this.progressRealWidth += 0.6;
    } else {
      this.progressRealWidth = this.progressTargetWidth;
    }
    rect(0, 0, this.progressRealWidth, 7);
    rectMode(CENTER);
  }

  loadScene_after() {
    rectMode(CENTER);
    imageMode(CENTER);
    background("#010101");
    // image(receiptDummyImg, width/2,height/2);
    // receiptDummyImg.resize(width,receiptDummyImg.height*(width/receiptDummyImg.width));

    if (this.afterSceneLoadMillis === null) {
      this.afterSceneLoadMillis = millis();
      text(`Press ESC to restart (${30}s)`, width / 2, height - 30);
    } else {
      let countdown = int(31 + (this.afterSceneLoadMillis - millis()) / 1000);
      text(`Press ESC to restart (${countdown}s)`, width / 2, height - 30);
      if (countdown === 0) {
        this.afterSceneLoadMillis = null;
        this.changeScene("before");
      }
    }
    setTimeout(() => {
      this.loadMainCountdown--;
    }, 1000);

    textSize(20);
  }

  changeScene(newConvStatus) {
    removeElements();
    this.globalVar.conversationStatus = newConvStatus;
    console.log("Conversation Status Changed");
    if (this.globalVar.isDecisionMade && newConvStatus == "before") {
      this.resetVariables();
    }
  }

  updateChatLog(newChat) {
    this.globalVar.chatLog.push(newChat);
    console.log("Chatting Log Updated");
  }

  resetVariables() {
    location.reload();
  }
}
