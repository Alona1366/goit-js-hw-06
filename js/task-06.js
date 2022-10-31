const inputEl = document.querySelector('#validation-input');

// function onChangeFocus(evt) {
//     console.log(evt)

//     if (evt.currentTarget.value.length == inputEl.getAttribute('data-length')) {
//         inputEl.classList.add('valid')
//     } else {
//         inputEl.classList.remove('valid');
//         inputEl.classList.add('invalid');
//     }
// }

const onChangeFocus = (event) => {
    if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');        
    }
}

inputEl.addEventListener('blur', onChangeFocus);