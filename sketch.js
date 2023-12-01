let scene;
let tts;
let ttsSound;
let gpt;
//let gpt;
let button; //버튼 선언
let judge; //심판관 선언

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  scene = new SceneManager();
  tts = new TTSHandler();
  gpt = new GPTHandler();
  ui = new UIHandler();
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
function testGPT() {
  gpt.sendToGPT("안녕하세요.").then((response) => {
    scene.updateChatLog(response); //대화로그 업데이트
    console.log(scene.chatLog);
    ui.drawTextBox(scene.chatLog); //대화내역 렌더링
  });
}

// function mousePressed(){
//   testTTS();
// }

//엔터 누르면 테스트 가능
function keyPressed() {
  if (keyCode === ENTER) {
    testGPT();
  }
}
