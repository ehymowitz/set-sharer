webpackHotUpdate_N_E("pages/index",{

/***/ "./components/createItem.tsx":
/*!***********************************!*\
  !*** ./components/createItem.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _util_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/hooks */ \"./components/util/hooks.tsx\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/elie/code/ehymowitz/set-sharer/components/createItem.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\nvar CreateItem = function CreateItem() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      name = _useState[0],\n      setName = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      madeBy = _useState2[0],\n      setMadeBy = _useState2[1];\n\n  var _useSongs = Object(_util_hooks__WEBPACK_IMPORTED_MODULE_4__[\"useSongs\"])(),\n      songs = _useSongs.songs;\n\n  return __jsx(\"form\", {\n    onSubmit: /*#__PURE__*/function () {\n      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                e.preventDefault();\n                Object(swr__WEBPACK_IMPORTED_MODULE_5__[\"mutate\"])(\"/api/songs\", [{\n                  name: name,\n                  madeBy: madeBy\n                }].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(songs)), false);\n                setName(\"\");\n                setMadeBy(\"\");\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref.apply(this, arguments);\n      };\n    }(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, __jsx(\"input\", {\n    value: name,\n    onChange: function onChange(e) {\n      return setName(e.target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }), __jsx(\"input\", {\n    value: madeBy,\n    onChange: function onChange(e) {\n      return setMadeBy(e.target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }), __jsx(\"input\", {\n    type: \"submit\",\n    value: \"add\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(CreateItem, \"k0MIk2PZ9mjJC8b/3O/6hAN7atw=\", false, function () {\n  return [_util_hooks__WEBPACK_IMPORTED_MODULE_4__[\"useSongs\"]];\n});\n\n_c = CreateItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateItem);\n\nvar _c;\n\n$RefreshReg$(_c, \"CreateItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcmVhdGVJdGVtLnRzeD8wOTZmIl0sIm5hbWVzIjpbIkNyZWF0ZUl0ZW0iLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwibWFkZUJ5Iiwic2V0TWFkZUJ5IiwidXNlU29uZ3MiLCJzb25ncyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm11dGF0ZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUFBLGtCQUNDQyxzREFBUSxDQUFDLEVBQUQsQ0FEVDtBQUFBLE1BQ2hCQyxJQURnQjtBQUFBLE1BQ1ZDLE9BRFU7O0FBQUEsbUJBRUtGLHNEQUFRLENBQUMsRUFBRCxDQUZiO0FBQUEsTUFFaEJHLE1BRmdCO0FBQUEsTUFFUkMsU0FGUTs7QUFBQSxrQkFHTEMsNERBQVEsRUFISDtBQUFBLE1BR2ZDLEtBSGUsYUFHZkEsS0FIZTs7QUFLdkIsU0FDRTtBQUNFLFlBQVE7QUFBQSxrTUFBSSxpQkFBTUMsQ0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1JBLGlCQUFDLENBQUNDLGNBQUY7QUFFQUMsa0VBQU0sQ0FBQyxZQUFELEdBQWdCO0FBQUNSLHNCQUFJLEVBQUVBLElBQVA7QUFBYUUsd0JBQU0sRUFBRUE7QUFBckIsaUJBQWhCLHNHQUFpREcsS0FBakQsSUFBeUQsS0FBekQsQ0FBTjtBQUNBSix1QkFBTyxDQUFDLEVBQUQsQ0FBUDtBQUNBRSx5QkFBUyxDQUFDLEVBQUQsQ0FBVDs7QUFMUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFKOztBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVNFO0FBQU8sU0FBSyxFQUFJSCxJQUFoQjtBQUFzQixZQUFRLEVBQUssa0JBQUFNLENBQUM7QUFBQSxhQUFJTCxPQUFPLENBQUNLLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxLQUFWLENBQVg7QUFBQSxLQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsRUFVRTtBQUFPLFNBQUssRUFBSVIsTUFBaEI7QUFBd0IsWUFBUSxFQUFLLGtCQUFBSSxDQUFDO0FBQUEsYUFBSUgsU0FBUyxDQUFDRyxDQUFDLENBQUNHLE1BQUYsQ0FBU0MsS0FBVixDQUFiO0FBQUEsS0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLEVBV0U7QUFBTyxRQUFJLEVBQUMsUUFBWjtBQUFxQixTQUFLLEVBQUMsS0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhGLENBREY7QUFlRCxDQXBCRDs7R0FBTVosVTtVQUdjTSxvRDs7O0tBSGROLFU7QUFzQlNBLHlFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jcmVhdGVJdGVtLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU29uZ3MgfSBmcm9tICcuL3V0aWwvaG9va3MnXG5pbXBvcnQgeyBtdXRhdGUgfSBmcm9tICdzd3InXG5cbmNvbnN0IENyZWF0ZUl0ZW0gPSAoKSA9PiB7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFttYWRlQnksIHNldE1hZGVCeV0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCB7IHNvbmdzIH0gPSB1c2VTb25ncygpXG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybVxuICAgICAgb25TdWJtaXQgPSB7YXN5bmMgZSA9PiB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgICBtdXRhdGUoXCIvYXBpL3NvbmdzXCIsIFt7bmFtZTogbmFtZSwgbWFkZUJ5OiBtYWRlQnl9LCAuLi5zb25nc10sIGZhbHNlKVxuICAgICAgICAgIHNldE5hbWUoXCJcIilcbiAgICAgICAgICBzZXRNYWRlQnkoXCJcIilcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGlucHV0IHZhbHVlID0ge25hbWV9IG9uQ2hhbmdlID0geyBlID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgPGlucHV0IHZhbHVlID0ge21hZGVCeX0gb25DaGFuZ2UgPSB7IGUgPT4gc2V0TWFkZUJ5KGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJhZGRcIi8+XG4gICAgPC9mb3JtPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZUl0ZW1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/createItem.tsx\n");

/***/ })

})