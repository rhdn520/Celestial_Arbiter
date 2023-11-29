class Button {
    constructor(label, x, y, callback) {
        this.element = createButton(label);
        this.element.position(x, y);
        this.element.mousePressed(callback);
  }
  disable() {
    this.element.attribute('disabled', true);
  }

  enable() {
    this.element.removeAttribute('disabled');
  }
}