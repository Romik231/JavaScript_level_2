
let regExpName = /^[a-z]+$/;
let regExpEmail = /([A-z0-9_-]+\.)*[A-z0-9_-]+(@)[A-z0-9_-]+(\.[A-z0-9_-]+)*\.[A-z]{2,}/;
let regExpPhone = /\+(7)(\([0-9]{3})\)([0-9]{3})(\-)?([0-9]{4})/;


function validateForm() {
    let form = document.forms.registration;
    let name = form.elements.user_login;
    let email = form.elements.user_email;
    let phone = form.elements.user_phone;
    let valid = true;

    if ( name.value.search(regExpName) == -1 ) {
        name.style.background = 'repeating-linear-gradient(45deg, #3E0E0E, #3E0E0E 10px, #881B1B 10px, #881B1B 22px)';
        valid = false;
        alert("Введите правильное имя");

    }
    if ( email.value.search(regExpEmail) == - 1 ) {
        email.style.background = 'repeating-linear-gradient(45deg, #3E0E0E, #3E0E0E 10px, #881B1B 10px, #881B1B 22px)';
        valid = false;
        alert("Введите правильный email");
    }
    if ( phone.value.search(regExpPhone) == - 1 ) {
        phone.style.background = 'repeating-linear-gradient(45deg, #3E0E0E, #3E0E0E 10px, #881B1B 10px, #881B1B 22px)';
        alert("Введите правильный телефон");
        valid = false;
    }
        return valid;
}


window.onload = function () {
    let buttonSendForm = document.querySelector('#send');
    buttonSendForm.addEventListener("click", validateForm)
};
