var redBtn = document.getElementById('redBtn');

redBtn.onclick = function () {
    var divElement = document.getElementById('div');
    divElement.className = 'class-four';
    divElement.style.transition = '1s'
}

var greenBtn = document.getElementById('greenBtn');

greenBtn.onclick = function () {
    var divElement = document.getElementById('div');
    divElement.className = 'class-two';
}

var blueBtn = document.getElementById('blueBtn');

blueBtn.onclick = function () {
    var divElement = document.getElementById('div');
    divElement.className = 'class-three';
}

var defaultBtn = document.getElementById('defaultBtn');

defaultBtn.onclick = function () {
    var divElement = document.getElementById('div');
    divElement.className = 'class-one';
}

// var redBtn = document.getElementById('redBtn');
//
// redBtn.onclick = function () {
//     var divElement = document.getElementById('div');
//     divElement.style.backgroundColor = 'red';
//     divElement.style.height = '50px';
// }
//
// var greenBtn = document.getElementById('greenBtn');
//
// greenBtn.onclick = function () {
//     var divElement = document.getElementById('div');
//     divElement.style.backgroundColor = 'green';
//     divElement.style.height = '100px';
// }
//
// var blueBtn = document.getElementById('blueBtn');
//
// blueBtn.onclick = function () {
//     var divElement = document.getElementById('div');
//     divElement.style.backgroundColor = 'blue';
//     divElement.style.height = '150px';
// }
//
// var defaultBtn = document.getElementById('defaultBtn');
//
// defaultBtn.onclick = function () {
//     var divElement = document.getElementById('div');
//     divElement.style.backgroundColor = 'lightyellow';
//     divElement.style.height = '200px';
// }
//
