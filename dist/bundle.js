/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("let button = document.querySelector(\"#submit\");\nlet paragraph = document.querySelector(\".output>p\");\nlet values;\n\nbutton.addEventListener(\"click\", () => {\n\tevent.preventDefault();\n\n\t// Check if input is correctly formatted\n\tif (checkCorrectnessOfForm()) {\n\t\tvalues = getFormInput();\n\n\t\t// Check if any options are selected\n\t\tif (\n\t\t\tvalues.digits == false &&\n\t\t\tvalues.characters == false &&\n\t\t\tvalues.special == false\n\t\t) {\n\t\t\talert(\"There are no options selected!\");\n\t\t}\n\t}\n\n\tparagraph.textContent = createPassword(values);\n});\n\n/* \nGet all the values typed into the form \nand return those values as an object\n*/\nfunction getFormInput() {\n\tlet obj = {\n\t\tlength: document.querySelector(\"#length\").value,\n\t\tcharacters: document.querySelector(\"#characters\").checked,\n\t\tdigits: document.querySelector(\"#digits\").checked,\n\t\tspecial: document.querySelector(\"#special\").checked,\n\t};\n\n\treturn obj;\n}\n\nfunction checkCorrectnessOfForm() {\n\tlet length = document.querySelector(\"#length\").value;\n\n\t// Convert datatype from string to number\n\tlength = Number(length);\n\n\t// check if conversion was successful\n\tif (length == NaN) {\n\t\treturn false;\n\t}\n\n\t// Compare to string, because input is in string format\n\tif (length < 4 || length > 20) {\n\t\talert(\"Number is either to long or to short!\");\n\t\treturn false;\n\t}\n\n\treturn true;\n}\n\nfunction createPassword(obj) {\n\tlet characters = \"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ\";\n\tlet digits = \"0123456789\";\n\tlet special = \"!#$%&()*+,-./:;&lt@=&gt?[]^_{|}~\";\n\tlet selected = \"\";\n\tlet password = \"\";\n\n\tif (obj.characters) {\n\t\tselected += characters;\n\t}\n\tif (obj.digits) {\n\t\tselected += digits;\n\t}\n\tif (obj.special) {\n\t\tselected += special;\n\t}\n\n\tselected = selected.split(\"\");\n\tfor (let i = 0; i < obj.length; i++) {\n\t\tpassword += selected[getRandomNumber(selected.length)];\n\t}\n\n\treturn password;\n}\n\nfunction getRandomNumber(max) {\n\treturn Math.floor(Math.random() * max);\n}\n\n\n//# sourceURL=webpack://password-creator/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;