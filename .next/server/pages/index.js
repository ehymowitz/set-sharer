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

/***/ "./components/createSong.tsx":
/*!***********************************!*\
  !*** ./components/createSong.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _util_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/hooks */ \"./components/util/hooks.tsx\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/elie/code/ehymowitz/set-sharer/components/createSong.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst CreateSong = () => {\n  const {\n    0: title,\n    1: setTitle\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const {\n    0: artist,\n    1: setArtist\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const {\n    songs\n  } = Object(_util_hooks__WEBPACK_IMPORTED_MODULE_1__[\"useSongs\"])();\n  return __jsx(\"form\", {\n    onSubmit: async e => {\n      e.preventDefault();\n      Object(swr__WEBPACK_IMPORTED_MODULE_2__[\"mutate\"])(\"/api/songs\", [{\n        title: title,\n        artist: artist\n      }, ...songs], false);\n      setTitle(\"\");\n      setArtist(\"\");\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, __jsx(\"input\", {\n    value: title,\n    onChange: e => setTitle(e.target.value),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }), __jsx(\"input\", {\n    value: artist,\n    onChange: e => setArtist(e.target.value),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }), __jsx(\"input\", {\n    type: \"submit\",\n    value: \"add\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateSong);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NyZWF0ZVNvbmcudHN4PzdkOGQiXSwibmFtZXMiOlsiQ3JlYXRlU29uZyIsInRpdGxlIiwic2V0VGl0bGUiLCJ1c2VTdGF0ZSIsImFydGlzdCIsInNldEFydGlzdCIsInNvbmdzIiwidXNlU29uZ3MiLCJlIiwicHJldmVudERlZmF1bHQiLCJtdXRhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsVUFBVSxHQUFHLE1BQU07QUFDdkIsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQyxzREFBUSxDQUFDLEVBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JGLHNEQUFRLENBQUMsRUFBRCxDQUFwQztBQUNBLFFBQU07QUFBRUc7QUFBRixNQUFZQyw0REFBUSxFQUExQjtBQUVBLFNBQ0U7QUFDRSxZQUFRLEVBQUksTUFBTUMsQ0FBTixJQUFXO0FBQ25CQSxPQUFDLENBQUNDLGNBQUY7QUFFQUMsd0RBQU0sQ0FBQyxZQUFELEVBQWUsQ0FBQztBQUFDVCxhQUFLLEVBQUVBLEtBQVI7QUFBZUcsY0FBTSxFQUFFQTtBQUF2QixPQUFELEVBQWlDLEdBQUdFLEtBQXBDLENBQWYsRUFBMkQsS0FBM0QsQ0FBTjtBQUNBSixjQUFRLENBQUMsRUFBRCxDQUFSO0FBQ0FHLGVBQVMsQ0FBQyxFQUFELENBQVQ7QUFDSCxLQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTRTtBQUFPLFNBQUssRUFBSUosS0FBaEI7QUFBdUIsWUFBUSxFQUFLTyxDQUFDLElBQUlOLFFBQVEsQ0FBQ00sQ0FBQyxDQUFDRyxNQUFGLENBQVNDLEtBQVYsQ0FBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLEVBVUU7QUFBTyxTQUFLLEVBQUlSLE1BQWhCO0FBQXdCLFlBQVEsRUFBS0ksQ0FBQyxJQUFJSCxTQUFTLENBQUNHLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxLQUFWLENBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixFQVdFO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBcUIsU0FBSyxFQUFDLEtBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRixDQURGO0FBZUQsQ0FwQkQ7O0FBc0JlWix5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvY3JlYXRlU29uZy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNvbmdzIH0gZnJvbSAnLi91dGlsL2hvb2tzJ1xuaW1wb3J0IHsgbXV0YXRlIH0gZnJvbSAnc3dyJ1xuXG5jb25zdCBDcmVhdGVTb25nID0gKCkgPT4ge1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFthcnRpc3QsIHNldEFydGlzdF0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCB7IHNvbmdzIH0gPSB1c2VTb25ncygpXG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybVxuICAgICAgb25TdWJtaXQgPSB7YXN5bmMgZSA9PiB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgICBtdXRhdGUoXCIvYXBpL3NvbmdzXCIsIFt7dGl0bGU6IHRpdGxlLCBhcnRpc3Q6IGFydGlzdH0sIC4uLnNvbmdzXSwgZmFsc2UpXG4gICAgICAgICAgc2V0VGl0bGUoXCJcIilcbiAgICAgICAgICBzZXRBcnRpc3QoXCJcIilcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGlucHV0IHZhbHVlID0ge3RpdGxlfSBvbkNoYW5nZSA9IHsgZSA9PiBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICA8aW5wdXQgdmFsdWUgPSB7YXJ0aXN0fSBvbkNoYW5nZSA9IHsgZSA9PiBzZXRBcnRpc3QoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cImFkZFwiLz5cbiAgICA8L2Zvcm0+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlU29uZ1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/createSong.tsx\n");

/***/ }),

/***/ "./components/songs.tsx":
/*!******************************!*\
  !*** ./components/songs.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _util_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/hooks */ \"./components/util/hooks.tsx\");\nvar _jsxFileName = \"/Users/elie/code/ehymowitz/set-sharer/components/songs.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Songs = () => {\n  const {\n    songs\n  } = Object(_util_hooks__WEBPACK_IMPORTED_MODULE_1__[\"useSongs\"])();\n  return songs ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"ul\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, songs.map((item, i) => __jsx(\"li\", {\n    key: i,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }\n  }, item.title, item.artist))))) : null;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Songs);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NvbmdzLnRzeD82YjNjIl0sIm5hbWVzIjpbIlNvbmdzIiwic29uZ3MiLCJ1c2VTb25ncyIsIm1hcCIsIml0ZW0iLCJpIiwidGl0bGUiLCJhcnRpc3QiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsS0FBSyxHQUFHLE1BQU07QUFDbEIsUUFBTTtBQUFFQztBQUFGLE1BQVlDLDREQUFRLEVBQTFCO0FBRUEsU0FBT0QsS0FBSyxHQUNWLG1FQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsS0FBSyxDQUFDRSxHQUFOLENBQVUsQ0FBQ0MsSUFBRCxFQUFPQyxDQUFQLEtBQ1Q7QUFBSSxPQUFHLEVBQUVBLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0QsSUFBSSxDQUFDRSxLQURSLEVBRUdGLElBQUksQ0FBQ0csTUFGUixDQURGLENBREQsQ0FESCxDQURGLENBRFUsR0FhUixJQWJKO0FBY0QsQ0FqQkQ7O0FBbUJlUCxvRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvc29uZ3MudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU29uZ3MgfSBmcm9tICcuL3V0aWwvaG9va3MnXG5cbmNvbnN0IFNvbmdzID0gKCkgPT4ge1xuICBjb25zdCB7IHNvbmdzIH0gPSB1c2VTb25ncygpXG5cbiAgcmV0dXJuIHNvbmdzID8gKFxuICAgIDw+XG4gICAgICA8dWw+XG4gICAgICAgIHtzb25ncy5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICA8bGkga2V5PXtpfT5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAge2l0ZW0uYXJ0aXN0fVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8Lz5cbiAgKSA6IG51bGxcbn1cblxuZXhwb3J0IGRlZmF1bHQgU29uZ3NcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/songs.tsx\n");

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
/*! exports provided: useSongs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useSongs\", function() { return useSongs; });\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetcher */ \"./components/util/fetcher.tsx\");\n\n\nfunction useSongs() {\n  const {\n    data: songs\n  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(\"/api/songs\", _fetcher__WEBPACK_IMPORTED_MODULE_1__[\"fetcher\"]);\n  return {\n    songs\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3V0aWwvaG9va3MudHN4PzE1MTkiXSwibmFtZXMiOlsidXNlU29uZ3MiLCJkYXRhIiwic29uZ3MiLCJ1c2VTV1IiLCJmZXRjaGVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLFNBQVNBLFFBQVQsR0FBb0I7QUFDekIsUUFBTTtBQUFFQyxRQUFJLEVBQUVDO0FBQVIsTUFBa0JDLDBDQUFNLENBQUMsWUFBRCxFQUFlQyxnREFBZixDQUE5QjtBQUNBLFNBQU87QUFBRUY7QUFBRixHQUFQO0FBQ0QiLCJmaWxlIjoiLi9jb21wb25lbnRzL3V0aWwvaG9va3MudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5pbXBvcnQgeyBmZXRjaGVyIH0gZnJvbSAnLi9mZXRjaGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlU29uZ3MoKSB7XG4gIGNvbnN0IHsgZGF0YTogc29uZ3MgfSA9IHVzZVNXUihcIi9hcGkvc29uZ3NcIiwgZmV0Y2hlcilcbiAgcmV0dXJuIHsgc29uZ3MgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/util/hooks.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_songs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/songs */ \"./components/songs.tsx\");\n/* harmony import */ var _components_createSong__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/createSong */ \"./components/createSong.tsx\");\nvar _jsxFileName = \"/Users/elie/code/ehymowitz/set-sharer/pages/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, \"hello, world!\", __jsx(_components_songs__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }), __jsx(_components_createSong__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUscUVBQU07QUFDbkIsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUVFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0UsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FERjtBQU9ELENBUkQiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgU29uZ3MgZnJvbSAnLi4vY29tcG9uZW50cy9zb25ncydcbmltcG9ydCBDcmVhdGVTb25nIGZyb20gJy4uL2NvbXBvbmVudHMvY3JlYXRlU29uZydcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICBoZWxsbywgd29ybGQhXG4gICAgICA8U29uZ3MvPlxuICAgICAgPENyZWF0ZVNvbmcvPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

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