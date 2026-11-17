const screen = document.querySelector(".screen");
const numBtns = document.querySelectorAll(".number-btn");
console.log(screen, numBtns);
screen.innerHTML = ""; //初始化

let numTemp = ""; //紀錄字串
let step = 1; //紀錄狀態
let num1 = null;
let operator = null;
numBtns.forEach((numBtn) => {
  numBtn.addEventListener("click", function (e) {
    numTemp += e.target.getAttribute("id");
    screen.innerHTML = numTemp;
    // console.log(numTemp);
  });
});

const operatorBtns = document.querySelectorAll(".operator-btn");
operatorBtns.forEach((operatorBtn) => {
  operatorBtn.addEventListener("click", function (e) {
    const id = e.target.getAttribute("id");
    console.log(numTemp, num1);

    //如果點擊的是C按鈕=>清除全部
    if (id == "C") {
      numTemp = "";
      screen.innerHTML = "";
      console.log(numTemp);
    } else if (id == "=") {
      let total = num1;
      console.log("=");
      //先判斷前一個運算子是什麼，計算完後再顯示結果於screen上
      if (operator == "+") {
        total += Number(numTemp);
      } else if (operator == "-") {
        total -= Number(numTemp);
      } else if (operator == "*") {
        total *= Number(numTemp);
      } else if (operator == "/") {
        total /= Number(numTemp);
      } else if (operator == "%") {
        total %= Number(numTemp);
      }
      screen.innerHTML = total;
    } else {
      screen.innerHTML = id; //顯示運算子
      step++; //改變狀態
      num1 = Number(numTemp); //儲存資料
      numTemp = ""; //清空暫存
      operator = id; //儲存運算子
    }
    //如果點擊的是其他按鈕=>運算
  });
});
