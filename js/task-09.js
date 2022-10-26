function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanEl = document.querySelector('.color');
const btnEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');

btnEl.addEventListener('click', changeColor);

function changeColor() {
const color = getRandomHexColor();
bodyEl.setAttribute('style', `background-color: ${color}`);
spanEl.textContent = color;
}