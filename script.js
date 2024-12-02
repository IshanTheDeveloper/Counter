const inputarea = document.querySelector("#inputbtn");
const reset = document.querySelector("#reset-button");
const increment = document.querySelector("#addition");
const decrement = document.querySelector("#subtraction");
const resultArea = document.querySelector("#result");
const incrementOperation = () => {
  resultArea.innerText = Number(resultArea.innerText) + Number(inputarea.value);
};
const decrementOperation = () => {
  resultArea.innerText = Number(resultArea.innerText) - Number(inputarea.value);
};
const internalOperation = () => {
  resultArea.innerText = "0";
  inputarea.value = 1;
};

increment.addEventListener("click", incrementOperation);
decrement.addEventListener("click", decrementOperation);
reset.addEventListener("click", internalOperation);
