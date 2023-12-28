class EyeVector {
  constructor() {
    this.img = null;
  }

  draw(pg, n) {
    pg.background(0);
    pg.stroke(255);
    pg.strokeWeight(6);
    pg.noFill(0);
    pg.push();
    pg.translate(width / 2, height / 2 - 120);
    pg.scale(2.5);
    switch (n) {
      case 0:
        //eye0
        pg.push();
        pg.translate(0, 20);
        pg.beginShape();
        pg.vertex(-80, 0);
        pg.bezierVertex(-30, -50, 30, -50, 80, 0);
        pg.bezierVertex(30, 50, -30, 50, -80, 0);
        pg.endShape();

        pg.fill(255);
        pg.ellipse(0, 10, 50);
        pg.pop();
        break;
      case 1:
        //왼쪽 보는1
        pg.push();
        pg.translate(130, 10);
        pg.beginShape();
        pg.vertex(-80, 0);
        pg.bezierVertex(-30, -50, 30, -50, 80, 0);
        pg.bezierVertex(30, 50, -30, 50, -80, 0);
        pg.endShape();

        pg.fill(255);
        pg.ellipse(-10, 10, 50);
        pg.pop();

        break;
      case 2:
        //왼쪽 보는2
        pg.push();
        pg.translate(80, -30);
        pg.beginShape();
        pg.vertex(-80, 0);
        pg.bezierVertex(-30, -50, 30, -50, 80, 0);
        pg.bezierVertex(30, 50, -30, 50, -80, 0);
        pg.endShape();

        pg.fill(255);
        pg.ellipse(-10, 15, 50);
        pg.pop();
        break;
      case 3:
        //오른쪽 보는1
        pg.push();
        pg.translate(-80, -30);
        pg.beginShape();
        pg.vertex(-80, 0);
        pg.bezierVertex(-30, -50, 30, -50, 80, 0);
        pg.bezierVertex(30, 50, -30, 50, -80, 0);
        pg.endShape();

        pg.fill(255);
        pg.ellipse(10, 15, 50);
        pg.pop();
        break;
      case 4:
        //오른쪽 보는2
        pg.push();
        pg.translate(-130, 10);
        pg.beginShape();
        pg.vertex(-80, 0);
        pg.bezierVertex(-30, -50, 30, -50, 80, 0);
        pg.bezierVertex(30, 50, -30, 50, -80, 0);
        pg.endShape();

        pg.fill(255);
        pg.ellipse(10, 10, 50);
        pg.pop();
        break;
      case 5:
        //eye5
        pg.beginShape();
        pg.vertex(-80, 0);
        pg.bezierVertex(-30, -50, 30, -50, 80, 0);
        pg.bezierVertex(30, 50, -30, 50, -80, 0);
        pg.endShape();

        pg.fill(255);
        pg.ellipse(0, 0, 50);

        pg.fill(0);
        pg.beginShape();
        pg.vertex(-80, 0);
        pg.bezierVertex(-30, -50, 30, -50, 78, -3);
        pg.bezierVertex(30, 0, -30, 0, -80, 0);
        pg.endShape();
        break;
      case 6:
        //eye6
        // pg.beginShape();
        // pg.vertex(-80, 0);
        // pg.bezierVertex(-30, -50, 30, -50, 80, 0);
        // pg.bezierVertex(30, 50, -30, 50, -80, 0);
        // pg.endShape();

        // pg.fill(255);
        // pg.ellipse(0, 0, 50);

        // pg.fill(0);
        // pg.beginShape();
        // pg.vertex(-80, 0);
        // pg.bezierVertex(-30, -50, 30, -50, 76, 0);
        // pg.bezierVertex(30, 10, -30, 10, -80, 0);
        // pg.endShape();

        //오른쪽 보는
        pg.push();
        pg.translate(-100, 0);
        pg.beginShape();
        pg.vertex(-80, 0);
        pg.bezierVertex(-30, -50, 30, -50, 80, 0);
        pg.bezierVertex(30, 50, -30, 50, -80, 0);
        pg.endShape();

        pg.fill(255);
        pg.ellipse(10, 10, 50);
        pg.pop();
        break;
      case 7:
        //eye7
        pg.beginShape();
        pg.vertex(-80, 0);
        pg.bezierVertex(-30, -50, 30, -50, 80, 0);
        pg.bezierVertex(30, 50, -30, 50, -80, 0);
        pg.endShape();

        pg.fill(255);
        pg.ellipse(0, 0, 50);

        pg.fill(0);
        pg.beginShape();
        pg.vertex(-80, 0);
        pg.bezierVertex(-30, -50, 30, -50, 76, 0);
        pg.bezierVertex(30, 10, -30, 10, -80, 0);
        pg.endShape();
        break;
      case 8:
        //eye8
        pg.beginShape();
        pg.vertex(-80, 0);
        pg.bezierVertex(-30, -50, 30, -50, 80, 0);
        pg.bezierVertex(30, 50, -30, 50, -80, 0);
        pg.endShape();

        pg.fill(255);
        pg.ellipse(0, 0, 50);

        pg.fill(0);
        pg.beginShape();
        pg.vertex(-80, 0);
        pg.bezierVertex(-30, -50, 30, -50, 76, 0);
        pg.bezierVertex(30, 20, -30, 20, -80, 0);
        pg.endShape();
        break;
      case 9:
        //eye9
        pg.noFill();
        pg.beginShape();
        pg.vertex(-80, 0);
        pg.bezierVertex(-30, 50, 30, 50, 80, 0);
        pg.endShape();
        break;
    }
    pg.pop();
  }

  drawBefore(pg, n) {
    let h = 260;
    pg.background(0);
    pg.push();
    pg.translate(width / 2, height / 2);
    pg.noFill();
    pg.stroke(255);
    pg.strokeWeight(4);
    pg.scale(height / 610);
    pg.beginShape();
    for (let i = 0; i < 8; i++) {
      pg.vertex(-160 + 20 * 2 * i, -h);
      pg.vertex(-160 + 20 * (2 * i + 1), -h + 10);
    }
    pg.vertex(160, -h);
    pg.vertex(160, h);
    for (let i = 0; i < 8; i++) {
      pg.vertex(160 - 20 * 2 * i, h);
      pg.vertex(160 - 20 * (2 * i + 1), h - 10);
    }
    pg.vertex(-160, h);
    pg.vertex(-160, -h);
    pg.endShape();
    pg.scale(1.2);
    pg.fill(255);
    pg.noStroke();
    pg.pop();

    //바코드
    pg.push();
    pg.translate(width / 2 + 30, height / 2 - 40);
    pg.rect(-120, 0, 3, 100);
    pg.rect(-110, 0, 6, 100);
    // pg.rect(-100, 0, 3, 100);
    // pg.rect(-93, 0, 3, 100);
    pg.rect(-82, 0, 8, 100);
    // pg.rect(-65, 0, 3, 100);
    pg.rect(-55, 0, 15, 100);
    // pg.rect(-30, 0, 3, 100);
    pg.rect(-20, 0, 10, 100);
    pg.rect(0, 0, 6, 100);
    // pg.rect(10, 0, 3, 100);
    pg.rect(30, 0, 15, 100);
    // pg.rect(23, 0, 3, 100);
    pg.rect(53, 0, 3, 100);
    pg.rect(70, 0, 10, 100);
    pg.pop();

    //숫자
    //   pg.fill(255);
    //   pg.push();
    //   pg.translate(width / 2 - 20, height / 2 - 30);
    //   pg.textSize(80);
    //   switch (n) {
    //     case 0:
    //       pg.text("0", 0, 0);
    //       break;
    //     case 3:
    //       pg.text("+1,000", 0, 0);
    //       break;
    //     case 6:
    //       pg.text("-1,000", 0, 0);
    //       break;
    //   }
    //   pg.pop();
  }
}
