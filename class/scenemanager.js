class SceneManager{
    constructor(){
        this.chatLog = [];
        this.conversationStatus = 'during'; //'before', 'during', 'after' 3가지. Load Scene과 연계된 변수
        this.nextLifeImg = null;
    }

    loadScene(){
        background(0);
        fill(255);
        textAlign(CENTER);
        switch(this.conversationStatus){
            case 'before':
                this.loadScene_before();
                break;

            case 'during':
                this.loadScene_during();
                break;

            case 'after':
                this.loadScene_after();
                break;
        }
    }

    loadScene_before(){
        text('This is BEFORE Scene',width/2,height/2);
    }

    loadScene_during(){
        text('This is DURING Scene',width/2,height/2);
        let clickButton = new Button('CLICK', width / 2 - 50, height - 50, ()=>{console.log('button clicked!')} ); //버튼 
        let judge=new Judge(); //심판관
    }

    loadScene_after(){
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