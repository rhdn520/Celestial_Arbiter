class SceneManager {
    constructor(_globalVar) {
        this.globalVar = _globalVar;
        this.afterSceneLoadMillis = null;
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
        rectMode(CENTER);
        imageMode(CENTER);
        image(talkingDummyImg, width/2,height/2);
        talkingDummyImg.resize(width,mainDummyImg.height*(width/mainDummyImg.width));
        // this.handleResponseStatus();
        
    }

    loadScene_after() {
        rectMode(CENTER);
        imageMode(CENTER);
        background('#010101');
        image(receiptDummyImg, width/2,height/2);
        receiptDummyImg.resize(width,receiptDummyImg.height*(width/receiptDummyImg.width));
        if(this.afterSceneLoadMillis === null){
            this.afterSceneLoadMillis = millis();
            text(`Press any key to restart (${10}s)`, width/2, height - 60)
        }else{
            let countdown = int(11 + (this.afterSceneLoadMillis - millis())/1000)
            text(`Press any key to restart (${countdown}s)`, width/2, height - 60)
            if(countdown === 0){
                this.afterSceneLoadMillis = null;
                this.globalVar.conversationStatus = 'before';
            }
        }
        // setTimeout(()=>{
        //     this.loadMainCountdown--;
        // },1000)

        textSize(20);
    }

    changeScene(newConvStatus) {
        removeElements();
        this.globalVar.conversationStatus = newConvStatus;
        console.log("Conversation Status Changed");
    }

    updateChatLog(newChat) {
        this.globalVar.chatLog.push(newChat);
        console.log("Chatting Log Updated");
    }

    resetVariables() {
        this.globalVar.chatLog = [];
        this.globalVar.conversationStatus = "before";
        console.log("Variables Reset");
    }
}
