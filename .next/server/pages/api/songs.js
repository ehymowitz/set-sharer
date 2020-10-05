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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/songs.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/songs.ts":
/*!****************************!*\
  !*** ./pages/api/songs.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD:.next/server/pages/api/songs.js
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => {\n  const songs = [{\n    name: \"Soul to Squeeze\",\n    artist: \"RHCP\"\n  }];\n  res.json(songs);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvc29uZ3MudHM/ZTg3NyJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJzb25ncyIsIm5hbWUiLCJhcnRpc3QiLCJqc29uIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFlLGdFQUFDQSxHQUFELEVBQU1DLEdBQU4sS0FBYztBQUN6QixRQUFNQyxLQUFLLEdBQUcsQ0FDWjtBQUNFQyxRQUFJLEVBQ0YsaUJBRko7QUFHRUMsVUFBTSxFQUFFO0FBSFYsR0FEWSxDQUFkO0FBT0FILEtBQUcsQ0FBQ0ksSUFBSixDQUFTSCxLQUFUO0FBQ0gsQ0FURCIsImZpbGUiOiIuL3BhZ2VzL2FwaS9zb25ncy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IHNvbmdzID0gW1xuICAgICAge1xuICAgICAgICBuYW1lOlxuICAgICAgICAgIFwiU291bCB0byBTcXVlZXplXCIsXG4gICAgICAgIGFydGlzdDogXCJSSENQXCIsXG4gICAgICB9LFxuICAgIF1cbiAgICByZXMuanNvbihzb25ncylcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/songs.ts\n");
=======
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => {\n  const songs = [{\n    title: 'Soul to Squeeze',\n    artist: 'RHCP'\n  }];\n  res.json(songs);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvc29uZ3MudHM/ZTg3NyJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJzb25ncyIsInRpdGxlIiwiYXJ0aXN0IiwianNvbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBZSxnRUFBQ0EsR0FBRCxFQUFNQyxHQUFOLEtBQWM7QUFDekIsUUFBTUMsS0FBSyxHQUFHLENBQ1o7QUFDRUMsU0FBSyxFQUFFLGlCQURUO0FBRUVDLFVBQU0sRUFBRTtBQUZWLEdBRFksQ0FBZDtBQU1BSCxLQUFHLENBQUNJLElBQUosQ0FBU0gsS0FBVDtBQUNILENBUkQiLCJmaWxlIjoiLi9wYWdlcy9hcGkvc29uZ3MudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBzb25ncyA9IFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdTb3VsIHRvIFNxdWVlemUnLFxuICAgICAgICBhcnRpc3Q6ICdSSENQJyxcbiAgICAgIH0sXG4gICAgXVxuICAgIHJlcy5qc29uKHNvbmdzKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/songs.ts\n");
>>>>>>> fixDB:.next/server/pages/api/feed.js

/***/ })

/******/ });