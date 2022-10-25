const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const onInput = ({ currentTarget }) => {
    nameOutput.textContent = currentTarget.value;

    if (nameOutput.textContent === "") {
        nameOutput.textContent = "Anonymous";
    }
};

nameInput.addEventListener("input", onInput);