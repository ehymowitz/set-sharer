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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _util_fetcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/fetcher */ \"./components/util/fetcher.tsx\");\nvar _jsxFileName = \"/Users/elie/code/ehymowitz/set-sharer/components/createGigForm.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst CreateGigForm = () => {\n  const {\n    0: gigName,\n    1: setGigName\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const {\n    0: password,\n    1: setPassword\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const {\n    0: login,\n    1: setLogin\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const {\n    0: loading,\n    1: setLoading\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }, __jsx(\"form\", {\n    onSubmit: async e => {\n      e.preventDefault();\n\n      if (gigName.length === 0 || password.length === 0) {\n        alert(\"You can't have a blank Gig Name or Password\");\n      }\n\n      setLoading(true);\n      const {\n        data,\n        error\n      } = await Object(_util_fetcher__WEBPACK_IMPORTED_MODULE_2__[\"fetcher\"])(`/api/${login ? \"login\" : \"create\"}`, {\n        gigName,\n        password\n      });\n\n      if (error) {\n        console.log(error);\n        setLoading(false);\n        return;\n      }\n\n      await Object(swr__WEBPACK_IMPORTED_MODULE_1__[\"mutate\"])(\"api/set\");\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    value: gigName,\n    onChange: e => setGigName(e.target.value),\n    placeholder: \"Gig Name\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    value: password,\n    onChange: e => setPassword(e.target.value),\n    placeholder: \"Password\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"submit\",\n    value: login ? \"View a gig\" : \"Create a gig\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateGigForm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NyZWF0ZUdpZ0Zvcm0udHN4P2NmZmYiXSwibmFtZXMiOlsiQ3JlYXRlR2lnRm9ybSIsImdpZ05hbWUiLCJzZXRHaWdOYW1lIiwidXNlU3RhdGUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwibG9naW4iLCJzZXRMb2dpbiIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZSIsInByZXZlbnREZWZhdWx0IiwibGVuZ3RoIiwiYWxlcnQiLCJkYXRhIiwiZXJyb3IiLCJmZXRjaGVyIiwiY29uc29sZSIsImxvZyIsIm11dGF0ZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxhQUFhLEdBQUcsTUFBTTtBQUMxQixRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JDLHNEQUFRLENBQUMsRUFBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkYsc0RBQVEsQ0FBQyxFQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CSixzREFBUSxDQUFDLEtBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0ssT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JOLHNEQUFRLENBQUMsS0FBRCxDQUF0QztBQUVBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsWUFBUSxFQUFFLE1BQU1PLENBQU4sSUFBVztBQUNuQkEsT0FBQyxDQUFDQyxjQUFGOztBQUNBLFVBQUlWLE9BQU8sQ0FBQ1csTUFBUixLQUFtQixDQUFuQixJQUF3QlIsUUFBUSxDQUFDUSxNQUFULEtBQW9CLENBQWhELEVBQW1EO0FBQ2pEQyxhQUFLLENBQ0gsNkNBREcsQ0FBTDtBQUdEOztBQUNESixnQkFBVSxDQUFDLElBQUQsQ0FBVjtBQUNBLFlBQU07QUFBRUssWUFBRjtBQUFRQztBQUFSLFVBQWtCLE1BQU1DLDZEQUFPLENBQ2xDLFFBQU9WLEtBQUssR0FBRyxPQUFILEdBQWEsUUFBVSxFQURELEVBRW5DO0FBQ0VMLGVBREY7QUFFRUc7QUFGRixPQUZtQyxDQUFyQzs7QUFPQSxVQUFJVyxLQUFKLEVBQVc7QUFDVEUsZUFBTyxDQUFDQyxHQUFSLENBQVlILEtBQVo7QUFDQU4sa0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDQTtBQUNEOztBQUNELFlBQU1VLGtEQUFNLENBQUMsU0FBRCxDQUFaO0FBQ0QsS0F0Qkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQXdCRTtBQUNFLFNBQUssRUFBSWxCLE9BRFg7QUFFRSxZQUFRLEVBQUdTLENBQUMsSUFBR1IsVUFBVSxDQUFDUSxDQUFDLENBQUNVLE1BQUYsQ0FBU0MsS0FBVixDQUYzQjtBQUdFLGVBQVcsRUFBRyxVQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBeEJGLEVBNkJFO0FBQ0UsU0FBSyxFQUFJakIsUUFEWDtBQUVFLFlBQVEsRUFBR00sQ0FBQyxJQUFHTCxXQUFXLENBQUNLLENBQUMsQ0FBQ1UsTUFBRixDQUFTQyxLQUFWLENBRjVCO0FBR0UsZUFBVyxFQUFHLFVBSGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE3QkYsRUFrQ0U7QUFBTyxRQUFJLEVBQUMsUUFBWjtBQUFxQixTQUFLLEVBQUVmLEtBQUssR0FBRyxZQUFILEdBQWtCLGNBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFsQ0YsQ0FERixDQURGO0FBd0NELENBOUNEOztBQWdEZU4sNEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2NyZWF0ZUdpZ0Zvcm0udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtdXRhdGUgfSBmcm9tICdzd3InXG5pbXBvcnQgeyBmZXRjaGVyIH0gZnJvbSAnLi91dGlsL2ZldGNoZXInXG5cbmNvbnN0IENyZWF0ZUdpZ0Zvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IFtnaWdOYW1lLCBzZXRHaWdOYW1lXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW2xvZ2luLCBzZXRMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGZvcm1cbiAgICAgICAgb25TdWJtaXQ9e2FzeW5jIGUgPT4ge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGlmIChnaWdOYW1lLmxlbmd0aCA9PT0gMCB8fCBwYXNzd29yZC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGFsZXJ0KFxuICAgICAgICAgICAgICBcIllvdSBjYW4ndCBoYXZlIGEgYmxhbmsgR2lnIE5hbWUgb3IgUGFzc3dvcmRcIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgICAgICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgZmV0Y2hlcihcbiAgICAgICAgICAgIGAvYXBpLyR7bG9naW4gPyBcImxvZ2luXCIgOiBcImNyZWF0ZVwiIH1gLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBnaWdOYW1lLFxuICAgICAgICAgICAgICBwYXNzd29yZFxuICAgICAgICAgICAgfVxuICAgICAgICAgIClcbiAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBhd2FpdCBtdXRhdGUoXCJhcGkvc2V0XCIpXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHZhbHVlID0ge2dpZ05hbWV9XG4gICAgICAgICAgb25DaGFuZ2U9IHtlID0+c2V0R2lnTmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgcGxhY2Vob2xkZXIgPSBcIkdpZyBOYW1lXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdmFsdWUgPSB7cGFzc3dvcmR9XG4gICAgICAgICAgb25DaGFuZ2U9IHtlID0+c2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHBsYWNlaG9sZGVyID0gXCJQYXNzd29yZFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9e2xvZ2luID8gXCJWaWV3IGEgZ2lnXCIgOiBcIkNyZWF0ZSBhIGdpZ1wifS8+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlR2lnRm9ybVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/createGigForm.tsx\n");

/***/ }),

/***/ "./components/createSong.tsx":
/*!***********************************!*\
  !*** ./components/createSong.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _util_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/hooks */ \"./components/util/hooks.tsx\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _util_fetcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/fetcher */ \"./components/util/fetcher.tsx\");\nvar _jsxFileName = \"/Users/elie/code/ehymowitz/set-sharer/components/createSong.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst CreateSong = () => {\n  const {\n    0: title,\n    1: setTitle\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const {\n    0: artist,\n    1: setArtist\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const {\n    songs\n  } = Object(_util_hooks__WEBPACK_IMPORTED_MODULE_1__[\"useSongs\"])();\n  return __jsx(\"form\", {\n    onSubmit: async e => {\n      e.preventDefault();\n      Object(swr__WEBPACK_IMPORTED_MODULE_2__[\"mutate\"])(\"/api/songs\", [{\n        title: title,\n        artist: artist,\n        Set: _util_hooks__WEBPACK_IMPORTED_MODULE_1__[\"useGigInfo\"]\n      }, ...songs], false);\n      Object(_util_fetcher__WEBPACK_IMPORTED_MODULE_3__[\"fetcher\"])(\"/api/song/create\", {\n        title: title,\n        artist: artist\n      });\n      setTitle(\"\");\n      setArtist(\"\");\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }, __jsx(\"input\", {\n    value: title,\n    onChange: e => setTitle(e.target.value),\n    placeholder: \"Song Name\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }), __jsx(\"input\", {\n    value: artist,\n    onChange: e => setArtist(e.target.value),\n    placeholder: \"Song Artist\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }), __jsx(\"input\", {\n    type: \"submit\",\n    value: \"add\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateSong);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NyZWF0ZVNvbmcudHN4PzdkOGQiXSwibmFtZXMiOlsiQ3JlYXRlU29uZyIsInRpdGxlIiwic2V0VGl0bGUiLCJ1c2VTdGF0ZSIsImFydGlzdCIsInNldEFydGlzdCIsInNvbmdzIiwidXNlU29uZ3MiLCJlIiwicHJldmVudERlZmF1bHQiLCJtdXRhdGUiLCJTZXQiLCJ1c2VHaWdJbmZvIiwiZmV0Y2hlciIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxVQUFVLEdBQUcsTUFBTTtBQUN2QixRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHNEQUFRLENBQUMsRUFBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkYsc0RBQVEsQ0FBQyxFQUFELENBQXBDO0FBQ0EsUUFBTTtBQUFFRztBQUFGLE1BQVlDLDREQUFRLEVBQTFCO0FBRUEsU0FDRTtBQUNFLFlBQVEsRUFBSSxNQUFNQyxDQUFOLElBQVc7QUFDbkJBLE9BQUMsQ0FBQ0MsY0FBRjtBQUVBQyx3REFBTSxDQUFDLFlBQUQsRUFBZSxDQUFDO0FBQUNULGFBQUssRUFBRUEsS0FBUjtBQUFlRyxjQUFNLEVBQUVBLE1BQXZCO0FBQStCTyxXQUFHLEVBQUVDLHNEQUFVQTtBQUE5QyxPQUFELEVBQWtELEdBQUdOLEtBQXJELENBQWYsRUFBNEUsS0FBNUUsQ0FBTjtBQUNBTyxtRUFBTyxDQUFDLGtCQUFELEVBQXFCO0FBQzFCWixhQUFLLEVBQUVBLEtBRG1CO0FBRTFCRyxjQUFNLEVBQUVBO0FBRmtCLE9BQXJCLENBQVA7QUFJQUYsY0FBUSxDQUFDLEVBQUQsQ0FBUjtBQUNBRyxlQUFTLENBQUMsRUFBRCxDQUFUO0FBQ0gsS0FYSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBYUU7QUFBTyxTQUFLLEVBQUlKLEtBQWhCO0FBQXVCLFlBQVEsRUFBS08sQ0FBQyxJQUFJTixRQUFRLENBQUNNLENBQUMsQ0FBQ00sTUFBRixDQUFTQyxLQUFWLENBQWpEO0FBQW1FLGVBQVcsRUFBRyxXQUFqRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYkYsRUFjRTtBQUFPLFNBQUssRUFBSVgsTUFBaEI7QUFBd0IsWUFBUSxFQUFLSSxDQUFDLElBQUlILFNBQVMsQ0FBQ0csQ0FBQyxDQUFDTSxNQUFGLENBQVNDLEtBQVYsQ0FBbkQ7QUFBcUUsZUFBVyxFQUFHLGFBQW5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkRixFQWVFO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBcUIsU0FBSyxFQUFDLEtBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFmRixDQURGO0FBbUJELENBeEJEOztBQTBCZWYseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2NyZWF0ZVNvbmcudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTb25ncywgdXNlR2lnSW5mbyB9IGZyb20gJy4vdXRpbC9ob29rcydcbmltcG9ydCB7IG11dGF0ZSB9IGZyb20gJ3N3cidcbmltcG9ydCB7IGZldGNoZXIgfSBmcm9tICcuL3V0aWwvZmV0Y2hlcidcblxuY29uc3QgQ3JlYXRlU29uZyA9ICgpID0+IHtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbYXJ0aXN0LCBzZXRBcnRpc3RdID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgeyBzb25ncyB9ID0gdXNlU29uZ3MoKVxuXG4gIHJldHVybiAoXG4gICAgPGZvcm1cbiAgICAgIG9uU3VibWl0ID0ge2FzeW5jIGUgPT4ge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgICAgbXV0YXRlKFwiL2FwaS9zb25nc1wiLCBbe3RpdGxlOiB0aXRsZSwgYXJ0aXN0OiBhcnRpc3QsIFNldDogdXNlR2lnSW5mb30sIC4uLnNvbmdzXSwgZmFsc2UpXG4gICAgICAgICAgZmV0Y2hlcihcIi9hcGkvc29uZy9jcmVhdGVcIiwge1xuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgYXJ0aXN0OiBhcnRpc3QsXG4gICAgICAgICAgfSlcbiAgICAgICAgICBzZXRUaXRsZShcIlwiKVxuICAgICAgICAgIHNldEFydGlzdChcIlwiKVxuICAgICAgfX1cbiAgICA+XG4gICAgICA8aW5wdXQgdmFsdWUgPSB7dGl0bGV9IG9uQ2hhbmdlID0geyBlID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX0gcGxhY2Vob2xkZXIgPSBcIlNvbmcgTmFtZVwiLz5cbiAgICAgIDxpbnB1dCB2YWx1ZSA9IHthcnRpc3R9IG9uQ2hhbmdlID0geyBlID0+IHNldEFydGlzdChlLnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyID0gXCJTb25nIEFydGlzdFwiLz5cbiAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJhZGRcIi8+XG4gICAgPC9mb3JtPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZVNvbmdcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/createSong.tsx\n");

/***/ }),

/***/ "./components/deleteSongButton.tsx":
/*!*****************************************!*\
  !*** ./components/deleteSongButton.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _util_fetcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/fetcher */ \"./components/util/fetcher.tsx\");\nvar _jsxFileName = \"/Users/elie/code/ehymowitz/set-sharer/components/deleteSongButton.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst DeleteSongButton = ({\n  song,\n  songs\n}) => {\n  return __jsx(\"div\", {\n    style: {\n      backgroundColor: 'red',\n      width: '20px',\n      height: '20px'\n    },\n    onClick: async () => {\n      await Object(_util_fetcher__WEBPACK_IMPORTED_MODULE_2__[\"fetcher\"])(\"/api/song/delete\", {\n        id: song.id\n      });\n      await Object(swr__WEBPACK_IMPORTED_MODULE_1__[\"mutate\"])(\"/api/songs\", songs.filter(s => s.id !== song.id));\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DeleteSongButton);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2RlbGV0ZVNvbmdCdXR0b24udHN4P2ZhOWIiXSwibmFtZXMiOlsiRGVsZXRlU29uZ0J1dHRvbiIsInNvbmciLCJzb25ncyIsImJhY2tncm91bmRDb2xvciIsIndpZHRoIiwiaGVpZ2h0IiwiZmV0Y2hlciIsImlkIiwibXV0YXRlIiwiZmlsdGVyIiwicyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsZ0JBQWdCLEdBQUcsQ0FBQztBQUFFQyxNQUFGO0FBQVFDO0FBQVIsQ0FBRCxLQUFvQjtBQUMzQyxTQUNFO0FBQUssU0FBSyxFQUFJO0FBQUNDLHFCQUFlLEVBQUUsS0FBbEI7QUFBeUJDLFdBQUssRUFBRSxNQUFoQztBQUF3Q0MsWUFBTSxFQUFFO0FBQWhELEtBQWQ7QUFDRSxXQUFPLEVBQUssWUFBWTtBQUN0QixZQUFNQyw2REFBTyxDQUFDLGtCQUFELEVBQXFCO0FBQUVDLFVBQUUsRUFBRU4sSUFBSSxDQUFDTTtBQUFYLE9BQXJCLENBQWI7QUFDQSxZQUFNQyxrREFBTSxDQUFDLFlBQUQsRUFBZU4sS0FBSyxDQUFDTyxNQUFOLENBQWNDLENBQUMsSUFBSUEsQ0FBQyxDQUFDSCxFQUFGLEtBQVNOLElBQUksQ0FBQ00sRUFBakMsQ0FBZixDQUFaO0FBQ0QsS0FKSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7QUFVRCxDQVhEOztBQWFlUCwrRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvZGVsZXRlU29uZ0J1dHRvbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtdXRhdGUgfSBmcm9tICdzd3InXG5pbXBvcnQgeyBmZXRjaGVyIH0gZnJvbSAnLi91dGlsL2ZldGNoZXInXG5cbmNvbnN0IERlbGV0ZVNvbmdCdXR0b24gPSAoeyBzb25nLCBzb25nc30pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlID0ge3tiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLCB3aWR0aDogJzIwcHgnLCBoZWlnaHQ6ICcyMHB4J319XG4gICAgICBvbkNsaWNrID0geyBhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IGZldGNoZXIoXCIvYXBpL3NvbmcvZGVsZXRlXCIsIHsgaWQ6IHNvbmcuaWQgfSlcbiAgICAgICAgYXdhaXQgbXV0YXRlKFwiL2FwaS9zb25nc1wiLCBzb25ncy5maWx0ZXIoIHMgPT4gcy5pZCAhPT0gc29uZy5pZCApKVxuICAgICAgfX1cbiAgICA+XG5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZWxldGVTb25nQnV0dG9uXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/deleteSongButton.tsx\n");

/***/ }),

/***/ "./components/gig.tsx":
/*!****************************!*\
  !*** ./components/gig.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _util_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/hooks */ \"./components/util/hooks.tsx\");\n/* harmony import */ var _createGigForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createGigForm */ \"./components/createGigForm.tsx\");\n/* harmony import */ var _logoutButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logoutButton */ \"./components/logoutButton.tsx\");\nvar _jsxFileName = \"/Users/elie/code/ehymowitz/set-sharer/components/gig.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst Gig = () => {\n  const {\n    gigInfo\n  } = Object(_util_hooks__WEBPACK_IMPORTED_MODULE_1__[\"useGigInfo\"])();\n  const {\n    0: loading,\n    1: setLoading\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])();\n  if (!gigInfo) return null;\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }, !gigInfo.setName ? __jsx(_createGigForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }) : __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, \"Viewing set: \", __jsx(\"strong\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 24\n    }\n  }, gigInfo.setName), __jsx(_logoutButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 11\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gig);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dpZy50c3g/N2RhOCJdLCJuYW1lcyI6WyJHaWciLCJnaWdJbmZvIiwidXNlR2lnSW5mbyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlU3RhdGUiLCJzZXROYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLEdBQUcsR0FBRyxNQUFNO0FBQ2hCLFFBQU07QUFBRUM7QUFBRixNQUFjQyw4REFBVSxFQUE5QjtBQUNBLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkMsc0RBQVEsRUFBdEM7QUFDQSxNQUFJLENBQUNKLE9BQUwsRUFBYyxPQUFPLElBQVA7QUFFZCxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRyxDQUFDQSxPQUFPLENBQUNLLE9BQVQsR0FDQyxNQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxHQUdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQ2U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFTTCxPQUFPLENBQUNLLE9BQWpCLENBRGYsRUFFRSxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQUpKLENBREY7QUFZRCxDQWpCRDs7QUFtQmVOLGtFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9naWcudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VHaWdJbmZvIH0gZnJvbSAnLi91dGlsL2hvb2tzJ1xuaW1wb3J0IENyZWF0ZUdpZ0Zvcm0gZnJvbSAnLi9jcmVhdGVHaWdGb3JtJ1xuaW1wb3J0IExvZ291dEJ1dHRvbiBmcm9tICcuL2xvZ291dEJ1dHRvbidcblxuY29uc3QgR2lnID0gKCkgPT4ge1xuICBjb25zdCB7IGdpZ0luZm8gfSA9IHVzZUdpZ0luZm8oKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSgpXG4gIGlmICghZ2lnSW5mbykgcmV0dXJuIG51bGxcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7IWdpZ0luZm8uc2V0TmFtZSA/IChcbiAgICAgICAgPENyZWF0ZUdpZ0Zvcm0gLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxwPlxuICAgICAgICAgIFZpZXdpbmcgc2V0OiA8c3Ryb25nPntnaWdJbmZvLnNldE5hbWV9PC9zdHJvbmc+XG4gICAgICAgICAgPExvZ291dEJ1dHRvbiAvPlxuICAgICAgICA8L3A+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdpZ1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/gig.tsx\n");

/***/ }),

/***/ "./components/logoutButton.tsx":
/*!*************************************!*\
  !*** ./components/logoutButton.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _util_fetcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/fetcher */ \"./components/util/fetcher.tsx\");\nvar _jsxFileName = \"/Users/elie/code/ehymowitz/set-sharer/components/logoutButton.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst LogoutButton = () => {\n  const {\n    0: loading,\n    1: setLoading\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  return __jsx(\"button\", {\n    onClick: async () => {\n      setLoading(true);\n      const {\n        data,\n        error\n      } = await Object(_util_fetcher__WEBPACK_IMPORTED_MODULE_2__[\"fetcher\"])(\"/api/logout\");\n\n      if (error) {\n        console.log(error);\n        setLoading(false);\n        return;\n      }\n\n      await Object(swr__WEBPACK_IMPORTED_MODULE_1__[\"mutate\"])(\"/api/set\");\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, \"Leave Set\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LogoutButton);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xvZ291dEJ1dHRvbi50c3g/OTk5MiJdLCJuYW1lcyI6WyJMb2dvdXRCdXR0b24iLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZVN0YXRlIiwiZGF0YSIsImVycm9yIiwiZmV0Y2hlciIsImNvbnNvbGUiLCJsb2ciLCJtdXRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFlBQVksR0FBRyxNQUFNO0FBQ3pCLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkMsc0RBQVEsQ0FBQyxLQUFELENBQXRDO0FBRUEsU0FDRTtBQUNFLFdBQU8sRUFBSyxZQUFZO0FBQ3RCRCxnQkFBVSxDQUFDLElBQUQsQ0FBVjtBQUNBLFlBQU07QUFBRUUsWUFBRjtBQUFRQztBQUFSLFVBQWtCLE1BQU1DLDZEQUFPLENBQUMsYUFBRCxDQUFyQzs7QUFDQSxVQUFJRCxLQUFKLEVBQVc7QUFDVEUsZUFBTyxDQUFDQyxHQUFSLENBQVlILEtBQVo7QUFDQUgsa0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDQTtBQUNEOztBQUNELFlBQU1PLGtEQUFNLENBQUMsVUFBRCxDQUFaO0FBQ0QsS0FWSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBZUQsQ0FsQkQ7O0FBb0JlVCwyRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbG9nb3V0QnV0dG9uLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbXV0YXRlIH0gZnJvbSAnc3dyJ1xuaW1wb3J0IHsgZmV0Y2hlciB9IGZyb20gJy4vdXRpbC9mZXRjaGVyJ1xuXG5jb25zdCBMb2dvdXRCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgb25DbGljayA9IHsgYXN5bmMgKCkgPT4ge1xuICAgICAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IGZldGNoZXIoXCIvYXBpL2xvZ291dFwiKVxuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGF3YWl0IG11dGF0ZShcIi9hcGkvc2V0XCIpXG4gICAgICB9fT5cbiAgICAgIExlYXZlIFNldFxuICAgIDwvYnV0dG9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ291dEJ1dHRvblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/logoutButton.tsx\n");

/***/ }),

/***/ "./components/songs.tsx":
/*!******************************!*\
  !*** ./components/songs.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deleteSongButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteSongButton */ \"./components/deleteSongButton.tsx\");\n/* harmony import */ var _util_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/hooks */ \"./components/util/hooks.tsx\");\nvar _jsxFileName = \"/Users/elie/code/ehymowitz/set-sharer/components/songs.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst Songs = () => {\n  const {\n    songs\n  } = Object(_util_hooks__WEBPACK_IMPORTED_MODULE_2__[\"useSongs\"])();\n  return songs ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"ul\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }, songs.map((item, i) => __jsx(\"li\", {\n    key: i,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }\n  }, item.title, item.artist), __jsx(_deleteSongButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    song: item,\n    songs: songs,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }\n  }))))) : null;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Songs);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NvbmdzLnRzeD82YjNjIl0sIm5hbWVzIjpbIlNvbmdzIiwic29uZ3MiLCJ1c2VTb25ncyIsIm1hcCIsIml0ZW0iLCJpIiwidGl0bGUiLCJhcnRpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsS0FBSyxHQUFHLE1BQU07QUFDbEIsUUFBTTtBQUFFQztBQUFGLE1BQVlDLDREQUFRLEVBQTFCO0FBRUEsU0FBT0QsS0FBSyxHQUNWLG1FQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsS0FBSyxDQUFDRSxHQUFOLENBQVUsQ0FBQ0MsSUFBRCxFQUFPQyxDQUFQLEtBQ1Q7QUFBSSxPQUFHLEVBQUVBLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0QsSUFBSSxDQUFDRSxLQURSLEVBRUdGLElBQUksQ0FBQ0csTUFGUixDQURGLEVBS0UsTUFBQyx5REFBRDtBQUFrQixRQUFJLEVBQUlILElBQTFCO0FBQWdDLFNBQUssRUFBSUgsS0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLENBREQsQ0FESCxDQURGLENBRFUsR0FjUixJQWRKO0FBZUQsQ0FsQkQ7O0FBb0JlRCxvRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvc29uZ3MudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IERlbGV0ZVNvbmdCdXR0b24gZnJvbSAnLi9kZWxldGVTb25nQnV0dG9uJ1xuaW1wb3J0IHsgdXNlU29uZ3MgfSBmcm9tICcuL3V0aWwvaG9va3MnXG5cbmNvbnN0IFNvbmdzID0gKCkgPT4ge1xuICBjb25zdCB7IHNvbmdzIH0gPSB1c2VTb25ncygpXG5cbiAgcmV0dXJuIHNvbmdzID8gKFxuICAgIDw+XG4gICAgICA8dWw+XG4gICAgICAgIHtzb25ncy5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICA8bGkga2V5PXtpfT5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAge2l0ZW0uYXJ0aXN0fVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPERlbGV0ZVNvbmdCdXR0b24gc29uZyA9IHtpdGVtfSBzb25ncyA9IHtzb25nc30vPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8Lz5cbiAgKSA6IG51bGxcbn1cblxuZXhwb3J0IGRlZmF1bHQgU29uZ3NcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/songs.tsx\n");

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