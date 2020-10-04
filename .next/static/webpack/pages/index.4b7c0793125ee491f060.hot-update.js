webpackHotUpdate_N_E("pages/index",{

/***/ "./components/createItem.tsx":
/*!***********************************!*\
  !*** ./components/createItem.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _util_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/hooks */ \"./components/util/hooks.tsx\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/elie/code/ehymowitz/set-sharer/components/createItem.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\nvar CreateItem = function CreateItem() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      input = _useState[0],\n      setInput = _useState[1];\n\n  var _useSongs = Object(_util_hooks__WEBPACK_IMPORTED_MODULE_4__[\"useSongs\"])(),\n      songs = _useSongs.songs;\n\n  return __jsx(\"form\", {\n    onSubmit: /*#__PURE__*/function () {\n      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                e.preventDefault();\n                Object(swr__WEBPACK_IMPORTED_MODULE_5__[\"mutate\"])(\"/api/songs\", [{\n                  name: name,\n                  madeBy: \"RHCP\"\n                }].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(songs)), false);\n                setInput(\"\");\n\n              case 3:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref.apply(this, arguments);\n      };\n    }(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }, __jsx(\"input\", {\n    value: input,\n    onChange: function onChange(e) {\n      return setInput(e.target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }), __jsx(\"input\", {\n    value: input,\n    onChange: function onChange(e) {\n      return setInput(e.target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }), __jsx(\"input\", {\n    type: \"submit\",\n    value: \"add\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(CreateItem, \"/2Walspmd2+Z6up5GcyZ42WWi6A=\", false, function () {\n  return [_util_hooks__WEBPACK_IMPORTED_MODULE_4__[\"useSongs\"]];\n});\n\n_c = CreateItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateItem);\n\nvar _c;\n\n$RefreshReg$(_c, \"CreateItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcmVhdGVJdGVtLnRzeD8wOTZmIl0sIm5hbWVzIjpbIkNyZWF0ZUl0ZW0iLCJ1c2VTdGF0ZSIsImlucHV0Iiwic2V0SW5wdXQiLCJ1c2VTb25ncyIsInNvbmdzIiwiZSIsInByZXZlbnREZWZhdWx0IiwibXV0YXRlIiwibmFtZSIsIm1hZGVCeSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUFBLGtCQUNHQyxzREFBUSxDQUFDLEVBQUQsQ0FEWDtBQUFBLE1BQ2hCQyxLQURnQjtBQUFBLE1BQ1RDLFFBRFM7O0FBQUEsa0JBRUxDLDREQUFRLEVBRkg7QUFBQSxNQUVmQyxLQUZlLGFBRWZBLEtBRmU7O0FBSXZCLFNBQ0U7QUFDRSxZQUFRO0FBQUEsa01BQUksaUJBQU1DLENBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNSQSxpQkFBQyxDQUFDQyxjQUFGO0FBRUFDLGtFQUFNLENBQUMsWUFBRCxHQUFnQjtBQUFDQyxzQkFBSSxFQUFFQSxJQUFQO0FBQWFDLHdCQUFNLEVBQUU7QUFBckIsaUJBQWhCLHNHQUFpREwsS0FBakQsSUFBeUQsS0FBekQsQ0FBTjtBQUNBRix3QkFBUSxDQUFDLEVBQUQsQ0FBUjs7QUFKUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFKOztBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFFO0FBQU8sU0FBSyxFQUFJRCxLQUFoQjtBQUF1QixZQUFRLEVBQUssa0JBQUFJLENBQUM7QUFBQSxhQUFJSCxRQUFRLENBQUNHLENBQUMsQ0FBQ0ssTUFBRixDQUFTQyxLQUFWLENBQVo7QUFBQSxLQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsRUFTRTtBQUFPLFNBQUssRUFBSVYsS0FBaEI7QUFBdUIsWUFBUSxFQUFLLGtCQUFBSSxDQUFDO0FBQUEsYUFBSUgsUUFBUSxDQUFDRyxDQUFDLENBQUNLLE1BQUYsQ0FBU0MsS0FBVixDQUFaO0FBQUEsS0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLEVBVUU7QUFBTyxRQUFJLEVBQUMsUUFBWjtBQUFxQixTQUFLLEVBQUMsS0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLENBREY7QUFjRCxDQWxCRDs7R0FBTVosVTtVQUVjSSxvRDs7O0tBRmRKLFU7QUFvQlNBLHlFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jcmVhdGVJdGVtLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU29uZ3MgfSBmcm9tICcuL3V0aWwvaG9va3MnXG5pbXBvcnQgeyBtdXRhdGUgfSBmcm9tICdzd3InXG5cbmNvbnN0IENyZWF0ZUl0ZW0gPSAoKSA9PiB7XG4gIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgeyBzb25ncyB9ID0gdXNlU29uZ3MoKVxuXG4gIHJldHVybiAoXG4gICAgPGZvcm1cbiAgICAgIG9uU3VibWl0ID0ge2FzeW5jIGUgPT4ge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgICAgbXV0YXRlKFwiL2FwaS9zb25nc1wiLCBbe25hbWU6IG5hbWUsIG1hZGVCeTogXCJSSENQXCJ9LCAuLi5zb25nc10sIGZhbHNlKVxuICAgICAgICAgIHNldElucHV0KFwiXCIpXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxpbnB1dCB2YWx1ZSA9IHtpbnB1dH0gb25DaGFuZ2UgPSB7IGUgPT4gc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgPGlucHV0IHZhbHVlID0ge2lucHV0fSBvbkNoYW5nZSA9IHsgZSA9PiBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiYWRkXCIvPlxuICAgIDwvZm9ybT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVJdGVtXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/createItem.tsx\n");

/***/ })

})