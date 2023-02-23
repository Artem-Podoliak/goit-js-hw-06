const loginFormEl = document.querySelector(".login-form");

loginFormEl.addEventListener("submit", sendDate);

function sendDate(params) {
  params.preventDefault();

  const { email, password } = params.currentTarget.elements;
  const inputDateValue = {
    email: email.value,
    password: password.value,
  };

  if (email.vallue === "" || password.value === "") {
    alert("всі поля повинні бути заповнені");
  }
  console.log(inputDateValue);
  params.currentTarget.reset();
}
