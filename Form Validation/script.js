
                                        //Sign Up

//Check First Name
function checkFirstName() {
    var firstNameValue = $('#firstName').val();
    if(firstNameValue.length > 4 && firstNameValue.length <16 ){
        $('#firstNameError').text(' ');
        return true;
    }else {
        $('#firstNameError').text('First Name should be 5 to 15 character');
        return false;
    }
}

$('#firstName').keyup(function () {
    checkFirstName();
});


//Check Last Name
function checkLastName() {
    var lastNameValue = $('#lastName').val();
    if(lastNameValue.length > 4 && lastNameValue.length <16){
        $('#lastNameError').text(' ');
        return true;
    }else {
        $('#lastNameError').text('Last Name should be 5 to 15 character');
        return false;
    }
}

$('#lastName').keyup(function () {
    checkLastName();
});


//Email Address
function checkEmailAddress() {
    var emailAddressValue = $('#emailAddress').val();
    var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,3}$/i);
    if(pattern.test(emailAddressValue)){
        $('#emailAddressError').text(' ');
        return true;
    }else {
        $('#emailAddressError').text('Your email address is invalid');
    }
}

$('#emailAddress').keyup(function () {
    checkEmailAddress();
});


//Password
function checkPassword() {
    var passwordValue = $('#password').val();
    if(passwordValue.length >= 6){
        $('#passwordError').text(' ');
        return true;
    }else {
        $('#passwordError').text('Password must be minimum 6 character');
        return false;
    }
}

$('#password').keyup(function () {
    checkPassword();
});


//Show Password
$('#checkBoxPassword').click(function () {
    if(this.checked){
        $('#password').attr('type','text');
    }else {
        $('#password').attr('type','password');
    }
});

//Confirm Password
function checkConfirmPassword() {
    var passwordValue = $('#password').val();
    var confirmPasswordValue = $('#confirmPassword').val();
    if(passwordValue == confirmPasswordValue){
        $('#confirmPasswordError').text(' ');
        return true;
    }else {
        $('#confirmPasswordError').text('Password and Confirm Password are not match');
        return false;
    }
}

$('#confirmPassword').keyup(function () {
    checkConfirmPassword();
});

//Phone Number
function checkPhoneNumber() {
    var phoneNumberValue = $('#phoneNumber').val();
    if(phoneNumberValue.length == 11){
        $('#phoneNumberError').text(' ');
        return true;
    }else {
        $('#phoneNumberError').text('Phone number must be 11 Digit');
        return false;
    }
}

$('#phoneNumber').keyup(function () {
    checkPhoneNumber();
});


//Date of Birth
function checkDateOfBirth() {
    var dateOfBirthValue = $('#dateOfBirth').val();
    //we use mm-dd-year format
    var pattern = new RegExp(/^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/);
    //dd-mm-year ^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$
    //mm-dd-year ^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$

    if (pattern.test(dateOfBirthValue)){
        $('#dateOfBirthError').text(' ');
        return true;
    }else {
        $('#dateOfBirthError').text('Please Select Your Birthday');
        return false;
    }
}

$('#dateOfBirth').keyup(function () {
    checkDateOfBirth();
});


//Gender
function checkGender() {
    var genderValue = $('input[name="gender"]:checked').val();
    if (genderValue == 'Male'){
        $('#genderError').text(' ');
        return true;
    }else if (genderValue == 'Female'){
        $('#genderError').text(' ');
        return true;
    }
    else {
        $('#genderError').text('Please select your Gender');
        return false;
    }
}


//Location
function checkLocation() {
    var countryName = $('#selectCountry').val();
    if (countryName == ' '){
        $('#selectCountryError').text('Please select your Country');
        return false;
    }else {
        $('#selectCountryError').text(' ');
        return true;
    }

}

$('#selectCountry').change(function () {
    checkLocation();
})


//Submit
$('#signUp').submit(function () {
    if (checkFirstName() == true && checkLastName() == true && checkEmailAddress() == true &&
        checkPassword() == true && checkConfirmPassword() == true && checkPhoneNumber() == true &&
        checkDateOfBirth() == true && checkGender() == true && checkLocation() == true){
        return true;
    }else {
        return false;
    }
});


                                    //Sign In


