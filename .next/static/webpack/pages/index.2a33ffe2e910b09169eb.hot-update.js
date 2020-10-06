webpackHotUpdate_N_E("pages/index",{

/***/ "./components/createSong.tsx":
/*!***********************************!*\
  !*** ./components/createSong.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _util_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/hooks */ \"./components/util/hooks.tsx\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var _util_fetcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util/fetcher */ \"./components/util/fetcher.tsx\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/elie/code/ehymowitz/set-sharer/components/createSong.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\nvar CreateSong = function CreateSong() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      title = _useState[0],\n      setTitle = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      artist = _useState2[0],\n      setArtist = _useState2[1];\n\n  var _useSongs = Object(_util_hooks__WEBPACK_IMPORTED_MODULE_4__[\"useSongs\"])(),\n      songs = _useSongs.songs;\n\n  return __jsx(\"form\", {\n    onSubmit: /*#__PURE__*/function () {\n      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                e.preventDefault();\n                Object(swr__WEBPACK_IMPORTED_MODULE_5__[\"mutate\"])(\"/api/songs\", [{\n                  title: title,\n                  artist: artist,\n                  Set: _util_hooks__WEBPACK_IMPORTED_MODULE_4__[\"useGigInfo\"]\n                }].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(songs)));\n                Object(_util_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"fetcher\"])(\"/api/song/create\", {\n                  title: title,\n                  artist: artist\n                });\n                setTitle(\"\");\n                setArtist(\"\");\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref.apply(this, arguments);\n      };\n    }(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }, __jsx(\"input\", {\n    value: title,\n    onChange: function onChange(e) {\n      return setTitle(e.target.value);\n    },\n    placeholder: \"Song Name\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }), __jsx(\"input\", {\n    value: artist,\n    onChange: function onChange(e) {\n      return setArtist(e.target.value);\n    },\n    placeholder: \"Song Artist\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }), __jsx(\"input\", {\n    type: \"submit\",\n    value: \"add\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(CreateSong, \"sAyyD24tquoUsPpyb8Y8zsYEx8Y=\", false, function () {\n  return [_util_hooks__WEBPACK_IMPORTED_MODULE_4__[\"useSongs\"]];\n});\n\n_c = CreateSong;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateSong);\n\nvar _c;\n\n$RefreshReg$(_c, \"CreateSong\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcmVhdGVTb25nLnRzeD83ZDhkIl0sIm5hbWVzIjpbIkNyZWF0ZVNvbmciLCJ1c2VTdGF0ZSIsInRpdGxlIiwic2V0VGl0bGUiLCJhcnRpc3QiLCJzZXRBcnRpc3QiLCJ1c2VTb25ncyIsInNvbmdzIiwiZSIsInByZXZlbnREZWZhdWx0IiwibXV0YXRlIiwiU2V0IiwidXNlR2lnSW5mbyIsImZldGNoZXIiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFBQSxrQkFDR0Msc0RBQVEsQ0FBQyxFQUFELENBRFg7QUFBQSxNQUNoQkMsS0FEZ0I7QUFBQSxNQUNUQyxRQURTOztBQUFBLG1CQUVLRixzREFBUSxDQUFDLEVBQUQsQ0FGYjtBQUFBLE1BRWhCRyxNQUZnQjtBQUFBLE1BRVJDLFNBRlE7O0FBQUEsa0JBR0xDLDREQUFRLEVBSEg7QUFBQSxNQUdmQyxLQUhlLGFBR2ZBLEtBSGU7O0FBS3ZCLFNBQ0U7QUFDRSxZQUFRO0FBQUEsa01BQUksaUJBQU1DLENBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNSQSxpQkFBQyxDQUFDQyxjQUFGO0FBRUFDLGtFQUFNLENBQUMsWUFBRCxHQUFnQjtBQUFDUix1QkFBSyxFQUFFQSxLQUFSO0FBQWVFLHdCQUFNLEVBQUVBLE1BQXZCO0FBQStCTyxxQkFBRyxFQUFFQyxzREFBVUE7QUFBOUMsaUJBQWhCLHNHQUFvRUwsS0FBcEUsR0FBTjtBQUNBTSw2RUFBTyxDQUFDLGtCQUFELEVBQXFCO0FBQzFCWCx1QkFBSyxFQUFFQSxLQURtQjtBQUUxQkUsd0JBQU0sRUFBRUE7QUFGa0IsaUJBQXJCLENBQVA7QUFJQUQsd0JBQVEsQ0FBQyxFQUFELENBQVI7QUFDQUUseUJBQVMsQ0FBQyxFQUFELENBQVQ7O0FBVFE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FhRTtBQUFPLFNBQUssRUFBSUgsS0FBaEI7QUFBdUIsWUFBUSxFQUFLLGtCQUFBTSxDQUFDO0FBQUEsYUFBSUwsUUFBUSxDQUFDSyxDQUFDLENBQUNNLE1BQUYsQ0FBU0MsS0FBVixDQUFaO0FBQUEsS0FBckM7QUFBbUUsZUFBVyxFQUFHLFdBQWpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFiRixFQWNFO0FBQU8sU0FBSyxFQUFJWCxNQUFoQjtBQUF3QixZQUFRLEVBQUssa0JBQUFJLENBQUM7QUFBQSxhQUFJSCxTQUFTLENBQUNHLENBQUMsQ0FBQ00sTUFBRixDQUFTQyxLQUFWLENBQWI7QUFBQSxLQUF0QztBQUFxRSxlQUFXLEVBQUcsYUFBbkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWRGLEVBZUU7QUFBTyxRQUFJLEVBQUMsUUFBWjtBQUFxQixTQUFLLEVBQUMsS0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWZGLENBREY7QUFtQkQsQ0F4QkQ7O0dBQU1mLFU7VUFHY00sb0Q7OztLQUhkTixVO0FBMEJTQSx5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvY3JlYXRlU29uZy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNvbmdzLCB1c2VHaWdJbmZvIH0gZnJvbSAnLi91dGlsL2hvb2tzJ1xuaW1wb3J0IHsgbXV0YXRlIH0gZnJvbSAnc3dyJ1xuaW1wb3J0IHsgZmV0Y2hlciB9IGZyb20gJy4vdXRpbC9mZXRjaGVyJ1xuXG5jb25zdCBDcmVhdGVTb25nID0gKCkgPT4ge1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFthcnRpc3QsIHNldEFydGlzdF0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCB7IHNvbmdzIH0gPSB1c2VTb25ncygpXG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybVxuICAgICAgb25TdWJtaXQgPSB7YXN5bmMgZSA9PiB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgICBtdXRhdGUoXCIvYXBpL3NvbmdzXCIsIFt7dGl0bGU6IHRpdGxlLCBhcnRpc3Q6IGFydGlzdCwgU2V0OiB1c2VHaWdJbmZvfSwgLi4uc29uZ3NdKVxuICAgICAgICAgIGZldGNoZXIoXCIvYXBpL3NvbmcvY3JlYXRlXCIsIHtcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgIGFydGlzdDogYXJ0aXN0LFxuICAgICAgICAgIH0pXG4gICAgICAgICAgc2V0VGl0bGUoXCJcIilcbiAgICAgICAgICBzZXRBcnRpc3QoXCJcIilcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGlucHV0IHZhbHVlID0ge3RpdGxlfSBvbkNoYW5nZSA9IHsgZSA9PiBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyID0gXCJTb25nIE5hbWVcIi8+XG4gICAgICA8aW5wdXQgdmFsdWUgPSB7YXJ0aXN0fSBvbkNoYW5nZSA9IHsgZSA9PiBzZXRBcnRpc3QoZS50YXJnZXQudmFsdWUpfSBwbGFjZWhvbGRlciA9IFwiU29uZyBBcnRpc3RcIi8+XG4gICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiYWRkXCIvPlxuICAgIDwvZm9ybT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVTb25nXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/createSong.tsx\n");

/***/ })

})