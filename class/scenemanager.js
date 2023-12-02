class SceneManager {
    constructor() {
        this.chatLog = [
            {
                role: "assistant",
                content:
                    "어서와. 기억이 날지는 모르겠지만 넌 방금 죽었어. 나는 너를 심판할 존재이고. 지금부터 너에게 질문을 할거야. 잘 생각해서 대답해야 해. 아니면 넌 영원히 새 삶을 시작하지 못할 거니까. 준비됐겠지?",
            },
        ];
        this.conversationStatus = "before"; //'before', 'during', 'after' 3가지. Load Scene과 연계된 변수
        this.nextLifeImg = null;
    }

    loadScene() {
        background(0);
        fill(255);
        textAlign(CENTER);
        switch (this.conversationStatus) {
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
        text("This is BEFORE Scene", width / 2, height / 2);
        image(mainDummyImg, 0,0,width, height);
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
        this.conversationStatus = newConvStatus;
        console.log("Conversation Status Changed");
    }

    updateChatLog(newChat) {
        this.chatLog.push(newChat);
        console.log("Chatting Log Updated");
    }

    updateNextLifeImg(nextLifeImg) {
        this.nextLifeImg = nextLifeImg;
        console.log("Next Life Image Updated");
    }

    resetVariables() {
        this.chatLog = [];
        this.conversationStatus = "before";
        this.nextLifeImg = null;
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
