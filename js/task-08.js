const formRef = document.querySelector(".login-form");

const formSubmit = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Заповніть всі поля!");
  }
  const userData = {
    email: email.value,
    password: password.value,
  };
  console.log(userData);
  event.currentTarget.reset();
};
formRef.addEventListener("submit", formSubmit);
