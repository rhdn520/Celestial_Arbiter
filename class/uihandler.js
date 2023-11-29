class UIHandler {
  constructor() {}
  drawTextBox(chatLog) {
    //화면에 띄우는 거 구현하다가 말았는데 HTML태그로 하기로 했으므로 아래 싹 지워도 됩니다
    let boxX = 50;
    let boxY = 50;
    let boxW = 500;
    let boxH = 200;
    let leading = 20;
    let padding = 10;
    for (let i = 0; i < chatLog.length; i++) {
      fill(100);
      rect(boxX, boxY, boxW, boxH); //reset chatBox contents
      fill(255);
      text(
        chatLog[i].user,
        boxX + padding,
        boxY + leading * 2 * i + padding,
        boxW
      );
      text(
        chatLog[i].bot,
        boxX + padding,
        boxY + leading * (2 * i + 1) + padding,
        boxW - padding * 2
      );
    }
    // let maxChar = Math.floor(boxW / fontsize);
    // fill(100);
    // rect(boxX, boxY, boxW, boxH); //reset chatBox contents
    // fill(255);
    // console.log(textDescent());
    // textSize(fontsize);
    // text(chatLog[i].user, boxX, boxY + leading * row, boxW);
    // row = row + Math.floor(chatLog[i].user / maxChar) + 1;
    // text(chatLog[i].bot, boxX, boxY + leading * row, boxW);
    // row = row + Math.floor(chatLog[i].box / maxChar) + 1;
  }
}
