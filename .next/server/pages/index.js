module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/createGigForm.tsx":
/*!**************************************!*\
  !*** ./components/createGigForm.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/elie/code/ehymowitz/set-sharer/components/createGigForm.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst CreateGigForm = () => {\n  return __jsx(\"div\", {\n    className: \"gig-form\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }, __jsx(\"form\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"inputs\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }, __jsx(\"input\", {\n    placeholder: \"Gig Name\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 11\n    }\n  }), __jsx(\"input\", {\n    placeholder: \"Password\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 11\n    }\n  }), __jsx(\"input\", {\n    type: \"submit\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 11\n    }\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateGigForm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NyZWF0ZUdpZ0Zvcm0udHN4P2NmZmYiXSwibmFtZXMiOlsiQ3JlYXRlR2lnRm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxhQUFhLEdBQUcsTUFBTTtBQUUxQixTQUNFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGVBQVcsRUFBRyxVQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFJRTtBQUNFLGVBQVcsRUFBRyxVQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFPRTtBQUFPLFFBQUksRUFBQyxRQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixDQURGLENBREYsQ0FERjtBQWVELENBakJEOztBQW1CZUEsNEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2NyZWF0ZUdpZ0Zvcm0udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBDcmVhdGVHaWdGb3JtID0gKCkgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJnaWctZm9ybVwiPlxuICAgICAgPGZvcm0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRzXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBwbGFjZWhvbGRlciA9IFwiR2lnIE5hbWVcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBwbGFjZWhvbGRlciA9IFwiUGFzc3dvcmRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIi8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZUdpZ0Zvcm1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/createGigForm.tsx\n");

/***/ }),

/***/ "./components/createSongForm.tsx":
/*!***************************************!*\
  !*** ./components/createSongForm.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/elie/code/ehymowitz/set-sharer/components/createSongForm.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst CreateSongForm = () => {\n  return __jsx(\"div\", {\n    className: \"song-form\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }, __jsx(\"form\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    placeholder: \"Song Name\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    placeholder: \"Song Artist\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    className: \"submit\",\n    type: \"submit\",\n    value: \"Add\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateSongForm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NyZWF0ZVNvbmdGb3JtLnRzeD9iYWU2Il0sIm5hbWVzIjpbIkNyZWF0ZVNvbmdGb3JtIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBLE1BQU1BLGNBQWMsR0FBRyxNQUFNO0FBRTNCLFNBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sZUFBVyxFQUFHLFdBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQU8sZUFBVyxFQUFHLGFBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQU8sYUFBUyxFQUFDLFFBQWpCO0FBQTBCLFFBQUksRUFBQyxRQUEvQjtBQUF3QyxTQUFLLEVBQUMsS0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBREYsQ0FERjtBQVNELENBWEQ7O0FBYWVBLDZFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jcmVhdGVTb25nRm9ybS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IENyZWF0ZVNvbmdGb3JtID0gKCkgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzb25nLWZvcm1cIj5cbiAgICAgIDxmb3JtPlxuICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXIgPSBcIlNvbmcgTmFtZVwiLz5cbiAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyID0gXCJTb25nIEFydGlzdFwiLz5cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInN1Ym1pdFwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkFkZFwiLz5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVTb25nRm9ybVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/createSongForm.tsx\n");

/***/ }),

/***/ "./components/deleteSongButton.tsx":
/*!*****************************************!*\
  !*** ./components/deleteSongButton.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/elie/code/ehymowitz/set-sharer/components/deleteSongButton.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst DeleteSongButton = () => {\n  return __jsx(\"div\", {\n    className: \"delete-song-button\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 5\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DeleteSongButton);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2RlbGV0ZVNvbmdCdXR0b24udHN4P2ZhOWIiXSwibmFtZXMiOlsiRGVsZXRlU29uZ0J1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxnQkFBZ0IsR0FBRyxNQUFNO0FBQzdCLFNBQ0U7QUFBSyxhQUFTLEVBQUcsb0JBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERjtBQUdELENBSkQ7O0FBTWVBLCtFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9kZWxldGVTb25nQnV0dG9uLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgRGVsZXRlU29uZ0J1dHRvbiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZGVsZXRlLXNvbmctYnV0dG9uXCIgLz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZWxldGVTb25nQnV0dG9uXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/deleteSongButton.tsx\n");

/***/ }),

/***/ "./components/gig.tsx":
/*!****************************!*\
  !*** ./components/gig.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _createGigForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createGigForm */ \"./components/createGigForm.tsx\");\n/* harmony import */ var _logoutButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logoutButton */ \"./components/logoutButton.tsx\");\nvar _jsxFileName = \"/Users/elie/code/ehymowitz/set-sharer/components/gig.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst Gig = () => {\n  return __jsx(\"div\", {\n    className: \"gig\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, __jsx(_createGigForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }), __jsx(_logoutButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gig);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dpZy50c3g/N2RhOCJdLCJuYW1lcyI6WyJHaWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsR0FBRyxHQUFHLE1BQU07QUFDaEIsU0FDRTtBQUFLLGFBQVMsRUFBRyxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSSxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQURGO0FBTUQsQ0FQRDs7QUFTZUEsa0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2dpZy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQ3JlYXRlR2lnRm9ybSBmcm9tICcuL2NyZWF0ZUdpZ0Zvcm0nXG5pbXBvcnQgTG9nb3V0QnV0dG9uIGZyb20gJy4vbG9nb3V0QnV0dG9uJ1xuXG5jb25zdCBHaWcgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWUgPSBcImdpZ1wiPlxuICAgICAgICA8Q3JlYXRlR2lnRm9ybSAvPlxuICAgICAgICA8TG9nb3V0QnV0dG9uIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2lnXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/gig.tsx\n");

/***/ }),

/***/ "./components/logoutButton.tsx":
/*!*************************************!*\
  !*** ./components/logoutButton.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/elie/code/ehymowitz/set-sharer/components/logoutButton.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst LogoutButton = () => {\n  return __jsx(\"div\", {\n    className: \"log-button\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }, __jsx(\"h2\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }, \"\\u27A1\\uFE0F\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LogoutButton);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xvZ291dEJ1dHRvbi50c3g/OTk5MiJdLCJuYW1lcyI6WyJMb2dvdXRCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsWUFBWSxHQUFHLE1BQU07QUFFekIsU0FDRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLENBREY7QUFPRCxDQVREOztBQVdlQSwyRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbG9nb3V0QnV0dG9uLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgTG9nb3V0QnV0dG9uID0gKCkgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsb2ctYnV0dG9uXCI+XG4gICAgICA8aDI+XG4gICAgICAgIOKeoe+4j1xuICAgICAgPC9oMj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dvdXRCdXR0b25cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/logoutButton.tsx\n");

/***/ }),

/***/ "./components/songs.tsx":
/*!******************************!*\
  !*** ./components/songs.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deleteSongButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteSongButton */ \"./components/deleteSongButton.tsx\");\nvar _jsxFileName = \"/Users/elie/code/ehymowitz/set-sharer/components/songs.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Songs = () => {\n  const songs = [{\n    title: \"title1\",\n    artist: \"artist1\"\n  }];\n  return __jsx(\"div\", {\n    className: \"songs\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, __jsx(\"ul\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, songs.map((song, index) => {\n    return __jsx(\"li\", {\n      className: \"song-card\",\n      key: index,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 13\n      }\n    }, __jsx(\"div\", {\n      className: \"song-img\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 15\n      }\n    }, __jsx(\"img\", {\n      src: \"https://picsum.photos/id/1082/100\",\n      alt: \"filler\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 17\n      }\n    })), __jsx(\"div\", {\n      className: \"song-text\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 15\n      }\n    }, __jsx(\"h2\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 17\n      }\n    }, song.title), __jsx(\"h3\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 17\n      }\n    }, song.artist)), __jsx(_deleteSongButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 15\n      }\n    }));\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Songs);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NvbmdzLnRzeD82YjNjIl0sIm5hbWVzIjpbIlNvbmdzIiwic29uZ3MiLCJ0aXRsZSIsImFydGlzdCIsIm1hcCIsInNvbmciLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxLQUFLLEdBQUcsTUFBTTtBQUVsQixRQUFNQyxLQUFLLEdBQUcsQ0FDWjtBQUFDQyxTQUFLLEVBQUUsUUFBUjtBQUFrQkMsVUFBTSxFQUFFO0FBQTFCLEdBRFksQ0FBZDtBQUlBLFNBQ0U7QUFBSyxhQUFTLEVBQUcsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0YsS0FBSyxDQUFDRyxHQUFOLENBQVUsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEtBQWlCO0FBQzFCLFdBQ0U7QUFBSSxlQUFTLEVBQUcsV0FBaEI7QUFBNEIsU0FBRyxFQUFJQSxLQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxTQUFHLEVBQUMsbUNBQVQ7QUFBNkMsU0FBRyxFQUFDLFFBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURGLEVBSUU7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLRCxJQUFJLENBQUNILEtBQVYsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS0csSUFBSSxDQUFDRixNQUFWLENBRkYsQ0FKRixFQVFFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVJGLENBREY7QUFZRCxHQWJBLENBREgsQ0FERixDQURGO0FBb0JELENBMUJEOztBQTRCZUgsb0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3NvbmdzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBEZWxldGVTb25nQnV0dG9uIGZyb20gJy4vZGVsZXRlU29uZ0J1dHRvbidcblxuY29uc3QgU29uZ3MgPSAoKSA9PiB7XG5cbiAgY29uc3Qgc29uZ3MgPSBbXG4gICAge3RpdGxlOiBcInRpdGxlMVwiLCBhcnRpc3Q6IFwiYXJ0aXN0MVwifVxuICBdXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZSA9IFwic29uZ3NcIj5cbiAgICAgIDx1bD5cbiAgICAgICAge3NvbmdzLm1hcCgoc29uZywgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZSA9IFwic29uZy1jYXJkXCIga2V5ID0ge2luZGV4fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb25nLWltZ1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzEwODIvMTAwXCIgYWx0PVwiZmlsbGVyXCIvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb25nLXRleHRcIj5cbiAgICAgICAgICAgICAgICA8aDI+e3NvbmcudGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICA8aDM+e3NvbmcuYXJ0aXN0fTwvaDM+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8RGVsZXRlU29uZ0J1dHRvbi8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNvbmdzXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/songs.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_gig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/gig */ \"./components/gig.tsx\");\n/* harmony import */ var _components_songs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/songs */ \"./components/songs.tsx\");\n/* harmony import */ var _components_createSongForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/createSongForm */ \"./components/createSongForm.tsx\");\nvar _jsxFileName = \"/Users/elie/code/ehymowitz/set-sharer/pages/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n // SETS\n// CREATE Collection\n\nasync function createSet(setData) {\n  const response = await fetch(\"/api/sets/create\", {\n    method: \"POST\",\n    headers: {\n      \"Content-Type\": \"application/json\"\n    },\n    body: JSON.stringify(setData)\n  });\n  const data = await response.json();\n  return data;\n} // createSet({name: 'test'})\n// SONGS (NEED TO PASS SET DATA WHEN READY)\n// CREATE\n\n\nasync function createSong(songData) {\n  await fetch(\"/api/songs/create\", {\n    method: \"POST\",\n    headers: {\n      \"Content-Type\": \"application/json\"\n    },\n    body: JSON.stringify(songData)\n  });\n} // createSong({artist: \"test\", title: \"test2\", set: \"songs\"})\n// READ\n\n\nasync function readSongs(songsData) {\n  const response = await fetch(\"api/songs/read\", {\n    method: \"GET\",\n    headers: {\n      \"Content-Type\": \"application/json\",\n      \"set\": songsData\n    }\n  });\n  const {\n    songs\n  } = await response.json();\n  return songs.map(song => ({\n    id: song._id,\n    artist: song.artist,\n    title: song.title\n  }));\n} // readSongs(\"songs\");\n// UPDATE NOTES\n\n\nasync function updateSongNotes(songNoteData) {\n  await fetch(\"api/songs/update-notes\", {\n    method: \"PATCH\",\n    headers: {\n      \"Content-Type\": \"application/json\"\n    },\n    body: JSON.stringify(songNoteData)\n  });\n} // updateSongNotes({title: \"test2\", notes: {note1: \"note2\"}, set: \"songs\"})\n// UPDATE Title\n\n\nasync function updateSongTitle(songTitleData) {\n  await fetch(\"api/songs/update-title\", {\n    method: \"PATCH\",\n    headers: {\n      \"Content-Type\": \"application/json\"\n    },\n    body: JSON.stringify(songTitleData)\n  });\n} // updateSongTitle({title: \"test4\", newTitle: \"test5\", set: \"songs\"})\n// UPDATE Artist\n\n\nasync function updateSongArtist(songArtistData) {\n  await fetch(\"api/songs/update-artist\", {\n    method: \"PATCH\",\n    headers: {\n      \"Content-Type\": \"application/json\"\n    },\n    body: JSON.stringify(songArtistData)\n  });\n} // updateSongArtist({title: \"test5\", artist: \"you\", set: \"songs\"})\n// DELETE\n\n\nasync function deleteSong(songData) {\n  await fetch(\"api/songs/delete\", {\n    method: \"DELETE\",\n    headers: {\n      \"Content-Type\": \"application/json\"\n    },\n    body: JSON.stringify(songData)\n  });\n} // deleteSong({title: \"test5\", set: \"songs\"})\n\n\nconst SetViewer = () => {\n  return __jsx(\"div\", {\n    className: \"set-viewer\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"song-info\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 9\n    }\n  }, \"Set Sharer\"), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 9\n    }\n  }, \"TODO: Song Details\")), __jsx(\"div\", {\n    className: \"setlist\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 7\n    }\n  }, __jsx(_components_gig__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 9\n    }\n  }), __jsx(_components_songs__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 9\n    }\n  }), __jsx(_components_createSongForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 9\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SetViewer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJjcmVhdGVTZXQiLCJzZXREYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwiY3JlYXRlU29uZyIsInNvbmdEYXRhIiwicmVhZFNvbmdzIiwic29uZ3NEYXRhIiwic29uZ3MiLCJtYXAiLCJzb25nIiwiaWQiLCJfaWQiLCJhcnRpc3QiLCJ0aXRsZSIsInVwZGF0ZVNvbmdOb3RlcyIsInNvbmdOb3RlRGF0YSIsInVwZGF0ZVNvbmdUaXRsZSIsInNvbmdUaXRsZURhdGEiLCJ1cGRhdGVTb25nQXJ0aXN0Iiwic29uZ0FydGlzdERhdGEiLCJkZWxldGVTb25nIiwiU2V0Vmlld2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUdBO0FBRUE7O0FBQ0EsZUFBZUEsU0FBZixDQUF5QkMsT0FBekIsRUFBa0M7QUFDaEMsUUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxrQkFBRCxFQUFxQjtBQUMvQ0MsVUFBTSxFQUFFLE1BRHVDO0FBRS9DQyxXQUFPLEVBQUU7QUFDUCxzQkFBZ0I7QUFEVCxLQUZzQztBQUsvQ0MsUUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVAsT0FBZjtBQUx5QyxHQUFyQixDQUE1QjtBQU9BLFFBQU1RLElBQUksR0FBRyxNQUFNUCxRQUFRLENBQUNRLElBQVQsRUFBbkI7QUFDQSxTQUFPRCxJQUFQO0FBQ0QsQyxDQUVEO0FBR0E7QUFFQTs7O0FBQ0EsZUFBZUUsVUFBZixDQUEwQkMsUUFBMUIsRUFBb0M7QUFDbEMsUUFBTVQsS0FBSyxDQUFDLG1CQUFELEVBQXNCO0FBQy9CQyxVQUFNLEVBQUUsTUFEdUI7QUFFL0JDLFdBQU8sRUFBRTtBQUNQLHNCQUFnQjtBQURULEtBRnNCO0FBSy9CQyxRQUFJLEVBQUVDLElBQUksQ0FB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Q0FMRixDQURGO0FBYUQsQ0FkRDs7QUFnQmVBLHdFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEdpZyBmcm9tICcuLi9jb21wb25lbnRzL2dpZydcbmltcG9ydCBTb25ncyBmcm9tICcuLi9jb21wb25lbnRzL3NvbmdzJ1xuaW1wb3J0IENyZWF0ZVNvbmdGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvY3JlYXRlU29uZ0Zvcm0nXG5cbi8vIFNFVFNcblxuLy8gQ1JFQVRFIENvbGxlY3Rpb25cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVNldChzZXREYXRhKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL3NldHMvY3JlYXRlXCIsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoc2V0RGF0YSksXG4gIH0pO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gIHJldHVybiBkYXRhXG59XG5cbi8vIGNyZWF0ZVNldCh7bmFtZTogJ3Rlc3QnfSlcblxuXG4vLyBTT05HUyAoTkVFRCBUTyBQQVNTIFNFVCBEQVRBIFdIRU4gUkVBRFkpXG5cbi8vIENSRUFURVxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlU29uZyhzb25nRGF0YSkge1xuICBhd2FpdCBmZXRjaChcIi9hcGkvc29uZ3MvY3JlYXRlXCIsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoc29uZ0RhdGEpLFxuICB9KTtcbn1cblxuLy8gY3JlYXRlU29uZyh7YXJ0aXN0OiBcInRlc3RcIiwgdGl0bGU6IFwidGVzdDJcIiwgc2V0OiBcInNvbmdzXCJ9KVxuXG5cbi8vIFJFQURcbmFzeW5jIGZ1bmN0aW9uIHJlYWRTb25ncyhzb25nc0RhdGEpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImFwaS9zb25ncy9yZWFkXCIsIHtcbiAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICBcInNldFwiOiBzb25nc0RhdGFcbiAgICB9LFxuICB9KVxuICBjb25zdCB7c29uZ3N9ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cbiAgcmV0dXJuIHNvbmdzLm1hcChzb25nID0+ICh7XG4gICAgaWQ6IHNvbmcuX2lkLFxuICAgIGFydGlzdDogc29uZy5hcnRpc3QsXG4gICAgdGl0bGU6IHNvbmcudGl0bGUsXG4gIH0pKVxufVxuXG4vLyByZWFkU29uZ3MoXCJzb25nc1wiKTtcblxuXG4vLyBVUERBVEUgTk9URVNcbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVNvbmdOb3Rlcyhzb25nTm90ZURhdGEpIHtcbiAgYXdhaXQgZmV0Y2goXCJhcGkvc29uZ3MvdXBkYXRlLW5vdGVzXCIsIHtcbiAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoc29uZ05vdGVEYXRhKVxuICB9KVxufVxuXG4vLyB1cGRhdGVTb25nTm90ZXMoe3RpdGxlOiBcInRlc3QyXCIsIG5vdGVzOiB7bm90ZTE6IFwibm90ZTJcIn0sIHNldDogXCJzb25nc1wifSlcblxuLy8gVVBEQVRFIFRpdGxlXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVTb25nVGl0bGUoc29uZ1RpdGxlRGF0YSkge1xuICBhd2FpdCBmZXRjaChcImFwaS9zb25ncy91cGRhdGUtdGl0bGVcIiwge1xuICAgIG1ldGhvZDogXCJQQVRDSFwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShzb25nVGl0bGVEYXRhKVxuICB9KVxufVxuXG4vLyB1cGRhdGVTb25nVGl0bGUoe3RpdGxlOiBcInRlc3Q0XCIsIG5ld1RpdGxlOiBcInRlc3Q1XCIsIHNldDogXCJzb25nc1wifSlcblxuLy8gVVBEQVRFIEFydGlzdFxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlU29uZ0FydGlzdChzb25nQXJ0aXN0RGF0YSkge1xuICBhd2FpdCBmZXRjaChcImFwaS9zb25ncy91cGRhdGUtYXJ0aXN0XCIsIHtcbiAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoc29uZ0FydGlzdERhdGEpXG4gIH0pXG59XG5cbi8vIHVwZGF0ZVNvbmdBcnRpc3Qoe3RpdGxlOiBcInRlc3Q1XCIsIGFydGlzdDogXCJ5b3VcIiwgc2V0OiBcInNvbmdzXCJ9KVxuXG5cbi8vIERFTEVURVxuYXN5bmMgZnVuY3Rpb24gZGVsZXRlU29uZyhzb25nRGF0YSkge1xuICBhd2FpdCBmZXRjaChcImFwaS9zb25ncy9kZWxldGVcIiwge1xuICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoc29uZ0RhdGEpXG4gIH0pXG59XG5cbi8vIGRlbGV0ZVNvbmcoe3RpdGxlOiBcInRlc3Q1XCIsIHNldDogXCJzb25nc1wifSlcblxuXG5jb25zdCBTZXRWaWV3ZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWUgPSBcInNldC12aWV3ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJzb25nLWluZm9cIj5cbiAgICAgICAgPGgxPlNldCBTaGFyZXI8L2gxPlxuICAgICAgICA8cD5UT0RPOiBTb25nIERldGFpbHM8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJzZXRsaXN0XCI+XG4gICAgICAgIDxHaWcgLz5cbiAgICAgICAgPFNvbmdzIC8+XG4gICAgICAgIDxDcmVhdGVTb25nRm9ybS8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZXRWaWV3ZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });