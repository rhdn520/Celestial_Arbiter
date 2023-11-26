let scene;
let tts;
let ttsSound;

function setup() {
  createCanvas(windowWidth, windowHeight);
  scene = new SceneManager();
  tts = new TTSHandler();
}

function draw() {
}


//test code for TTS
function testTTS(){ 
  tts.fetchTTS_dev().then(mp3URL => {
    loadSound(mp3URL,(sound)=>{
      sound.play();
    });
  })
}

// function mousePressed(){
//   testTTS();
// }

