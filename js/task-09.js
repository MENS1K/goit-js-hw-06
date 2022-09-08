function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnRef = document.querySelector(".change-color");
const colorRef = document.querySelector(".color");

const btnClick = () => {
  colorRef.textContent = document.body.style.background = getRandomHexColor();
};
btnRef.addEventListener("click", btnClick);
