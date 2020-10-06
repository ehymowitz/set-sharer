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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/login.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/login.ts":
/*!****************************!*\
  !*** ./pages/api/login.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_3__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__[\"PrismaClient\"]();\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const {\n    gigName,\n    password\n  } = req.body;\n  const set = await prisma.set.findOne({\n    where: {\n      setName: gigName\n    }\n  });\n\n  if (set && bcrypt__WEBPACK_IMPORTED_MODULE_1___default.a.compareSync(password, set.password)) {\n    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.sign({\n      setName: set.setName,\n      id: set.id,\n      time: new Date()\n    }, process.env.JWT_SECRET, {\n      expiresIn: \"6h\"\n    });\n    res.setHeader(\"Set-Cookie\", cookie__WEBPACK_IMPORTED_MODULE_3___default.a.serialize(\"token\", token, {\n      httpOnly: true,\n      maxAge: 6 * 60 * 60,\n      path: \"/\",\n      sameSite: \"lax\",\n      secure: false\n    }));\n    res.json(set);\n  } else {\n    res.json({\n      error: \"Incorrect username or password\"\n    });\n    return;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbG9naW4udHM/YWNmNyJdLCJuYW1lcyI6WyJwcmlzbWEiLCJQcmlzbWFDbGllbnQiLCJyZXEiLCJyZXMiLCJnaWdOYW1lIiwicGFzc3dvcmQiLCJib2R5Iiwic2V0IiwiZmluZE9uZSIsIndoZXJlIiwic2V0TmFtZSIsImJjcnlwdCIsImNvbXBhcmVTeW5jIiwidG9rZW4iLCJqd3QiLCJzaWduIiwiaWQiLCJ0aW1lIiwiRGF0ZSIsInByb2Nlc3MiLCJlbnYiLCJKV1RfU0VDUkVUIiwiZXhwaXJlc0luIiwic2V0SGVhZGVyIiwiY29va2llIiwic2VyaWFsaXplIiwiaHR0cE9ubHkiLCJtYXhBZ2UiLCJwYXRoIiwic2FtZVNpdGUiLCJzZWN1cmUiLCJqc29uIiwiZXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsTUFBTUEsTUFBTSxHQUFHLElBQUlDLDJEQUFKLEVBQWY7QUFDQTtBQUNBO0FBQ0E7QUFFZSxzRUFBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ2pDLFFBQU07QUFBRUMsV0FBRjtBQUFXQztBQUFYLE1BQXdCSCxHQUFHLENBQUNJLElBQWxDO0FBRUEsUUFBTUMsR0FBRyxHQUFHLE1BQU1QLE1BQU0sQ0FBQ08sR0FBUCxDQUFXQyxPQUFYLENBQW1CO0FBQ25DQyxTQUFLLEVBQUU7QUFBRUMsYUFBTyxFQUFFTjtBQUFYO0FBRDRCLEdBQW5CLENBQWxCOztBQUlBLE1BQUlHLEdBQUcsSUFBSUksNkNBQU0sQ0FBQ0MsV0FBUCxDQUFtQlAsUUFBbkIsRUFBNkJFLEdBQUcsQ0FBQ0YsUUFBakMsQ0FBWCxFQUF1RDtBQUNyRCxVQUFNUSxLQUFLLEdBQUdDLG1EQUFHLENBQUNDLElBQUosQ0FDWjtBQUFFTCxhQUFPLEVBQUVILEdBQUcsQ0FBQ0csT0FBZjtBQUF3Qk0sUUFBRSxFQUFFVCxHQUFHLENBQUNTLEVBQWhDO0FBQW9DQyxVQUFJLEVBQUUsSUFBSUMsSUFBSjtBQUExQyxLQURZLEVBRVpDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxVQUZBLEVBR1o7QUFDRUMsZUFBUyxFQUFFO0FBRGIsS0FIWSxDQUFkO0FBUUFuQixPQUFHLENBQUNvQixTQUFKLENBQ0UsWUFERixFQUVFQyw2Q0FBTSxDQUFDQyxTQUFQLENBQWlCLE9BQWpCLEVBQTBCWixLQUExQixFQUFpQztBQUMvQmEsY0FBUSxFQUFFLElBRHFCO0FBRS9CQyxZQUFNLEVBQUUsSUFBSSxFQUFKLEdBQVMsRUFGYztBQUcvQkMsVUFBSSxFQUFFLEdBSHlCO0FBSS9CQyxjQUFRLEVBQUUsS0FKcUI7QUFLL0JDLFlBQU07QUFMeUIsS0FBakMsQ0FGRjtBQVdBM0IsT0FBRyxDQUFDNEIsSUFBSixDQUFTeEIsR0FBVDtBQUNELEdBckJELE1BcUJPO0FBQ0xKLE9BQUcsQ0FBQzRCLElBQUosQ0FBUztBQUFFQyxXQUFLLEVBQUU7QUFBVCxLQUFUO0FBQ0E7QUFDRDtBQUNGLENBaENEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2xvZ2luLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0J1xuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXG5pbXBvcnQgY29va2llIGZyb20gJ2Nvb2tpZSdcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHsgZ2lnTmFtZSwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5XG5cbiAgY29uc3Qgc2V0ID0gYXdhaXQgcHJpc21hLnNldC5maW5kT25lKHtcbiAgICB3aGVyZTogeyBzZXROYW1lOiBnaWdOYW1lIH0sXG4gIH0pXG5cbiAgaWYgKHNldCAmJiBiY3J5cHQuY29tcGFyZVN5bmMocGFzc3dvcmQsIHNldC5wYXNzd29yZCkpIHtcbiAgICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKFxuICAgICAgeyBzZXROYW1lOiBzZXQuc2V0TmFtZSwgaWQ6IHNldC5pZCwgdGltZTogbmV3IERhdGUoKSB9LFxuICAgICAgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCxcbiAgICAgIHtcbiAgICAgICAgZXhwaXJlc0luOiBcIjZoXCIsXG4gICAgICB9XG4gICAgKVxuXG4gICAgcmVzLnNldEhlYWRlcihcbiAgICAgIFwiU2V0LUNvb2tpZVwiLFxuICAgICAgY29va2llLnNlcmlhbGl6ZShcInRva2VuXCIsIHRva2VuLCB7XG4gICAgICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgICAgICBtYXhBZ2U6IDYgKiA2MCAqIDYwLFxuICAgICAgICBwYXRoOiBcIi9cIixcbiAgICAgICAgc2FtZVNpdGU6IFwibGF4XCIsXG4gICAgICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiLFxuICAgICAgfSlcbiAgICApXG5cbiAgICByZXMuanNvbihzZXQpXG4gIH0gZWxzZSB7XG4gICAgcmVzLmpzb24oeyBlcnJvcjogXCJJbmNvcnJlY3QgdXNlcm5hbWUgb3IgcGFzc3dvcmRcIiB9KVxuICAgIHJldHVyblxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/login.ts\n");

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