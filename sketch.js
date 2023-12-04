let scene;
let tts;
let ttsSound;
let gpt;
let ui;
let button; //버튼 선언
let judge; //심판관 선언

let mainDummyImg;
let receiptDummyImg;
let talkingDummyImg;
let listeningDummyImg;

let typewriterFont;
let pretendardFont;

let globalVar = {
  'chatLog': [
    {
      role: "assistant",
      content:
        "어서와. 기억이 날지는 모르겠지만 넌 방금 죽었어. 나는 너를 심판할 존재이고. 지금부터 너에게 질문을 할거야. 잘 생각해서 대답해야 해. 아니면 넌 영원히 새 삶을 시작하지 못할 거니까. 준비됐겠지?",
    },
  ],
  'conversationStatus': "before",
  'gptHavingError':false,
  'gptIsRequestPending':false,
  "devLevel":'debug'
};


function preload() {
  mainDummyImg = loadImage('assets/main_dummy.png');
  receiptDummyImg = loadImage('assets/receipt_dummy.png');
  talkingDummyImg = loadImage('assets/talking_dummy.png');
  listeningDummyImg = loadImage('assets/listening_dummy.png');
  typewriterFont = loadFont('assets/Typewriter-Bold.otf');
  pretendardFont = loadFont('assets/Pretendard-Medium.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  gpt = new GPTHandler(globalVar);
  ui = new UIHandler(globalVar);
  scene = new SceneManager(globalVar);
  rectMode(CENTER);
  imageMode(CENTER);

  // ui.createGptInput();
  // ui.initTextBox();

  ui.loadUI(scene);
}

function draw() {
  scene.loadScene();
  ui.trackStatusChange();
  // setTimeout(()=>{
  //   console.log('ddd')
  // },1000)
}

//test code for TTS
function testTTS() {
  tts.fetchTTS_dev().then((mp3URL) => {
    loadSound(mp3URL, (sound) => {
      sound.play();
    });
  });
}

//test code for GPT
function testGPT(text) {
  if (text === "") {
    return;
  }
  const userMessage = { role: "user", content: text };
  scene.updateChatLog(userMessage); //대화로그 업데이트(유저인풋)
  // console.log(scene.chatLog);
  gpt.sendToGPT(globalVar.chatLog).then((response) => {
    scene.updateChatLog(response); //대화로그 업데이트(GPT대답)
    console.log(globalVar.chatLog);
    ui.updateTextBox(globalVar.chatLog); //대화내역 렌더링
  });
}

// function mousePressed(){
//   testTTS();
// }
function keyPressed() {
  ui.onKeyPressed(keyCode);
}