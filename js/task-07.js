const sliderRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

sliderRef.addEventListener("input", (event) => {
  textRef.style.fontSize = `${event.target.value}px`;
});
