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

/***/ "./components/createSetForm.tsx":
/*!**************************************!*\
  !*** ./components/createSetForm.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_crud__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/crud */ \"./utils/crud.ts\");\nvar _jsxFileName = \"/Users/elie/code/ehymowitz/set-sharer/components/createSetForm.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst CreateSetForm = () => {\n  const {\n    0: setName,\n    1: changeSetName\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n\n  const handleSubmit = e => {\n    e.preventDefault();\n    Object(_utils_crud__WEBPACK_IMPORTED_MODULE_1__[\"createSet\"])({\n      name: setName\n    });\n    changeSetName(\"\");\n  };\n\n  const handleChange = e => {\n    changeSetName(e.target.value);\n  };\n\n  return __jsx(\"div\", {\n    className: \"create-set-form\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }, \"Create a Set\"), __jsx(\"form\", {\n    onSubmit: e => handleSubmit(e),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"inputs\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, __jsx(\"input\", {\n    placeholder: \"Set Name\",\n    value: setName,\n    onChange: e => handleChange(e),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 11\n    }\n  }), __jsx(\"input\", {\n    type: \"submit\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 11\n    }\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateSetForm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NyZWF0ZVNldEZvcm0udHN4PzM0OGMiXSwibmFtZXMiOlsiQ3JlYXRlU2V0Rm9ybSIsInNldE5hbWUiLCJjaGFuZ2VTZXROYW1lIiwidXNlU3RhdGUiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjcmVhdGVTZXQiLCJuYW1lIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsYUFBYSxHQUFHLE1BQU07QUFDMUIsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQTJCQyxzREFBUSxDQUFDLEVBQUQsQ0FBekM7O0FBRUEsUUFBTUMsWUFBWSxHQUFJQyxDQUFELElBQU87QUFDMUJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBQyxpRUFBUyxDQUFDO0FBQUNDLFVBQUksRUFBRVA7QUFBUCxLQUFELENBQVQ7QUFDQUMsaUJBQWEsQ0FBQyxFQUFELENBQWI7QUFDRCxHQUpEOztBQU1BLFFBQU1PLFlBQVksR0FBSUosQ0FBRCxJQUFPO0FBQzFCSCxpQkFBYSxDQUFDRyxDQUFDLENBQUNLLE1BQUYsQ0FBU0MsS0FBVixDQUFiO0FBQ0QsR0FGRDs7QUFJQSxTQUNFO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBRUU7QUFDRSxZQUFRLEVBQU1OLENBQUQsSUFBT0QsWUFBWSxDQUFDQyxDQUFELENBRGxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHRTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGVBQVcsRUFBRyxVQURoQjtBQUVFLFNBQUssRUFBS0osT0FGWjtBQUdFLFlBQVEsRUFBTUksQ0FBRCxJQUFPSSxZQUFZLENBQUNKLENBQUQsQ0FIbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBTUU7QUFBTyxRQUFJLEVBQUMsUUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsQ0FIRixDQUZGLENBREY7QUFpQkQsQ0E5QkQ7O0FBZ0NlTCw0RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvY3JlYXRlU2V0Rm9ybS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNyZWF0ZVNldCB9IGZyb20gJy4uL3V0aWxzL2NydWQnXG5cbmNvbnN0IENyZWF0ZVNldEZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IFtzZXROYW1lLCBjaGFuZ2VTZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpXG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjcmVhdGVTZXQoe25hbWU6IHNldE5hbWUgfSlcbiAgICBjaGFuZ2VTZXROYW1lKFwiXCIpXG4gIH1cblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNoYW5nZVNldE5hbWUoZS50YXJnZXQudmFsdWUpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY3JlYXRlLXNldC1mb3JtXCI+XG4gICAgICA8aDE+Q3JlYXRlIGEgU2V0PC9oMT5cbiAgICAgIDxmb3JtXG4gICAgICAgIG9uU3VibWl0ID0geyAoZSkgPT4gaGFuZGxlU3VibWl0KGUpIH1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dHNcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyID0gXCJTZXQgTmFtZVwiXG4gICAgICAgICAgICB2YWx1ZSA9IHsgc2V0TmFtZSB9XG4gICAgICAgICAgICBvbkNoYW5nZSA9IHsgKGUpID0+IGhhbmRsZUNoYW5nZShlKSB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlU2V0Rm9ybVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/createSetForm.tsx\n");

/***/ }),

/***/ "./components/set.tsx":
/*!****************************!*\
  !*** ./components/set.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _createSetForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createSetForm */ \"./components/createSetForm.tsx\");\n/* harmony import */ var _setLoginForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setLoginForm */ \"./components/setLoginForm.tsx\");\n/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/_app */ \"./pages/_app.tsx\");\nvar _jsxFileName = \"/Users/elie/code/ehymowitz/set-sharer/components/set.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst Set = () => {\n  const {\n    loggedIn\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_pages_app__WEBPACK_IMPORTED_MODULE_3__[\"LoggedIn\"]);\n\n  if (!loggedIn) {\n    return __jsx(\"div\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 7\n      }\n    }, __jsx(\"p\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }\n    }, \"todo: create gig and login forms\"), __jsx(_createSetForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }\n    }), __jsx(_setLoginForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }\n    }));\n  } else {\n    return __jsx(\"div\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 7\n      }\n    }, __jsx(\"p\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }\n    }, \"todo: show gig\"));\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Set);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NldC50c3g/ZWQzNCJdLCJuYW1lcyI6WyJTZXQiLCJsb2dnZWRJbiIsInVzZUNvbnRleHQiLCJMb2dnZWRJbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxHQUFHLEdBQUcsTUFBTTtBQUVoQixRQUFNO0FBQUVDO0FBQUYsTUFBZUMsd0RBQVUsQ0FBQ0MsbURBQUQsQ0FBL0I7O0FBRUEsTUFBSSxDQUFDRixRQUFMLEVBQWU7QUFDYixXQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBDQURGLEVBRUUsTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkYsRUFHRSxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFIRixDQURGO0FBT0QsR0FSRCxNQVFPO0FBQ0wsV0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixDQURGO0FBS0Q7QUFDRixDQW5CRDs7QUFxQmVELGtFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zZXQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDcmVhdGVTZXRGb3JtIGZyb20gJy4vY3JlYXRlU2V0Rm9ybSdcbmltcG9ydCBTZXRMb2dpbkZvcm0gZnJvbSAnLi9zZXRMb2dpbkZvcm0nXG5pbXBvcnQgeyBMb2dnZWRJbiB9IGZyb20gJy4uL3BhZ2VzL19hcHAnXG5cbmNvbnN0IFNldCA9ICgpID0+IHtcblxuICBjb25zdCB7IGxvZ2dlZEluIH0gPSB1c2VDb250ZXh0KExvZ2dlZEluKVxuXG4gIGlmICghbG9nZ2VkSW4pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHA+dG9kbzogY3JlYXRlIGdpZyBhbmQgbG9naW4gZm9ybXM8L3A+XG4gICAgICAgIDxDcmVhdGVTZXRGb3JtIC8+XG4gICAgICAgIDxTZXRMb2dpbkZvcm0gLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHA+dG9kbzogc2hvdyBnaWc8L3A+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2V0XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/set.tsx\n");

/***/ }),

/***/ "./components/setLoginForm.tsx":
/*!*************************************!*\
  !*** ./components/setLoginForm.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/elie/code/ehymowitz/set-sharer/components/setLoginForm.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst SetLoginForm = () => {\n  return __jsx(\"div\", {\n    className: \"set-login-form\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }, \"Login to see a Set\"), __jsx(\"form\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"inputs\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, __jsx(\"input\", {\n    placeholder: \"Set Name\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 11\n    }\n  }), __jsx(\"input\", {\n    type: \"submit\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 11\n    }\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SetLoginForm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NldExvZ2luRm9ybS50c3g/ZjI3NCJdLCJuYW1lcyI6WyJTZXRMb2dpbkZvcm0iXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsWUFBWSxHQUFHLE1BQU07QUFFekIsU0FDRTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGVBQVcsRUFBRyxVQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFJRTtBQUFPLFFBQUksRUFBQyxRQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixDQURGLENBRkYsQ0FERjtBQWFELENBZkQ7O0FBaUJlQSwyRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvc2V0TG9naW5Gb3JtLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgU2V0TG9naW5Gb3JtID0gKCkgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZXQtbG9naW4tZm9ybVwiPlxuICAgICAgPGgxPkxvZ2luIHRvIHNlZSBhIFNldDwvaDE+XG4gICAgICA8Zm9ybT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dHNcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyID0gXCJTZXQgTmFtZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2V0TG9naW5Gb3JtXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/setLoginForm.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: LoggedIn, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoggedIn\", function() { return LoggedIn; });\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.scss */ \"./styles/index.scss\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/elie/code/ehymowitz/set-sharer/pages/_app.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\nconst LoggedIn = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])(undefined);\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  const {\n    0: loggedIn,\n    1: setLoggedIn\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  return __jsx(LoggedIn.Provider, {\n    value: {\n      loggedIn,\n      setLoggedIn\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }\n  }, __jsx(Component, _extends({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD83MjE2Il0sIm5hbWVzIjpbIkxvZ2dlZEluIiwiY3JlYXRlQ29udGV4dCIsInVuZGVmaW5lZCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwibG9nZ2VkSW4iLCJzZXRMb2dnZWRJbiIsInVzZVN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxNQUFNQSxRQUFRLGdCQUFHQywyREFBYSxDQUFzQkMsU0FBdEIsQ0FBOUI7O0FBU1AsU0FBU0MsS0FBVCxDQUFlO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFmLEVBQW1EO0FBQ2pELFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsc0RBQVEsQ0FBVSxLQUFWLENBQXhDO0FBRUEsU0FDRSxNQUFDLFFBQUQsQ0FBVSxRQUFWO0FBQW1CLFNBQUssRUFBSTtBQUFFRixjQUFGO0FBQVlDO0FBQVosS0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsU0FBRCxlQUFlRixTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERixDQURGO0FBS0Q7O0FBRWNGLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9pbmRleC5zY3NzJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBjb25zdCBMb2dnZWRJbiA9IGNyZWF0ZUNvbnRleHQ8Q29udGV4dCB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcblxuZXhwb3J0IGludGVyZmFjZSBDb250ZXh0IHtcbiAgbG9nZ2VkSW46IGJvb2xlYW47XG4gIHNldExvZ2dlZEluOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxib29sZWFuPj47XG59XG5cbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICBjb25zdCBbbG9nZ2VkSW4sIHNldExvZ2dlZEluXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxuXG4gIHJldHVybiAoXG4gICAgPExvZ2dlZEluLlByb3ZpZGVyIHZhbHVlID0ge3sgbG9nZ2VkSW4sIHNldExvZ2dlZEluIH19PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvTG9nZ2VkSW4uUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/set */ \"./components/set.tsx\");\nvar _jsxFileName = \"/Users/elie/code/ehymowitz/set-sharer/pages/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst SetViewer = () => {\n  return __jsx(\"div\", {\n    className: \"set-viewer\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"song-info\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }, \"Set Sharer\"), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, \"TODO: Song Details\")), __jsx(\"div\", {\n    className: \"setlist\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, __jsx(_components_set__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SetViewer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJTZXRWaWV3ZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsU0FBUyxHQUFHLE1BQU07QUFDdEIsU0FDRTtBQUFLLGFBQVMsRUFBRyxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUcsV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUZGLENBREYsRUFLRTtBQUFLLGFBQVMsRUFBRyxTQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FMRixDQURGO0FBV0QsQ0FaRDs7QUFjZUEsd0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgU2V0IGZyb20gJy4uL2NvbXBvbmVudHMvc2V0J1xuXG5jb25zdCBTZXRWaWV3ZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWUgPSBcInNldC12aWV3ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJzb25nLWluZm9cIj5cbiAgICAgICAgPGgxPlNldCBTaGFyZXI8L2gxPlxuICAgICAgICA8cD5UT0RPOiBTb25nIERldGFpbHM8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJzZXRsaXN0XCI+XG4gICAgICAgIDxTZXQgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNldFZpZXdlclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./styles/index.scss":
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9pbmRleC5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/index.scss\n");

/***/ }),

/***/ "./utils/crud.ts":
/*!***********************!*\
  !*** ./utils/crud.ts ***!
  \***********************/
/*! exports provided: createSet, createSong, readSongs, updateSongNotes, updateSongTitle, deleteSong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createSet\", function() { return createSet; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createSong\", function() { return createSong; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"readSongs\", function() { return readSongs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateSongNotes\", function() { return updateSongNotes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateSongTitle\", function() { return updateSongTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteSong\", function() { return deleteSong; });\n// SETS\n// CREATE Collection\nasync function createSet(setData) {\n  const response = await fetch(\"/api/sets/create\", {\n    method: \"POST\",\n    headers: {\n      \"Content-Type\": \"application/json\"\n    },\n    body: JSON.stringify(setData)\n  });\n  const data = await response.json();\n  return data;\n} // createSet({name: 'test'})\n// SONGS\n// CREATE\n\nasync function createSong(songData) {\n  await fetch(\"/api/songs/create\", {\n    method: \"POST\",\n    headers: {\n      \"Content-Type\": \"application/json\"\n    },\n    body: JSON.stringify(songData)\n  });\n} // createSong({artist: \"test\", title: \"test2\", set: \"songs\"})\n// READ\n\nasync function readSongs(songsData) {\n  const response = await fetch(\"api/songs/read\", {\n    method: \"GET\",\n    headers: {\n      \"Content-Type\": \"application/json\",\n      \"set\": songsData\n    }\n  });\n  const {\n    songs\n  } = await response.json();\n  return songs.map(song => ({\n    id: song._id,\n    artist: song.artist,\n    title: song.title\n  }));\n} // readSongs(\"songs\");\n// UPDATE NOTES\n\nasync function updateSongNotes(songNoteData) {\n  await fetch(\"api/songs/update-notes\", {\n    method: \"PATCH\",\n    headers: {\n      \"Content-Type\": \"application/json\"\n    },\n    body: JSON.stringify(songNoteData)\n  });\n} // updateSongNotes({title: \"test2\", notes: {note1: \"note2\"}, set: \"songs\"})\n// UPDATE Title\n\nasync function updateSongTitle(songTitleData) {\n  await fetch(\"api/songs/update-title\", {\n    method: \"PATCH\",\n    headers: {\n      \"Content-Type\": \"application/json\"\n    },\n    body: JSON.stringify(songTitleData)\n  });\n} // updateSongTitle({title: \"test4\", newTitle: \"test5\", set: \"songs\"})\n// UPDATE Artist\n\nasync function updateSongArtist(songArtistData) {\n  await fetch(\"api/songs/update-artist\", {\n    method: \"PATCH\",\n    headers: {\n      \"Content-Type\": \"application/json\"\n    },\n    body: JSON.stringify(songArtistData)\n  });\n} // updateSongArtist({title: \"test5\", artist: \"you\", set: \"songs\"})\n// DELETE\n\n\nasync function deleteSong(songData) {\n  await fetch(\"api/songs/delete\", {\n    method: \"DELETE\",\n    headers: {\n      \"Content-Type\": \"application/json\"\n    },\n    body: JSON.stringify(songData)\n  });\n} // deleteSong({title: \"test5\", set: \"songs\"})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9jcnVkLnRzPzkyMDgiXSwibmFtZXMiOlsiY3JlYXRlU2V0Iiwic2V0RGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwianNvbiIsImNyZWF0ZVNvbmciLCJzb25nRGF0YSIsInJlYWRTb25ncyIsInNvbmdzRGF0YSIsInNvbmdzIiwibWFwIiwic29uZyIsImlkIiwiX2lkIiwiYXJ0aXN0IiwidGl0bGUiLCJ1cGRhdGVTb25nTm90ZXMiLCJzb25nTm90ZURhdGEiLCJ1cGRhdGVTb25nVGl0bGUiLCJzb25nVGl0bGVEYXRhIiwidXBkYXRlU29uZ0FydGlzdCIsInNvbmdBcnRpc3REYXRhIiwiZGVsZXRlU29uZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ08sZUFBZUEsU0FBZixDQUF5QkMsT0FBekIsRUFBa0M7QUFDdkMsUUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxrQkFBRCxFQUFxQjtBQUMvQ0MsVUFBTSxFQUFFLE1BRHVDO0FBRS9DQyxXQUFPLEVBQUU7QUFDUCxzQkFBZ0I7QUFEVCxLQUZzQztBQUsvQ0MsUUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVAsT0FBZjtBQUx5QyxHQUFyQixDQUE1QjtBQU9BLFFBQU1RLElBQUksR0FBRyxNQUFNUCxRQUFRLENBQUNRLElBQVQsRUFBbkI7QUFDQSxTQUFPRCxJQUFQO0FBQ0QsQyxDQUVEO0FBR0E7QUFFQTs7QUFDTyxlQUFlRSxVQUFmLENBQTBCQyxRQUExQixFQUFvQztBQUN6QyxRQUFNVCxLQUFLLENBQUMsbUJBQUQsRUFBc0I7QUFDL0JDLFVBQU0sRUFBRSxNQUR1QjtBQUUvQkMsV0FBTyxFQUFFO0FBQ1Asc0JBQWdCO0FBRFQsS0FGc0I7QUFLL0JDLFFBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVJLFFBQWY7QUFMeUIsR0FBdEIsQ0FBWDtBQU9ELEMsQ0FFRDtBQUdBOztBQUNPLGVBQWVDLFNBQWYsQ0FBeUJDLFNBQXpCLEVBQW9DO0FBQ3pDLFFBQU1aLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUMsZ0JBQUQsRUFBbUI7QUFDN0NDLFVBQU0sRUFBRSxLQURxQztBQUU3Q0MsV0FBTyxFQUFFO0FBQ1Asc0JBQWdCLGtCQURUO0FBRVAsYUFBT1M7QUFGQTtBQUZvQyxHQUFuQixDQUE1QjtBQU9BLFFBQU07QUFBQ0M7QUFBRCxNQUFVLE1BQU1iLFFBQVEsQ0FBQ1EsSUFBVCxFQUF0QjtBQUVBLFNBQU9LLEtBQUssQ0FBQ0MsR0FBTixDQUFVQyxJQUFJLEtBQUs7QUFDeEJDLE1BQUUsRUFBRUQsSUFBSSxDQUFDRSxHQURlO0FBRXhCQyxVQUFNLEVBQUVILElBQUksQ0FBQ0csTUFGVztBQUd4QkMsU0FBSyxFQUFFSixJQUFJLENBQUNJO0FBSFksR0FBTCxDQUFkLENBQVA7QUFLRCxDLENBRUQ7QUFHQTs7QUFDTyxlQUFlQyxlQUFmLENBQStCQyxZQUEvQixFQUE2QztBQUNsRCxRQUFNcEIsS0FBSyxDQUFDLHdCQUFELEVBQTJCO0FBQ3BDQyxVQUFNLEVBQUUsT0FENEI7QUFFcENDLFdBQU8sRUFBRTtBQUNQLHNCQUFnQjtBQURULEtBRjJCO0FBS3BDQyxRQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlZSxZQUFmO0FBTDhCLEdBQTNCLENBQVg7QUFPRCxDLENBRUQ7QUFFQTs7QUFDTyxlQUFlQyxlQUFmLENBQStCQyxhQUEvQixFQUE4QztBQUNuRCxRQUFNdEIsS0FBSyxDQUFDLHdCQUFELEVBQTJCO0FBQ3BDQyxVQUFNLEVBQUUsT0FENEI7QUFFcENDLFdBQU8sRUFBRTtBQUNQLHNCQUFnQjtBQURULEtBRjJCO0FBS3BDQyxRQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlaUIsYUFBZjtBQUw4QixHQUEzQixDQUFYO0FBT0QsQyxDQUVEO0FBRUE7O0FBQ0EsZUFBZUMsZ0JBQWYsQ0FBZ0NDLGNBQWhDLEVBQWdEO0FBQzlDLFFBQU14QixLQUFLLENBQUMseUJBQUQsRUFBNEI7QUFDckNDLFVBQU0sRUFBRSxPQUQ2QjtBQUVyQ0MsV0FBTyxFQUFFO0FBQ1Asc0JBQWdCO0FBRFQsS0FGNEI7QUFLckNDLFFBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVtQixjQUFmO0FBTCtCLEdBQTVCLENBQVg7QUFPRCxDLENBRUQ7QUFHQTs7O0FBQ08sZUFBZUMsVUFBZixDQUEwQmhCLFFBQTFCLEVBQW9DO0FBQ3pDLFFBQU1ULEtBQUssQ0FBQyxrQkFBRCxFQUFxQjtBQUM5QkMsVUFBTSxFQUFFLFFBRHNCO0FBRTlCQyxXQUFPLEVBQUU7QUFDUCxzQkFBZ0I7QUFEVCxLQUZxQjtBQUs5QkMsUUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUksUUFBZjtBQUx3QixHQUFyQixDQUFYO0FBT0QsQyxDQUVEIiwiZmlsZSI6Ii4vdXRpbHMvY3J1ZC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFNFVFNcblxuLy8gQ1JFQVRFIENvbGxlY3Rpb25cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVTZXQoc2V0RGF0YSkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9zZXRzL2NyZWF0ZVwiLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHNldERhdGEpLFxuICB9KTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICByZXR1cm4gZGF0YVxufVxuXG4vLyBjcmVhdGVTZXQoe25hbWU6ICd0ZXN0J30pXG5cblxuLy8gU09OR1NcblxuLy8gQ1JFQVRFXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlU29uZyhzb25nRGF0YSkge1xuICBhd2FpdCBmZXRjaChcIi9hcGkvc29uZ3MvY3JlYXRlXCIsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoc29uZ0RhdGEpLFxuICB9KTtcbn1cblxuLy8gY3JlYXRlU29uZyh7YXJ0aXN0OiBcInRlc3RcIiwgdGl0bGU6IFwidGVzdDJcIiwgc2V0OiBcInNvbmdzXCJ9KVxuXG5cbi8vIFJFQURcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWFkU29uZ3Moc29uZ3NEYXRhKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJhcGkvc29uZ3MvcmVhZFwiLCB7XG4gICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgXCJzZXRcIjogc29uZ3NEYXRhXG4gICAgfSxcbiAgfSlcbiAgY29uc3Qge3NvbmdzfSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG4gIHJldHVybiBzb25ncy5tYXAoc29uZyA9PiAoe1xuICAgIGlkOiBzb25nLl9pZCxcbiAgICBhcnRpc3Q6IHNvbmcuYXJ0aXN0LFxuICAgIHRpdGxlOiBzb25nLnRpdGxlLFxuICB9KSlcbn1cblxuLy8gcmVhZFNvbmdzKFwic29uZ3NcIik7XG5cblxuLy8gVVBEQVRFIE5PVEVTXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlU29uZ05vdGVzKHNvbmdOb3RlRGF0YSkge1xuICBhd2FpdCBmZXRjaChcImFwaS9zb25ncy91cGRhdGUtbm90ZXNcIiwge1xuICAgIG1ldGhvZDogXCJQQVRDSFwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShzb25nTm90ZURhdGEpXG4gIH0pXG59XG5cbi8vIHVwZGF0ZVNvbmdOb3Rlcyh7dGl0bGU6IFwidGVzdDJcIiwgbm90ZXM6IHtub3RlMTogXCJub3RlMlwifSwgc2V0OiBcInNvbmdzXCJ9KVxuXG4vLyBVUERBVEUgVGl0bGVcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVTb25nVGl0bGUoc29uZ1RpdGxlRGF0YSkge1xuICBhd2FpdCBmZXRjaChcImFwaS9zb25ncy91cGRhdGUtdGl0bGVcIiwge1xuICAgIG1ldGhvZDogXCJQQVRDSFwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShzb25nVGl0bGVEYXRhKVxuICB9KVxufVxuXG4vLyB1cGRhdGVTb25nVGl0bGUoe3RpdGxlOiBcInRlc3Q0XCIsIG5ld1RpdGxlOiBcInRlc3Q1XCIsIHNldDogXCJzb25nc1wifSlcblxuLy8gVVBEQVRFIEFydGlzdFxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlU29uZ0FydGlzdChzb25nQXJ0aXN0RGF0YSkge1xuICBhd2FpdCBmZXRjaChcImFwaS9zb25ncy91cGRhdGUtYXJ0aXN0XCIsIHtcbiAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoc29uZ0FydGlzdERhdGEpXG4gIH0pXG59XG5cbi8vIHVwZGF0ZVNvbmdBcnRpc3Qoe3RpdGxlOiBcInRlc3Q1XCIsIGFydGlzdDogXCJ5b3VcIiwgc2V0OiBcInNvbmdzXCJ9KVxuXG5cbi8vIERFTEVURVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVNvbmcoc29uZ0RhdGEpIHtcbiAgYXdhaXQgZmV0Y2goXCJhcGkvc29uZ3MvZGVsZXRlXCIsIHtcbiAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHNvbmdEYXRhKVxuICB9KVxufVxuXG4vLyBkZWxldGVTb25nKHt0aXRsZTogXCJ0ZXN0NVwiLCBzZXQ6IFwic29uZ3NcIn0pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/crud.ts\n");

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