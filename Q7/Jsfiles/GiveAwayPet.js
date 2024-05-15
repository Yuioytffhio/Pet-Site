function validateForm(event) {
    event.preventDefault();

    const form = document.getElementById("giveAwayForm");
    const inputs = form.querySelectorAll(`input[type=text], input[type=radio], input[type=checkbox], select`);

    let isValid = true;
    let isValidEmail = true;
    let isValidInput = true;
    let isBreedSelected = false;
    let isFriendlinessSelected = false;

    inputs.forEach(input => {
        if (input.type === 'checkbox' && input.checked) {
            const inputName = input.getAttribute('name');
            const checkedCheckboxes = form.querySelectorAll(`input[name=${inputName}]:checked`);

            if (checkedCheckboxes.length == 0) {
                isValid = false;
            } else {
                isFriendlinessSelected = true;
            }
        }

        if (input.id === 'catbreedtext' && form.querySelector('#catbreed').checked) {
            if (!input.value.trim().match(/^[a-zA-Z\s']+$/)) {
                isValidInput = false;
            } else if (input.value.trim() === "") {
                isValid = false;
            } else {
                isBreedSelected = true;
            }
        }

        if (input.id === 'dogbreedtext' && form.querySelector('#dogbreed').checked) {
            if (!input.value.trim().match(/^[a-zA-Z\s']+$/)) {
                isValidInput = false;
            } else if (input.value.trim() === "") {
                isValid = false;
            } else {
                isBreedSelected = true;
            }
        }

        if (input.id === 'aboutPet' && input.value.trim() === "") {
            isValid = false;
        }

        if ((input.id === 'first_name' || input.id === 'family_name') && !input.value.trim().match(/^[a-zA-Z\s']+$/) ) {
            isValidInput = false;
        }

        if (input.id === 'email' && !input.value.trim().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            isValidEmail = false;
        }
    });

    if (!isBreedSelected && !form.querySelector('input[name=breed]:checked')) {
        isValid = false;
    }

    if (!isValid) {
        alert("Please fill out all the required fields.");
    } else if (!isFriendlinessSelected) {
        alert("Please select at least one option for friendliness.");
    } else if (!isValidInput) {
        alert("Please enter a valid name.");
    } else if (!isValidEmail) {
        alert("Please enter a valid email.");
    } else {
        form.submit();
    }
}

document.getElementById("giveAwayForm").addEventListener('submit', validateForm);