webpackHotUpdate_N_E("pages/index",{

/***/ "./components/deleteSongButton.tsx":
/*!*****************************************!*\
  !*** ./components/deleteSongButton.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var _util_fetcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/fetcher */ \"./components/util/fetcher.tsx\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/elie/code/ehymowitz/set-sharer/components/deleteSongButton.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\nvar DeleteSongButton = function DeleteSongButton(_ref) {\n  var song = _ref.song,\n      songs = _ref.songs;\n  return __jsx(\"div\", {\n    className: \"delete-song-button\",\n    onClick: /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return Object(_util_fetcher__WEBPACK_IMPORTED_MODULE_4__[\"fetcher\"])(\"/api/song/delete\", {\n                id: song.id\n              });\n\n            case 2:\n              _context.next = 4;\n              return Object(swr__WEBPACK_IMPORTED_MODULE_3__[\"mutate\"])(\"/api/songs\", songs.filter(function (s) {\n                return s.id !== song.id;\n              }));\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    })),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, \"X\"));\n};\n\n_c = DeleteSongButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DeleteSongButton);\n\nvar _c;\n\n$RefreshReg$(_c, \"DeleteSongButton\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kZWxldGVTb25nQnV0dG9uLnRzeD9mYTliIl0sIm5hbWVzIjpbIkRlbGV0ZVNvbmdCdXR0b24iLCJzb25nIiwic29uZ3MiLCJmZXRjaGVyIiwiaWQiLCJtdXRhdGUiLCJmaWx0ZXIiLCJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixPQUFvQjtBQUFBLE1BQWpCQyxJQUFpQixRQUFqQkEsSUFBaUI7QUFBQSxNQUFYQyxLQUFXLFFBQVhBLEtBQVc7QUFDM0MsU0FDRTtBQUFLLGFBQVMsRUFBRyxvQkFBakI7QUFDRSxXQUFPLGdNQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNKQyw2REFBTyxDQUFDLGtCQUFELEVBQXFCO0FBQUVDLGtCQUFFLEVBQUVILElBQUksQ0FBQ0c7QUFBWCxlQUFyQixDQURIOztBQUFBO0FBQUE7QUFBQSxxQkFFSkMsa0RBQU0sQ0FBQyxZQUFELEVBQWVILEtBQUssQ0FBQ0ksTUFBTixDQUFjLFVBQUFDLENBQUM7QUFBQSx1QkFBSUEsQ0FBQyxDQUFDSCxFQUFGLEtBQVNILElBQUksQ0FBQ0csRUFBbEI7QUFBQSxlQUFmLENBQWYsQ0FGRjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFMLEVBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FORixDQURGO0FBWUQsQ0FiRDs7S0FBTUosZ0I7QUFlU0EsK0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2RlbGV0ZVNvbmdCdXR0b24udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbXV0YXRlIH0gZnJvbSAnc3dyJ1xuaW1wb3J0IHsgZmV0Y2hlciB9IGZyb20gJy4vdXRpbC9mZXRjaGVyJ1xuXG5jb25zdCBEZWxldGVTb25nQnV0dG9uID0gKHsgc29uZywgc29uZ3N9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWUgPSBcImRlbGV0ZS1zb25nLWJ1dHRvblwiXG4gICAgICBvbkNsaWNrID0geyBhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IGZldGNoZXIoXCIvYXBpL3NvbmcvZGVsZXRlXCIsIHsgaWQ6IHNvbmcuaWQgfSlcbiAgICAgICAgYXdhaXQgbXV0YXRlKFwiL2FwaS9zb25nc1wiLCBzb25ncy5maWx0ZXIoIHMgPT4gcy5pZCAhPT0gc29uZy5pZCApKVxuICAgICAgfX1cbiAgICA+XG4gICAgICA8cD5cbiAgICAgICAgWFxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERlbGV0ZVNvbmdCdXR0b25cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/deleteSongButton.tsx\n");

/***/ })

})