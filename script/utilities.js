function getInputFieldValueByID(inputFieldID) {
	const inputField = document.getElementById(inputFieldID);
	const inputFieldValueString = inputField.value;
	const inputFieldValue = parseFloat(inputFieldValueString);
	inputField.value = '';
	return inputFieldValue;
}

function getElementValueByID(elementID) {
	const element = document.getElementById(elementID);
	const elementValueString = element.innerText;
	const elementValue = parseFloat(elementValueString);
	return elementValue;
}

function setInputFieldValueByID(inputFieldID, newValue) {
	const inputField = document.getElementById(inputFieldID);
	inputField.value = newValue;
}
function setElementValueByID(elementID, newValue) {
	const element = document.getElementById(elementID);
	element.innerText = newValue;
}
