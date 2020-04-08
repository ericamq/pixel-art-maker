//variants to get these elements easily

const colorPicker = document.getElementById('colorPicker');

const sizePicker = document.getElementById('sizePicker');

const pixelCanvas = document.getElementById('pixelCanvas');

//makeGrid function
function makeGrid(evt) {
	evt.preventDefault();
	//clear the grid whenever the function is called
	pixelCanvas.innerHTML = '';
	//get width and height
	let height = document.getElementById('inputHeight').value;
	let width = document.getElementById('inputWidth').value;
	//create each row and add cells to it
	for (h = 1; h <= height; h = h + 1) {
		let newRow = pixelCanvas.insertRow();
		for (w = 1; w <= width; w = w + 1) {
			let newColumn = newRow.insertCell();
			newColumn.addEventListener('click', colorFill);
		};
	};
}

//colorFill function
function colorFill(evt) {
	evt.preventDefault();
	//get the color chosen by the user and use it as background
	let color = colorPicker.value;
	evt.target.style.backgroundColor = color;
}

//when size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', makeGrid);

