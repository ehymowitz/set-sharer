module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/feed.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/feed.ts":
/*!***************************!*\
  !*** ./pages/api/feed.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => {\n  const feed = [{\n    text: \"Wow not having to configure and transpile typescript is one of the best parts of next.js\",\n    author: {\n      username: \"john\"\n    }\n  }, {\n    text: \"I'm a firm believer that dark mode should be a universal default on the web\",\n    author: {\n      username: \"jill\"\n    }\n  }];\n  res.json(feed);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZmVlZC50cz8xMDMyIl0sIm5hbWVzIjpbInJlcSIsInJlcyIsImZlZWQiLCJ0ZXh0IiwiYXV0aG9yIiwidXNlcm5hbWUiLCJqc29uIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFlLGdFQUFDQSxHQUFELEVBQU1DLEdBQU4sS0FBYztBQUN6QixRQUFNQyxJQUFJLEdBQUcsQ0FDWDtBQUNFQyxRQUFJLEVBQ0YsMEZBRko7QUFHRUMsVUFBTSxFQUFFO0FBQUVDLGNBQVEsRUFBRTtBQUFaO0FBSFYsR0FEVyxFQU1YO0FBQ0VGLFFBQUksRUFDRiw2RUFGSjtBQUdFQyxVQUFNLEVBQUU7QUFBRUMsY0FBUSxFQUFFO0FBQVo7QUFIVixHQU5XLENBQWI7QUFZQUosS0FBRyxDQUFDSyxJQUFKLENBQVNKLElBQVQ7QUFDSCxDQWREIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2ZlZWQudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBmZWVkID0gW1xuICAgICAge1xuICAgICAgICB0ZXh0OlxuICAgICAgICAgIFwiV293IG5vdCBoYXZpbmcgdG8gY29uZmlndXJlIGFuZCB0cmFuc3BpbGUgdHlwZXNjcmlwdCBpcyBvbmUgb2YgdGhlIGJlc3QgcGFydHMgb2YgbmV4dC5qc1wiLFxuICAgICAgICBhdXRob3I6IHsgdXNlcm5hbWU6IFwiam9oblwiIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OlxuICAgICAgICAgIFwiSSdtIGEgZmlybSBiZWxpZXZlciB0aGF0IGRhcmsgbW9kZSBzaG91bGQgYmUgYSB1bml2ZXJzYWwgZGVmYXVsdCBvbiB0aGUgd2ViXCIsXG4gICAgICAgIGF1dGhvcjogeyB1c2VybmFtZTogXCJqaWxsXCIgfSxcbiAgICAgIH0sXG4gICAgXVxuICAgIHJlcy5qc29uKGZlZWQpXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/feed.ts\n");

/***/ })

/******/ });