const refs = {
  inputRef: document.querySelector("#name-input"),
  titleSpanRef: document.querySelector("#name-output"),
};
refs.inputRef.addEventListener("input", (event) => {
  refs.titleSpanRef.textContent = event.currentTarget.value;
});
