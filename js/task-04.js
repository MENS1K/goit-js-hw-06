let counterValue = 0;

const value = document.querySelector("#value");
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');

decrement.addEventListener(
  "click",
  () => (value.textContent = counterValue -= 1)
);

increment.addEventListener(
  "click",
  () => (value.textContent = counterValue += 1)
);
