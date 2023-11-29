//p5.js로 입력창 만들기 시뮬레이션 
let paragraphInput; // 전역 변수로 입력창 객체를 선언
let displayParagraph; // 전역 변수로 결과를 표시할 엘리먼트 객체를 선언

function setup() {
  createCanvas(windowWidth, windowHeight);

  // 입력창 생성
  paragraphInput = createInput();
  paragraphInput.size(windowWidth - 40, 20);
  paragraphInput.position(width / 2- paragraphInput.width / 2, height - 50);

  // 엔터 이벤트 리스너 등록
  paragraphInput.changed(handleInput);

  // 결과 표시 엘리먼트 생성
  displayParagraph = createElement('p', '');
  displayParagraph.position(100, 100);
  textAlign(CENTER);
  textSize(18);
}

function draw() {
  // 화면 갱신 코드 (생략)
}

function handleInput() {
  const inputText = paragraphInput.value();

  // 새로운 입력이 들어왔을 때 기존 결과 비움
  displayParagraph.html(inputText);

  // 입력창 초기화
  paragraphInput.value('');
}
