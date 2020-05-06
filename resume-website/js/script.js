var inputName = document.getElementById('input-name');
var inputMail = document.getElementById('input-mail');
var inputPhone = document.getElementById('input-phone');
var inputMessage = document.getElementById('input-message');
var submitButton = document.querySelector('.submit-button');
var submitForm = document.getElementById('submit-form');

var regEx = /\S+@\S+\.\S+/;
var form = document.querySelector('.contact-form')

function checkInput() {
    if (inputName.value.trim() !== "" && regEx.test(inputMail.value) && inputMessage.value.trim() !== "") {
        submitForm.style.backgroundColor = '#23415C';
        submitForm.disabled = false;
    } else {
       submitForm.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
       submitForm.disabled = true;
   }
}



form.addEventListener('submit', function(event){
    event.preventDefault();
})




    $(document).ready (function() {
        $('#submit-form').click(function (){
            $('#submit-result').show('fade');
            
            setTimeout(function () {
                $('#submit-result').hide('fade');
        }, 3000);
        });

        $('#linkClose').click(function () {
            $('#submit-result').hide('fade');

    });
 });




