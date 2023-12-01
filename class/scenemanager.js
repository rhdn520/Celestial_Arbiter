class SceneManager {
    constructor() {
        this.chatLog = [
            {
                role: "assistant",
                content:
                    "영혼이여. 당신은 죽어서 이곳, 천상의 재판장으로 보내졌습니다.나는 천상의 심판자로서 당신의 삶을 돌아보고 당신이 다음 생에 어떤 존재로 환생할지 결정할 것입니다. 준비되셨습니까?",
            },
        ];
        this.conversationStatus = "during"; //'before', 'during', 'after' 3가지. Load Scene과 연계된 변수
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
        this.loadUI();
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
