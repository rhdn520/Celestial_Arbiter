let scene;
let tts;
let ttsSound;
//let gpt;
let button; //버튼 선언
let judge; //심판관 선언

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  scene = new SceneManager();
  tts = new TTSHandler();
  generateButton = new Button('CLICK', width / 2 - 50, height - 50, testGPT); //버튼 
  judge=new Judge(); //심판관
  
  //gpt = new GPTHandler();
  //ui = new UIHandler();
}

//심판: TTS 작동 중이면 배경 빨강, TTS 작동 X이면 배경 초록
function draw() { 
  // if (judge.shouldShowImage()) { 
  //   // Display a speaking image when TTS is playing
  //   background(255, 0, 0); // Red background when TTS is playing
  // } else {
  //   // Display a thinking image when TTS is not playing
  //   background(0, 255, 0); // Green background when TTS is not playing
  // }

  judge.display(); //코드가 훨씬 단순해졌죠?


  //버튼
  if (ttsSound && ttsSound.isPlaying()) { //소리 재생 중
    generateButton.disable(); //버튼 비활성화
    judge.updateTTSStatus(true);
  } else {
    generateButton.enable(); //버튼 활성화
    judge.updateTTSStatus(false); //
  }

}


//test code for TTS
function testTTS() {
  tts.fetchTTS_dev().then((mp3URL) => {
    loadSound(mp3URL, (sound) => {
      sound.play();
    });
  });
}

// //test code for GPT
// function testGPT() {
//   gpt.sendToGPT("안녕하세요.").then((response) => {
//     scene.updateChatLog(response); //대화로그 업데이트
//     console.log(scene.chatLog);
//     ui.drawTextBox(scene.chatLog); //대화내역 렌더링
//   });
// }

// function mousePressed(){
//   testTTS();
// }

// //엔터 누르면 테스트 가능
// function keyPressed() {
//   if (keyCode === ENTER) {
//     testGPT();
//   }
// }

// Function to test GPT
async function testGPT() {
  // Disable the button during GPT processing
  generateButton.disable();

  const response = await gpt.sendToGPT('안녕하세요.');
  scene.updateChatLog(response);
  console.log(scene.chatLog);
  ui.drawTextBox(scene.chatLog);

  // Enable the button after GPT processing
  generateButton.enable();
}

// Function to handle key press
function keyPressed() {
  if (keyCode === ENTER) {
    testGPT();
  }
}
