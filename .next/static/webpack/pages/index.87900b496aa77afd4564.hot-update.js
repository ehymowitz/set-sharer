webpackHotUpdate_N_E("pages/index",{

/***/ "./components/util/hooks.tsx":
/*!***********************************!*\
  !*** ./components/util/hooks.tsx ***!
  \***********************************/
/*! exports provided: useSongs, useGigInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useSongs\", function() { return useSongs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useGigInfo\", function() { return useGigInfo; });\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetcher */ \"./components/util/fetcher.tsx\");\nvar _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\nfunction useSongs() {\n  _s();\n\n  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"/api/songs\", _fetcher__WEBPACK_IMPORTED_MODULE_1__[\"fetcher\"]),\n      songs = _useSWR.data;\n\n  return {\n    songs: songs\n  };\n}\n\n_s(useSongs, \"Aphn1bV5ZVWK9FKWfJJhVjpXKH8=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"]];\n});\n\nfunction useGigInfo() {\n  _s2();\n\n  var _useSWR2 = Object(swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"/api/set\", _fetcher__WEBPACK_IMPORTED_MODULE_1__[\"fetcher\"]),\n      gigInfo = _useSWR2.data;\n\n  return {\n    gigInfo: gigInfo\n  };\n}\n\n_s2(useGigInfo, \"nmGBrSabUPh8ZivyV88L4X0+Iew=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"]];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91dGlsL2hvb2tzLnRzeD8xNTE5Il0sIm5hbWVzIjpbInVzZVNvbmdzIiwidXNlU1dSIiwiZmV0Y2hlciIsInNvbmdzIiwiZGF0YSIsInVzZUdpZ0luZm8iLCJnaWdJbmZvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRUE7QUFFTyxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQUEsZ0JBQ2tDQyxtREFBTSxDQUFDLFlBQUQsRUFBZUMsZ0RBQWYsQ0FEeEM7QUFBQSxNQUNYQyxLQURXLFdBQ2pCQyxJQURpQjs7QUFFekIsU0FBTztBQUFFRCxTQUFLLEVBQUxBO0FBQUYsR0FBUDtBQUNEOztHQUhlSCxRO1VBQzZDQywyQzs7O0FBSXRELFNBQVNJLFVBQVQsR0FBc0I7QUFBQTs7QUFBQSxpQkFDZUosbURBQU0sQ0FBQyxVQUFELEVBQWFDLGdEQUFiLENBRHJCO0FBQUEsTUFDYkksT0FEYSxZQUNuQkYsSUFEbUI7O0FBRTNCLFNBQU87QUFBRUUsV0FBTyxFQUFQQTtBQUFGLEdBQVA7QUFDRDs7SUFIZUQsVTtVQUM0QkosMkMiLCJmaWxlIjoiLi9jb21wb25lbnRzL3V0aWwvaG9va3MudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5pbXBvcnQgIHsgU2V0IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5pbXBvcnQgeyBmZXRjaGVyIH0gZnJvbSAnLi9mZXRjaGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlU29uZ3MoKSB7XG4gIGNvbnN0IHsgZGF0YTogc29uZ3MgfTogeyBkYXRhPzogKHNvbmcgJiB7IFNldDogU2V0fSlbXSB9ID0gdXNlU1dSKFwiL2FwaS9zb25nc1wiLCBmZXRjaGVyKVxuICByZXR1cm4geyBzb25ncyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VHaWdJbmZvKCkge1xuICBjb25zdCB7IGRhdGE6IGdpZ0luZm8gfTogeyBkYXRhPzogU2V0IH0gPSB1c2VTV1IoXCIvYXBpL3NldFwiLCBmZXRjaGVyKVxuICByZXR1cm4geyBnaWdJbmZvIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/util/hooks.tsx\n");

/***/ })

})