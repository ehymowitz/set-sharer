webpackHotUpdate_N_E("pages/index",{

/***/ "./components/logoutButton.tsx":
/*!*************************************!*\
  !*** ./components/logoutButton.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var _util_fetcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/fetcher */ \"./components/util/fetcher.tsx\");\n/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/_app */ \"./pages/_app.tsx\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/elie/code/ehymowitz/set-sharer/components/logoutButton.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\nvar LogoutButton = function LogoutButton() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_pages_app__WEBPACK_IMPORTED_MODULE_5__[\"LoggedIn\"]),\n      loggedIn = _useContext.loggedIn,\n      setLoggedIn = _useContext.setLoggedIn;\n\n  var logOut = function logOut() {\n    setLoggedIn(false);\n  };\n\n  console.log(loggedIn);\n  return __jsx(\"div\", {\n    className: \"log-button\",\n    onClick: /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var _yield$fetcher, data, error;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return Object(_util_fetcher__WEBPACK_IMPORTED_MODULE_4__[\"fetcher\"])(\"/api/logout\");\n\n            case 2:\n              _yield$fetcher = _context.sent;\n              data = _yield$fetcher.data;\n              error = _yield$fetcher.error;\n\n              if (!error) {\n                _context.next = 8;\n                break;\n              }\n\n              alert(error);\n              return _context.abrupt(\"return\");\n\n            case 8:\n              _context.next = 10;\n              return Object(swr__WEBPACK_IMPORTED_MODULE_3__[\"mutate\"])(\"/api/set\");\n\n            case 10:\n              logOut();\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    })),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, \"\\u27A1\\uFE0F\"));\n};\n\n_s(LogoutButton, \"gIagYlOXssnKZ+uNoRLcSkUoHAg=\");\n\n_c = LogoutButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LogoutButton);\n\nvar _c;\n\n$RefreshReg$(_c, \"LogoutButton\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb2dvdXRCdXR0b24udHN4Pzk5OTIiXSwibmFtZXMiOlsiTG9nb3V0QnV0dG9uIiwidXNlQ29udGV4dCIsIkxvZ2dlZEluIiwibG9nZ2VkSW4iLCJzZXRMb2dnZWRJbiIsImxvZ091dCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaGVyIiwiZGF0YSIsImVycm9yIiwiYWxlcnQiLCJtdXRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUFBLG9CQUNTQyx3REFBVSxDQUFDQyxtREFBRCxDQURuQjtBQUFBLE1BQ2pCQyxRQURpQixlQUNqQkEsUUFEaUI7QUFBQSxNQUNQQyxXQURPLGVBQ1BBLFdBRE87O0FBR3pCLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDbkJELGVBQVcsQ0FBQyxLQUFELENBQVg7QUFDRCxHQUZEOztBQUlBRSxTQUFPLENBQUNDLEdBQVIsQ0FBWUosUUFBWjtBQUVBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUNFLFdBQU8sZ01BQUs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ29CSyw2REFBTyxDQUFDLGFBQUQsQ0FEM0I7O0FBQUE7QUFBQTtBQUNGQyxrQkFERSxrQkFDRkEsSUFERTtBQUNJQyxtQkFESixrQkFDSUEsS0FESjs7QUFBQSxtQkFFTkEsS0FGTTtBQUFBO0FBQUE7QUFBQTs7QUFHUkMsbUJBQUssQ0FBQ0QsS0FBRCxDQUFMO0FBSFE7O0FBQUE7QUFBQTtBQUFBLHFCQU1KRSxrREFBTSxDQUFDLFVBQUQsQ0FORjs7QUFBQTtBQU9UUCxvQkFBTTs7QUFQRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFMLEVBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVkYsQ0FERjtBQWdCRCxDQXpCRDs7R0FBTUwsWTs7S0FBQUEsWTtBQTJCU0EsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2xvZ291dEJ1dHRvbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbXV0YXRlIH0gZnJvbSAnc3dyJ1xuaW1wb3J0IHsgZmV0Y2hlciB9IGZyb20gJy4vdXRpbC9mZXRjaGVyJ1xuaW1wb3J0IHsgTG9nZ2VkSW4gfSBmcm9tICcuLi9wYWdlcy9fYXBwJ1xuXG5jb25zdCBMb2dvdXRCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IHsgbG9nZ2VkSW4sIHNldExvZ2dlZEluIH0gPSB1c2VDb250ZXh0KExvZ2dlZEluKVxuXG4gIGNvbnN0IGxvZ091dCA9ICgpID0+IHtcbiAgICBzZXRMb2dnZWRJbihmYWxzZSlcbiAgfVxuXG4gIGNvbnNvbGUubG9nKGxvZ2dlZEluKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsb2ctYnV0dG9uXCJcbiAgICAgIG9uQ2xpY2sgPSB7IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgZmV0Y2hlcihcIi9hcGkvbG9nb3V0XCIpXG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIGFsZXJ0KGVycm9yKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGF3YWl0IG11dGF0ZShcIi9hcGkvc2V0XCIpXG4gICAgICAgIHtsb2dPdXQoKX1cbiAgICAgIH19PlxuICAgICAgPGgyPlxuICAgICAgICDinqHvuI9cbiAgICAgIDwvaDI+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9nb3V0QnV0dG9uXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/logoutButton.tsx\n");

/***/ })

})