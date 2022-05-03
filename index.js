const form = document.querySelector('form');
const input = document.querySelector('input');
const button = document.querySelector('button')
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const errorMessage = document.querySelector('.error-message')


button.addEventListener('click', error);

function error(e) {

    e.preventDefault()
    if (!input.value.match(mailformat)) {

        errorMessage.textContent = "please provide a valid email address";
        console.log(errorMessage.textContent);
        input.placeholder = "example@gmail.com";

    }
    if (input.value == "") {

        errorMessage.textContent = "email address can not be empty";
        input.placeholder = "Please Enter you email"

    }

}