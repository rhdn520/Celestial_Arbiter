class SceneManager{
    constructor(){
        this.chatLog = [];
        this.conversationStatus = 'before'; //'before', 'during', 'after' 3가지. Load Scene과 연계된 변수
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
        text('This is BEFORE Scene');
    }

    loadDuringScene(){
        text('This is DURING Scene');
    }

    loadAfterScene(){
        text('This is AFTER Scene');
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
    }




}