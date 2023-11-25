class SceneManager{
    constructor(){
        this.chatLog = [];
        this.conversationStatus = 'before'; //'before', 'during', 'after' 3가지. Load Scene과 연계
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

    }

    loadDuringScene(){

    }

    loadAfterScene(){

    }

    changeScene(){

    }



}