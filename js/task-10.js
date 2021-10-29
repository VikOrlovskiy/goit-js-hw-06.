const blockControls = document.querySelector("#controls");
const inputField = blockControls.querySelector("input");
const btnCreate = blockControls.querySelector("[data-create]");
const btnDestroy = blockControls.querySelector("[data-destroy]");

const motherBlock = document.querySelector("#boxes");
motherBlock.style.display = `flex`;
motherBlock.style.flexWrap = `wrap`;
// ---------------------------------------------
let BoxesCollection = [];
let sizesOfBox = 30;
// ---------------------------------------------
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// ---------------------------------------------
function createBoxes(amount) {
  console.log(amount);
  for (var i = 0; i < amount; i += 1) {
    let createEl = document.createElement("div");
    createEl.style.width = `${sizesOfBox}px`;
    createEl.style.height = `${sizesOfBox}px`;
    sizesOfBox += 10;
    createEl.style.backgroundColor = getRandomHexColor();
    BoxesCollection.push(createEl);
  }
}
// ---------------------------------------------
function pushBoxesCollection() {
  createBoxes(Number(inputField.value));
  motherBlock.append(...BoxesCollection);
}
// ---------------------------------------------
btnCreate.addEventListener("click", () => {
  pushBoxesCollection();
  inputField.value = 0;
});
btnDestroy.addEventListener("click", () => {
  window.location.reload();
});
