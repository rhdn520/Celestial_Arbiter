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
        pg.beginShape();
        pg.vertex(-80, 0);
        pg.bezierVertex(-30, -50, 30, -50, 80, 0);
        pg.bezierVertex(30, 50, -30, 50, -80, 0);
        pg.endShape();

        pg.fill(255);
        pg.ellipse(0, 0, 50);
        break;
      case 1:
        //eye1
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
        pg.bezierVertex(-30, -50, 30, -50, 80, 0);
        pg.bezierVertex(30, -40, -30, -40, -80, 0);
        pg.endShape();
        break;
      case 2:
        //eye2
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
        pg.bezierVertex(-30, -50, 30, -50, 67, -8);
        pg.bezierVertex(30, -30, -30, -30, -80, 0);
        pg.endShape();
        break;
      case 3:
        //eye3
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
        pg.bezierVertex(-30, -50, 30, -50, 74, -7);
        pg.bezierVertex(30, -20, -30, -20, -80, 0);
        pg.endShape();
        break;
      case 4:
        //eye4
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
        pg.bezierVertex(-30, -50, 30, -50, 74, -5);
        pg.bezierVertex(30, -10, -30, -10, -80, 0);
        pg.endShape();
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
        // pg.strokeWeight(4);
        // pg.beginShape();
        // pg.vertex(-80, 0);
        // pg.bezierVertex(-30, -50, 30, -50, 80, 0);
        // // pg.bezierVertex(30, 50, -30, 50, -80, 0);
        // pg.endShape();

        // pg.fill(255);
        // pg.ellipse(0, 0, 50);

        // pg.fill(0);
        // pg.beginShape();
        // pg.vertex(-80, 0);
        // pg.bezierVertex(-30, -50, 30, -50, 80, 0);
        // pg.bezierVertex(30, 40, -30, 40, -80, 0);
        // pg.endShape();
        break;
    }
    pg.pop();
  }
  drawOutline(pg) {
    pg.background(0);
    pg.stroke(255);
    pg.strokeWeight(4);
    pg.noFill(0);
    pg.push();
    pg.translate(width / 2, height / 2 - 120);
    pg.scale(2.5);
    //eye0
    pg.beginShape();
    pg.vertex(-80, 0);
    pg.bezierVertex(-30, -50, 30, -50, 80, 0);
    pg.bezierVertex(30, 50, -30, 50, -80, 0);
    pg.endShape();
    pg.pop();
  }

  drawPupil(pg) {
    // pg.background(0);
    pg.stroke(255);
    pg.strokeWeight(6);
    pg.noFill(0);
    pg.push();
    pg.translate(width / 2, height / 2 - 120);
    pg.scale(2.5);
    pg.fill(255);
    pg.ellipse(0, 0, 50);
    pg.pop();
  }

  drawBefore(pg) {
    pg.background(0);
    pg.push();
    pg.translate(width / 2, height / 2);
    pg.noFill();
    pg.stroke(255);
    pg.strokeWeight(4);
    pg.scale(1.2);
    pg.beginShape();
    for (let i = 0; i < 16; i++) {
      pg.vertex(-160 + 10 * 2 * i, -240);
      pg.vertex(-160 + 10 * (2 * i + 1), -230);
    }
    pg.vertex(160, -240);
    pg.vertex(160, 240);
    for (let i = 0; i < 16; i++) {
      pg.vertex(160 - 10 * 2 * i, 240);
      pg.vertex(160 - 10 * (2 * i + 1), 230);
    }
    pg.vertex(-160, 240);
    pg.vertex(-160, -240);
    pg.endShape();
    pg.scale(1.2);
    pg.fill(255);
    pg.noStroke();
    pg.pop();
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
  }
}
