
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
        $( "input#login" ).effect( "bounce", "slow" );
        name.style.background = 'repeating-linear-gradient(45deg, #3E0E0E, #3E0E0E 10px, #881B1B 10px, #881B1B 22px)';
        $( "#for_login" ).dialog();
        valid = false;
        return;


    }
    if ( email.value.search(regExpEmail) == - 1 ) {
        $( "input#email" ).effect( "bounce", "slow" );
        email.style.background = 'repeating-linear-gradient(45deg, #3E0E0E, #3E0E0E 10px, #881B1B 10px, #881B1B 22px)';
        $( "#for_email" ).dialog();
        valid = false;
        return;

    }
    if ( phone.value.search(regExpPhone) == - 1 ) {
        $( "input#phone" ).effect( "bounce", "slow" );
        phone.style.background = 'repeating-linear-gradient(45deg, #3E0E0E, #3E0E0E 10px, #881B1B 10px, #881B1B 22px)';
        $( "#for_phone" ).dialog();
        valid = false;
        return;
    }
        return valid;
}


window.onload = function () {
    let buttonSendForm = document.querySelector('#send');
    buttonSendForm.addEventListener("click", validateForm)
};



