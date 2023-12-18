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
    receiptContainer.id("ReceiptContainer");
    receiptContainer.position(this.xPos, this.yPos);
    receiptContainer.size(this.divWidth);
    receiptContainer.addClass("receipt-container");

    //Div1 : title
    let receiptTitle = createDiv("LIFE RECEIPT");
    receiptTitle.addClass("receipt-title");
    receiptContainer.child(receiptTitle);

    //Div2
    //let div2 = createDiv(this.globalVar.receiptData.judge_summary);
    let receiptSentencing = createDiv(this.globalVar.receiptData.sentencing);
    receiptContainer.child(receiptSentencing);
    receiptSentencing.addClass("judge-summary");

    //Div3

    //let div3Text = "<p>";
    //div3Text += `1. ${this.globalVar.receiptData.value1} : ${this.globalVar.receiptData.value1_score}<br>`;
    //div3Text += `2. ${this.globalVar.receiptData.value2} : ${this.globalVar.receiptData.value2_score}<br>`;
    //div3Text += `3. ${this.globalVar.receiptData.value3} : ${this.globalVar.receiptData.value3_score}<br>`;
    //div3Text += `4. ${this.globalVar.receiptData.value4} : ${this.globalVar.receiptData.value4_score}<br>`;
    //div3Text += `5. ${this.globalVar.receiptData.value5} : ${this.globalVar.receiptData.value5_score}<br></p>`;

    let positiveKeywords = this.globalVar.receiptData.PositiveKeywords;
    let negativeKeywords = this.globalVar.receiptData.NegativeKeywords;

    //let receiptValueHeader=createDiv("<span> 항 목 </span><span>금 액</span>");
    let receiptValueHeaderElement = `<div class="receipt-keyword-element"><span><strong>항 목</strong></span><span><strong>금 액</strong></span></div>`;
    let receiptValueHeader = createDiv(receiptValueHeaderElement);
    receiptValueHeader.addClass("receipt-value-header");
    receiptContainer.child(receiptValueHeader);

    let receiptValueContents = "";
    //receiptValueContents += "<strong>Positive Keywords:</strong><br>";
    positiveKeywords.forEach((keyword) => {
      receiptValueContents += `<div class="receipt-keyword-element"><span>${
        keyword.keyword
      }</span><span>${keyword.relevance * 1000}</span></div>`;
    });
    //receiptValueContents += "<br><strong>Negative Keywords:</strong><br>";
    negativeKeywords.forEach((keyword) => {
      receiptValueContents += `<div class="receipt-keyword-element"><span>${
        keyword.keyword
      }</span><span>${keyword.relevance * -1000}</span></div>`;
    });
    //receiptValueContents += "</p>";

    let receiptValue = createDiv(receiptValueContents);

    receiptValue.style("width", "100%");
    receiptValue.addClass("receipt-keywords");
    receiptContainer.child(receiptValue);

    let totalPositiveRelevance =
      this.globalVar.receiptData.PositiveKeywords.reduce((total, keyword) => {
        return total + keyword.relevance * 1000;
      }, 0);

    let totalNegativeRelevance =
      this.globalVar.receiptData.NegativeKeywords.reduce((total, keyword) => {
        return total + keyword.relevance * -1000;
      }, 0);

    let totalRelevanceSum = totalPositiveRelevance + totalNegativeRelevance;

    //let valueSumElement=`합계: ${totalRelevanceSum}`;
    let valueSumElement = `<div class="receipt-keyword-element"><span>합 계 :</span><span>${totalRelevanceSum}원</span></div>`;
    let valueSum = createDiv(valueSumElement);
    valueSum.style("width", "100%");
    valueSum.addClass("total-amount");
    receiptContainer.child(valueSum);

    //let receiptPublish=createDiv("발행처: 천국");
    let receiptPublishElement = `
<div class="receipt-keyword-element"><span>발 행 일 자 :</span><span>${year()}-${month()}-${day()}</span></div> 
<div class="receipt-keyword-element"><span>발 행 처 :</span><span>천 국</span></div>
`;
    let receiptPublish = createDiv(receiptPublishElement);
    receiptPublish.style("width", "100%");
    receiptPublish.addClass("receipt-date");
    receiptContainer.child(receiptPublish);

    let receiptBottom = createDiv();
    receiptBottom.addClass("receipt-bottom");

    //Div4
    //let div4 = createDiv(
    //"<span>Life Receipt\nINTRODUCTION TO INFORMATION-CULTURE TECHNOLOGY</span>"
    //);
    //div4.addClass("receipt-bottom-element");

    //barcodeBottom
    let barcodeBottom = createDiv(`<span>${Date.now()}</span>`);
    barcodeBottom.addClass("receipt-bottom-element");
    barcodeBottom.style("font-family", "barcord");
    barcodeBottom.style("font-size", "50px");
    barcodeBottom.style("font-stretch", "expanded");
    barcodeBottom.style("align-items", "center");

    //profileBottom
    // let profileBottom=createDiv("LIFE RECEIPT<br>INTRODUCTION TO INFORMATION-CULTURE TECHNOLOGY")
    // profileBottom.addClass("profile-bottom-element");

    let profileBottom = createDiv("LIFE RECEIPT");
    profileBottom.child(createElement("br")); // 줄바꿈
    profileBottom.child(createDiv("2023-2 TEAM F"));
    // profileBottom.child(createElement("br")); // 줄바꿈
    // profileBottom.child(createDiv("TEAM F"));
    // profileBottom.child(createElement("br")); // 줄바꿈
    profileBottom.addClass("profile-bottom-element");

    //Img : Icon
    let receiptIcon = createElement("img");
    receiptIcon.attribute("src", "../assets/receiptIcon.png");
    receiptIcon.addClass("receipt-icon");
    profileBottom.child(receiptIcon);

    let rightBottom = createDiv();
    rightBottom.child(
      createDiv("INTRODUCTION TO<br>INFORMATION-CULTURE<br>TECHNOLOGY")
    );
    rightBottom.child(barcodeBottom);
    rightBottom.addClass("receipt-right-bottom");

    //Div7
    // let div7 = createDiv("<span>2023-2\nTEAM F</span>");
    // div7.addClass("receipt-bottom-element");

    //Div8
    // let div8 = createDiv("<span>SCAN THIS QR CODE<br><br>⬇</span>");
    // div8.addClass("receipt-bottom-element");

    // //Div9
    // let div9 = createDiv(`<span>${Date.now()}</span>`);
    // div9.addClass("receipt-bottom-element");
    // div9.style("font-family", "barcord");
    // div9.style("font-size", "36px");
    // div9.style("font-stretch", "expanded");
    // div9.style("align-items", "center");

    // //Div10
    // let div10 = createDiv("");
    // div10.addClass("receipt-bottom-element");
    // div10.style("background-image", 'url("assets/antelope.png")');

    // //Div11
    // let div11 = createDiv("");
    // div11.addClass("receipt-bottom-element");
    // div11.style("background-image", 'url("assets/qr_dummy.png")');

    // receiptBottom.child(barcodeBottom);
    receiptBottom.child(profileBottom);
    receiptBottom.child(rightBottom);
    // receiptBottom.child(div7);
    // receiptBottom.child(div8);
    // receiptBottom.child(div9);
    // receiptBottom.child(div10);
    // receiptBottom.child(div11);
    receiptContainer.child(receiptBottom);
  }
}
