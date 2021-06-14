let inputCalc = document.querySelector('.final-result');

function input(button) {
	inputCalc.value = inputCalc.value + button;
}

function result() {
	inputCalc.value = eval(inputCalc.value);
}

function backspace() {
	inputCalc.value = inputCalc.value.slice(0, inputCalc.value.length - 1);
}

function reset() {
	inputCalc.value = '';
}

function percent() {
	inputCalc.value = eval(inputCalc.value) / 100;
}

