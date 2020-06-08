/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/contacts.js":
/*!*************************!*\
  !*** ./src/contacts.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nconst contacts = (function() {\n\n  const content = document.querySelector('#content');\n\n  const contacts = document.createElement('div');\n  contacts.id = 'contacts';\n\n  const para1 = document.createElement('h3');\n  para1.textContent = \"You can find us at:\";\n  contacts.appendChild(para1);\n\n  const para2 = document.createElement('p');\n  para2.textContent = \"100 Acre Wood\";\n  contacts.appendChild(para2);\n\n  const map = document.createElement('img');\n  map.src = \"images/map.jpg\";\n  contacts.appendChild(map);\n\n  const para3 = document.createElement('p');\n  para3.textContent = \"Contact Christopher Robin: 2222 2222\";\n  contacts.appendChild(para3);\n\n  content.appendChild(contacts);\n\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (contacts);\n\n//# sourceURL=webpack:///./src/contacts.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nconst home = (function() {\n\n  const content = document.querySelector('#content');\n\n  const home = document.createElement('div');\n  home.id = 'home';\n\n  const mug = document.createElement('img');\n  mug.src = \"images/mug.jpg\";\n  mug.id = 'mug';\n  home.appendChild(mug);\n\n  const description = document.createElement('div');\n  description.textContent = \"Robin & Co is a dessert shop serving up delicious hand-crafted treats in the Hundred Acre Wood.\";\n  description.id = 'description';\n  home.appendChild(description);\n\n\n\n  content.appendChild(home);\n\n});\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (home);\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contacts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contacts */ \"./src/contacts.js\");\n\n\n\n\n(function(){\n\n  //create header\n  const content = document.querySelector('#content');\n  const header = document.createElement('header');\n\n  const heading = document.createElement('div');\n  heading.textContent = 'Robin & Co';\n  heading.id = 'heading';\n  header.appendChild(heading);\n\n  const nav = document.createElement('nav');\n\n  let navContent = ['Home', 'Menu', 'Contacts']\n  for (let i=0; i<3; i++){\n    let div = document.createElement('div');\n    div.textContent = navContent[i];\n    div.id = navContent[i];\n    nav.appendChild(div);\n  }\n\n  header.appendChild(nav);\n\n  content.appendChild(header);\n\n  window.onload = Object(_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n  //togglePage\n\n  const menuNav = document.querySelector('#Menu');\n  menuNav.addEventListener('click', menuPage);\n\n  const homeNav = document.querySelector('#Home');\n  homeNav.addEventListener('click', homePage);\n\n  const contactNav = document.querySelector('#Contacts');\n  contactNav.addEventListener('click', contactsPage);\n\n  function homePage() {\n    content.removeChild(content.lastChild)\n    Object(_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  }\n\n  function menuPage() {\n    content.removeChild(content.lastChild)\n    Object(_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  }\n\n  function contactsPage() {\n    content.removeChild(content.lastChild)\n    Object(_contacts__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  }\n\n\n\n\n})();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nconst menu = (function() {\n\n  const content = document.querySelector('#content');\n\n  const menu = document.createElement('div');\n  menu.id = \"menu\";\n\n  const foodItems = [['pancakes.jpg', 'Pancakes', '$6'],['brownies.jpg', 'Brownies', '$5'], ['muffin.jpg', 'Muffin', '$4']];\n\n  for (let i=0; i<3; i++) {\n    let item = document.createElement('div');\n    item.classList.add('item');\n    menu.appendChild(item);\n\n    let img = document.createElement('img');\n    img.src = 'images/' + foodItems[i][0];\n    img.classList.add('food')\n    item.appendChild(img);\n\n    let name = document.createElement('p');\n    name.textContent = foodItems[i][1];\n    item.appendChild(name);\n\n    let price = document.createElement('p');\n    price.textContent = foodItems[i][2];\n    item.appendChild(price);\n  }\n\n  content.appendChild(menu);\n\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (menu);\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ })

/******/ });