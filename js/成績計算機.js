const screen = document.querySelector(".screen");
const numBtns = document.querySelectorAll(".number-btn");
console.log(screen, numBtns);
screen.innerHTML = ""; //初始化

let numStr = ""; //紀錄字串
let numPrev = null;
let numCurr = null;
let operatorPrev = null;
numBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    numStr += e.target.getAttribute("id");
    screen.innerHTML = numStr;
    numCurr = Number(numStr);
    console.log(numCurr, numPrev, operatorPrev);
  });
});

const operatorBtns = document.querySelectorAll(".operator-btn");
operatorBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const operator = e.target.getAttribute("id");

    //如果點擊的是C按鈕=>清除全部
    if (operator == "C") {
      numStr = "";
      numPrev = null;
      numCurr = null;
      operatorPrev = null;
      screen.innerHTML = numStr;
    }
    //如果點擊的是=按鈕=>計算總額
    else if (operator == "=") {
      //先判斷前一個運算子是什麼，計算完後再顯示結果於screen上
      caculate();
      numCurr = numPrev;
      numPrev = null;
      operatorPrev = null;
      numStr = String(numCurr);
      screen.innerHTML = numStr;
    }
    //如果點擊的是其他按鈕=>運算
    else {
      if (!numStr) return; //防呆，以免有人直接點運算子

      screen.innerHTML = operator; //顯示運算子於螢幕
      if (!operatorPrev) {
        numPrev = numCurr;
        numStr = "";
        numCurr = null;
      } else {
        caculate();
      }
      numStr = ""; //清空暫存
      numCurr = null; //清空暫存
      operatorPrev = operator; //儲存運算子
    }
  });
});

function caculate() {
  if (operatorPrev == "+") {
    numPrev += Number(numStr);
  } else if (operatorPrev == "-") {
    numPrev -= Number(numStr);
  } else if (operatorPrev == "*") {
    numPrev *= Number(numStr);
  } else if (operatorPrev == "/") {
    numPrev /= Number(numStr);
  } else if (operatorPrev == "%") {
    numPrev %= Number(numStr);
  }
}
