const refs = {
  inputRef: document.querySelector("#validation-input"),
};
refs.inputRef.addEventListener("blur", (event) => {
  const inputText = event.currentTarget.value;
  if (inputText.length === 6) {
    console.log("ok");
    return refs.inputRef.classList.add("valid");
  }
  return refs.inputRef.classList.add("invalid");
});
console.log(refs.inputRef);
console.log(refs.inputRef);
