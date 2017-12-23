var btnElement = document.getElementById('btn');
btnElement.onclick = function () {
    var heightValue = document.getElementById('height').value;
    var widthValue = document.getElementById('width').value;
    var bgColorValue = document.getElementById('bgColor').value;

    var myDiv = document.getElementById('myDiv');
    myDiv.style.height = heightValue+'px';
    myDiv.style.width = widthValue+'px';
    myDiv.style.backgroundColor = bgColorValue;
};