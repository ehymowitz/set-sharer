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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/create.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/create.ts":
/*!*****************************!*\
  !*** ./pages/api/create.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_3__[\"PrismaClient\"]();\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const salt = bcrypt__WEBPACK_IMPORTED_MODULE_0___default.a.genSaltSync();\n  const {\n    gigName,\n    password\n  } = req.body;\n  let set;\n\n  try {\n    set = await prisma.set.create({\n      data: {\n        setName: gigName,\n        password: bcrypt__WEBPACK_IMPORTED_MODULE_0___default.a.hashSync(password, salt)\n      }\n    });\n  } catch (error) {\n    res.json({\n      error: \"Set name already exists\"\n    });\n    return;\n  }\n\n  const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.sign({\n    setName: set.setName,\n    id: set.id,\n    time: new Date()\n  }, process.env.JWT_SECRET, {\n    expiresIn: \"6h\"\n  });\n  res.setHeader(\"Set-Cookie\", cookie__WEBPACK_IMPORTED_MODULE_2___default.a.serialize(\"token\", token, {\n    httpOnly: true,\n    maxAge: 6 * 60 * 60,\n    path: \"/\",\n    sameSite: \"lax\",\n    secure: false\n  }));\n  res.json(set);\n  return;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY3JlYXRlLnRzPzMxNDgiXSwibmFtZXMiOlsicHJpc21hIiwiUHJpc21hQ2xpZW50IiwicmVxIiwicmVzIiwic2FsdCIsImJjcnlwdCIsImdlblNhbHRTeW5jIiwiZ2lnTmFtZSIsInBhc3N3b3JkIiwiYm9keSIsInNldCIsImNyZWF0ZSIsImRhdGEiLCJzZXROYW1lIiwiaGFzaFN5bmMiLCJlcnJvciIsImpzb24iLCJ0b2tlbiIsImp3dCIsInNpZ24iLCJpZCIsInRpbWUiLCJEYXRlIiwicHJvY2VzcyIsImVudiIsIkpXVF9TRUNSRVQiLCJleHBpcmVzSW4iLCJzZXRIZWFkZXIiLCJjb29raWUiLCJzZXJpYWxpemUiLCJodHRwT25seSIsIm1heEFnZSIsInBhdGgiLCJzYW1lU2l0ZSIsInNlY3VyZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNQSxNQUFNLEdBQUcsSUFBSUMsMkRBQUosRUFBZjtBQUVlLHNFQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDakMsUUFBTUMsSUFBSSxHQUFHQyw2Q0FBTSxDQUFDQyxXQUFQLEVBQWI7QUFDQSxRQUFNO0FBQUVDLFdBQUY7QUFBV0M7QUFBWCxNQUF3Qk4sR0FBRyxDQUFDTyxJQUFsQztBQUNBLE1BQUlDLEdBQUo7O0FBQ0EsTUFBSTtBQUNGQSxPQUFHLEdBQUcsTUFBTVYsTUFBTSxDQUFDVSxHQUFQLENBQVdDLE1BQVgsQ0FBa0I7QUFDNUJDLFVBQUksRUFBRTtBQUNKQyxlQUFPLEVBQUVOLE9BREw7QUFFSkMsZ0JBQVEsRUFBRUgsNkNBQU0sQ0FBQ1MsUUFBUCxDQUFnQk4sUUFBaEIsRUFBMEJKLElBQTFCO0FBRk47QUFEc0IsS0FBbEIsQ0FBWjtBQU1ELEdBUEQsQ0FPRSxPQUFPVyxLQUFQLEVBQWM7QUFDZFosT0FBRyxDQUFDYSxJQUFKLENBQVM7QUFBRUQsV0FBSyxFQUFFO0FBQVQsS0FBVDtBQUNBO0FBQ0Q7O0FBQ0QsUUFBTUUsS0FBSyxHQUFHQyxtREFBRyxDQUFDQyxJQUFKLENBQ1o7QUFBRU4sV0FBTyxFQUFFSCxHQUFHLENBQUNHLE9BQWY7QUFBd0JPLE1BQUUsRUFBRVYsR0FBRyxDQUFDVSxFQUFoQztBQUFvQ0MsUUFBSSxFQUFFLElBQUlDLElBQUo7QUFBMUMsR0FEWSxFQUVaQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsVUFGQSxFQUdaO0FBQ0VDLGFBQVMsRUFBRTtBQURiLEdBSFksQ0FBZDtBQVFBdkIsS0FBRyxDQUFDd0IsU0FBSixDQUNFLFlBREYsRUFFRUMsNkNBQU0sQ0FBQ0MsU0FBUCxDQUFpQixPQUFqQixFQUEwQlosS0FBMUIsRUFBaUM7QUFDL0JhLFlBQVEsRUFBRSxJQURxQjtBQUUvQkMsVUFBTSxFQUFFLElBQUksRUFBSixHQUFTLEVBRmM7QUFHL0JDLFFBQUksRUFBRSxHQUh5QjtBQUkvQkMsWUFBUSxFQUFFLEtBSnFCO0FBSy9CQyxVQUFNO0FBTHlCLEdBQWpDLENBRkY7QUFVQS9CLEtBQUcsQ0FBQ2EsSUFBSixDQUFTTixHQUFUO0FBQ0E7QUFDRCxDQW5DRCIsImZpbGUiOiIuL3BhZ2VzL2FwaS9jcmVhdGUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdCdcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xuaW1wb3J0IGNvb2tpZSBmcm9tICdjb29raWUnXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3Qgc2FsdCA9IGJjcnlwdC5nZW5TYWx0U3luYygpXG4gIGNvbnN0IHsgZ2lnTmFtZSwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5XG4gIGxldCBzZXRcbiAgdHJ5IHtcbiAgICBzZXQgPSBhd2FpdCBwcmlzbWEuc2V0LmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIHNldE5hbWU6IGdpZ05hbWUsXG4gICAgICAgIHBhc3N3b3JkOiBiY3J5cHQuaGFzaFN5bmMocGFzc3dvcmQsIHNhbHQpLFxuICAgICAgfSxcbiAgICB9KVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlcy5qc29uKHsgZXJyb3I6IFwiU2V0IG5hbWUgYWxyZWFkeSBleGlzdHNcIn0pXG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbihcbiAgICB7IHNldE5hbWU6IHNldC5zZXROYW1lLCBpZDogc2V0LmlkLCB0aW1lOiBuZXcgRGF0ZSgpIH0sXG4gICAgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCxcbiAgICB7XG4gICAgICBleHBpcmVzSW46IFwiNmhcIixcbiAgICB9XG4gIClcblxuICByZXMuc2V0SGVhZGVyKFxuICAgIFwiU2V0LUNvb2tpZVwiLFxuICAgIGNvb2tpZS5zZXJpYWxpemUoXCJ0b2tlblwiLCB0b2tlbiwge1xuICAgICAgaHR0cE9ubHk6IHRydWUsXG4gICAgICBtYXhBZ2U6IDYgKiA2MCAqIDYwLFxuICAgICAgcGF0aDogXCIvXCIsXG4gICAgICBzYW1lU2l0ZTogXCJsYXhcIixcbiAgICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiLFxuICAgIH0pXG4gIClcbiAgcmVzLmpzb24oc2V0KVxuICByZXR1cm5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/create.ts\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@prisma/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcHJpc21hL2NsaWVudFwiP2UwMDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQHByaXNtYS9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@prisma/client\n");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiY3J5cHRcIj9jZjljIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImJjcnlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///bcrypt\n");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb29raWVcIj8yZDIxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImNvb2tpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///cookie\n");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIj82NDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Impzb253ZWJ0b2tlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///jsonwebtoken\n");

/***/ })

/******/ });