const refs = {
  inputRef: document.querySelector("#name-input"),
  titleSpanRef: document.querySelector("#name-output"),
};

refs.inputRef.addEventListener("input", (event) => {
  if (onEmptyString(event.currentTarget.value)) {
    return (refs.titleSpanRef.textContent = "Anonymous");
  }
  refs.titleSpanRef.textContent = event.currentTarget.value;
});

function onEmptyString(str) {
  return !str || 0 === str.length;
}
