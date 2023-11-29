class SceneManager{
    constructor(){
        this.chatLog = [];
        this.conversationStatus = 'during'; //'before', 'during', 'after' 3가지. Load Scene과 연계된 변수
        this.nextLifeImg = null;
    }

    loadScene(){
        switch(this.conversationStatus){
            case 'before':
                this.loadBeforeScene();
                break;

            case 'during':
                this.loadDuringScene();
                break;

            case 'after':
                this.loadAfterScene();
                break;
        }
    }

    loadBeforeScene(){
        background(0);
        fill(255);
        textAlign(CENTER);
        text('This is BEFORE Scene',width/2,height/2);
    }

    loadDuringScene(){
        background(0);
        fill(255);
        textAlign(CENTER);
        text('This is DURING Scene',width/2,height/2);
    }

    loadAfterScene(){
        background(0);
        fill(255);
        textAlign(CENTER);
        text('This is AFTER Scene', width/2, height/2);
    }

    changeScene(newConvStatus){
        this.conversationStatus = newConvStatus;
        console.log('Conversation Status Changed');
    }

    updateChatLog(newChat){
        this.chatLog.push(newChat);
        console.log('Chatting Log Updated');
    }

    updateNextLifeImg(nextLifeImg){
        this.nextLifeImg = nextLifeImg;
        console.log('Next Life Image Updated');
    }

    resetVariables(){
        this.chatLog = [];
        this.conversationStatus = 'before';
        this.nextLifeImg = null;
        console.log('Variables Reset');
    }




}