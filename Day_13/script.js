var addBtn = document.getElementById('addBtn');

addBtn.onclick = function () {
    var firstNumber = Number(document.getElementById('firstNumber').value);
    var secondNumber = Number(document.getElementById('secondNumber').value);
    var result = firstNumber+secondNumber;

    document.getElementById('result').value = result;
}

var subBtn = document.getElementById('subBtn');

subBtn.onclick = function () {
    var firstNumber = document.getElementById('firstNumber').value;
    var secondNumber = document.getElementById('secondNumber').value;
    var result = firstNumber-secondNumber;

    document.getElementById('result').value = result;
}

var mulBtn = document.getElementById('mulBtn');

mulBtn.onclick = function () {
    var firstNumber = document.getElementById('firstNumber').value;
    var secondNumber = document.getElementById('secondNumber').value;
    var result = firstNumber*secondNumber;

    document.getElementById('result').value = result;
}

var divBtn = document.getElementById('divBtn');

divBtn.onclick = function () {
    var firstNumber = document.getElementById('firstNumber').value;
    var secondNumber = document.getElementById('secondNumber').value;
    var result = firstNumber/secondNumber;

    document.getElementById('result').value = result;
}

var remBtn = document.getElementById('remBtn');

remBtn.onclick = function () {
    var firstNumber = document.getElementById('firstNumber').value;
    var secondNumber = document.getElementById('secondNumber').value;
    var result = firstNumber%secondNumber;

    document.getElementById('result').value = result;
}

