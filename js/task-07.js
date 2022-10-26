const inputTypeRange = document.querySelector('#font-size-control');

const spanText = document.querySelector('#text');
spanText.style.fontSize = `${Number(inputTypeRange.value)}px`;

console.log(spanText.style);
