const inputEl = document.querySelector("#validation-input");
const numDataLength = parseInt(inputEl.dataset.length);

inputEl.addEventListener("blur", inputElementLength);

function inputElementLength(params) {
  const valueLength = params.currentTarget.value.length;
  if (valueLength === numDataLength) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else if (valueLength !== numDataLength) {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
}
