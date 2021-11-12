"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Calendar.js":
/*!********************************!*\
  !*** ./components/Calendar.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Calendar\": function() { return /* binding */ Calendar; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/brettlamy/Projects/hardhat-hackathon-boilerplate/frontend/components/Calendar.js\",\n    _s = $RefreshSig$();\n\n\n\n\nconst Flex = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`\n  /* display: grid;\n  grid-template-columns: repeat(auto-fill,minmax(160px, 1fr)); */\n\n\n  display: flex;\n  flex-wrap: wrap;\n\n  div {\n    flex-grow: 1;\n    width: calc(100% / 7);\n    height: 100px;\n  }\n`;\n_c = Flex;\nconst monthNames = [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"];\n\nfunction daysInMonth(m, y) {\n  // m is 1 indexed: 1-12\n  if (m == 1) {\n    return y % 4 == 0 && y % 100 != 0 || y % 400 == 0 ? 29 : 28;\n  }\n\n  if (m == 3 || m == 5 || m == 8 || m == 10) {\n    return 30;\n  }\n\n  return 31;\n}\n\nconst Calendar = ({}) => {\n  _s();\n\n  const {\n    0: now,\n    1: setNow\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Date());\n  const daysThisMonth = daysInMonth(now.getMonth(), now.getFullYear());\n  const daysLastMonth = now.getMonth() === 0 ? daysInMonth(now.getMonth() - 1, now.getFullYear() - 1) : daysInMonth(now.getMonth() - 1, now.getFullYear());\n  const dayOfWeekStart = new Date(`${now.getMonth() + 1}/1/${now.getFullYear()}`).getDay();\n  const remainderDays = 7 - (daysThisMonth + dayOfWeekStart) % 7;\n  let days = [];\n\n  for (let i = 1; i <= daysThisMonth + dayOfWeekStart + remainderDays; i++) {\n    let date = i - dayOfWeekStart;\n\n    if (date > daysThisMonth) {\n      days.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: i - daysThisMonth - 1\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 17\n      }, undefined));\n    } else if (date > 0) {\n      days.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: date\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 17\n      }, undefined));\n    } else {\n      days.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: daysLastMonth - i + 1\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 17\n      }, undefined));\n    }\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    children: [remainderDays, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n      onClick: () => setNow(now.setMonth(now.getMonth() - 1)),\n      children: [\"prev\", daysLastMonth]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 5\n    }, undefined), monthNames[now.getMonth()], /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n      children: \"next\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 126\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Flex, {\n      children: days\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 5\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 54,\n    columnNumber: 10\n  }, undefined);\n};\n\n_s(Calendar, \"k1gvvGuBH22uQ9VP8QXMYXS5enU=\");\n\n_c2 = Calendar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calendar);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Flex\");\n$RefreshReg$(_c2, \"Calendar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TVAsYUFBYSxHQUFHSyxDQUFoQixHQUFvQjtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFWO0FBQ0Q7QUFDRjs7QUFDRCxzQkFBTztBQUFBLGVBQ0pGLGFBREksZUFFTDtBQUFRLGFBQU8sRUFBRSxNQUFNUixNQUFNLENBQUNELEdBQUcsQ0FBQ2MsUUFBSixDQUFhZCxHQUFHLENBQUNJLFFBQUosS0FBaUIsQ0FBOUIsQ0FBRCxDQUE3QjtBQUFBLHlCQUFzRUUsYUFBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZLLEVBRXlGWCxVQUFVLENBQUNLLEdBQUcsQ0FBQ0ksUUFBSixFQUFELENBRm5HLGVBRW9IO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZwSCxlQUdMLDhEQUFDLElBQUQ7QUFBQSxnQkFFQ007QUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBUUQsQ0E1Qk07O0dBQU1YOztNQUFBQTtBQThCYiwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NhbGVuZGFyLmpzPzI0N2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBGbGV4ID0gc3R5bGVkLmRpdmBcbiAgLyogZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLG1pbm1heCgxNjBweCwgMWZyKSk7ICovXG5cblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgZGl2IHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDcpO1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cbmBcblxuY29uc3QgbW9udGhOYW1lcyA9IFtcbiAgXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLFxuICBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiXG5dO1xuXG5mdW5jdGlvbiBkYXlzSW5Nb250aChtLCB5KSB7IC8vIG0gaXMgMSBpbmRleGVkOiAxLTEyXG4gIGlmIChtID09IDEpIHtcbiAgICByZXR1cm4gKHkgJSA0ID09IDAgJiYgeSAlIDEwMCAhPSAwKSB8fCB5ICUgNDAwID09IDAgPyAyOSA6IDI4O1xuICB9XG4gIGlmIChtID09IDMgfHwgbSA9PSA1IHx8IG0gPT0gOCB8fCBtID09IDEwKSB7XG4gICAgcmV0dXJuIDMwO1xuICB9XG4gIHJldHVybiAzMTtcbn1cblxuZXhwb3J0IGNvbnN0IENhbGVuZGFyID0gKHsgfSkgPT4ge1xuICBjb25zdCBbbm93LCBzZXROb3ddID0gdXNlU3RhdGUobmV3IERhdGUoKSk7XG4gIGNvbnN0IGRheXNUaGlzTW9udGggPSBkYXlzSW5Nb250aChub3cuZ2V0TW9udGgoKSwgbm93LmdldEZ1bGxZZWFyKCkpO1xuICBjb25zdCBkYXlzTGFzdE1vbnRoID0gbm93LmdldE1vbnRoKCkgPT09IDAgXG4gICAgPyBkYXlzSW5Nb250aChub3cuZ2V0TW9udGgoKSAtIDEsIG5vdy5nZXRGdWxsWWVhcigpIC0gMSkgXG4gICAgOiBkYXlzSW5Nb250aChub3cuZ2V0TW9udGgoKSAtIDEsIG5vdy5nZXRGdWxsWWVhcigpKTtcbiAgY29uc3QgZGF5T2ZXZWVrU3RhcnQgPSBuZXcgRGF0ZShgJHtub3cuZ2V0TW9udGgoKSsxfS8xLyR7bm93LmdldEZ1bGxZZWFyKCl9YCkuZ2V0RGF5KCk7XG4gIGNvbnN0IHJlbWFpbmRlckRheXMgPSA3IC0gKChkYXlzVGhpc01vbnRoICsgZGF5T2ZXZWVrU3RhcnQpICUgNyk7XG5cbiAgbGV0IGRheXMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gZGF5c1RoaXNNb250aCArIGRheU9mV2Vla1N0YXJ0ICsgcmVtYWluZGVyRGF5czsgaSsrKSB7XG4gICAgbGV0IGRhdGUgPSBpIC0gZGF5T2ZXZWVrU3RhcnQ7XG4gICAgaWYgKGRhdGUgPiBkYXlzVGhpc01vbnRoKSB7XG4gICAgICBkYXlzLnB1c2goPGRpdj57aSAtIGRheXNUaGlzTW9udGggLSAxfTwvZGl2PilcbiAgICB9IGVsc2UgaWYgKGRhdGUgPiAwKSB7XG4gICAgICBkYXlzLnB1c2goPGRpdj57ZGF0ZX08L2Rpdj4pXG4gICAgfSBlbHNlIHtcbiAgICAgIGRheXMucHVzaCg8ZGl2PntkYXlzTGFzdE1vbnRoIC0gaSArIDF9PC9kaXY+KVxuICAgIH1cbiAgfVxuICByZXR1cm4gPGRpdj5cbiAgICB7cmVtYWluZGVyRGF5c31cbiAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldE5vdyhub3cuc2V0TW9udGgobm93LmdldE1vbnRoKCkgLSAxKSl9PnByZXZ7ZGF5c0xhc3RNb250aH08L2J1dHRvbj57bW9udGhOYW1lc1tub3cuZ2V0TW9udGgoKV19PGJ1dHRvbj5uZXh0PC9idXR0b24+XG4gICAgPEZsZXg+XG4gICAgICBcbiAgICB7ZGF5c31cbiAgICAgIDwvRmxleD5cbiAgPC9kaXY+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYWxlbmRhcjsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzdHlsZWQiLCJGbGV4IiwiZGl2IiwibW9udGhOYW1lcyIsImRheXNJbk1vbnRoIiwibSIsInkiLCJDYWxlbmRhciIsIm5vdyIsInNldE5vdyIsIkRhdGUiLCJkYXlzVGhpc01vbnRoIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsImRheXNMYXN0TW9udGgiLCJkYXlPZldlZWtTdGFydCIsImdldERheSIsInJlbWFpbmRlckRheXMiLCJkYXlzIiwiaSIsImRhdGUiLCJwdXNoIiwic2V0TW9udGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Calendar.js\n");

/***/ })

});