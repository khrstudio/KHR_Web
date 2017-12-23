//
//
// $('#btn').click(function () {
//     var firstName = $('#firstName').val();
//     var middleName = $('#middleName').val();
//     var lastName = $('#lastName').val();
//     var fullName = firstName+' '+middleName+' '+lastName;
//     $('#fullName').val(fullName);
// })
//
// $('#img1').click(function () {
//     var imageUrl = $('#img1').attr('src');
//     $('#mainImage').attr('src', imageUrl)
// });
//
// $('#img2').click(function () {
//     var imageUrl = $('#img2').attr('src');
//     $('#mainImage').attr('src', imageUrl)
// });
//
// $('#img3').click(function () {
//     var imageUrl = $('#img3').attr('src');
//     $('#mainImage').attr('src', imageUrl)
// });
//
// $('#img4').click(function () {
//     var imageUrl = $('#img4').attr('src');
//     $('#mainImage').attr('src', imageUrl)
// });



$('#firstName').keyup(function () {
    var firstNameValue = $('#firstName').val();
    if (firstNameValue.length>6 && firstNameValue<15){
        $('#firstNameError').text('First Name Should Be 6 to 15 Character');
    }
});


$('#myForm').submit(function () {
    return true;
});