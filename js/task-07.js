// const inputTypeRange = document.querySelector('#font-size-control');

// const spanText = document.querySelector('#text');
// spanText.style.fontSize = `${Number(inputTypeRange.value)}px`;

// console.log(spanText.style);

const refs = {
    input: document.querySelector('input'),
    span: document.querySelector('span'),
}

refs.span.classList.add('text-style');

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    refs.span.style.fontSize = `${event.currentTarget.value}px`
}