class SceneManager {
    constructor(_globalVar) {
        this.globarVar = _globalVar;
    }

    loadScene() {
        background(0);
        fill(255);
        textAlign(CENTER);
        switch (this.globarVar.conversationStatus) {
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
        image(mainDummyImg, width/2,height/2);
        mainDummyImg.resize(width,mainDummyImg.height*(width/mainDummyImg.width));

        fill(255);
        textSize(25);
        textFont(typewriterFont);
        text("Life Receipt", width/2, height/4);

        textFont(pretendardFont);
        textSize(20);
        text("Press Any Key to Start", width/2, height*4/5)
        fill(0);
        textSize(15);
        text("당신의 인생을\n결산해보세요", width / 2, height / 2);
    }

    loadScene_during() {
        text("This is DURING Scene", width / 2, height / 2);
        this.handleResponseStatus();
        let judge = new Judge(); //심판관
    }

    loadScene_after() {
        text("This is AFTER Scene", width / 2, height / 2);
    }

    changeScene(newConvStatus) {
        removeElements();
        this.globarVar.conversationStatus = newConvStatus;
        console.log("Conversation Status Changed");
    }

    updateChatLog(newChat) {
        this.globarVar.chatLog.push(newChat);
        console.log("Chatting Log Updated");
    }

    updateNextLifeImg(nextLifeImg) {
        this.globarVar.nextLifeImg = nextLifeImg;
        console.log("Next Life Image Updated");
    }

    resetVariables() {
        this.globarVar.chatLog = [];
        this.globarVar.conversationStatus = "before";
        console.log("Variables Reset");
    }

    //이미 응답을 보내고 있으면 인풋창 disable하는 함수
    handleResponseStatus() {
        if (gpt.havingError) {
            ui.chatLogBox.handleStatus("⚠️ error");
        } else {
            if (gpt.isRequestPending) {
                ui.disableGptInput();
                ui.chatLogBox.handleStatus("pending...");
            } else {
                ui.enableGptInput();
                ui.chatLogBox.handleStatus("ready");
            }
        }
    }
}
