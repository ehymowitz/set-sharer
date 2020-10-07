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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _util_fetcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/fetcher */ \"./components/util/fetcher.tsx\");\nvar _jsxFileName = \"/Users/elie/code/ehymowitz/set-sharer/components/createGigForm.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst CreateGigForm = ({}) => {\n  const {\n    0: gigName,\n    1: setGigName\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const {\n    0: password,\n    1: setPassword\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const {\n    0: choice,\n    1: setChoice\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, __jsx(\"form\", {\n    onSubmit: async e => {\n      e.preventDefault();\n\n      if (gigName.length === 0 || password.length === 0) {\n        alert(\"You can't have a blank Gig Name or Password\");\n      }\n\n      const {\n        data,\n        error\n      } = await Object(_util_fetcher__WEBPACK_IMPORTED_MODULE_2__[\"fetcher\"])(`/api/${choice ? \"login\" : \"create\"}`, {\n        gigName,\n        password\n      });\n\n      if (error) {\n        alert(error);\n        return;\n      }\n\n      await Object(swr__WEBPACK_IMPORTED_MODULE_1__[\"mutate\"])(\"api/set\");\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    value: gigName,\n    onChange: e => setGigName(e.target.value),\n    placeholder: \"Gig Name\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    value: password,\n    onChange: e => setPassword(e.target.value),\n    placeholder: \"Password\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"submit\",\n    value: choice ? \"View a gig\" : \"Create a gig\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  })), __jsx(\"button\", {\n    onClick: () => setChoice(!choice),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }, \"change\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateGigForm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NyZWF0ZUdpZ0Zvcm0udHN4P2NmZmYiXSwibmFtZXMiOlsiQ3JlYXRlR2lnRm9ybSIsImdpZ05hbWUiLCJzZXRHaWdOYW1lIiwidXNlU3RhdGUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiY2hvaWNlIiwic2V0Q2hvaWNlIiwiZSIsInByZXZlbnREZWZhdWx0IiwibGVuZ3RoIiwiYWxlcnQiLCJkYXRhIiwiZXJyb3IiLCJmZXRjaGVyIiwibXV0YXRlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLGFBQWEsR0FBRyxDQUFDLEVBQUQsS0FBUTtBQUM1QixRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JDLHNEQUFRLENBQUMsRUFBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkYsc0RBQVEsQ0FBQyxFQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCSixzREFBUSxDQUFDLEtBQUQsQ0FBcEM7QUFFQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFlBQVEsRUFBRSxNQUFPSyxDQUFQLElBQWE7QUFDckJBLE9BQUMsQ0FBQ0MsY0FBRjs7QUFDQSxVQUFJUixPQUFPLENBQUNTLE1BQVIsS0FBbUIsQ0FBbkIsSUFBd0JOLFFBQVEsQ0FBQ00sTUFBVCxLQUFvQixDQUFoRCxFQUFtRDtBQUNqREMsYUFBSyxDQUNILDZDQURHLENBQUw7QUFHRDs7QUFDRCxZQUFNO0FBQUVDLFlBQUY7QUFBUUM7QUFBUixVQUFrQixNQUFNQyw2REFBTyxDQUNsQyxRQUFPUixNQUFNLEdBQUcsT0FBSCxHQUFhLFFBQVUsRUFERixFQUVuQztBQUNFTCxlQURGO0FBRUVHO0FBRkYsT0FGbUMsQ0FBckM7O0FBT0EsVUFBSVMsS0FBSixFQUFXO0FBQ1RGLGFBQUssQ0FBQ0UsS0FBRCxDQUFMO0FBQ0E7QUFDRDs7QUFDRCxZQUFNRSxrREFBTSxDQUFDLFNBQUQsQ0FBWjtBQUNELEtBcEJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FzQkU7QUFDRSxTQUFLLEVBQUlkLE9BRFg7QUFFRSxZQUFRLEVBQUdPLENBQUMsSUFBR04sVUFBVSxDQUFDTSxDQUFDLENBQUNRLE1BQUYsQ0FBU0MsS0FBVixDQUYzQjtBQUdFLGVBQVcsRUFBRyxVQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdEJGLEVBMkJFO0FBQ0UsU0FBSyxFQUFJYixRQURYO0FBRUUsWUFBUSxFQUFHSSxDQUFDLElBQUdILFdBQVcsQ0FBQ0csQ0FBQyxDQUFDUSxNQUFGLENBQVNDLEtBQVYsQ0FGNUI7QUFHRSxlQUFXLEVBQUcsVUFIaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTNCRixFQWdDRTtBQUFPLFFBQUksRUFBQyxRQUFaO0FBQXFCLFNBQUssRUFBSVgsTUFBTSxHQUFHLFlBQUgsR0FBa0IsY0FBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhDRixDQURGLEVBbUNFO0FBQVEsV0FBTyxFQUFJLE1BQU1DLFNBQVMsQ0FBQyxDQUFDRCxNQUFGLENBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FuQ0YsQ0FERjtBQXlDRCxDQTlDRDs7QUFnRGVOLDRFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jcmVhdGVHaWdGb3JtLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbXV0YXRlIH0gZnJvbSAnc3dyJ1xuaW1wb3J0IHsgZmV0Y2hlciB9IGZyb20gJy4vdXRpbC9mZXRjaGVyJ1xuXG5jb25zdCBDcmVhdGVHaWdGb3JtID0gKHt9KSA9PiB7XG4gIGNvbnN0IFtnaWdOYW1lLCBzZXRHaWdOYW1lXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW2Nob2ljZSwgc2V0Q2hvaWNlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxmb3JtXG4gICAgICAgIG9uU3VibWl0PXthc3luYyAoZSkgPT4ge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGlmIChnaWdOYW1lLmxlbmd0aCA9PT0gMCB8fCBwYXNzd29yZC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGFsZXJ0KFxuICAgICAgICAgICAgICBcIllvdSBjYW4ndCBoYXZlIGEgYmxhbmsgR2lnIE5hbWUgb3IgUGFzc3dvcmRcIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBmZXRjaGVyKFxuICAgICAgICAgICAgYC9hcGkvJHtjaG9pY2UgPyBcImxvZ2luXCIgOiBcImNyZWF0ZVwiIH1gLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBnaWdOYW1lLFxuICAgICAgICAgICAgICBwYXNzd29yZFxuICAgICAgICAgICAgfVxuICAgICAgICAgIClcbiAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIGF3YWl0IG11dGF0ZShcImFwaS9zZXRcIilcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdmFsdWUgPSB7Z2lnTmFtZX1cbiAgICAgICAgICBvbkNoYW5nZT0ge2UgPT5zZXRHaWdOYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBwbGFjZWhvbGRlciA9IFwiR2lnIE5hbWVcIlxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB2YWx1ZSA9IHtwYXNzd29yZH1cbiAgICAgICAgICBvbkNoYW5nZT0ge2UgPT5zZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgcGxhY2Vob2xkZXIgPSBcIlBhc3N3b3JkXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZSA9IHtjaG9pY2UgPyBcIlZpZXcgYSBnaWdcIiA6IFwiQ3JlYXRlIGEgZ2lnXCJ9Lz5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxidXR0b24gb25DbGljaz0geyAoKSA9PiBzZXRDaG9pY2UoIWNob2ljZSl9PlxuICAgICAgICBjaGFuZ2VcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZUdpZ0Zvcm1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/createGigForm.tsx\n");

/***/ }),

/***/ "./components/createSong.tsx":
/*!***********************************!*\
  !*** ./components/createSong.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _util_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/hooks */ \"./components/util/hooks.tsx\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _util_fetcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/fetcher */ \"./components/util/fetcher.tsx\");\nvar _jsxFileName = \"/Users/elie/code/ehymowitz/set-sharer/components/createSong.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst CreateSong = () => {\n  const {\n    0: title,\n    1: setTitle\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const {\n    0: artist,\n    1: setArtist\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const {\n    songs\n  } = Object(_util_hooks__WEBPACK_IMPORTED_MODULE_1__[\"useSongs\"])();\n  const {\n    gigInfo\n  } = Object(_util_hooks__WEBPACK_IMPORTED_MODULE_1__[\"useGigInfo\"])();\n\n  const resetForm = () => {\n    setTitle(\"\");\n    setArtist(\"\");\n  };\n\n  return __jsx(\"form\", {\n    onSubmit: async e => {\n      e.preventDefault();\n\n      if (artist.length < 1 || title.length < 1) {\n        alert(\"Fully fill out the form\");\n        resetForm();\n        return;\n      }\n\n      if (!gigInfo || !gigInfo.setName) {\n        alert(\"You need to be viewing a gig to add a song\");\n        resetForm();\n        return;\n      }\n\n      Object(swr__WEBPACK_IMPORTED_MODULE_2__[\"mutate\"])(\"/api/songs\", [{\n        title: title,\n        artist: artist,\n        Set: _util_hooks__WEBPACK_IMPORTED_MODULE_1__[\"useGigInfo\"]\n      }, ...songs], false);\n      Object(_util_fetcher__WEBPACK_IMPORTED_MODULE_3__[\"fetcher\"])(\"/api/song/create\", {\n        title: title,\n        artist: artist\n      });\n      resetForm();\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, __jsx(\"input\", {\n    value: title,\n    onChange: e => setTitle(e.target.value),\n    placeholder: \"Song Name\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }), __jsx(\"input\", {\n    value: artist,\n    onChange: e => setArtist(e.target.value),\n    placeholder: \"Song Artist\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }\n  }), __jsx(\"input\", {\n    type: \"submit\",\n    value: \"add\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateSong);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NyZWF0ZVNvbmcudHN4PzdkOGQiXSwibmFtZXMiOlsiQ3JlYXRlU29uZyIsInRpdGxlIiwic2V0VGl0bGUiLCJ1c2VTdGF0ZSIsImFydGlzdCIsInNldEFydGlzdCIsInNvbmdzIiwidXNlU29uZ3MiLCJnaWdJbmZvIiwidXNlR2lnSW5mbyIsInJlc2V0Rm9ybSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImxlbmd0aCIsImFsZXJ0Iiwic2V0TmFtZSIsIm11dGF0ZSIsIlNldCIsImZldGNoZXIiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsVUFBVSxHQUFHLE1BQU07QUFDdkIsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQyxzREFBUSxDQUFDLEVBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JGLHNEQUFRLENBQUMsRUFBRCxDQUFwQztBQUNBLFFBQU07QUFBRUc7QUFBRixNQUFZQyw0REFBUSxFQUExQjtBQUNBLFFBQU07QUFBRUM7QUFBRixNQUFjQyw4REFBVSxFQUE5Qjs7QUFFQSxRQUFNQyxTQUFTLEdBQUcsTUFBTTtBQUN0QlIsWUFBUSxDQUFDLEVBQUQsQ0FBUjtBQUNBRyxhQUFTLENBQUMsRUFBRCxDQUFUO0FBQ0QsR0FIRDs7QUFLQSxTQUNFO0FBQ0UsWUFBUSxFQUFJLE1BQU1NLENBQU4sSUFBVztBQUNuQkEsT0FBQyxDQUFDQyxjQUFGOztBQUVBLFVBQUlSLE1BQU0sQ0FBQ1MsTUFBUCxHQUFnQixDQUFoQixJQUFxQlosS0FBSyxDQUFDWSxNQUFOLEdBQWUsQ0FBeEMsRUFBMkM7QUFDekNDLGFBQUssQ0FBQyx5QkFBRCxDQUFMO0FBQ0FKLGlCQUFTO0FBQ1Q7QUFDRDs7QUFFRCxVQUFLLENBQUNGLE9BQUQsSUFBWSxDQUFDQSxPQUFPLENBQUNPLE9BQTFCLEVBQW1DO0FBQ2pDRCxhQUFLLENBQUMsNENBQUQsQ0FBTDtBQUNBSixpQkFBUztBQUNUO0FBQ0Q7O0FBRURNLHdEQUFNLENBQUMsWUFBRCxFQUFlLENBQUM7QUFBQ2YsYUFBSyxFQUFFQSxLQUFSO0FBQWVHLGNBQU0sRUFBRUEsTUFBdkI7QUFBK0JhLFdBQUcsRUFBRVIsc0RBQVVBO0FBQTlDLE9BQUQsRUFBa0QsR0FBR0gsS0FBckQsQ0FBZixFQUE0RSxLQUE1RSxDQUFOO0FBQ0FZLG1FQUFPLENBQUMsa0JBQUQsRUFBcUI7QUFDMUJqQixhQUFLLEVBQUVBLEtBRG1CO0FBRTFCRyxjQUFNLEVBQUVBO0FBRmtCLE9BQXJCLENBQVA7QUFJQU0sZUFBUztBQUNaLEtBdEJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0F3QkU7QUFBTyxTQUFLLEVBQUlULEtBQWhCO0FBQXVCLFlBQVEsRUFBS1UsQ0FBQyxJQUFJVCxRQUFRLENBQUNTLENBQUMsQ0FBQ1EsTUFBRixDQUFTQyxLQUFWLENBQWpEO0FBQW1FLGVBQVcsRUFBRyxXQUFqRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBeEJGLEVBeUJFO0FBQU8sU0FBSyxFQUFJaEIsTUFBaEI7QUFBd0IsWUFBUSxFQUFLTyxDQUFDLElBQUlOLFNBQVMsQ0FBQ00sQ0FBQyxDQUFDUSxNQUFGLENBQVNDLEtBQVYsQ0FBbkQ7QUFBcUUsZUFBVyxFQUFHLGFBQW5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF6QkYsRUEwQkU7QUFBTyxRQUFJLEVBQUMsUUFBWjtBQUFxQixTQUFLLEVBQUMsS0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTFCRixDQURGO0FBOEJELENBekNEOztBQTJDZXBCLHlFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jcmVhdGVTb25nLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU29uZ3MsIHVzZUdpZ0luZm8gfSBmcm9tICcuL3V0aWwvaG9va3MnXG5pbXBvcnQgeyBtdXRhdGUgfSBmcm9tICdzd3InXG5pbXBvcnQgeyBmZXRjaGVyIH0gZnJvbSAnLi91dGlsL2ZldGNoZXInXG5cbmNvbnN0IENyZWF0ZVNvbmcgPSAoKSA9PiB7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW2FydGlzdCwgc2V0QXJ0aXN0XSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IHsgc29uZ3MgfSA9IHVzZVNvbmdzKClcbiAgY29uc3QgeyBnaWdJbmZvIH0gPSB1c2VHaWdJbmZvKClcblxuICBjb25zdCByZXNldEZvcm0gPSAoKSA9PiB7XG4gICAgc2V0VGl0bGUoXCJcIilcbiAgICBzZXRBcnRpc3QoXCJcIilcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGZvcm1cbiAgICAgIG9uU3VibWl0ID0ge2FzeW5jIGUgPT4ge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgICAgaWYgKGFydGlzdC5sZW5ndGggPCAxIHx8IHRpdGxlLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiRnVsbHkgZmlsbCBvdXQgdGhlIGZvcm1cIilcbiAgICAgICAgICAgIHJlc2V0Rm9ybSgpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCAhZ2lnSW5mbyB8fCAhZ2lnSW5mby5zZXROYW1lICl7XG4gICAgICAgICAgICBhbGVydChcIllvdSBuZWVkIHRvIGJlIHZpZXdpbmcgYSBnaWcgdG8gYWRkIGEgc29uZ1wiKVxuICAgICAgICAgICAgcmVzZXRGb3JtKClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cblxuICAgICAgICAgIG11dGF0ZShcIi9hcGkvc29uZ3NcIiwgW3t0aXRsZTogdGl0bGUsIGFydGlzdDogYXJ0aXN0LCBTZXQ6IHVzZUdpZ0luZm99LCAuLi5zb25nc10sIGZhbHNlKVxuICAgICAgICAgIGZldGNoZXIoXCIvYXBpL3NvbmcvY3JlYXRlXCIsIHtcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgIGFydGlzdDogYXJ0aXN0LFxuICAgICAgICAgIH0pXG4gICAgICAgICAgcmVzZXRGb3JtKClcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGlucHV0IHZhbHVlID0ge3RpdGxlfSBvbkNoYW5nZSA9IHsgZSA9PiBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyID0gXCJTb25nIE5hbWVcIi8+XG4gICAgICA8aW5wdXQgdmFsdWUgPSB7YXJ0aXN0fSBvbkNoYW5nZSA9IHsgZSA9PiBzZXRBcnRpc3QoZS50YXJnZXQudmFsdWUpfSBwbGFjZWhvbGRlciA9IFwiU29uZyBBcnRpc3RcIi8+XG4gICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiYWRkXCIvPlxuICAgIDwvZm9ybT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVTb25nXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/createSong.tsx\n");

/***/ }),

/***/ "./components/deleteSongButton.tsx":
/*!*****************************************!*\
  !*** ./components/deleteSongButton.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _util_fetcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/fetcher */ \"./components/util/fetcher.tsx\");\nvar _jsxFileName = \"/Users/elie/code/ehymowitz/set-sharer/components/deleteSongButton.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst DeleteSongButton = ({\n  song,\n  songs\n}) => {\n  return __jsx(\"div\", {\n    style: {\n      backgroundColor: 'red',\n      width: '20px',\n      height: '20px'\n    },\n    onClick: async () => {\n      await Object(_util_fetcher__WEBPACK_IMPORTED_MODULE_2__[\"fetcher\"])(\"/api/song/delete\", {\n        id: song.id\n      });\n      await Object(swr__WEBPACK_IMPORTED_MODULE_1__[\"mutate\"])(\"/api/songs\", songs.filter(s => s.id !== song.id));\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, \"X\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DeleteSongButton);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2RlbGV0ZVNvbmdCdXR0b24udHN4P2ZhOWIiXSwibmFtZXMiOlsiRGVsZXRlU29uZ0J1dHRvbiIsInNvbmciLCJzb25ncyIsImJhY2tncm91bmRDb2xvciIsIndpZHRoIiwiaGVpZ2h0IiwiZmV0Y2hlciIsImlkIiwibXV0YXRlIiwiZmlsdGVyIiwicyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsZ0JBQWdCLEdBQUcsQ0FBQztBQUFFQyxNQUFGO0FBQVFDO0FBQVIsQ0FBRCxLQUFvQjtBQUMzQyxTQUNFO0FBQUssU0FBSyxFQUFJO0FBQUNDLHFCQUFlLEVBQUUsS0FBbEI7QUFBeUJDLFdBQUssRUFBRSxNQUFoQztBQUF3Q0MsWUFBTSxFQUFFO0FBQWhELEtBQWQ7QUFDRSxXQUFPLEVBQUssWUFBWTtBQUN0QixZQUFNQyw2REFBTyxDQUFDLGtCQUFELEVBQXFCO0FBQUVDLFVBQUUsRUFBRU4sSUFBSSxDQUFDTTtBQUFYLE9BQXJCLENBQWI7QUFDQSxZQUFNQyxrREFBTSxDQUFDLFlBQUQsRUFBZU4sS0FBSyxDQUFDTyxNQUFOLENBQWNDLENBQUMsSUFBSUEsQ0FBQyxDQUFDSCxFQUFGLEtBQVNOLElBQUksQ0FBQ00sRUFBakMsQ0FBZixDQUFaO0FBQ0QsS0FKSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFVRCxDQVhEOztBQWFlUCwrRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvZGVsZXRlU29uZ0J1dHRvbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtdXRhdGUgfSBmcm9tICdzd3InXG5pbXBvcnQgeyBmZXRjaGVyIH0gZnJvbSAnLi91dGlsL2ZldGNoZXInXG5cbmNvbnN0IERlbGV0ZVNvbmdCdXR0b24gPSAoeyBzb25nLCBzb25nc30pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlID0ge3tiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLCB3aWR0aDogJzIwcHgnLCBoZWlnaHQ6ICcyMHB4J319XG4gICAgICBvbkNsaWNrID0geyBhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IGZldGNoZXIoXCIvYXBpL3NvbmcvZGVsZXRlXCIsIHsgaWQ6IHNvbmcuaWQgfSlcbiAgICAgICAgYXdhaXQgbXV0YXRlKFwiL2FwaS9zb25nc1wiLCBzb25ncy5maWx0ZXIoIHMgPT4gcy5pZCAhPT0gc29uZy5pZCApKVxuICAgICAgfX1cbiAgICA+XG4gICAgICBYXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVsZXRlU29uZ0J1dHRvblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/deleteSongButton.tsx\n");

/***/ }),

/***/ "./components/gig.tsx":
/*!****************************!*\
  !*** ./components/gig.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _util_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/hooks */ \"./components/util/hooks.tsx\");\n/* harmony import */ var _createGigForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createGigForm */ \"./components/createGigForm.tsx\");\n/* harmony import */ var _logoutButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logoutButton */ \"./components/logoutButton.tsx\");\nvar _jsxFileName = \"/Users/elie/code/ehymowitz/set-sharer/components/gig.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst Gig = () => {\n  const {\n    gigInfo\n  } = Object(_util_hooks__WEBPACK_IMPORTED_MODULE_1__[\"useGigInfo\"])();\n  if (!gigInfo) return null;\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }, !gigInfo.setName ? __jsx(_createGigForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }) : __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, \"Viewing set: \", __jsx(\"strong\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 24\n    }\n  }, gigInfo.setName), __jsx(_logoutButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 11\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gig);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dpZy50c3g/N2RhOCJdLCJuYW1lcyI6WyJHaWciLCJnaWdJbmZvIiwidXNlR2lnSW5mbyIsInNldE5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsR0FBRyxHQUFHLE1BQU07QUFFaEIsUUFBTTtBQUFFQztBQUFGLE1BQWNDLDhEQUFVLEVBQTlCO0FBQ0EsTUFBSSxDQUFDRCxPQUFMLEVBQWMsT0FBTyxJQUFQO0FBRWQsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0csQ0FBQ0EsT0FBTyxDQUFDRSxPQUFULEdBQ0MsTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsR0FHQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUNlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBU0YsT0FBTyxDQUFDRSxPQUFqQixDQURmLEVBRUUsTUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FKSixDQURGO0FBWUQsQ0FqQkQ7O0FBbUJlSCxrRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvZ2lnLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUdpZ0luZm8gfSBmcm9tICcuL3V0aWwvaG9va3MnXG5pbXBvcnQgQ3JlYXRlR2lnRm9ybSBmcm9tICcuL2NyZWF0ZUdpZ0Zvcm0nXG5pbXBvcnQgTG9nb3V0QnV0dG9uIGZyb20gJy4vbG9nb3V0QnV0dG9uJ1xuXG5jb25zdCBHaWcgPSAoKSA9PiB7XG5cbiAgY29uc3QgeyBnaWdJbmZvIH0gPSB1c2VHaWdJbmZvKClcbiAgaWYgKCFnaWdJbmZvKSByZXR1cm4gbnVsbFxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHshZ2lnSW5mby5zZXROYW1lID8gKFxuICAgICAgICA8Q3JlYXRlR2lnRm9ybSAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPHA+XG4gICAgICAgICAgVmlld2luZyBzZXQ6IDxzdHJvbmc+e2dpZ0luZm8uc2V0TmFtZX08L3N0cm9uZz5cbiAgICAgICAgICA8TG9nb3V0QnV0dG9uIC8+XG4gICAgICAgIDwvcD5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2lnXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/gig.tsx\n");

/***/ }),

/***/ "./components/logoutButton.tsx":
/*!*************************************!*\
  !*** ./components/logoutButton.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _util_fetcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/fetcher */ \"./components/util/fetcher.tsx\");\nvar _jsxFileName = \"/Users/elie/code/ehymowitz/set-sharer/components/logoutButton.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst LogoutButton = () => {\n  return __jsx(\"button\", {\n    onClick: async () => {\n      const {\n        data,\n        error\n      } = await Object(_util_fetcher__WEBPACK_IMPORTED_MODULE_2__[\"fetcher\"])(\"/api/logout\");\n\n      if (error) {\n        alert(error);\n        return;\n      }\n\n      await Object(swr__WEBPACK_IMPORTED_MODULE_1__[\"mutate\"])(\"/api/set\");\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, \"Leave Set\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LogoutButton);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xvZ291dEJ1dHRvbi50c3g/OTk5MiJdLCJuYW1lcyI6WyJMb2dvdXRCdXR0b24iLCJkYXRhIiwiZXJyb3IiLCJmZXRjaGVyIiwiYWxlcnQiLCJtdXRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFlBQVksR0FBRyxNQUFNO0FBRXpCLFNBQ0U7QUFDRSxXQUFPLEVBQUssWUFBWTtBQUN0QixZQUFNO0FBQUVDLFlBQUY7QUFBUUM7QUFBUixVQUFrQixNQUFNQyw2REFBTyxDQUFDLGFBQUQsQ0FBckM7O0FBQ0EsVUFBSUQsS0FBSixFQUFXO0FBQ1RFLGFBQUssQ0FBQ0YsS0FBRCxDQUFMO0FBQ0E7QUFDRDs7QUFDRCxZQUFNRyxrREFBTSxDQUFDLFVBQUQsQ0FBWjtBQUNELEtBUkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQWFELENBZkQ7O0FBaUJlTCwyRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbG9nb3V0QnV0dG9uLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG11dGF0ZSB9IGZyb20gJ3N3cidcbmltcG9ydCB7IGZldGNoZXIgfSBmcm9tICcuL3V0aWwvZmV0Y2hlcidcblxuY29uc3QgTG9nb3V0QnV0dG9uID0gKCkgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgb25DbGljayA9IHsgYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBmZXRjaGVyKFwiL2FwaS9sb2dvdXRcIilcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgYWxlcnQoZXJyb3IpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgbXV0YXRlKFwiL2FwaS9zZXRcIilcbiAgICAgIH19PlxuICAgICAgTGVhdmUgU2V0XG4gICAgPC9idXR0b24+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9nb3V0QnV0dG9uXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/logoutButton.tsx\n");

/***/ }),

/***/ "./components/songs.tsx":
/*!******************************!*\
  !*** ./components/songs.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deleteSongButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteSongButton */ \"./components/deleteSongButton.tsx\");\n/* harmony import */ var _util_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/hooks */ \"./components/util/hooks.tsx\");\nvar _jsxFileName = \"/Users/elie/code/ehymowitz/set-sharer/components/songs.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst Songs = () => {\n  const {\n    songs\n  } = Object(_util_hooks__WEBPACK_IMPORTED_MODULE_2__[\"useSongs\"])();\n  return songs ? __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, __jsx(\"ul\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }, songs.map((song, index) => {\n    return __jsx(\"li\", {\n      key: index,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 13\n      }\n    }, __jsx(\"p\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 15\n      }\n    }, song.title), __jsx(_deleteSongButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      song: song,\n      songs: songs,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 15\n      }\n    }));\n  }))) : __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }, __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, \"test\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Songs);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NvbmdzLnRzeD82YjNjIl0sIm5hbWVzIjpbIlNvbmdzIiwic29uZ3MiLCJ1c2VTb25ncyIsIm1hcCIsInNvbmciLCJpbmRleCIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLEtBQUssR0FBRyxNQUFNO0FBQ2xCLFFBQU07QUFBRUM7QUFBRixNQUFZQyw0REFBUSxFQUExQjtBQUVBLFNBQU9ELEtBQUssR0FDVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSxLQUFLLENBQUNFLEdBQU4sQ0FBVSxDQUFDQyxJQUFELEVBQU9DLEtBQVAsS0FBaUI7QUFDMUIsV0FDRTtBQUFJLFNBQUcsRUFBSUEsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJRCxJQUFJLENBQUNFLEtBQVQsQ0FERixFQUVFLE1BQUMseURBQUQ7QUFBa0IsVUFBSSxFQUFFRixJQUF4QjtBQUE4QixXQUFLLEVBQUVILEtBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixDQURGO0FBTUQsR0FQQSxDQURILENBREYsQ0FEVSxHQWNWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsQ0FkRjtBQWtCRCxDQXJCRDs7QUF1QmVELG9FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zb25ncy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgRGVsZXRlU29uZ0J1dHRvbiBmcm9tICcuL2RlbGV0ZVNvbmdCdXR0b24nXG5pbXBvcnQgeyB1c2VTb25ncyB9IGZyb20gJy4vdXRpbC9ob29rcydcblxuY29uc3QgU29uZ3MgPSAoKSA9PiB7XG4gIGNvbnN0IHsgc29uZ3MgfSA9IHVzZVNvbmdzKClcblxuICByZXR1cm4gc29uZ3MgPyAoXG4gICAgPGRpdj5cbiAgICAgIDx1bD5cbiAgICAgICAge3NvbmdzLm1hcCgoc29uZywgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGtleSA9IHtpbmRleH0+XG4gICAgICAgICAgICAgIDxwPntzb25nLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgPERlbGV0ZVNvbmdCdXR0b24gc29uZz17c29uZ30gc29uZ3M9e3NvbmdzfS8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApIDogKFxuICAgIDxkaXY+XG4gICAgICA8cD50ZXN0PC9wPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNvbmdzXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/songs.tsx\n");

/***/ }),

/***/ "./components/util/fetcher.tsx":
/*!*************************************!*\
  !*** ./components/util/fetcher.tsx ***!
  \*************************************/
/*! exports provided: fetcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetcher\", function() { return fetcher; });\nconst fetcher = (url, data = undefined) => fetch(\"http://localhost:3000\" + url, {\n  method: data ? \"POST\" : \"GET\",\n  credentials: \"include\",\n  headers: {\n    \"Content-Type\": \"application/json\"\n  },\n  body: JSON.stringify(data)\n}).then(r => r.json());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3V0aWwvZmV0Y2hlci50c3g/YWM2MSJdLCJuYW1lcyI6WyJmZXRjaGVyIiwidXJsIiwiZGF0YSIsInVuZGVmaW5lZCIsImZldGNoIiwibWV0aG9kIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwiciIsImpzb24iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBTyxNQUFNQSxPQUFPLEdBQUcsQ0FBQ0MsR0FBRCxFQUFNQyxJQUFJLEdBQUdDLFNBQWIsS0FDckJDLEtBQUssQ0FBQywwQkFBMEJILEdBQTNCLEVBQWdDO0FBQ25DSSxRQUFNLEVBQUVILElBQUksR0FBRyxNQUFILEdBQVksS0FEVztBQUVuQ0ksYUFBVyxFQUFFLFNBRnNCO0FBR25DQyxTQUFPLEVBQUU7QUFDUCxvQkFBZ0I7QUFEVCxHQUgwQjtBQU1uQ0MsTUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVIsSUFBZjtBQU42QixDQUFoQyxDQUFMLENBT0dTLElBUEgsQ0FPU0MsQ0FBQyxJQUFJQSxDQUFDLENBQUNDLElBQUYsRUFQZCxDQURLIiwiZmlsZSI6Ii4vY29tcG9uZW50cy91dGlsL2ZldGNoZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGZldGNoZXIgPSAodXJsLCBkYXRhID0gdW5kZWZpbmVkKSA9PiAoXG4gIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCIgKyB1cmwsIHtcbiAgICBtZXRob2Q6IGRhdGEgPyBcIlBPU1RcIiA6IFwiR0VUXCIsXG4gICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gIH0pLnRoZW4oIHIgPT4gci5qc29uKCkpXG4pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/util/fetcher.tsx\n");

/***/ }),

/***/ "./components/util/hooks.tsx":
/*!***********************************!*\
  !*** ./components/util/hooks.tsx ***!
  \***********************************/
/*! exports provided: useSongs, useGigInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useSongs\", function() { return useSongs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useGigInfo\", function() { return useGigInfo; });\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetcher */ \"./components/util/fetcher.tsx\");\n\n\nfunction useSongs() {\n  const {\n    data: songs\n  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(\"/api/songs\", _fetcher__WEBPACK_IMPORTED_MODULE_1__[\"fetcher\"]);\n  return {\n    songs\n  };\n}\nfunction useGigInfo() {\n  const {\n    data: gigInfo\n  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(\"/api/set\", _fetcher__WEBPACK_IMPORTED_MODULE_1__[\"fetcher\"]);\n  return {\n    gigInfo\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3V0aWwvaG9va3MudHN4PzE1MTkiXSwibmFtZXMiOlsidXNlU29uZ3MiLCJkYXRhIiwic29uZ3MiLCJ1c2VTV1IiLCJmZXRjaGVyIiwidXNlR2lnSW5mbyIsImdpZ0luZm8iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFTyxTQUFTQSxRQUFULEdBQW9CO0FBQ3pCLFFBQU07QUFBRUMsUUFBSSxFQUFFQztBQUFSLE1BQXFEQywwQ0FBTSxDQUFDLFlBQUQsRUFBZUMsZ0RBQWYsQ0FBakU7QUFDQSxTQUFPO0FBQUVGO0FBQUYsR0FBUDtBQUNEO0FBRU0sU0FBU0csVUFBVCxHQUFzQjtBQUMzQixRQUFNO0FBQUVKLFFBQUksRUFBRUs7QUFBUixNQUFvQ0gsMENBQU0sQ0FBQyxVQUFELEVBQWFDLGdEQUFiLENBQWhEO0FBQ0EsU0FBTztBQUFFRTtBQUFGLEdBQVA7QUFDRCIsImZpbGUiOiIuL2NvbXBvbmVudHMvdXRpbC9ob29rcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcbmltcG9ydCAgeyBTb25nLCBTZXQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcbmltcG9ydCB7IGZldGNoZXIgfSBmcm9tICcuL2ZldGNoZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VTb25ncygpIHtcbiAgY29uc3QgeyBkYXRhOiBzb25ncyB9OiB7IGRhdGE/OiAoU29uZyAmIHsgU2V0OiBTZXR9KVtdIH0gPSB1c2VTV1IoXCIvYXBpL3NvbmdzXCIsIGZldGNoZXIpXG4gIHJldHVybiB7IHNvbmdzIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUdpZ0luZm8oKSB7XG4gIGNvbnN0IHsgZGF0YTogZ2lnSW5mbyB9OiB7IGRhdGE/OiBTZXQgfSA9IHVzZVNXUihcIi9hcGkvc2V0XCIsIGZldGNoZXIpXG4gIHJldHVybiB7IGdpZ0luZm8gfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/util/hooks.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_songs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/songs */ \"./components/songs.tsx\");\n/* harmony import */ var _components_createSong__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/createSong */ \"./components/createSong.tsx\");\n/* harmony import */ var _components_gig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/gig */ \"./components/gig.tsx\");\nvar _jsxFileName = \"/Users/elie/code/ehymowitz/set-sharer/pages/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst Home = () => {\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, \"Set Sharer\", __jsx(_components_songs__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }), __jsx(_components_createSong__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }), __jsx(_components_gig__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJIb21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLElBQUksR0FBRyxNQUFNO0FBQ2pCLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBSUUsTUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsQ0FERjtBQVFELENBVEQ7O0FBV2VBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFNvbmdzIGZyb20gJy4uL2NvbXBvbmVudHMvc29uZ3MnXG5pbXBvcnQgQ3JlYXRlU29uZyBmcm9tICcuLi9jb21wb25lbnRzL2NyZWF0ZVNvbmcnXG5pbXBvcnQgR2lnIGZyb20gJy4uL2NvbXBvbmVudHMvZ2lnJ1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICBTZXQgU2hhcmVyXG4gICAgICA8U29uZ3MvPlxuICAgICAgPENyZWF0ZVNvbmcvPlxuICAgICAgPEdpZy8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"swr\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzd3JcIj9jMjg5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InN3ci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3clwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///swr\n");

/***/ })

/******/ });