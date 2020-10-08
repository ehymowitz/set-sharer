webpackHotUpdate_N_E("pages/index",{

/***/ "./components/createGigForm.tsx":
/*!**************************************!*\
  !*** ./components/createGigForm.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var _util_fetcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/fetcher */ \"./components/util/fetcher.tsx\");\n/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/_app */ \"./pages/_app.tsx\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/elie/code/ehymowitz/set-sharer/components/createGigForm.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\nvar CreateGigForm = function CreateGigForm() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      gigName = _useState[0],\n      setGigName = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      password = _useState2[0],\n      setPassword = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true),\n      choice = _useState3[0],\n      setChoice = _useState3[1];\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_pages_app__WEBPACK_IMPORTED_MODULE_5__[\"LoggedIn\"]),\n      loggedIn = _useContext.loggedIn,\n      setLoggedIn = _useContext.setLoggedIn;\n\n  console.log(loggedIn);\n  return __jsx(\"div\", {\n    className: \"gig-form\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }\n  }, __jsx(\"form\", {\n    onSubmit: /*#__PURE__*/function () {\n      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n        var _yield$fetcher, data, error;\n\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                e.preventDefault();\n\n                if (gigName.length === 0 || password.length === 0) {\n                  alert(\"You can't have a blank Gig Name or Password\");\n                }\n\n                _context.next = 4;\n                return Object(_util_fetcher__WEBPACK_IMPORTED_MODULE_4__[\"fetcher\"])(\"/api/\".concat(choice ? \"login\" : \"create\"), {\n                  gigName: gigName,\n                  password: password\n                });\n\n              case 4:\n                _yield$fetcher = _context.sent;\n                data = _yield$fetcher.data;\n                error = _yield$fetcher.error;\n\n                if (!error) {\n                  _context.next = 10;\n                  break;\n                }\n\n                alert(error);\n                return _context.abrupt(\"return\");\n\n              case 10:\n                _context.next = 12;\n                return Object(swr__WEBPACK_IMPORTED_MODULE_3__[\"mutate\"])(\"api/set\");\n\n              case 12:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref.apply(this, arguments);\n      };\n    }(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"inputs\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, __jsx(\"input\", {\n    value: gigName,\n    onChange: function onChange(e) {\n      return setGigName(e.target.value);\n    },\n    placeholder: \"Gig Name\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 11\n    }\n  }), __jsx(\"input\", {\n    value: password,\n    onChange: function onChange(e) {\n      return setPassword(e.target.value);\n    },\n    placeholder: \"Password\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 11\n    }\n  }), __jsx(\"input\", {\n    type: \"submit\",\n    value: choice ? \"View a gig\" : \"Create a gig\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 11\n    }\n  }))), __jsx(\"a\", {\n    onClick: function onClick() {\n      return setChoice(!choice);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }\n  }, \"Want to create a gig? Click here\"));\n};\n\n_s(CreateGigForm, \"Dtj6gan6wjYMk9reiy8Q9ZeWlJc=\");\n\n_c = CreateGigForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateGigForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"CreateGigForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcmVhdGVHaWdGb3JtLnRzeD9jZmZmIl0sIm5hbWVzIjpbIkNyZWF0ZUdpZ0Zvcm0iLCJ1c2VTdGF0ZSIsImdpZ05hbWUiLCJzZXRHaWdOYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImNob2ljZSIsInNldENob2ljZSIsInVzZUNvbnRleHQiLCJMb2dnZWRJbiIsImxvZ2dlZEluIiwic2V0TG9nZ2VkSW4iLCJjb25zb2xlIiwibG9nIiwiZSIsInByZXZlbnREZWZhdWx0IiwibGVuZ3RoIiwiYWxlcnQiLCJmZXRjaGVyIiwiZGF0YSIsImVycm9yIiwibXV0YXRlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQUEsa0JBQ0lDLHNEQUFRLENBQUMsRUFBRCxDQURaO0FBQUEsTUFDbkJDLE9BRG1CO0FBQUEsTUFDVkMsVUFEVTs7QUFBQSxtQkFFTUYsc0RBQVEsQ0FBQyxFQUFELENBRmQ7QUFBQSxNQUVuQkcsUUFGbUI7QUFBQSxNQUVUQyxXQUZTOztBQUFBLG1CQUdFSixzREFBUSxDQUFDLElBQUQsQ0FIVjtBQUFBLE1BR25CSyxNQUhtQjtBQUFBLE1BR1hDLFNBSFc7O0FBQUEsb0JBSVFDLHdEQUFVLENBQUNDLG1EQUFELENBSmxCO0FBQUEsTUFJbEJDLFFBSmtCLGVBSWxCQSxRQUprQjtBQUFBLE1BSVJDLFdBSlEsZUFJUkEsV0FKUTs7QUFNMUJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxRQUFaO0FBRUEsU0FDRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFlBQVE7QUFBQSxrTUFBRyxpQkFBT0ksQ0FBUDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1RBLGlCQUFDLENBQUNDLGNBQUY7O0FBQ0Esb0JBQUliLE9BQU8sQ0FBQ2MsTUFBUixLQUFtQixDQUFuQixJQUF3QlosUUFBUSxDQUFDWSxNQUFULEtBQW9CLENBQWhELEVBQW1EO0FBQ2pEQyx1QkFBSyxDQUNILDZDQURHLENBQUw7QUFHRDs7QUFOUTtBQUFBLHVCQU9xQkMsNkRBQU8sZ0JBQzNCWixNQUFNLEdBQUcsT0FBSCxHQUFhLFFBRFEsR0FFbkM7QUFDRUoseUJBQU8sRUFBUEEsT0FERjtBQUVFRSwwQkFBUSxFQUFSQTtBQUZGLGlCQUZtQyxDQVA1Qjs7QUFBQTtBQUFBO0FBT0RlLG9CQVBDLGtCQU9EQSxJQVBDO0FBT0tDLHFCQVBMLGtCQU9LQSxLQVBMOztBQUFBLHFCQWNMQSxLQWRLO0FBQUE7QUFBQTtBQUFBOztBQWVQSCxxQkFBSyxDQUFDRyxLQUFELENBQUw7QUFmTzs7QUFBQTtBQUFBO0FBQUEsdUJBa0JIQyxrREFBTSxDQUFDLFNBQUQsQ0FsQkg7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FzQkU7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDQSxTQUFLLEVBQUluQixPQURUO0FBRUEsWUFBUSxFQUFHLGtCQUFBWSxDQUFDO0FBQUEsYUFBR1gsVUFBVSxDQUFDVyxDQUFDLENBQUNRLE1BQUYsQ0FBU0MsS0FBVixDQUFiO0FBQUEsS0FGWjtBQUdBLGVBQVcsRUFBRyxVQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQU1FO0FBQ0EsU0FBSyxFQUFJbkIsUUFEVDtBQUVBLFlBQVEsRUFBRyxrQkFBQVUsQ0FBQztBQUFBLGFBQUdULFdBQVcsQ0FBQ1MsQ0FBQyxDQUFDUSxNQUFGLENBQVNDLEtBQVYsQ0FBZDtBQUFBLEtBRlo7QUFHQSxlQUFXLEVBQUcsVUFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsRUFXRTtBQUFPLFFBQUksRUFBQyxRQUFaO0FBQXFCLFNBQUssRUFBSWpCLE1BQU0sR0FBRyxZQUFILEdBQWtCLGNBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRixDQXRCRixDQURGLEVBcUNFO0FBQUcsV0FBTyxFQUFJO0FBQUEsYUFBTUMsU0FBUyxDQUFDLENBQUNELE1BQUYsQ0FBZjtBQUFBLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3Q0FyQ0YsQ0FERjtBQTJDRCxDQW5ERDs7R0FBTU4sYTs7S0FBQUEsYTtBQXFEU0EsNEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2NyZWF0ZUdpZ0Zvcm0udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtdXRhdGUgfSBmcm9tICdzd3InXG5pbXBvcnQgeyBmZXRjaGVyIH0gZnJvbSAnLi91dGlsL2ZldGNoZXInXG5pbXBvcnQgeyBMb2dnZWRJbiB9IGZyb20gJy4uL3BhZ2VzL19hcHAnXG5cbmNvbnN0IENyZWF0ZUdpZ0Zvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IFtnaWdOYW1lLCBzZXRHaWdOYW1lXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW2Nob2ljZSwgc2V0Q2hvaWNlXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IHsgbG9nZ2VkSW4sIHNldExvZ2dlZEluIH0gPSB1c2VDb250ZXh0KExvZ2dlZEluKVxuXG4gIGNvbnNvbGUubG9nKGxvZ2dlZEluKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJnaWctZm9ybVwiPlxuICAgICAgPGZvcm1cbiAgICAgICAgb25TdWJtaXQ9eyBhc3luYyAoZSkgPT4ge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGlmIChnaWdOYW1lLmxlbmd0aCA9PT0gMCB8fCBwYXNzd29yZC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGFsZXJ0KFxuICAgICAgICAgICAgICBcIllvdSBjYW4ndCBoYXZlIGEgYmxhbmsgR2lnIE5hbWUgb3IgUGFzc3dvcmRcIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBmZXRjaGVyKFxuICAgICAgICAgICAgYC9hcGkvJHtjaG9pY2UgPyBcImxvZ2luXCIgOiBcImNyZWF0ZVwiIH1gLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBnaWdOYW1lLFxuICAgICAgICAgICAgICBwYXNzd29yZFxuICAgICAgICAgICAgfVxuICAgICAgICAgIClcbiAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIGF3YWl0IG11dGF0ZShcImFwaS9zZXRcIilcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dHNcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICB2YWx1ZSA9IHtnaWdOYW1lfVxuICAgICAgICAgIG9uQ2hhbmdlPSB7ZSA9PnNldEdpZ05hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHBsYWNlaG9sZGVyID0gXCJHaWcgTmFtZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICB2YWx1ZSA9IHtwYXNzd29yZH1cbiAgICAgICAgICBvbkNoYW5nZT0ge2UgPT5zZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgcGxhY2Vob2xkZXIgPSBcIlBhc3N3b3JkXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWUgPSB7Y2hvaWNlID8gXCJWaWV3IGEgZ2lnXCIgOiBcIkNyZWF0ZSBhIGdpZ1wifS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgICAgPGEgb25DbGljaz0geyAoKSA9PiBzZXRDaG9pY2UoIWNob2ljZSl9PlxuICAgICAgICBXYW50IHRvIGNyZWF0ZSBhIGdpZz8gQ2xpY2sgaGVyZVxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZUdpZ0Zvcm1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/createGigForm.tsx\n");

/***/ })

})