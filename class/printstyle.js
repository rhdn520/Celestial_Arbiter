const printstyle = `
@font-face {
  font-family: "typewr_b";
  src: url("assets/TYPEWR_B.TTF");
}

@font-face {
  font-family: "barcord";
  src: url("assets/BarcodeFont.ttf");
}

@font-face {
  font-family: "orbit";
  src: url("assets/Orbit-Regular.ttf");
}
body{
  box-sizing: border-box;
  display:flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items:center;
}
div{
  box-sizing:border-box;
}

.receipt-container {
position: relative;
display: flex;
flex-flow: column nowrap;
justify-content: flex-start;
margin: 0;
padding: 10px 5px;
width: 100%;
height: fit-content;
background-color: #fff;
text-align: center;
overflow-y: auto;
}

.receipt-title{
height : fit-content;
padding: 20px 0px;
background-color: rgba(255,255,255,0.8);
text-align:center;
font-family: "typewr_b";
font-size : 30px;
display: flex;
justify-content: center;
align-items : center;
border-bottom : 1px dashed #000;
}

.judge-summary {
position: relative;
display: flex;
margin: 0;
padding: 30px 5px;
text-align: center;
flex-flow: column nowrap;
justify-content: center;
height: min-content;
align-items: center;
/* background-color: rgba(255,255,255,0.8); */
text-align: justify;
font-family: "orbit";
font-size: 13px;
line-height: 90%;
/* border-left: 1px dotted black;*/
border-bottom: 1px dashed black;
line-height: 1.3;
}

.receipt-value-header{
width: 100%;
padding: 5px 5px 10px;
font-family: "orbit";
font-size: 14px;
display:flex;
flex-flow: row nowrap;
justify-content: space-between;
align-items: center; 

border-bottom: 1px dashed black;
}


.receipt-keywords {
width: 100%;
height: fit-content;
padding: 10px 5px;
text-align: left;
font-family: "orbit";
font-size: 13px;
display: flex;
flex-flow: column nowrap;
justify-content: flex-start;
align-items: space-between;
border-bottom: 1px dashed black;
}
.receipt-keyword-element{
width:100%;
display:flex;
flex-flow: row nowrap;
justify-content: space-between;
align-items: center;
}

.total-amount {
width: 100%;
height: fit-content;
padding: 5px;
text-align: right;
font-family: "orbit";
font-size: 16px;
display: flex;
flex-flow: row nowrap;
justify-content: flex-start;
align-items: center;
/* border-bottom: 1px dotted black; */
}

.receipt-date {
width: 100%;
height: fit-content;
padding: 10px 5px;
text-align: right;
font-family: "orbit";
font-size: 14px;
display: flex;
flex-flow: column nowrap;
justify-content: flex-start;
align-items: center;
border-bottom: 1px dashed black;
}

.receipt-bottom {
width: 100%;
display: grid;
padding: 20px 5px;
background-color: inherit;
gap: 5px;
/* grid-template-columns: 1.5fr 1fr 1fr;
grid-template-rows: 1fr 3fr; */
grid-template-columns: 1fr 2fr; /* 두 개의 column 설정 */
grid-template-rows: auto; /* 자동으로 row 크기 조정 */
}

.receipt-bottom-element {
/* display: flex;
flex-flow: row nowrap;
align-items: flex-start;
justify-content: center; */
border: none;
padding: 0;
margin-top: auto;
margin-bottom: 5px;
/* text-align: center; */
font-family: "orbit";
font-size: 12px;
background-repeat: no-repeat;
background-position: center center;
background-size: contain;
}

/*.profile-bottom-element{
display: flex;
flex-flow: row nowrap;
align-items: flex-start;
justify-content: flex-end;
border: none;
padding: 0;
margin: 0;
/* text-align: center; */
/* font-family: "typewr_b";
font-size: 10px;
background-repeat: no-repeat;
background-position: center center;
background-size: contain;
} */

.profile-bottom-element {
display: flex;
flex-flow: column nowrap; /* 세로로 배열 */
align-items: flex-start; /* 오른쪽 정렬 */
border: none;
padding: 0;
margin: 0;
/* text-align: center; */
font-family: "orbit";
font-size: 10px;
background-repeat: no-repeat;
background-position: center center;
background-size: contain;
}

.profile-bottom-element div {
text-align: right; /* 텍스트를 오른쪽 정렬로 표시 */
margin-bottom: 0px; /* 원하는 여백 값으로 조정 */
}

.receipt-icon {
width: 80%;
margin-top: 10px;
}

.receipt-right-bottom {
display: flex;
flex-flow: column nowrap; /* 세로로 배열 */
align-items: flex-end; /* 오른쪽 정렬 */
font-family: "orbit";
font-size: 10px;
text-align: right;
}

.values {
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;
height: fit-content;
}`;