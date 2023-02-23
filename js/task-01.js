const listItemEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${listItemEl.length}`);

listItemEl.forEach((element) => {
  const nameEl = element.firstElementChild.textContent;
  const itemLengthEl = element.lastElementChild.childElementCount;
  console.log(`Category: ${nameEl}`);
  console.log(`Elements: ${itemLengthEl}`);
});
