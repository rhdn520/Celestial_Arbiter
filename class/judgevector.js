//particle로 만들 Judge Vector Class

class JudgeVector {
  constructor() {}
  display(pg) {
    pg.push();
    pg.translate(windowWidth / 2 - 508, -50);
    pg.noStroke();
    pg.beginShape();
    pg.fill(255);
    pg.strokeWeight(3);
    pg.fill(255, 250);
    // rectMode(CENTER);
    // rect(508, 455, 300, 2);
    // rect(508, 458, 350, 3);
    // rect(508, 460, 380, 3);
    // rect(508, 463, 450, 3);
    // rect(508, 466, 430, 3);
    // rect(508, 472, 380, 3);
    // rect(508, 477, 350, 3);
    // rect(508, 480, 300, 3);
    pg.noStroke();
    pg.fill(255);
    pg.rectMode(CORNER);
    pg.rect(506, 154, 10, 300);
    pg.ellipse(508, 190, 88, 80);

    //faceLeft
    pg.beginShape();
    pg.curveVertex(508, 154);
    pg.curveVertex(508, 153);
    pg.curveVertex(490, 156);
    pg.curveVertex(484, 159);
    pg.curveVertex(476, 165);
    pg.curveVertex(467, 179);
    pg.curveVertex(465, 200);
    pg.curveVertex(466, 208);
    pg.curveVertex(469, 221);
    pg.curveVertex(470, 225);
    pg.curveVertex(474, 239);
    pg.curveVertex(479, 250);
    pg.curveVertex(482, 254);
    pg.curveVertex(493, 266);
    pg.curveVertex(504, 272);
    pg.curveVertex(508, 272);
    pg.curveVertex(508, 272);
    pg.endShape();

    //faceRight
    pg.beginShape();
    pg.curveVertex(508, 153);
    pg.curveVertex(508, 153);
    pg.curveVertex(526, 156);
    pg.curveVertex(531, 159);
    pg.curveVertex(540, 165);
    pg.curveVertex(549, 179);
    pg.curveVertex(550, 200);
    pg.curveVertex(549, 208);
    pg.curveVertex(546, 221);
    pg.curveVertex(543, 235);
    pg.curveVertex(540, 242);
    pg.curveVertex(538, 248);
    pg.curveVertex(534, 254);
    pg.curveVertex(523, 266);
    pg.curveVertex(510, 272);
    pg.curveVertex(508, 272);
    pg.curveVertex(508, 272);
    pg.endShape();

    //bodyLeft
    pg.beginShape();
    pg.vertex(508, 248);
    pg.vertex(484, 258);
    pg.vertex(462, 269);
    pg.vertex(452, 273);
    pg.vertex(452, 278);
    pg.vertex(450, 330);
    pg.vertex(456, 357);
    pg.vertex(461, 377);
    pg.vertex(462, 387);
    pg.vertex(462, 392);
    pg.vertex(460, 396);
    pg.vertex(457, 407);
    pg.vertex(439, 409);
    pg.vertex(413, 405);
    pg.vertex(391, 400);
    pg.vertex(374, 401);
    pg.vertex(365, 409);
    pg.vertex(508, 460);
    pg.endShape();

    //bodyRight
    pg.beginShape();
    pg.vertex(508, 248);
    pg.vertex(532, 258);
    pg.vertex(550, 269);
    pg.vertex(560, 273);
    pg.vertex(560, 277);
    pg.vertex(560, 279);
    pg.vertex(566, 334);
    pg.vertex(559, 357);
    pg.vertex(556, 377);
    pg.vertex(554, 387);
    pg.vertex(555, 392);
    pg.vertex(556, 396);
    pg.vertex(559, 407);
    pg.vertex(566, 409);
    pg.vertex(613, 405);
    pg.vertex(638, 400);
    pg.vertex(640, 401);
    pg.vertex(652, 409);
    pg.vertex(508, 460);
    pg.endShape();

    //armRight
    pg.beginShape();
    pg.curveVertex(550, 286);
    pg.curveVertex(560, 274);
    pg.curveVertex(570, 278);
    pg.curveVertex(585, 308);
    pg.curveVertex(601, 348);
    pg.curveVertex(602, 348);
    pg.curveVertex(607, 407);
    pg.curveVertex(495, 437);
    pg.curveVertex(485, 440);
    pg.curveVertex(533, 419);
    pg.curveVertex(534, 420);
    pg.curveVertex(588, 393);
    pg.curveVertex(567, 328);
    pg.curveVertex(542, 286);
    pg.endShape();
    pg.rect(548, 275, 20, 60, 2);

    //armLeft
    pg.beginShape();
    pg.curveVertex(452, 270);
    pg.curveVertex(452, 273);
    pg.curveVertex(432, 308);
    pg.curveVertex(418, 348);
    pg.curveVertex(412, 368);
    pg.curveVertex(407, 403);
    pg.curveVertex(462, 437);
    pg.curveVertex(465, 440);
    pg.curveVertex(499, 419);
    pg.curveVertex(482, 420);
    pg.curveVertex(431, 393);
    pg.curveVertex(455, 331);
    pg.curveVertex(475, 345);
    pg.endShape();

    //legLeft
    pg.beginShape();
    pg.curveVertex(378, 400);
    pg.curveVertex(372, 402);
    pg.curveVertex(367, 406);
    pg.curveVertex(363, 413);
    pg.curveVertex(361, 421);
    pg.curveVertex(362, 431);
    pg.curveVertex(368, 440);
    pg.curveVertex(384, 449);
    pg.curveVertex(421, 461);
    pg.curveVertex(433, 462);
    pg.curveVertex(475, 472);
    pg.curveVertex(599, 458);
    pg.curveVertex(485, 448);
    pg.curveVertex(410, 412);
    pg.curveVertex(407, 406);
    pg.curveVertex(395, 401);
    pg.curveVertex(380, 399);
    pg.endShape();

    //toeLeft
    pg.beginShape();
    pg.curveVertex(422, 457);
    pg.curveVertex(415, 460);
    pg.curveVertex(411, 470);
    pg.curveVertex(410, 474);
    pg.curveVertex(411, 491);
    pg.curveVertex(434, 484);
    pg.curveVertex(456, 465);
    pg.curveVertex(424, 440);
    pg.endShape();
    pg.rect(417, 440, 50, 30);

    //toeRight
    pg.beginShape();
    pg.curveVertex(596, 447);
    pg.curveVertex(605, 459);
    pg.curveVertex(608, 470);
    pg.curveVertex(609, 476);
    pg.curveVertex(610, 494);
    pg.curveVertex(588, 484);
    pg.curveVertex(570, 460);
    pg.curveVertex(596, 430);
    pg.endShape();

    //legRight
    pg.beginShape();
    pg.curveVertex(639, 400);
    pg.curveVertex(641, 400);
    pg.curveVertex(645, 403);
    pg.curveVertex(649, 406);
    pg.curveVertex(653, 413);
    pg.curveVertex(654, 427);
    pg.curveVertex(634, 449);
    pg.curveVertex(603, 461);
    pg.curveVertex(583, 462);
    pg.curveVertex(563, 472);
    pg.curveVertex(516, 458);
    pg.curveVertex(535, 448);
    pg.curveVertex(612, 412);
    pg.curveVertex(635, 399);
    pg.endShape();

    //ear
    pg.beginShape();
    pg.curveVertex(480, 213);
    pg.curveVertex(468, 210);
    pg.curveVertex(459, 212);
    pg.curveVertex(459, 222);
    pg.curveVertex(464, 228);
    pg.curveVertex(478, 239);
    pg.curveVertex(480, 235);
    pg.endShape();

    //earRight
    pg.beginShape();
    pg.curveVertex(540, 213);
    pg.curveVertex(548, 210);
    pg.curveVertex(553, 212);
    pg.curveVertex(554, 222);
    pg.curveVertex(550, 228);
    pg.curveVertex(540, 239);
    pg.curveVertex(530, 235);
    pg.endShape();

    //eye
    pg.fill(250);
    pg.ellipse(400, 180, 60, 50);
    pg.ellipse(608, 180, 60, 50);
    pg.ellipse(300, 280, 60, 50);
    pg.ellipse(708, 280, 60, 50);
    pg.ellipse(250, 400, 60, 50);
    pg.ellipse(758, 400, 60, 50);

    pg.fill(0);
    pg.ellipse(400 + mouseX / 100, 180 + mouseY / 100, 30, 40);
    pg.ellipse(608 + mouseX / 100, 180 + mouseY / 100, 30, 40);
    pg.ellipse(300 + mouseX / 100, 280 + mouseY / 100, 30, 40);
    pg.ellipse(708 + mouseX / 100, 280 + mouseY / 100, 30, 40);
    pg.ellipse(250 + mouseX / 100, 400 + mouseY / 100, 30, 40);
    pg.ellipse(758 + mouseX / 100, 400 + mouseY / 100, 30, 40);

    // } else {
    //    fill(0);
    // pg.ellipse(400 - mouseX / 100, 180 + mouseY / 100, 30, 40);
    // pg.ellipse(608 - mouseX / 100, 180 + mouseY / 100, 30, 40);
    // pg.ellipse(300 - mouseX / 100, 280 + mouseY / 100, 30, 40);
    // pg.ellipse(708 - mouseX / 100, 280 + mouseY / 100, 30, 40);
    // pg.ellipse(250 - mouseX / 100, 400 + mouseY / 100, 30, 40);
    // pg.ellipse(758 - mouseX / 100, 400 + mouseY / 100, 30, 40);
    // }

    pg.pop();
  }

  move() {}
}
