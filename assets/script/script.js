const btnBox = document.querySelector(".btn-Box");

const resetBox = document.querySelector(".reset-box");
const resetBtn = document.createElement("button");

const increseBtn = document.createElement("button");
let valueP = document.createElement("p");
const decreseBtn = document.createElement("button");

resetBox.append(resetBtn);
resetBtn.innerHTML = "RESET";

btnBox.append(decreseBtn, valueP, increseBtn);
increseBtn.innerHTML = "+";
decreseBtn.innerHTML = "-";
valueP.innerHTML = 0;

let score = Number(valueP.textContent);

const less = decreseBtn.addEventListener("click", function () {
  score.textContent = 0;
  const calc = (score = score - 1);
  valueP.textContent = calc;
});

const plus = increseBtn.addEventListener("click", function () {
  score.textContent = 0;
  const calc = (score = score + 1);
  valueP.textContent = calc;
});

const reset = function () {
  score = 0;
  valueP.textContent = 0;
};
resetBtn.addEventListener("click", reset);
