const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onChangeFocus);

function onChangeFocus(evt) {
    console.log(evt)

    if (evt.currentTarget.value.length == inputEl.getAttribute('data-length')) {
        inputEl.classList.add('valid')
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
}