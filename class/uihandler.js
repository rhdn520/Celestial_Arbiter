class UIHandler {
  constructor(_scene) {
    this.scene = _scene;
    this.chatLogBox = null;
    this.textInput = null;
    this.submitBtn = null;
  }

  loadUI() { 
    //HTML tags를 로드하기 위한 함수로 loadUI 역할을 재정의했습니다.
    //Canvas 내에서 다루어지지 않는 interaction 들은 모두 loadUI를 경유하면 될 것 같아요.
    switch (this.scene.conversationStatus) {
      case "before":
        this.loadUI_before();
        break;

      case "during":
        this.loadUI_during(this.scene.chatLog);
        break;

      case "after":
        this.loadUI_after();
        break;
    }
  }

  loadUI_before() {

  
  }

  loadUI_during(chatLog) {
    this.createGptInput();
    this.initTextBox(chatLog);
  }

  loadUI_after() {
    let clickButton = new Button("Main", width / 2 - 50, height - 50, ()=>{this.onClickChangeSceneBtn('before')}); //버튼
  }

  onClickChangeSceneBtn(sceneToGo){
    scene.changeScene(sceneToGo);
    this.loadUI(); 
  }

  //맨처음 chatLog 렌더링
  initTextBox(chatLog) {
    this.chatLogBox = new ChatLogBox(50, 100, 500, 100);
    let initChat = new Chat(chatLog[0]);
    initChat.chatDiv.parent(this.chatLogBox.wrapper);
  }

  updateTextBox(chatLog) {
    //기존 chatLogBox 제거
    if (this.chatLogBox) {
      this.chatLogBox.wrapper.remove();
      this.chatLogBox.status.remove();
    }

    //새로운 chatLogBox에 업데이트된 chatLog 렌더링 가장 (최근 대화일수록 위)
    this.chatLogBox = new ChatLogBox(50, 100, 500, 100);
    for (let i = chatLog.length - 1; 0 <= i; i--) {
      if (chatLog[i] !== undefined) {
        let updatedChat = new Chat(chatLog[i]);
        updatedChat.chatDiv.parent(this.chatLogBox.wrapper);
        updatedChat.chatDiv.style(
          "color",
          i === chatLog.length - 1 ? "white" : "rgb(128,128,128)"
        );
      }
    }
  }


  createGptInput() {
    //텍스트 인풋 + 보내기 버튼 wrapper
    let inputWrapper = createDiv();
    inputWrapper.addClass("gpt-text-wrapper");
    inputWrapper.position(50, 280);

    //텍스트 인풋
    this.textInput = createInput("");
    this.textInput.addClass("gpt-text-input");
    this.textInput.parent(inputWrapper);
    this.textInput.attribute("disabled", true);
    //보내기 버튼
    this.submitBtn = createInput("submit", "button");
    this.submitBtn.addClass("gpt-text-submit");
    this.submitBtn.parent(inputWrapper);
    this.submitBtn.attribute("disabled", true);

    //사용자인풋 보내기
    this.submitBtn.mouseClicked(() => {
      let userInput = this.textInput.value();
      if (userInput === "") {
        return;
      }
      testGPT(userInput);
      this.textInput.value("");
    });
  }


  //인풋
  disableGptInput() {
    this.textInput.attribute("disabled", true);
    this.submitBtn.attribute("disabled", true);
  }

  enableGptInput() {
    this.textInput.removeAttribute("disabled");
    this.submitBtn.removeAttribute("disabled");
  }


}

//chatLog를 담는 wrapper div
class ChatLogBox {
  constructor(x, y, w, h) {
    this.wrapper = createDiv();
    this.wrapper.addClass("gpt-chatlog-wrapper");
    this.wrapper.position(x, y);
    this.wrapper.size(w, h);

    //gpt상태
    this.status = createDiv("ready");
    this.status.position(x + 16, y + h + 40);
    this.status.style("color", "rgba(255, 255, 255, 0.5)");
  }

  handleStatus(status) {
    this.status.html(status);
  }
}

//chatLog에서 각각의 채팅 요소 div
class Chat {
  constructor(chat) {
    this.chatDiv = createDiv(
      (chat.role === "assistant" ? "심판자 : " : "당신 : ") + chat.content
    );
    this.chatDiv.addClass("gpt-chatlog-chat");
  }
}

class Button {
  constructor(label, x, y, w=100, h=100, callback) {
    this.element = createButton(label); //버튼 이름
    this.element.position(x, y); //버튼 위치
    this.element.size(w,h);
    this.element.mousePressed(callback);
  }
  disable() { //비활성화
    this.element.attribute('disabled', true);
  }

  enable() { //활성화
    this.element.removeAttribute('disabled');
  }
}