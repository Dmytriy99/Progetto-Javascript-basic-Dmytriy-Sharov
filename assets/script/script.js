const btnBox = document.querySelector(".btn-Box");
const contBox = document.querySelector(".container");
const resetBox = document.querySelector(".reset-box");
//funzione per manipolare il DOM
function creationHandler(tag, style, content) {
  button = document.createElement(tag);
  button.className = style;
  button.innerHTML = content;
  return button;
}
// lo style è vuoto perchè utilizzo già nel css sono il tag "button"
const increseBtn = creationHandler("button", "", "+");
const decreseBtn = creationHandler("button", "", "-");
// nel reset ho preferito dargli uno style per gestirlo separatamente, poichè ho riscontrato dei problemi col css per il bottone reset
const resetBtn = creationHandler("button", "btn-reset", "RESET");
const textP = creationHandler("p", "", "0");
resetBox.append(resetBtn);

btnBox.append(decreseBtn, textP, increseBtn);

// funzione di calcolo
let counter = 0;
function target(e) {
  if (e.target === increseBtn) {
    counter++;
  } else if (e.target === decreseBtn) {
    counter--;
  } else {
    counter = 0;
  }
  textP.innerHTML = counter;
}

contBox.addEventListener("click", target);
