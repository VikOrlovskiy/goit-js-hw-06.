const decrimentBtn = document.querySelector("[data-action='decrement']");
const inrementBtn = document.querySelector("[data-action='increment']");
let counterValue = 0;
const increment = () => {
  counterValue += 1;
  document.getElementById("value").textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;
  document.getElementById("value").textContent = counterValue;
};
inrementBtn.addEventListener("click", increment);
decrimentBtn.addEventListener("click", decrement);
