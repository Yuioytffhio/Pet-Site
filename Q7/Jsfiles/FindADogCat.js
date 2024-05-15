function validateForm(event) {
    event.preventDefault();

    const form = document.getElementById("petForm");
    const inputs = form.querySelectorAll(`input[type=text], input[type=radio], input[type=checkbox]`);

    let isValid = true;

    inputs.forEach(input => {
        if (input.type !== 'radio' && input.type !== 'checkbox') {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('invalid');
            } else {
                input.classList.remove('invalid');
            }
        } else if (input.type === 'radio') {
            const inputName = input.getAttribute('name');
            const radioGroup = form.querySelectorAll(`input[name=${inputName}]`);
            const checkedRadio = Array.from(radioGroup).find(radio => radio.checked);

            if (!checkedRadio) {
                isValid = false;
                input.classList.add('invalid');
            } else {
                input.classList.remove('invalid');
            }
        } else if (input.type === 'checkbox' && input.checked) {
            const inputName = input.getAttribute('name');
            const checkedCheckboxes = form.querySelectorAll(`input[name=${inputName}]:checked`);

            if (checkedCheckboxes.length === 0) {
                isValid = false;
                input.classList.add('invalid');
            } else {
                input.classList.remove('invalid');
            }
        }
    });

    const catRadio = form.querySelector('#cat');
    const dogRadio = form.querySelector('#dog');
    const catBreedSelector = form.querySelector('#catbreed');
    const dogBreedSelector = form.querySelector('#dogbreed');

    if (catRadio.checked) {
        if (catBreedSelector.value === "") {
            isValid = false;
            console.log("checking cat radio");
            catBreedSelector.classList.add('invalid');
        } else {
            catBreedSelector.classList.remove('invalid');
        }
        dogBreedSelector.classList.remove('invalid');
    } else if (dogRadio.checked) {
        if (dogBreedSelector.value === "") {
            isValid = false;
            dogBreedSelector.classList.add('invalid');
        } else {
            dogBreedSelector.classList.remove('invalid');
        }
        catBreedSelector.classList.remove('invalid');
    } else {
        catBreedSelector.classList.remove('invalid');
        dogBreedSelector.classList.remove('invalid');
    }

    if (!isValid) {
        alert("Please fill out all required fields.");
    } else {
        form.submit();
    }
}

document.getElementById("petForm").addEventListener('submit', validateForm);