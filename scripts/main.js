let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/fox-pattern.jpg') {
      myImage.setAttribute('src','images/fox-pattern-2.jpg');
    } else {
      myImage.setAttribute('src','images/fox-pattern.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('Please enter your name.');
	if(!myName) {
		setUserName();
	} else {
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Foxes are cool, ' + myName + '!';
	}
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Foxes are cool, ' + storedName + '!';
}

myButton.onclick = function () {
	setUserName();
}