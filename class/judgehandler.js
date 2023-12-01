class Judge {
    constructor() {
      this.status = 'think'; //think or talk 
    }

    display(){
      switch(this.status){
        case 'think':
          this.displayThinking();
          break;
        
        case 'talk':
          this.displayTalking();
          break;
      }
    }

    displayThinking(){
      //생각하는 모습 보여주는 코드들...
    }

    displayTalking(){
      //생각하는 모습 보여주는 코드들...
    }

    updateStatus(){//외부의 클래스를 변수로 
      //updating Judge status logic goes below
      //아래는 간단한 updating 로직이지만 더 복잡해질 수도 있겠습니다.
      if(this.isJudgeTalking(ttsAudio)){
        this.status = 'talk';
      }else{
        this.status = 'think';
      }
    }
  
    isJudgeTalking(ttsAudio) { //원래는 shouldShowImage() 였던 부분
      return ttsAudio.isPlaying(); // 
    }
  }