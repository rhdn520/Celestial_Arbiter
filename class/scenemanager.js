class SceneManager {
  constructor(_globalVar) {
    this.globalVar = _globalVar;
    this.afterSceneLoadMillis = null;
    this.progressRealWidth = 0;
    this.progresstargetWidth = 0;
    this.blinkCount = 0;
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
    //파티클 상시 그리는 함수
    ptcl.draw(true);
    //파티클 애니메이팅
    // if (frameCount % 180 === 0) {
    //   ptcl.updateParticles(0, true);
    // }
    noStroke();
    rectMode(CENTER);
    fill(255);
    textSize(25);
    textFont(typewriterFont);
    text("Life Receipt", width / 2, height / 4);

    textFont(pretendardFont);
    textSize(20);
    text("Press ENTER to Start", width / 2, (height * 4) / 5);
    fill(255);
    textSize(15);
    stroke(0);
    strokeWeight(4);
    text("당신의 인생을\n결산해보세요", width / 2, height / 2);
  }

  loadScene_during() {
    rectMode(CENTER);
    imageMode(CENTER);
    ptcl.draw(true);
    if (judge.status === "talk") {
      if (frameCount % 180 === 0) {
        if (this.globalVar.judgeEmotion === "negative") {
          ptcl.updateParticles(0, false); //부정적일 땐 눈 부릅 뜨기
        } else {
          this.blink();
        }
      }
    } else {
      if (frameCount % 180 === 0) {
        ptcl.updateParticles(0, false);
      }
    }
    // ptcl.blink();

    //stage bar
    rectMode(CORNERS);
    fill("#b2b2b2");
    noStroke();
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

    // text(`Press ESC to restart`, width / 2, 60);

    // if (this.afterSceneLoadMillis === null) {
    //   this.afterSceneLoadMillis = millis();
    //   text(`Press ESC to restart (${30}s)`, width / 2, height - 30);
    // } else {
    //   let countdown = int(31 + (this.afterSceneLoadMillis - millis()) / 1000);
    //   text(`Press ESC to restart (${countdown}s)`, width / 2, height - 30);
    //   if (countdown === 0) {
    //     this.afterSceneLoadMillis = null;
    //     this.changeScene("before");
    //   }
    // }
    // setTimeout(() => {
    //   this.loadMainCountdown--;
    // }, 1000);

    textSize(20);
  }

  changeScene(newConvStatus) {
    removeElements();
    this.globalVar.conversationStatus = newConvStatus;
    console.log("Conversation Status Changed");
    if (newConvStatus == "before") {
      this.resetVariables();

      ptcl.updateParticles(0, true);
    }
  }

  updateChatLog(newChat) {
    this.globalVar.chatLog.push(newChat);
    console.log("Chatting Log Updated");
  }

  resetVariables() {
    // location.reload();

    this.globalVar.chatLog = [
      {
        role: "assistant",
        content:
          "어서와. 기억이 날지는 모르겠지만 넌 방금 죽었어. 나는 너를 심판할 존재이고. 지금부터 너에게 질문을 할거야. 잘 생각해서 대답해야 해. 아니면 넌 영원히 새 삶을 시작하지 못할 거니까. 준비됐겠지?",
      },
    ];

    this.globalVar.receiptData = {
      judge_summary:
        "You didn't help others and didn't have any special relationships, big happiness, or intense dreams. You just wanted to live comfortably, being moderately happy and moderately unhappy, giving and receiving moderately. So I hope that your soul can learn the important values and intense passion of life. In your next life, you will be reborn as an eagle, experiencing both failure and success, and finding the true meaning of life. You will have sharp eyes to see the world, fly in the high sky, and have a broad perspective. Live freely from the constraints of life and death, and live with your own strength.",
      value1: "Values",
      value2: "Passion",
      value3: "Success",
      value4: "Freedom",
      value5: "Strength",
      value1_score: 1,
      value2_score: 2,
      value3_score: 3,
      value4_score: 4,
      value5_score: 5,
    };

    this.globalVar.chatLog = [
      {
        role: "assistant",
        content:
          "어서와. 기억이 날지는 모르겠지만 넌 방금 죽었어. 나는 너를 심판할 존재이고. 지금부터 너에게 질문을 할거야. 잘 생각해서 대답해야 해. 아니면 넌 영원히 새 삶을 시작하지 못할 거니까. 준비됐겠지?",
      },
    ];

    this.globalVar.conversationStatus = "before";
    this.globalVar.gptHavingError = false;
    this.globalVar.gptIsRequestPending = false;
    this.globalVar.debugMode = true;
    this.globalVar.judgeNegativeEmotion = 0;
    this.globalVar.isDecisionMade = false;
  }

  updateParticleScene() {
    console.log(judge.status);
    ptcl.updateParticles(0, true);
  }

  blink() {
    // ptcl.updateParticles((this.blinkCount % 3) * 3, false);
    // this.blinkCount++;
    // //0,3,6번 그림 번갈아 호출(눈동자 가운데, 좌, 우)
    ptcl.updateParticles(int(random(0, 5)), false);
  }
}
