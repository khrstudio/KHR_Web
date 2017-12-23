var btnElement = document.getElementById('btn');
btnElement.onclick = function () {
    var headingElement = document.createElement('h1');
    var paragraphElement = document.createElement('p');

    headingElement.innerHTML = "This is a Heading";
    paragraphElement.innerHTML = "This is a paragraph";

    document.getElementById('divOne').appendChild(headingElement);
    document.getElementById('divOne').appendChild(paragraphElement);
};



