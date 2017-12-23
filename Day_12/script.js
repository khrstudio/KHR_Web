var btnElement = document.getElementById('btn');

btnElement.onclick = function () {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var fullName = firstName+' '+lastName;
    document.getElementById('fullName').value = fullName
}



var firstName=document.getElementById('first_name');
var lastName=document.getElementById('last_name');



firstName.onkeyup=function () {
    var x=document.getElementById("first_name").value;
    document.getElementById("first").innerHTML=x;
}

lastName.onkeyup=function () {
    var y=document.getElementById("last_name").value;
    document.getElementById("last").innerHTML=y;
}

lastName.onblur=function () {
    var x=document.getElementById("first_name").value;
    var y=document.getElementById("last_name").value;
    var z=x+" "+y;
    document.getElementById("full").innerHTML=z;
}






























