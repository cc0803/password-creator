let button = document.querySelector("#submit");
let paragraph = document.querySelector(".output>p");
let values;

button.addEventListener("click", () => {
	event.preventDefault();

	// Check if input is correctly formatted
	if (checkCorrectnessOfForm()) {
		values = getFormInput();

		// Check if any options are selected
		if (
			values.digits == false &&
			values.characters == false &&
			values.special == false
		) {
			alert("There are no options selected!");
		}
	}

	paragraph.textContent = createPassword(values);
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

	return obj;
}

function checkCorrectnessOfForm() {
	let length = document.querySelector("#length").value;

	// Convert datatype from string to number
	length = Number(length);

	// check if conversion was successful
	if (length == NaN) {
		return false;
	}

	// Compare to string, because input is in string format
	if (length < 4 || length > 20) {
		alert("Number is either to long or to short!");
		return false;
	}

	return true;
}

function createPassword(obj) {
	let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let digits = "0123456789";
	let special = "!#$%&()*+,-./:;&lt@=&gt?[]^_{|}~";
	let selected = "";
	let password = "";

	if (obj.characters) {
		selected += characters;
	}
	if (obj.digits) {
		selected += digits;
	}
	if (obj.special) {
		selected += special;
	}

	selected = selected.split("");
	for (let i = 0; i < obj.length; i++) {
		password += selected[getRandomNumber(selected.length)];
	}

	return password;
}

function getRandomNumber(max) {
	return Math.floor(Math.random() * max);
}
