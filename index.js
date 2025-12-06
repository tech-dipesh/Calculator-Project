
  document.addEventListener("keydown", (event)=>{
  if(event.key==='1') displaySelect.innerText+='1';
    if(event.key==='2') displaySelect.innerText+='2';
  if(event.key=='3') displaySelect.innerText+='3';
  if(event.key=='4') displaySelect.innerText+='4';
  if(event.key=='5') displaySelect.innerText+='5';
  if(event.key=='6') displaySelect.innerText+='6';
  if(event.key=='7') displaySelect.innerText+='7';
  if(event.key=='8') displaySelect.innerText+='8';
  if(event.key=='9') displaySelect.innerText+='9';
  if(event.key=='0') displaySelect.innerText+='0';
  if(event.key=='*') displaySelect.innerText+='*';
  if(event.key=='/') displaySelect.innerText+='/';
  if(event.key=='+') displaySelect.innerText+='+';
  if(event.key=='-') displaySelect.innerText+='-';
  if(event.key=='%')  displaySelect.innerText+='%';
  if(event.key=='Enter'){
    equalSelect.click()
  }
  if(event.key=="Backspace"){
    acClear.click()
  }
})

let acClear = document.getElementById("selectAC");
let displaySelect = document.getElementById("display");
let equalSelect = document.getElementById("equal");


let isMathDone = false;
function isMathOperation(val) {
  if (val == "%" || val == "*" || val == "-" || val == "+" || val == "/") {
    return true;
  }
  return false;
}

acClear.addEventListener("click", () => {
  displaySelect.innerText = "";
});

function mathOperation(opt) {
  const Text = displaySelect.innerText;
  const lastChar = Text[Text.length - 1];
  if (Text.length == 0) {
    return;
  }
  if (
    lastChar == opt ||
    lastChar == "/" ||
    lastChar == "*" ||
    lastChar == "%" ||
    lastChar == "-" ||
    lastChar == "+"
  ) {
    return;
  }
  displaySelect.innerText += opt;
}

// Selecting Any Number:
function selectnumberElement(val) {
  let firstElment = displaySelect.innerText;

  let i = 0;
  while (firstElment[i] == 0) {
    firstElment -= firstElment[i++];
  }
  displaySelect.style.marginLeft = "100px";
  acClear.textContent="X"
  displaySelect.innerText += val;
  if(displaySelect.scrollHeight>displaySelect.clientHeight){
      displaySelect.style.marginBottom="60px"
  }
}

let domathOperation = (left, math, right) => {
  left=parseFloat(left)
  right=parseFloat(right)
  if (math == "+") {
    return left + right;
  } else if (math == "-") {
    return left - right;
  } else if (math == "/") {
    return left / right;
  } else if (math == "*") {
    return left * right;
  } else if (math == "%") {
    return left % right;
  }
  return;
};

acClear.addEventListener("click", function () {
  document.activeElement.blur();
let raw = displaySelect.innerText.trim();
let trimNumber = parseFloat(raw);
if (isNaN(trimNumber)) displaySelect.innerText = "";
else{
  raw/=10;
  displaySelect.innerText=raw;
}
    if(displaySelect.innerText=='0'){
    displaySelect.innerText='';
  }
  let checkConvertString=displaySelect.textContent;
  if(checkConvertString.toString().length>0){
    acClear.textContent="X"
    return;
  }
  else(displaySelect)
    acClear.textContent="Ac"
    return;
    
});

equalSelect.addEventListener("click", () => {
  let left = "",
    math = "",
    right = "",
    isMath = false;
  let getDisplay = displaySelect.innerText;
  for (let i = 0; i < getDisplay.length; i++) {
    let eachValue = getDisplay[i];
    if (isMathOperation(eachValue) && !isMath) {
      math += eachValue;
      isMath = true;
    } else {
      // for the left side:
      if (!isMath) {
        left += getDisplay[i];
      }
      // For Right Side:
      else {
        right += getDisplay[i];
      }
    }
  }
  let ResultStore = domathOperation(left, math, right);
  let stringSize=ResultStore;
  // For the Single String:

  if (stringSize.toString().length ==1) {
    displaySelect.innerText = ResultStore.toFixed(1);
    return;
  }
  if (stringSize.toString().length >= 1) {
    displaySelect.innerText = ResultStore.toFixed(2);
    return;
  }
  displaySelect.innerText = ResultStore;
  return;
});



