const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listRef = document.querySelector("#ingredients");
const listIngredientsRef = ingredients.map((ingredient) => {
  const heading = document.createElement("li");
  heading.classList = "item";
  heading.textContent = ingredient;
  return heading;
});

// console.log(heading);
listRef.append(...listIngredientsRef);
