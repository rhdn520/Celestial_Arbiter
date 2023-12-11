let scene;
let tts;
let ttsSound;
let gpt;
let ui;
let button; //버튼 선언
let judge; //심판관 선언
let ptcl; //파티클 그리는 클래스 선언

let mainDummyImg;
let receiptDummyImg;
let talkingDummyImg;
let listeningDummyImg;
let thinkingDummyImg;

let typewriterFont;
let pretendardFont;

let globalVar = {
  chatLog: [
    {
      role: "assistant",
      content:
        "어서와. 기억이 날지는 모르겠지만 넌 방금 죽었어. 나는 너를 심판할 존재이고. 지금부터 너에게 질문을 할거야. 잘 생각해서 대답해야 해. 아니면 넌 영원히 새 삶을 시작하지 못할 거니까. 준비됐겠지?",
    },
  ],
  receiptData: {
    judge_summary:
      "You didn't help others and didn't have any special relationships, big happiness, or intense dreams. You just wanted to live comfortably, being moderately happy and moderately unhappy, giving and receiving moderately. So I hope that your soul can learn the important values and intense passion of life. In your next life, you will be reborn as an eagle, experiencing both failure and success, and finding the true meaning of life. You will have sharp eyes to see the world, fly in the high sky, and have a broad perspective. Live freely from the constraints of life and death, and live with your own strength.",
    value1: "Values",
    value2: "Passion",
    value3: "Success",
    value4: "Freedom",
    value5: "Strength",
  },
  conversationStatus: "before",
  gptHavingError: false,
  gptIsRequestPending: false,
  debugMode: true,
  judgeNegativeEmotion: 0,
  isDecisionMade: false,
};

function preload() {
  mainDummyImg = loadImage("assets/main_dummy.png");
  receiptDummyImg = loadImage("assets/receipt_dummy.png");
  talkingDummyImg = loadImage("assets/talking_dummy.png");
  thinkingDummyImg = loadImage("assets/thinking_dummy.png");
  listeningDummyImg = loadImage("assets/listening_dummy.png");
  typewriterFont = loadFont("assets/Typewriter-Bold.otf");
  pretendardFont = loadFont("assets/Pretendard-Medium.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  gpt = new GPTHandler(globalVar, promptText, receiptPromptText);
  ui = new UIHandler(globalVar);
  scene = new SceneManager(globalVar);
  receipt = new Receipt(globalVar);
  judge = new Judge(globalVar);
  ptcl = new ParticleHandler();
  rectMode(CENTER);
  imageMode(CENTER);

  // ui.createGptInput();
  // ui.initTextBox();

  ptcl.updateParticles();
  ui.loadUI(scene);

  // gpt.makeChatLogText(exampleChatLog);

  // gpt.sendRcptMessage(exampleChatLog);
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
  ui.updateTextBox(globalVar.chatLog);

  gpt.sendToGPT().then((response) => {
    let re = /\(\d\)/i;
    let matches = response.content.match(re);
    console.log(response);

    if (matches !== null) {
      //감정 점수 업데이트를 위한 부분
      let match = matches[matches.length - 1];
      let newNegEmoLv = match.substring(1, match.length - 1);
      globalVar.judgeNegativeEmotion = parseInt(newNegEmoLv);
    }

    response.content = response.content.replace(re, "");

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
