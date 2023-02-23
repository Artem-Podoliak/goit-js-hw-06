const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");


const ingredientsElement = ingredients.map((element) => {
  const addLiEL = document.createElement("li");
  addLiEL.textContent = element;
  addLiEL.classList.add("item");

  return addLiEL;
});

ingredientsEl.append(...ingredientsElement);
