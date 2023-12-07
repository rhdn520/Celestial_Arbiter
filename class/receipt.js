async function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  
  let receiptWidth = windowWidth / 3;
  let receiptHeight = windowHeight * 3 / 4;
  
  let receiptX = (windowWidth - receiptWidth) / 2;
  let receiptY = (windowHeight - receiptHeight) / 2;
  
  rectMode(CORNER);
  fill(255, 255, 255);
  rect(receiptX, receiptY, receiptWidth, receiptHeight);
  
  let firstDivHeight = receiptHeight / 10;
  let fourthDivHeight = receiptHeight * 3 / 10;
  let remainingHeight = receiptHeight - firstDivHeight - fourthDivHeight;
  
  let secondThirdDivHeight = remainingHeight / 2;
  
  let yPos = receiptY;
  let divWidth = receiptWidth * 0.9;
  let xPos = (receiptWidth - divWidth) / 2 + receiptX;
  
  
  textFont('Font1');
  
  // first div
  let firstDiv = createCustomDiv(xPos, yPos, divWidth, firstDivHeight);
  let p1 = createP("LIFE RECEIPT");
  p1.parent(firstDiv);
  p1.class('font1');
  p1.style('font-size','33px');
  
  
  // second div
  yPos += firstDivHeight;
  let secondDiv = createCustomDiv(xPos, yPos, divWidth, secondThirdDivHeight);
  let p2 = createP("You didn't help others and didn't have any special relationships, big happiness, or intense dreams. You just wanted to live comfortably, being moderately happy and moderately unhappy, giving and receiving moderately. So I hope that your soul can learn the important values and intense passion of life. In your next life, you will be reborn as an eagle, experiencing both failure and success, and finding the true meaning of life. You will have sharp eyes to see the world, fly in the high sky, and have a broad perspective. Live freely from the constraints of life and death, and live with your own strength.");
  p2.parent(secondDiv);
  p2.class('font1');
  p2.style('font-size','11px')
  
  // third div
  yPos += secondThirdDivHeight;
  let thirdDiv = createCustomDiv(xPos, yPos, divWidth, secondThirdDivHeight);
  let p3 = createP("value1: Values/ value2: Passion/value3: Success/value4: Freedom/value5: Strength");
  p3.parent(thirdDiv);
  p3.class('font1');
  p3.style('font-size','12px')
  
  // fourth div
  yPos = receiptY + receiptHeight - fourthDivHeight;
  let sixthDivWidth = divWidth / 3;
  let sixthDivHeight = fourthDivHeight / 2;
  let fourthDivs=[];
  
  let texts=[
    "Life Receipt\nINTRODUCTION TO INFORMATION-CULTURE TECHNOLOGY",
    "2023-2\nTEAM F",
    "SCAN THIS QR CODE",
    "20231219"
  ];
  
  
  
  for (let i = 0; i < 2; i++) {
    xPos = (receiptWidth - divWidth) / 2 + receiptX;
    for (let j = 0; j < 3; j++) {
      let fourthDiv = createCustomDiv(xPos, yPos, sixthDivWidth, sixthDivHeight);
      
      let divInfo={div:fourthDiv};
      
      
      if(i===0&&j<4){
        let p=createP(texts[j]);
      p.parent(fourthDiv);
      p.class('font2');
      p.style('font-size','7px')
        divInfo.text=p;
      }
      else{
        let img;
        if(i===1&&j===0){
          let p=createP(texts[3]);
          p.parent(fourthDiv);
          p.class('font3');
          p.style('font-size','40px');
          divInfo.text=p;
        }
      
      else{
        let img;
        if(j===1){
          img=createImg('antelope.png');
        }
        else{
          
          img=createImg('qr.jpg');
        }
        img.parent(fourthDiv);
        img.size(50,50);
        divInfo.image=img;
      }
      }
        
        //fourthDiv.style('border','dashed');
        fourthDivs.push(divInfo);
      xPos += sixthDivWidth;
    }
    yPos += sixthDivHeight;

    await getText();
  }


async function(getText(){
  try{
    const response=await getGPTReceipt(chatlog);

    let summaryText=response.judge_summary;
    let secondDivText=document.createElement('p');
    secondDivText.textContent=summaryText;
    secondDivText.classList.add('font1');
    secondDivText.style.fontSize='11px';
    document.getElementByID('secondDiv').appendChild(secondDivText);

    let values=Object.values(response).slice(1).join(', ');
    let thirdDivText=document.createElement('p');
    thirdDivText.textContent=values;
    thirdDivText.classList.add('font1');
    thirdDivText.style.fontSize='12px';
    document.getElementById('thirdDiv').appendChild(thirdDivText);}
  catch(error){
    console.error("Error getting GPT receipt:",error);
  }
}
  

function createCustomDiv(x, y, w, h) {
  let div = createDiv('');
  div.position(x, y);
  div.style('width', w + 'px');
  div.style('height', h + 'px');
  div.style('text-align', 'center');
  div.style('font-size', '12px');
  div.style('background', 'rgba(255, 255, 255, 0.8)');
  div.style('display','flex');
  div.style('justify-content','center');
  div.style('align-items','center');
  div.style('border', '1px dotted #000');
  return div;
}

}
