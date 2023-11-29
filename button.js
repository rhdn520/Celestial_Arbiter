class Button {
    constructor(label, x, y, callback) {
        this.element = createButton(label); //버튼 이름
        this.element.position(x, y); //버튼 위치
        this.element.mousePressed(callback);
  }
  disable() { //비활성화
    this.element.attribute('disabled', true);
  }

  enable() { //활성화
    this.element.removeAttribute('disabled');
  }
}
