class UIHandler {
  constructor(_globalVar) {
    this.globalVar = _globalVar;
    this.beforeVar = {
      conversationStatus: this.globalVar.conversationStatus,
      gptStatus: this.globalVar.gptStatus,
    };
    this.chatLogBox = null;
    this.textInput = null;
    this.submitBtn = null;
    this.inputWrapper = null;
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

  loadUI_before() {}

  loadUI_during(chatLog) {
    this.createGptInput();
    this.initTextBox(chatLog);
  }

  loadUI_after() {
    receipt.display();
    new Button(
      "print",
      width / 2 - 25,
      height - 100,
      50,
      30,
      this.printReceipt
    );
  }

  printReceipt() {
    console.log("print button pressed!");
    // console.log(document.getElementById("ReceiptContainer").outerHTML);
    let printContent = document.getElementById("ReceiptContainer").innerHTML;
    let printContentStyle = `
    <style>
    @font-face {
      font-family: "typewr_b";
      src: url("assets/TYPEWR_B.TTF");
    }
    
    @font-face {
      font-family: "barcord";
      src: url("assets/BarcodeFont.ttf");
    }
    
    @font-face {
      font-family: "orbit";
      src: url("assets/Orbit-Regular.ttf");
    }
    body{
      box-sizing: border-box;
      display:flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items:center;
    }
    div{
      box-sizing:border-box;
    }
    
.receipt-container {
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  margin: 0;
  padding: 10px 5px;
  width: 100%;
  height: fit-content;
  background-color: #fff;
  text-align: center;
  border: 1px dashed black;
  overflow-y: auto;
}

.receipt-title{
  height : fit-content;
  padding: 20px 0px;
  background-color: rgba(255,255,255,0.8);
  text-align:center;
  font-family: "typewr_b";
  font-size : 30px;
  display: flex;
  justify-content: center;
  align-items : center;
  border-bottom : 1px dashed #000;
}

.judge-summary {
  position: relative;
  display: flex;
  margin: 0;
  padding: 30px 5px;
  text-align: center;
  flex-flow: column nowrap;
  justify-content: center;
  height: min-content;
  align-items: center;
  /* background-color: rgba(255,255,255,0.8); */
  text-align: justify;
  font-family: "orbit";
  font-size: 13px;
  line-height: 90%;
  /* border-left: 1px dotted black;*/
  border-bottom: 1px dashed black;
  line-height: 1.3;
}

.receipt-value-header{
  width: 100%;
  padding: 5px 5px 10px;
  font-family: "orbit";
  font-size: 14px;
  display:flex;
flex-flow: row nowrap;
justify-content: space-between;
align-items: center; 

border-bottom: 1px dashed black;
}


.receipt-keywords {
  width: 100%;
  height: fit-content;
  padding: 10px 5px;
  text-align: left;
  font-family: "orbit";
  font-size: 13px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: space-between;
  border-bottom: 1px dashed black;
}
.receipt-keyword-element{
  width:100%;
  display:flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}

.total-amount{
  width: 100%;
  height: fit-content;
  padding: 5px;
  text-align: right;
  font-family: "orbit";
  font-size: 16px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  /* border-bottom: 1px dotted black; */
}

.receipt-date{
  width: 100%;
  height: fit-content;
  padding: 10px 5px;
  text-align: right;
  font-family: "orbit";
  font-size: 14px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px dashed black;
}


.receipt-bottom {
  width: 100%;
  display: grid;
  padding: 20px 5px;
  background-color: inherit;
  gap: 5px;
  /* grid-template-columns: 1.5fr 1fr 1fr;
  grid-template-rows: 1fr 3fr; */
  grid-template-columns: 1fr 2fr; /* 두 개의 column 설정 */
  grid-template-rows: auto; /* 자동으로 row 크기 조정 */
}

.receipt-bottom-element {
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: center;
  border: none;
  padding: 0;
  margin: 0;
  /* text-align: center; */
  font-family: "typewr_b";
  font-size: 12px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
}

.profile-bottom-element {
  display: flex;
  flex-flow: column nowrap; /* 세로로 배열 */
  align-items: flex-end; /* 오른쪽 정렬 */
  border: none;
  padding: 0;
  margin: 0;
  /* text-align: center; */
  font-family: "typewr_b";
  font-size: 10px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
}

.profile-bottom-element div {
  text-align: right; /* 텍스트를 오른쪽 정렬로 표시 */
  margin-bottom: 0px; /* 원하는 여백 값으로 조정 */
}

.values {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: fit-content;
}

    </style>`;
    let printWindow = window.open("");
    printWindow.document.write(printContentStyle);
    printWindow.document.write(
      '<div class="receipt-container">' + printContent + "</div>"
    );
    setTimeout(() => {
      printWindow.print();
    }, 500);
    // printWindow.print();
  }

  onClickChangeSceneBtn(sceneToGo) {
    this.globalVar.conversationStatus = sceneToGo;
    this.loadUI();
  }

  focusInput() {
    // let el = select("#text-input")
    // el.focus();
    // console.log(document.getElementById("text-input"));
    document.getElementById("text-input").focus();
  }

  onKeyPressed(keyCode) {
    if (this.globalVar.conversationStatus === "before") {
      if (keyCode === ENTER) {
        userStartAudio();
        this.globalVar.conversationStatus = "during";
        scene.updateParticleScene();
      }
    } else if (this.globalVar.conversationStatus === "during") {
      if (keyCode === ENTER) {
        let userInput = this.textInput.value();
        if (userInput === "") {
          return;
        }
        gpt.getGPTResponse(userInput);
        this.textInput.value("");
      }
    } else if (this.globalVar.conversationStatus === "after") {
      if (keyCode === ESCAPE) {
        console.log("escape!");
        // location.reload();
        scene.changeScene("before");
        // this.globalVar.conversationStatus = "before";
      }
    }
  }

  //맨처음 chatLog 렌더링
  initTextBox(chatLog) {
    this.chatLogBox = new ChatLogBox(width / 2, 510, 700, 120);
    let initChat = new Chat(chatLog[0]);
    initChat.chatDiv.parent(this.chatLogBox.wrapper);
  }

  updateTextBox(chatLog) {
    // 기존 chatLogBox 제거
    if (this.chatLogBox) {
      this.chatLogBox.wrapper.remove();
      this.chatLogBox.status.remove();
    }
    // 새로운 chatLogBox에 업데이트된 chatLog 렌더링 가장 (최근 대화일수록 위)
    this.chatLogBox = new ChatLogBox(width / 2, 510, 700, 120);
    // if (chatLog[chatLog.length - 1] !== undefined) {
    //   let updatedChat = new Chat(chatLog[chatLog.length - 1]);
    //   updatedChat.chatDiv.parent(this.chatLogBox.wrapper);
    //   updatedChat.chatDiv.style("color", "white");
    // }
    for (let i = 0; i < chatLog.length; i++) {
      if (chatLog[i] !== undefined) {
        const chat = chatLog[i];
        //<대화종료 인식>
        if (chat.role === "assistant" && chat.content.includes("<대화 종료>")) {
          this.globalVar.isDecisionMade = true;
          this.duringJudgement();
          console.log("대화종료");
        }
        let updatedChat = new Chat(chat);
        updatedChat.chatDiv.parent(this.chatLogBox.wrapper);
        updatedChat.chatDiv.style(
          "color",
          i === chatLog.length - 1 ? "white" : "rgb(128,128,128)"
        );
      }
    }
    prepareScroll();
  }

  createGptInput() {
    //텍스트 인풋 + 보내기 버튼 wrapper
    this.inputWrapper = createDiv();
    this.inputWrapper.addClass("gpt-text-wrapper");
    this.inputWrapper.position(width / 2, height - 130);

    //텍스트 인풋
    this.textInput = createInput("");
    this.textInput.id("text-input");
    this.textInput.addClass("gpt-text-input");
    this.textInput.parent(this.inputWrapper);
    this.textInput.attribute("disabled", true);
    //보내기 버튼
    this.submitBtn = createInput("ENTER", "button");
    this.submitBtn.addClass("gpt-text-submit");
    this.submitBtn.parent(this.inputWrapper);
    this.submitBtn.attribute("disabled", true);

    //사용자인풋 보내기
    this.submitBtn.mouseClicked(() => {
      let userInput = this.textInput.value();
      if (userInput === "") {
        console.log("user submitted emply string");
        return;
      }
      gpt.getGPTResponse(userInput);
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
    this.focusInput();
  }

  //판결문 나올 때
  duringJudgement() {
    this.inputWrapper.addClass("hidden");
    let nextBtn = createDiv("내 인생 영수증 받기 >");
    nextBtn.addClass("nextBtn");
    nextBtn.position(width / 2, 400);
    nextBtn.mousePressed(async () => await this.changeStatusToAfter());
  }

  //after로 넘어가기
  async changeStatusToAfter() {
    scene.progresstargetWidth = width;
    await gpt.getGPTReceipt();
    this.globalVar.conversationStatus = "after";
  }

  trackStatusChange() {
    //Track change of UI-related variables
    if (
      this.beforeVar.conversationStatus !== this.globalVar.conversationStatus
    ) {
      console.log(
        "conversation status changed to " + this.globalVar.conversationStatus
      );
      this.loadUI(this.globalVar.conversationStatus);
      this.beforeVar.conversationStatus = this.globalVar.conversationStatus;
    }

    if (this.globalVar.conversationStatus === "during") {
      if (this.globalVar.gptHavingError) {
        this.chatLogBox.handleStatus("⚠️ error");
      } else {
        if (this.globalVar.gptIsRequestPending) {
          this.disableGptInput();
          this.chatLogBox.handleStatus("pending...");
        } else {
          this.enableGptInput();
          this.chatLogBox.handleStatus("");
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
    this.status.position(x, height / 2 - 5);
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

  disable() {
    //비활성화
    this.element.attribute("disabled", true);
  }

  enable() {
    //활성화
    this.element.removeAttribute("disabled");
  }
}

function scrollDown() {
  // window.onload = function () {
  //   let chatLogWrapper = document.getElementsByClassName("gpt-chatlog-wrapper");
  //   chatLogWrapper.scrollTop = chatLogWrapper.scrollHeight;
  // };
  let chatLogWrapper = document.querySelector(".gpt-chatlog-wrapper");
  chatLogWrapper.scrollTop = chatLogWrapper.scrollHeight;
}

function prepareScroll() {
  window.setTimeout(scrollDown, 50);
}
