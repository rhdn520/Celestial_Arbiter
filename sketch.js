let scene;
let tts;
let ttsSound;
let gpt;
let ui;
let button; //버튼 선언
let judge; //심판관 선언

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  scene = new SceneManager();
  tts = new TTSHandler();
  gpt = new GPTHandler();
  ui = new UIHandler(scene);//과연 이건 괜찮은 패턴인가!?

  // ui.createGptInput();
  // ui.initTextBox();

  ui.loadUI(scene);
}

function draw() {
  scene.loadScene();
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
  scene.handleResponseStatus();
  scene.updateChatLog(userMessage); //대화로그 업데이트(유저인풋)
  // console.log(scene.chatLog);
  gpt.sendToGPT(scene.chatLog).then((response) => {
    scene.updateChatLog(response); //대화로그 업데이트(GPT대답)
    console.log(scene.chatLog);
    ui.updateTextBox(scene.chatLog); //대화내역 렌더링
  });
}

// function mousePressed(){
//   testTTS();
// }
