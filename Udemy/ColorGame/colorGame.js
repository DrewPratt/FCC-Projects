let numSquares = 6;
let colors = [];
let pickedCololet
let squares = document.querySelectorAll('.square');
let colorDisplay = document.getElementById('colorDisplay');
let messageDisplay = document.querySelector('#message');
let h1 = document.querySelector('h1');
let resetButton = document.getElementById('reset');
let modeButtons = document.querySelectorAll('.mode');

init();

function init() {
	setUpModes();
	setUpSquares();
	reset();
}

function setUpModes() {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener('click', function () {
			modeButtons[0].classList.remove('selected');
			modeButtons[1].classList.remove('selected');
			this.classList.add('selected');
			this.textContent === 'Easy' ? numSquares = 3 : numSquares = 6;
			reset();
		});
	}
}

function setUpSquares() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function () {

			var clickedColor = this.style.background;

			if (clickedColor === pickedColor) {
				messageDisplay.textContent = 'Correct!';
				resetButton.textContent = 'Play Again?';
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			} else {
				this.style.background = "#232323"
				messageDisplay.textContent = 'Try again';
			}
		});
	}
}


resetButton.addEventListener('click', function () {
	reset();
})

colorDisplay.textContent = pickedColor;


function changeColors(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}

function pickColor() {
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	let arr = [];

	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}

	return arr;
}

function randomColor() {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);

	return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

function reset() {
	colors = generateRandomColors(numSquares);
	//	pick a new color from the Array
	pickedColor = pickColor();
	//	change the color of the squares
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = '';
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = 'block';
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = 'none';
		}
		squares[i].style.background = colors[i];
	}
	h1.style.background = 'steelblue';
	resetButton.textContent = 'New Colors';
}
