var inputName = document.getElementById('input-name');
var inputMail = document.getElementById('input-mail');
var inputPhone = document.getElementById('input-phone');
var inputMessage = document.getElementById('input-message');
var submitButton = document.querySelector('.submit-button');
var regEx = /\S+@\S+\.\S+/;
var form = document.querySelector('.contact-form')

function checkInput() {
    if (inputName.value.trim() !== "" && regEx.test(inputMail.value) && inputMessage.value.trim() !== "") {
        submitButton.style.backgroundColor = 'none';
        submitButton.disabled = false;
    } else {
        submitButton.style.backgroundColor = '#23415C';
        submitButton.disabled = true;
    }
}






form.addEventListener('submit', function(event){
    event.preventDefault();
})

