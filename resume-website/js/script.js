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
        submitButton.style.backgroundColor = 'none';
        submitButton = false;
    } else {
        submitButton.style.backgroundColor = '#23415C';
        submitButton = true;
    }
}



form.addEventListener('submit', function(event){
    event.preventDefault();
})


//$(document).ready(function(){
//    $('#submit-form').bind('click', function (event){
//        if (event.type == "click")
//        $('#submit-result').html('Button Clicked');
//    } else {
//            $(this).removeClass('alert alert-success');
//                           })
//})


    $(document).ready (function() {
        $('#submit-form').click(function (){
            $('#submit-result').show('fade');
            
            setTimeout(function () {
                $('#submit-result').hide('fade');
        }, 2000);
        });

        $('#linkClose').click(function () {
            $('#submit-result').hide('fade');

    });
 });








//
//
//$(document).ready(function() {
//  $("form").submit(function(event){
//    event.preventDefault();
//    inputName = $("#input-name").val();
//    inputMail = $("#input-mail").val();
//    inputPhone  = $("#input-phone").val();
//    inputMessage = $("#input-message").val();
//    submitButton = $("#input-message").val();
//      $(".contact-form")
//    
//});
//                  });
