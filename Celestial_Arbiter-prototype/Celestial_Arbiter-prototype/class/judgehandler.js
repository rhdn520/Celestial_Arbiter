class Judge {
    constructor() {
      this.status = 'think'; //think or talk 
  }

    display(){
      switch(this.status){
        case 'think':
          this.displayThinking();
          break;
        
        case 'talk':
          this.displayTalking();
          break;
      }
    }

    displayThinking(){
      //생각하는 모습 보여주는 코드들...
      push();
    translate(windowWidth/2-508,80);
    noStroke();
    beginShape();
    fill(255);
    strokeWeight(3);
    fill(255,250);
    rectMode(CENTER);
    rect(508,455,300,2);
    rect(508,458,350,3);
    rect(508,460,380,3);
    rect(508,463,450,3);
    rect(508,466,430,3);
    rect(508,472,380,3);
    rect(508,477,350,3);
    rect(508,480,300,3);
    noStroke();
    fill(255);
    rectMode(CORNER);
    rect(506,154,10,300);
    ellipse(508,190,88,80);
            //faceLeft
            beginShape();
            curveVertex(508,154);
            curveVertex(508,153);
            curveVertex(490,156);
            curveVertex(484,159);
            curveVertex(476,165);
            curveVertex(467,179);
            curveVertex(465,200);
            curveVertex(466,208);
            curveVertex(469,221);
            curveVertex(470,225);
            curveVertex(474,239);
            curveVertex(479,250);
            curveVertex(482,254);
            curveVertex(493,266);
            curveVertex(504,272);
            curveVertex(508,272);
            curveVertex(508,272);
            endShape();
            //faceRight
            beginShape();
            curveVertex(508,153);
            curveVertex(508,153);
            curveVertex(526,156);
            curveVertex(531,159);
            curveVertex(540,165);
            curveVertex(549,179);
            curveVertex(550,200);
            curveVertex(549,208);
            curveVertex(546,221);
            curveVertex(543,235);
            curveVertex(540,242);
            curveVertex(538,248);
            curveVertex(534,254);
            curveVertex(523,266);
            curveVertex(510,272);
            curveVertex(508,272);
            curveVertex(508,272);
            endShape();
    //bodyLeft
    beginShape();
    vertex(508,248);
    vertex(484,258);
    vertex(459,269);
    vertex(442,273);
    vertex(435,279);
    vertex(446,334);
    vertex(452,357);
    vertex(455,377);
    vertex(456,387);
    vertex(457,392);
    vertex(457,396);
    vertex(452,407);
    vertex(439,409);
    vertex(413,405);
    vertex(391,400);
    vertex(374,401);
    vertex(365,409);
    vertex(508,460);
    endShape();
    
    //bodyRight
    beginShape();
    vertex(508,248);
    vertex(532,258);
    vertex(555,269);
    vertex(576,273);
    vertex(581,277);
    vertex(582,279);
    vertex(568,334);
    vertex(564,357);
    vertex(561,377);
    vertex(560,387);
    vertex(560,392);
    vertex(560,396);
    vertex(565,407);
    vertex(566,409);
    vertex(613,405);
    vertex(638,400);
    vertex(640,401);
    vertex(652,409);
    vertex(508,460);
    endShape();

    //arm
    beginShape();
    vertex(444,273);
    vertex(435,278);
    vertex(423,308);
    vertex(414,348);
    vertex(409,368);
    vertex(403,403);
    vertex(462,437);
    vertex(465,440);
    vertex(499,419);
    vertex(482,420);
    vertex(432,393);
    vertex(450,331);
    endShape();
    
    //armRight
    beginShape();
    vertex(573,273);
    vertex(582,278);
    vertex(592,308);
    vertex(601,348);
    vertex(607,368);
    vertex(613,407);
    vertex(495,437);
    vertex(485,440);
    vertex(533,419);
    vertex(535,420);
    vertex(584,393);
    vertex(567,331);
    endShape();
    

    //legLeft
    beginShape();
    curveVertex(378,400);
    curveVertex(372,402);
    curveVertex(367,406);
    curveVertex(363,413);
    curveVertex(361,421);
    curveVertex(362,431);
    curveVertex(368,440);
    curveVertex(384,449);
    curveVertex(421,461);
    curveVertex(433,462);
    curveVertex(475,472);
    curveVertex(599,458);
    curveVertex(485,448);
    curveVertex(410,412);
    curveVertex(407,406);
    curveVertex(395,401);
    curveVertex(380,399);
    endShape();
    
    //toeLeft
    beginShape();
    curveVertex(422,457);
    curveVertex(415,460);
    curveVertex(411,470);
    curveVertex(410,474);
    curveVertex(411,491);
    curveVertex(434,484);
    curveVertex(456,465);
    curveVertex(424,440);
    endShape();
    rect(417,440,50,30);
    
    //toeRight
    beginShape();
    curveVertex(596,447);
    curveVertex(605,459);
    curveVertex(608,470);
    curveVertex(609,476);
    curveVertex(610,494);
    curveVertex(588,484);
    curveVertex(570,460);
    curveVertex(596,430);
    endShape();
    
    //legRight
    beginShape();
    curveVertex(639,400);
    curveVertex(641,400);
    curveVertex(645,403);
    curveVertex(649,406);
    curveVertex(653,413);
    curveVertex(654,427);
    curveVertex(634,449);
    curveVertex(603,461);
    curveVertex(583,462);
    curveVertex(563,472);
    curveVertex(516,458);
    curveVertex(535,448);
    curveVertex(612,412);
    curveVertex(635,399);
    endShape();
    
    //눈알
    //eye
    fill(250);
    ellipse(400, 180, 60, 50);
    ellipse(608, 180, 60, 50);
    ellipse(300, 280, 60, 50);
    ellipse(708, 280, 60, 50);
    ellipse(250, 400, 60, 50);
    ellipse(758, 400, 60, 50);
    fill(0);
    ellipse(390 + mouseX / 100, 180 + mouseY / 100, 30, 40);
    ellipse(598 + mouseX / 100, 180 + mouseY / 100, 30, 40);
    ellipse(290 + mouseX / 100, 280 + mouseY / 100, 30, 40);
    ellipse(698 + mouseX / 100, 280 + mouseY / 100, 30, 40);
    ellipse(240 + mouseX / 100, 400 + mouseY / 100, 30, 40);
    ellipse(748 + mouseX / 100, 400 + mouseY / 100, 30, 40);

    pop();
    }


    displayTalking(){
      //생각하는 모습 보여주는 코드들...
            push();
            translate(windowWidth/2-508,80);
            noStroke();
            beginShape();
            fill(255);
            strokeWeight(3);
            fill(255,250);
            rectMode(CENTER);
            rect(508,455,300,2);
            rect(508,458,350,3);
            rect(508,460,380,3);
            rect(508,463,450,3);
            rect(508,466,430,3);
            rect(508,472,380,3);
            rect(508,477,350,3);
            rect(508,480,300,3);
            noStroke();
            fill(255);
            rectMode(CORNER);
            rect(506,154,10,300);
            ellipse(508,190,88,80);
            //faceLeft
            beginShape();
            curveVertex(508,154);
            curveVertex(508,153);
            curveVertex(490,156);
            curveVertex(484,159);
            curveVertex(476,165);
            curveVertex(467,179);
            curveVertex(465,200);
            curveVertex(466,208);
            curveVertex(469,221);
            curveVertex(470,225);
            curveVertex(474,239);
            curveVertex(479,250);
            curveVertex(482,254);
            curveVertex(493,266);
            curveVertex(504,272);
            curveVertex(508,272);
            curveVertex(508,272);
            endShape();
            //faceRight
            beginShape();
            curveVertex(508,153);
            curveVertex(508,153);
            curveVertex(526,156);
            curveVertex(531,159);
            curveVertex(540,165);
            curveVertex(549,179);
            curveVertex(550,200);
            curveVertex(549,208);
            curveVertex(546,221);
            curveVertex(543,235);
            curveVertex(540,242);
            curveVertex(538,248);
            curveVertex(534,254);
            curveVertex(523,266);
            curveVertex(510,272);
            curveVertex(508,272);
            curveVertex(508,272);
            endShape();
            
            //bodyLeft
            beginShape();
            vertex(508,248);
            vertex(484,258);
            vertex(459,269);
            vertex(442,273);
            vertex(435,279);
            vertex(446,334);
            vertex(452,357);
            vertex(455,377);
            vertex(456,387);
            vertex(457,392);
            vertex(457,396);
            vertex(452,407);
            vertex(439,409);
            vertex(413,405);
            vertex(391,400);
            vertex(374,401);
            vertex(365,409);
            vertex(508,460);
            endShape();
            
            //bodyRight
            beginShape();
            vertex(508,248);
            vertex(532,258);
            vertex(555,269);
            vertex(576,273);
            vertex(581,277);
            vertex(582,279);
            vertex(568,334);
            vertex(564,357);
            vertex(561,377);
            vertex(560,387);
            vertex(560,392);
            vertex(560,396);
            vertex(565,407);
            vertex(566,409);
            vertex(613,405);
            vertex(638,400);
            vertex(640,401);
            vertex(652,409);
            vertex(508,460);
            endShape();
        
            //arm
            beginShape();
            vertex(444,273);
            vertex(435,278);
            vertex(423,308);
            vertex(414,348);
            vertex(409,368);
            vertex(403,403);
            vertex(462,437);
            vertex(465,440);
            vertex(499,419);
            vertex(482,420);
            vertex(432,393);
            vertex(450,331);
            endShape();
            
            //armRight
            beginShape();
            vertex(573,273);
            vertex(582,278);
            vertex(592,308);
            vertex(601,348);
            vertex(607,368);
            vertex(613,407);
            vertex(495,437);
            vertex(485,440);
            vertex(533,419);
            vertex(535,420);
            vertex(584,393);
            vertex(567,331);
            endShape();
            
        
            //legLeft
            beginShape();
            curveVertex(378,400);
            curveVertex(372,402);
            curveVertex(367,406);
            curveVertex(363,413);
            curveVertex(361,421);
            curveVertex(362,431);
            curveVertex(368,440);
            curveVertex(384,449);
            curveVertex(421,461);
            curveVertex(433,462);
            curveVertex(475,472);
            curveVertex(599,458);
            curveVertex(485,448);
            curveVertex(410,412);
            curveVertex(407,406);
            curveVertex(395,401);
            curveVertex(380,399);
            endShape();
            
            //toeLeft
            beginShape();
            curveVertex(422,457);
            curveVertex(415,460);
            curveVertex(411,470);
            curveVertex(410,474);
            curveVertex(411,491);
            curveVertex(434,484);
            curveVertex(456,465);
            curveVertex(424,440);
            endShape();
            rect(417,440,50,30);
            
            //toeRight
            beginShape();
            curveVertex(596,447);
            curveVertex(605,459);
            curveVertex(608,470);
            curveVertex(609,476);
            curveVertex(610,494);
            curveVertex(588,484);
            curveVertex(570,460);
            curveVertex(596,430);
            endShape();
            
            //legRight
            beginShape();
            curveVertex(639,400);
            curveVertex(641,400);
            curveVertex(645,403);
            curveVertex(649,406);
            curveVertex(653,413);
            curveVertex(654,427);
            curveVertex(634,449);
            curveVertex(603,461);
            curveVertex(583,462);
            curveVertex(563,472);
            curveVertex(516,458);
            curveVertex(535,448);
            curveVertex(612,412);
            curveVertex(635,399);
            endShape();
            
            pop();
    }

    updateStatus(){//외부의 클래스를 변수로 
      //updating Judge status logic goes below
      //아래는 간단한 updating 로직이지만 더 복잡해질 수도 있겠습니다.
      if(this.isJudgeTalking(ttsAudio)){
        this.status = 'talk';
      }else{
        this.status = 'think';
      }
    }
  
    isJudgeTalking(ttsAudio) { //원래는 shouldShowImage() 였던 부분
      return ttsAudio.isPlaying(); // 
    }
}