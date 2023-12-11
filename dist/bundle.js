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

eval("let button = document.querySelector(\"#submit\");\nlet values;\n\nbutton.addEventListener(\"click\", () => {\n\tevent.preventDefault();\n\n\t// Check if input is correctly formatted\n\tif (checkCorrectnessOfForm()) {\n\t\tconsole.log(\"hello \");\n\t\tvalues = getFormInput();\n\t}\n\tconsole.log(values);\n});\n\n/* \nGet all the values typed into the form \nand return those values as an object\n*/\nfunction getFormInput() {\n\tlet obj = {\n\t\tlength: document.querySelector(\"#length\").value,\n\t\tcharacters: document.querySelector(\"#characters\").checked,\n\t\tdigits: document.querySelector(\"#digits\").checked,\n\t\tspecial: document.querySelector(\"#special\").checked,\n\t};\n\tconsole.log(\"hello\");\n\n\treturn obj;\n}\n\nfunction checkCorrectnessOfForm() {\n\tlet length = document.querySelector(\"#length\").value;\n\n\t// Convert datatype from string to number\n\tlength = Number(length);\n\n\t// check if conversion was successful\n\tif (!length.isInteger()) {\n\t\tconsole.log(\"hello\");\n\t\treturn false;\n\t}\n\n\t// Compare to string, because input is in string format\n\tif (length < 4 || length > 20) {\n\t\treturn false;\n\t}\n\treturn true;\n}\n\n\n//# sourceURL=webpack://password-creator/./src/index.js?");

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