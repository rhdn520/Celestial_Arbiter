class UIHandler {
  constructor(_globalVar) {
    this.globalVar = _globalVar;
    this.beforeVar = {
      'conversationStatus': this.globalVar.conversationStatus,
      'gptStatus': this.globalVar.gptStatus
    };
    this.chatLogBox = null;
    this.textInput = null;
    this.submitBtn = null;
  }

  loadUI() {
    //HTML tags를 로드하기 위한 함수로 loadUI 역할을 재정의했습니다.
    //Canvas 내에서 다루어지지 않는 interaction 들은 모두 loadUI를 경유하면 될 것 같아요.
    removeElements();
    switch (this.globalVar.conversationStatus) {
      case "before":
        this.loadUI_before();
        break;

      case "during":
        this.loadUI_during(this.globalVar.chatLog);
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
    let clickButton = new Button("Main", width / 2 - 50, height - 50, () => { this.onClickChangeSceneBtn('before') }); //버튼
  }

  onClickChangeSceneBtn(sceneToGo) {
    this.globalVar.conversationStatus = sceneToGo;
    this.loadUI();
  }

  onKeyPressed(keyCode) {
    if (this.globalVar.conversationStatus === "before") {
      this.globalVar.conversationStatus = 'during'
    }
    if (this.globalVar.conversationStatus === "during") {
      if (keyCode === ENTER) {
        let userInput = this.textInput.value();
        if (userInput === "") {
          return;
        }
        testGPT(userInput);
        this.textInput.value("");
      }

    }
    if (this.globalVar.conversationStatus === "after") {

    }
  }

  //맨처음 chatLog 렌더링
  initTextBox(chatLog) {
    this.chatLogBox = new ChatLogBox(width / 2, 100, 600, 100);
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
    this.chatLogBox = new ChatLogBox(width/2, 100, 600, 100);
    if (chatLog[chatLog.length - 1] !== undefined) {
      let updatedChat = new Chat(chatLog[chatLog.length - 1]);
      updatedChat.chatDiv.parent(this.chatLogBox.wrapper);
      updatedChat.chatDiv.style(
        "color", "white"
      );
    }
    // for (let i = chatLog.length - 1; 0 <= i; i--) {
    //   if (chatLog[i] !== undefined) {
    //     let updatedChat = new Chat(chatLog[i]);
    //     updatedChat.chatDiv.parent(this.chatLogBox.wrapper);
    //     updatedChat.chatDiv.style(
    //       "color",
    //       i === chatLog.length - 1 ? "white" : "rgb(128,128,128)"
    //     );
    //   }
    // }
  }


  createGptInput() {
    //텍스트 인풋 + 보내기 버튼 wrapper
    let inputWrapper = createDiv();
    inputWrapper.addClass("gpt-text-wrapper");
    inputWrapper.position(width / 2, height - 100);

    //텍스트 인풋
    this.textInput = createInput("");
    this.textInput.addClass("gpt-text-input");
    this.textInput.parent(inputWrapper);
    this.textInput.attribute("disabled", true);
    //보내기 버튼
    this.submitBtn = createInput("ENTER", "button");
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
    if (this.textInput != null) this.textInput.removeAttribute("disabled");
    if (this.submitBtn != null) this.submitBtn.removeAttribute("disabled");
  }

  trackStatusChange() { //Track change of UI-related variables
    if (this.beforeVar.conversationStatus !== this.globalVar.conversationStatus) {
      console.log('conversation status changed to ' + this.globalVar.conversationStatus);
      this.loadUI(this.globalVar.conversationStatus);
      this.beforeVar.conversationStatus = this.globalVar.conversationStatus;
    }

    if (this.globalVar.conversationStatus === 'during') {
      if (this.globalVar.gptHavingError) {
        this.chatLogBox.handleStatus("⚠️ error");
      } else {
        if (this.globalVar.gptIsRequestPending) {
          this.disableGptInput();
          this.chatLogBox.handleStatus("pending...");
        } else {
          this.enableGptInput();
          this.chatLogBox.handleStatus("ready");
        }
      }
    }

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
    this.status.addClass("gpt-status");
    this.status.position(x, y + h + 40);
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
  constructor(label, x, y, w = 100, h = 100, callback) {
    this.element = createButton(label); //버튼 이름
    this.element.position(x, y); //버튼 위치
    this.element.size(w, h);
    this.element.mousePressed(callback);
  }

  disable() { //비활성화
    this.element.attribute('disabled', true);
  }

  enable() { //활성화
    this.element.removeAttribute('disabled');
  }
}
