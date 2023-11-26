let scene;
let tts;
let ttsSound;

function setup() {
  createCanvas(windowWidth, windowHeight);
  scene = new SceneManager();
  tts = new TTSHandler();
  testTTS();
}

function draw() {
}


//test code for TTS
function testTTS(){ 
  tts.fetchTTS("아, 아, 마이크테스트!").then(mp3URL => {
    loadSound(mp3URL,(sound)=>{
      sound.play()
    });
  })
}

