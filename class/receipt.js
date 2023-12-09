class Receipt {
  constructor(_globalVar) {
    this.globalVar = _globalVar;
    // console.log(this.receiptData);
    this.width = windowWidth / 3;
    this.height = (windowHeight * 3) / 4;

    this.receiptX = (windowWidth - this.width) / 2;
    this.receiptY = (windowHeight - this.height) / 2;

    this.divWidth = this.width * 0.9;
    this.div4Width = this.divWidth / 3;

    this.div1Height = this.height / 10;
    this.div2Height = (this.height * 3) / 10;
    this.div3Height = this.div2Height;
    this.div4Height = (this.height * 3) / 20;
    this.div5Height = this.div4Height;
    this.div6Height = this.div4Height;
    this.div7Height = this.div4Height;
    this.div8Height = this.div4Height;
    this.div9Height = this.div4Height;

    this.xPos = (this.width - this.divWidth) / 2 + this.receiptX;
    this.yPos = this.receiptY;
  }

  display() {

    //draw receipt background
    fill(255);
    rectMode(CORNER);
    rect(this.receiptX, this.receiptY, this.width, this.height);

    //Div1
    let div1 = createDiv("LIFE RECEIPT");
    div1.position(this.xPos, this.yPos);
    div1.size(this.divWidth, this.div1Height);
    div1.style("background-color", "rgba(255,255,255,0.8)");
    div1.style("text-align", "center");
    div1.style("font-family", "typewr_b");
    div1.style("font-size", "30px");
    div1.style("display", "flex");
    div1.style("justify-content", "center");
    div1.style("align-items", "center");
    div1.style("border", "1px dotted#000");

    //Div2
    let div2 = createDiv(this.globalVar.receiptData.judge_summary);
    div2.position(this.xPos, this.yPos + this.div1Height);
    div2.size(this.divWidth, this.div2Height);
    div2.addClass('judge_summary');
    //Div3

    let div3Text = "";
    div3Text += `Value1<br>${this.globalVar.receiptData.value1}<br>`;
    div3Text += `Value2<br>${this.globalVar.receiptData.value2}<br>`;
    div3Text += `Value3<br>${this.globalVar.receiptData.value3}<br>`;
    div3Text += `Value4<br>${this.globalVar.receiptData.value4}<br>`;
    div3Text += `Value5<br>${this.globalVar.receiptData.value5}<br>`;

    let div3 = createDiv(div3Text);
    div3.position(this.xPos, this.yPos + this.div1Height + this.div2Height);
    div3.size(this.divWidth, this.div2Height);
    div3.style("background-color", "rgba(255,255,255,0.8)");
    div3.style("text-align", "center");
    div3.style("font-family", "typewr_b");
    div3.style("font-size", "11px");
    div3.style("display", "flex");
    div3.style("justify-content", "center");
    div3.style("align-items", "center");
    // div3.style("border", "1px dotted#000");

    //Div4
    let div4 = createDiv(
      "Life Receipt\nINTRODUCTION TO INFORMATION-CULTURE TECHNOLOGY"
    );
    div4.position(
      this.xPos,
      this.yPos + this.div1Height + this.div2Height + this.div3Height
    );
    div4.size(this.div4Width, this.div4Height);
    div4.style("background-color", "rgba(255,255,255,0.8)");
    div4.style("text-align", "center");
    div4.style("font-family", "typewr_b");
    div4.style("font-size", "7px");
    div4.style("display", "flex");
    div4.style("justify-content", "center");
    div4.style("align-items", "center");
    div4.style("border", "1px dotted#000");

    //Div5
    let div5 = createDiv("2023-2\nTEAM F");
    div5.position(
      this.xPos + this.div4Width,
      this.yPos + this.div1Height + this.div2Height + this.div3Height
    );
    div5.size(this.div4Width, this.div5Height);
    div5.style("background-color", "rgba(255,255,255,0.8)");
    div5.style("text-align", "center");
    div5.style("font-family", "typewr_b");
    div5.style("font-size", "7px");
    div5.style("display", "flex");
    div5.style("justify-content", "center");
    div5.style("align-items", "center");
    div5.style("border", "1px dotted#000");

    //Div6
    let div6 = createDiv("SCAN THIS QR CODE");
    div6.position(
      this.xPos + this.div4Width * 2,
      this.yPos + this.div1Height + this.div2Height + this.div3Height
    );
    div6.size(this.div4Width, this.div6Height);
    div6.style("background-color", "rgba(255,255,255,0.8)");
    div6.style("text-align", "center");
    div6.style("font-family", "typewr_b");
    div6.style("font-size", "7px");
    div6.style("display", "flex");
    div6.style("justify-content", "center");
    div6.style("align-items", "center");
    div6.style("border", "1px dotted#000");

    //Div7
    let div7 = createDiv('20231219');
    div7.position(
      this.xPos,
      this.yPos + this.div1Height + this.div2Height + this.div3Height + this.div4Height
    );
    div7.size(this.div4Width, this.div7Height);
    div7.style("background-color", "rgba(255,255,255,0.8)");
    div7.style("text-align", "center");
    div7.style("font-family", "barcord");
    div7.style("font-size", "36px");
    div7.style("display", "flex");
    div7.style("justify-content", "center");
    div7.style("align-items", "center");
    div7.style("border", "1px none#000");

    //Div8
    let div8 = createDiv('');
    div8.position(
      this.xPos + this.div4Width,
      this.yPos + this.div1Height + this.div2Height + this.div3Height + this.div4Height
    );
    div8.size(this.div4Width, this.div8Height);
    div8.style("background-color", "rgba(255,255,255,0.8)");
    div8.style("display", "flex");
    div8.style("justify-content", "center");
    div8.style("align-items", "center");
    div8.style("border", "1px none#000");

    //let imgElement;
    //imgElement=createImg('')

    //Div9
    let div9 = createDiv('');
    div9.position(
      this.xPos + this.div4Width * 2,
      this.yPos + this.div1Height + this.div2Height + this.div3Height + this.div4Height
    );
    div9.size(this.div4Width, this.div9Height);
    div9.style("background-color", "rgba(255,255,255,0.8)");
    div9.style("display", "flex");
    div9.style("justify-content", "center");
    div9.style("align-items", "center");
    div9.style("border", "1px none#000");

  }
}
