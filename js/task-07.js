const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
textEl.style.fontSize = inputEl.value + "px";

inputEl.addEventListener("input", sizeValue);

function sizeValue(params) {
  const curentValue = params.currentTarget.value;
  textEl.style.fontSize = curentValue + "px";
}
