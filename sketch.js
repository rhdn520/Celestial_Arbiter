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

let templeBGM;

let globalVar = {
  chatLog: [
    {
      role: "assistant",
      content:
        "어서와. 기억이 날지는 모르겠지만 넌 방금 죽었어. 나는 너를 심판할 존재이고. 지금부터 너에게 질문을 할거야. 잘 생각해서 대답해야 해. 아니면 넌 영원히 새 삶을 시작하지 못할 거니까. 준비됐겠지?",
    },
  ],
  receiptData: {
    "sentencing": "네 삶을 바탕으로 널 심판해보자. 넌 남들에게 도움을 주지 않았고, 특별한 관계나 큰 행복, 강렬한 꿈 따위도 없이 그저 편하게 사는 걸 원했어. 적당히 행복하고 적당히 불행했으며, 적당히 받고 적당히 줬지. 그래서 네 영혼에게 는 삶의 중요한 가치나 뜨거운 열정을 배우길 바라. 넌 다음 생에서 실패와 성공을 모두 경험하며 삶의 진정한 의미를 찾아나설 독수리로 환생하게 될 거야. 날카로운 눈으로 세상을 바라보게 될 테고, 높은 하늘을 날며 넓은 시야를 가진 존재가 될 것이다. 삶과 죽음의 굴레에서 자유롭게, 그리고 스스로 힘을 갖고 살아가라.",
    "PositiveKeywords": [
      {
        "keyword": "독수리",
        "relevance": 4
      },
      {
        "keyword": "성공",
        "relevance": 4
      },
      {
        "keyword": "진정한 의미",
        "relevance": 3
      }
    ],
    "NegativeKeywords": [
      {
        "keyword": "도움 주지 않음",
        "relevance": 5
      },
      {
        "keyword": "불행",
        "relevance": 4
      },
      {
        "keyword": "평범",
        "relevance": 3
      }
    ]
  },
  conversationStatus:"after",
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
  templeBGM = loadSound("assets/ancient_temple.mp3");
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

  // templeBGM.loop();

  // gpt.makeChatLogText(exampleChatLog);

  // gpt.sendRcptRequest(exampleChatLog);
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

// function mousePressed(){
// }
function keyPressed() {
  ui.onKeyPressed(keyCode);
}
