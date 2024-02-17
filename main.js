/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ showHome)\n/* harmony export */ });\nfunction createHome(){\r\n    const container = document.createElement(\"div\");\r\n\r\n    const home_heading = document.createElement(\"h3\");\r\n    home_heading.innerText = \"BigBurger - best burgers in Warsaw\";\r\n\r\n    const home_p = document.createElement(\"p\");\r\n    const home_quote = document.createElement(\"em\");\r\n    home_quote.innerHTML = '&bdquo;Crafting Burgers, Creating Memories!&rdquo;';\r\n    home_p.classList.add(\"home_quote\");\r\n    home_p.appendChild(home_quote);\r\n\r\n    const img_container = document.createElement(\"div\");\r\n    img_container.classList.add(\"home-img\");\r\n    const img = document.createElement(\"img\");\r\n    img.src = \"./images/chef.png\";\r\n    img.alt = \"Picture of main chef\";\r\n    img.classList.add(\"chef-img\");\r\n    img_container.appendChild(img);\r\n\r\n    container.appendChild(home_heading);\r\n    container.appendChild(home_p);\r\n    container.appendChild(img_container);\r\n\r\n    return container;\r\n}\r\n\r\n\r\nfunction showHome(){\r\n    const content = document.querySelector(\"#content\");\r\n    content.innerHTML = \"\";\r\n    content.append(createHome());\r\n}\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\r\n\r\n\r\nconst navList = document.querySelector(\".nav-list\");\r\n\r\nnavList.addEventListener(\"click\", (e) => {\r\n    if(e.target.id === \"menu-btn\"){\r\n        e.target.parentNode.parentNode.querySelector(\".active\").className = \"\";\r\n        e.target.parentNode.classList.add(\"active\");\r\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    }\r\n    else if(e.target.id === \"home-btn\"){\r\n        e.target.parentNode.parentNode.querySelector(\".active\").className = \"\";\r\n        e.target.parentNode.classList.add(\"active\");\r\n        (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    }\r\n})\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    ;(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n})\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ showMenu)\n/* harmony export */ });\nconst menu = [\r\n    {name: \"BIG Burger\", img: \"menu-burger.svg\", price: \"11.99\"},\r\n    {name: \"Hot wings\", img: \"menu-wings.svg\", price: \"6.99\"},\r\n    {name: \"Cripsy Fries\", img: \"menu-fries.svg\", price: \"4.99\"},\r\n    {name: \"BIG Combo\", img: \"menu-combo.svg\", price: \"13.50\"},\r\n    {name: \"BIG Shake\", img: \"menu-shake.svg\", price: \"5.99\"},\r\n    {name: \"Coke\", img: \"menu-coke.svg\", price: \"1.99\"},\r\n    {name: \"Steak\", img: \"menu-steak.svg\", price: \"15.99\"}\r\n]\r\n\r\nfunction createMenu(){\r\n    const container = document.createElement(\"div\");\r\n\r\n    const menu_list = document.createElement(\"ul\");\r\n    menu_list.classList.add(\"menu\");\r\n\r\n    for(const item of menu){\r\n        const menu_item = createMenuItem(item);\r\n        menu_list.appendChild(menu_item);\r\n    }\r\n\r\n    container.appendChild(menu_list);\r\n    return container;\r\n}\r\n\r\nfunction createMenuItem({name, img, price}){\r\n    console.log(name, img, price)\r\n    const menu_item = document.createElement(\"li\");\r\n    const item_img = document.createElement(\"img\");\r\n    item_img.src = `./images/menu/${img}`;\r\n    item_img.alt = name;\r\n\r\n    const item_name = document.createElement(\"h4\");\r\n    item_name.innerText = name;\r\n\r\n    const item_price = document.createElement(\"p\");\r\n    item_price.innerText = `$${price}`;\r\n\r\n    menu_item.appendChild(item_img);\r\n    menu_item.appendChild(item_name);\r\n    menu_item.appendChild(item_price);\r\n\r\n    return menu_item;\r\n}\r\n\r\n\r\nfunction showMenu(){\r\n    const content = document.querySelector(\"#content\");\r\n    content.innerHTML = \"\";\r\n    content.append(createMenu());\r\n}\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;