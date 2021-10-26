const decrimentBtnRef = document.querySelector("[data-action='decrement']");
const inrementBtnRef = document.querySelector("[data-action='increment']");

let counterValue = 0;
const increment = () => {
  counterValue += 1;
  document.getElementById("value").textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;
  document.getElementById("value").textContent = counterValue;
};

inrementBtnRef.addEventListener("click", increment);
decrimentBtnRef.addEventListener("click", decrement);
