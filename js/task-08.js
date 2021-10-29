const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  if (onEmptyString(email) || onEmptyString(password)) {
    return alert("все поля должны быть заполнены");
  }
  const formData = {
    email,
    password,
  };
  formRef.reset();
  console.log(formData);
}

function onEmptyString(str) {
  return !str || 0 === str.length;
}
