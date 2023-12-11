class Receipt {
  constructor(_globalVar) {
    this.globalVar = _globalVar;
    this.receiptX = width /2;
    this.receiptY = height /2 ;
    // this.receiptX = (windowWidth - this.width) / 2;
    // this.receiptY = (windowHeight - this.height) / 2;

    // this.divWidth = this.width * 0.9;
    // this.div4Width = this.divWidth / 3;

    // this.div1Height = this.height / 10;
    // this.div2Height = (this.height * 3) / 10;
    // this.div3Height = this.div2Height;
    // this.div4Height = (this.height * 3) / 20;
    // this.div5Height = this.div4Height;
    // this.div6Height = this.div4Height;
    // this.div7Height = this.div4Height;
    // this.div8Height = this.div4Height;
    // this.div9Height = this.div4Heights;

    this.xPos = width / 2;
    this.yPos = height / 2;
  }

  display() {

    //draw receipt background
    fill(255);
    rectMode(CORNER);
    rect(this.receiptX, this.receiptY, this.width, this.height);

    //Container
    let receiptContainer = createDiv();
    receiptContainer.position(this.xPos, this.yPos);
    receiptContainer.size(this.divWidth);
    receiptContainer.addClass('receipt-container');

    //Div1
    let div1 = createDiv("LIFE RECEIPT");
    receiptContainer.child(div1);
    div1.style("height", "fit-content");
    div1.style("padding", "20px 0px")
    div1.style("background-color", "rgba(255,255,255,0.8)");
    div1.style("text-align", "center");
    div1.style("font-family", "typewr_b");
    div1.style("font-size", "30px");
    div1.style("display", "flex");
    div1.style("justify-content", "center");
    div1.style("align-items", "center");
    div1.style("border-bottom", "1px dotted#000");

    //Div2
    let div2 = createDiv(this.globalVar.receiptData.judge_summary);
    receiptContainer.child(div2);
    // div2.position(this.xPos, this.yPos + this.div1Height);
    // div2.size(this.divWidth, this.div2Height);
    div2.addClass('judge-summary');

    //Div3

    let div3Text = "<p>";
    div3Text += `1 ${this.globalVar.receiptData.value1} : ${this.globalVar.receiptData.value1_score}<br>`;
    div3Text += `2 ${this.globalVar.receiptData.value2} : ${this.globalVar.receiptData.value2_score}<br>`;
    div3Text += `3 ${this.globalVar.receiptData.value3} : ${this.globalVar.receiptData.value3_score}<br>`;
    div3Text += `4 ${this.globalVar.receiptData.value4} : ${this.globalVar.receiptData.value4_score}<br>`;
    div3Text += `5 ${this.globalVar.receiptData.value5} : ${this.globalVar.receiptData.value5_score}<br></p>`;

    let div3 = createDiv(div3Text);
    div3.style("width","100%");
    div3.style("height", "fit-content");
    div3.style("padding", "0 20px");
    div3.style("text-align", "left");
    div3.style("font-family", "myfontrunes");
    div3.style("font-size", "20px");
    div3.style("display", "flex");
    div3.style("flex-flow", "row nowrap");
    div3.style("justify-content", "flex-start");
    div3.style("align-items", "center");
    div3.style("border-bottom","1px dotted black");
    receiptContainer.child(div3);

    let receiptBottom = createDiv();
    receiptBottom.addClass('receipt-bottom');
    
    //Div4
    let div4 = createDiv(
      "<span>Life Receipt\nINTRODUCTION TO INFORMATION-CULTURE TECHNOLOGY</span>"
    );
    div4.addClass('receipt-bottom-element');

    //Div5
    let div5 = createDiv("<span>2023-2\nTEAM F</span>");
    div5.addClass('receipt-bottom-element');

    //Div6
    let div6 = createDiv("<span>SCAN THIS QR CODE<br><br>⬇</span>");
    div6.addClass('receipt-bottom-element');

    //Div7
    let div7 = createDiv(`<span>${Date.now()}</span>`);
    div7.addClass('receipt-bottom-element');
    div7.style("font-family", "barcord");  
    div7.style("font-size", "36px");
    div7.style("font-stretch","expanded");
    div7.style("align-items","center")

    //Div8
    let div8 = createDiv('');
    div8.addClass('receipt-bottom-element');
    div8.style("background-image", "url(\"assets/antelope.png\")");


    //Div9
    let div9 = createDiv('');
    div9.addClass('receipt-bottom-element');
    div9.style("background-image", "url(\"assets/qr_dummy.png\")")

    receiptBottom.child(div4);
    receiptBottom.child(div5);
    receiptBottom.child(div6);
    receiptBottom.child(div7);
    receiptBottom.child(div8);
    receiptBottom.child(div9);
    receiptContainer.child(receiptBottom);
  }
}
