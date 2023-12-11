let button = document.querySelector("#submit");
let values;

button.addEventListener("click", () => {
	event.preventDefault();

	// Check if input is correctly formatted
	if (checkCorrectnessOfForm()) {
		console.log("hello ");
		values = getFormInput();
	}
	console.log(values);
});

/* 
Get all the values typed into the form 
and return those values as an object
*/
function getFormInput() {
	let obj = {
		length: document.querySelector("#length").value,
		characters: document.querySelector("#characters").checked,
		digits: document.querySelector("#digits").checked,
		special: document.querySelector("#special").checked,
	};
	console.log("hello");

	return obj;
}

function checkCorrectnessOfForm() {
	let length = document.querySelector("#length").value;

	// Convert datatype from string to number
	length = Number(length);

	// check if conversion was successful
	if (!length.isInteger()) {
		console.log("hello");
		return false;
	}

	// Compare to string, because input is in string format
	if (length < 4 || length > 20) {
		return false;
	}
	return true;
}
