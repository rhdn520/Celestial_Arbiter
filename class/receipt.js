class Receipt {
  constructor(_globalVar) {
    this.globalVar = _globalVar;
    this.receiptX = width / 2;
    this.receiptY = height / 2;

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
    receiptContainer.id('ReceiptContainer');
    receiptContainer.position(this.xPos, this.yPos);
    receiptContainer.size(this.divWidth);
    receiptContainer.addClass("receipt-container");

    //Div1 : title
    let div1 = createDiv("LIFE RECEIPT");
    div1.addClass("receipt-title");
    receiptContainer.child(div1);


    //Div2
    let div2 = createDiv(this.globalVar.receiptData.judge_summary);
    //let div2=createDiv(this.globalVar.receiptData.sentencing)
    receiptContainer.child(div2);
    div2.addClass("judge-summary");

    //Div3

    let div3Text = "<p>";
    div3Text += `1. ${this.globalVar.receiptData.value1} : ${this.globalVar.receiptData.value1_score}<br>`;
    div3Text += `2. ${this.globalVar.receiptData.value2} : ${this.globalVar.receiptData.value2_score}<br>`;
    div3Text += `3. ${this.globalVar.receiptData.value3} : ${this.globalVar.receiptData.value3_score}<br>`;
    div3Text += `4. ${this.globalVar.receiptData.value4} : ${this.globalVar.receiptData.value4_score}<br>`;
    div3Text += `5. ${this.globalVar.receiptData.value5} : ${this.globalVar.receiptData.value5_score}<br></p>`;

//let positiveKeywords=this.globalVar.receiptData.PositiveKeywords;
//let negativeKeywords=this.globalVar.receiptData.NegativeKeywords;

//let di3Text="<p>";
//div3Text += "<strong>Positive Keywords:</strong><br>";
//positiveKeywords.forEach((keyword) => {
  //div3Text += `${keyword.keyword}: ${keyword.relevance}<br>`;
//});
//div3Text += "<br><strong>Negative Keywords:</strong><br>";
//negativeKeywords.forEach((keyword) => {
  //div3Text += `${keyword.keyword}: ${keyword.relevance}<br>`;
//});
//div3Text += "</p>";




    let div3 = createDiv(div3Text);

    div3.style("width", "100%");
    div3.addClass("receipt-keywords");
    receiptContainer.child(div3);

    
    let totalPositiveRelevance = this.globalVar.receiptData.PositiveKeywords.reduce((total, keyword) => {
      return total + (keyword.relevance * 1000);
    }, 0);
    
    let totalNegativeRelevance = this.globalVar.receiptData.NegativeKeywords.reduce((total, keyword) => {
      return total + (keyword.relevance * -1000);
    }, 0);
    
    let totalRelevanceSum = totalPositiveRelevance + totalNegativeRelevance;

let div4Text=`합계: ${totalRelevanceSum}`;
let div4=createDiv(div4Text);
div4.style("width","100%")
div4.addClass("total-amount");
receiptContainer.child(div4);

let div5=createDiv("발행처: 천국");
div5.style("width","100%")
div5.addClass("receipt-date");
receiptContainer.child(div5);

let receiptBottom = createDiv();
receiptBottom.addClass("receipt-bottom");

    //Div4
    //let div4 = createDiv(
      //"<span>Life Receipt\nINTRODUCTION TO INFORMATION-CULTURE TECHNOLOGY</span>"
    //);
    //div4.addClass("receipt-bottom-element");

    //Div6
    let div6 = createDiv(`<span>${Date.now()}</span>`);
    div6.addClass("receipt-bottom-element");
    div6.style("font-family", "barcord");
    div6.style("font-size", "40px");
    div6.style("font-stretch", "expanded");
    div6.style("align-items", "center");

    //Div7
    let div7 = createDiv("<span>Life Receipt\nINTRODUCTION TO INFORMATION-CULTURE TECHNOLOGY</span>");
    div7.addClass("receipt-bottom-element");

    //Div8
    let div8 = createDiv(`<span>${Date.now()}</span>`);
    div8.addClass("receipt-bottom-element");


    //Div9
    //let div9 = createDiv(`<span>${Date.now()}</span>`);
    //div9.addClass("receipt-bottom-element");
    //div9.style("font-family", "barcord");
    //div9.style("font-size", "36px");
    //div9.style("font-stretch", "expanded");
    //div9.style("align-items", "center");

    //Div10
    //let div10 = createDiv("");
    //div10.addClass("receipt-bottom-element");
    //div10.style("background-image", 'url("assets/antelope.png")');

    //Div11
    //let div11 = createDiv("");
    //div11.addClass("receipt-bottom-element");
    //div11.style("background-image", 'url("assets/qr_dummy.png")');

    receiptBottom.child(div6);
    receiptBottom.child(div7);
    receiptBottom.child(div8);
    //receiptBottom.child(div9);
    //receiptBottom.child(div10);
    //receiptBottom.child(div11);
    receiptContainer.child(receiptBottom);
  }
}
