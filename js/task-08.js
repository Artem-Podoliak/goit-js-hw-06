const loginFormEl = document.querySelector(".login-form");

loginFormEl.addEventListener("submit", sendDate);

function sendDate(params) {
  params.preventDefault();

  const { email, password } = params.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    return alert("всі поля повинні бути заповнені");
  }

  const inputDateValue = {
    email: email.value,
    password: password.value,
  };

  console.log(inputDateValue);
  params.currentTarget.reset();
}
