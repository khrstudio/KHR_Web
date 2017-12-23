function checkFirstName () {
    var firstNameValue = $('#firstName').val();
    if (firstNameValue.length > 5 && firstNameValue.length <10){
        $('#firstNameError').text(' ');
        return true;
    } else {
        $('#firstNameError').text('[ First Name Should Be 5 to 10 Character ]');
        return false;
    }
};


$('#firstName').keyup(function () {
    checkFirstName()
});

// function checkMiddleName () {
//     var middleNameValue = $('#middleName').val();
//     if (middleNameValue.length > 5 && middleNameValue.length <10){
//         $('#middleNameError').text(' ');
//     } else {
//         $('#middleNameError').text('Middle Name Should Be 5 to 10 Character')
//     }
// }
//
// $('#middleName').keyup(function () {
//     checkMiddleName()
// });

function checkLastName () {
    var lastNameValue = $('#lastName').val();
    if (lastNameValue.length > 5 && lastNameValue.length <10){
        $('#lastNameError').text(' ');
        return true;
    } else {
        $('#lastNameError').text('[ Last Name Should Be 5 to 10 Character ]');
        return false;
    }
};

$('#lastName').keyup(function () {
    checkLastName()
});


function checkEmailAddress() {
    var emailAddressValue = $('#emailAddress').val();
    var pattern = new RegExp(/^[+a-zA-Z0-9,_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,6}$/i);
    if (pattern.test(emailAddressValue)) {
        $('#emailAddressError').text(' ');
    } else {
        $('#emailAddressError').text('[ Your Email Address is invalid ]');
    }
};

$('#emailAddress').keyup(function () {
    checkEmailAddress()
});

function checkPassword() {
    var passwordValue = $('#password').val();
    if(passwordValue.length > 6){
        $('#passwordError').text(' ');
        return true;
    }
    else{
        $('#passwordError').text('[ password must be 6 digit ]');
        return false;
    }
};

$('#password').keyup(function () {
    checkPassword()
});


$('#checkBox').click(function () {
    if(this.checked){
        $('#password').attr('type','text');
    }
    else{
        $('#password').attr('type','password');
    }
});

function checkConfirmPassword() {
    var passwordValue = $('#password').val();
    var ConfirmPasswordValue = $('#confirmPassword').val();
    if(passwordValue == ConfirmPasswordValue){
        $('#confirmPasswordError').text(' ');
        return true;
    }
    else{
        $('#confirmPasswordError').text('[ password & confirm password are not same ]');
        return false;
    }
};

$('#confirmPassword').blur(function () {
    checkConfirmPassword()
});


function checkGender() {
    var genderValue = $('input[type="radio"]:checked').val();
    if(genderValue=="male"){
        $('#genderError').text(' ');
        return true;
    }
    else if(genderValue=="female"){
        $('#genderError').text(' ');
        return true;
    } else {
        $('#genderError').text('[ Please select gender info ]');
        return false;
    }
};

function checkDistrictName() {
    var districtNameValue = $('#districtName').val();
    if(districtNameValue == ' '){
        $('#districtNameError').text('[ please select a district Name ]');
        return true;
    }
    else{
        $('#districtNameError').text(' ');
        return false;
    }
};

$('#districtName').change(function () {
    checkDistrictName();
});


$('#myForm').submit(function () {
    if(checkFirstName()==true && checkLastName()==true && checkEmailAddress()==true && checkPassword() ==true && checkConfirmPassword()==true && checkGender()==true && checkDistrictName()==true)
    {
        return true;
    }
    else {
        return false;
    }
});

