var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cecilia.jpg') {
        myImage.setAttribute('src', 'images/cecilia2.jpg');
    } else {
        myImage.setAttribute('src', 'images/cecilia.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Something About Cecilia, ' + myName;
}

if(!localStorage.getItem('Name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Something About Cecilia, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}