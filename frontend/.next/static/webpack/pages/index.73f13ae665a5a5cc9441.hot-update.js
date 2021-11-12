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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Calendar\": function() { return /* binding */ Calendar; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/brettlamy/Projects/hardhat-hackathon-boilerplate/frontend/components/Calendar.js\";\n\n\nconst Flex = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`\n  display: grid;\n  grid-template-columns: repeat(auto-fill,minmax(160px, 1fr));\n`;\n_c = Flex;\nconst monthNames = [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"];\n\nfunction daysInMonth(m, y) {\n  // m is 1 indexed: 1-12\n  if (m == 1) {\n    return y % 4 == 0 && y % 100 != 0 || y % 400 == 0 ? 29 : 28;\n  }\n\n  if (m == 3 || m == 5 || m == 8 || m == 10) {\n    return 30;\n  }\n\n  return 31;\n}\n\nconst Calendar = ({\n  now = new Date()\n}) => {\n  const daysThisMonth = daysInMonth(now.getMonth(), now.getFullYear());\n  const daysLastMonth = now.getMonth() === 0 ? daysInMonth(now.getMonth() - 1, now.getFullYear() - 1) : daysInMonth(now.getMonth() - 1, now.getFullYear());\n  const dayOfWeekStart = new Date(`${now.getMonth() + 1}/1/${now.getFullYear()}`).getDay();\n  const remainderDays = (daysThisMonth + dayOfWeekStart) % 7;\n  let days = [];\n\n  for (let i = 1; i <= daysThisMonth + dayOfWeekStart + remainderDays; i++) {\n    let date = i - dayOfWeekStart;\n\n    if (date > daysThisMonth) {\n      days.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: i - daysThisMonth\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 17\n      }, undefined));\n    } else if (date > 0) {\n      days.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: date\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 17\n      }, undefined));\n    } else {\n      days.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: daysLastMonth - i + 1\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 17\n      }, undefined));\n    }\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      children: [\"prev\", daysLastMonth]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 5\n    }, undefined), monthNames[now.getMonth()], /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      children: \"next\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 69\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Flex, {\n      children: days\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 5\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 10\n  }, undefined);\n};\n_c2 = Calendar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calendar);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Flex\");\n$RefreshReg$(_c2, \"Calendar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE7QUFBQSxpQkFESyxFQUNnQ1YsVUFBVSxDQUFDSyxHQUFHLENBQUNHLFFBQUosRUFBRCxDQUQxQyxlQUMyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEM0QsZUFFTCw4REFBQyxJQUFEO0FBQUEsZ0JBRUNNO0FBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQU9ELENBMUJNO01BQU1WO0FBNEJiLCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2FsZW5kYXIuanM/MjQ3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgRmxleCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCxtaW5tYXgoMTYwcHgsIDFmcikpO1xuYFxuXG5jb25zdCBtb250aE5hbWVzID0gW1xuICBcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsXG4gIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCJcbl07XG5cbmZ1bmN0aW9uIGRheXNJbk1vbnRoKG0sIHkpIHsgLy8gbSBpcyAxIGluZGV4ZWQ6IDEtMTJcbiAgaWYgKG0gPT0gMSkge1xuICAgIHJldHVybiAoeSAlIDQgPT0gMCAmJiB5ICUgMTAwICE9IDApIHx8IHkgJSA0MDAgPT0gMCA/IDI5IDogMjg7XG4gIH1cbiAgaWYgKG0gPT0gMyB8fCBtID09IDUgfHwgbSA9PSA4IHx8IG0gPT0gMTApIHtcbiAgICByZXR1cm4gMzA7XG4gIH1cbiAgcmV0dXJuIDMxO1xufVxuXG5leHBvcnQgY29uc3QgQ2FsZW5kYXIgPSAoeyBub3cgPSBuZXcgRGF0ZSgpIH0pID0+IHtcbiAgY29uc3QgZGF5c1RoaXNNb250aCA9IGRheXNJbk1vbnRoKG5vdy5nZXRNb250aCgpLCBub3cuZ2V0RnVsbFllYXIoKSk7XG4gIGNvbnN0IGRheXNMYXN0TW9udGggPSBub3cuZ2V0TW9udGgoKSA9PT0gMCBcbiAgICA/IGRheXNJbk1vbnRoKG5vdy5nZXRNb250aCgpIC0gMSwgbm93LmdldEZ1bGxZZWFyKCkgLSAxKSBcbiAgICA6IGRheXNJbk1vbnRoKG5vdy5nZXRNb250aCgpIC0gMSwgbm93LmdldEZ1bGxZZWFyKCkpO1xuICBjb25zdCBkYXlPZldlZWtTdGFydCA9IG5ldyBEYXRlKGAke25vdy5nZXRNb250aCgpKzF9LzEvJHtub3cuZ2V0RnVsbFllYXIoKX1gKS5nZXREYXkoKTtcbiAgY29uc3QgcmVtYWluZGVyRGF5cyA9ICgoZGF5c1RoaXNNb250aCArIGRheU9mV2Vla1N0YXJ0KSAlIDcpO1xuXG4gIGxldCBkYXlzID0gW107XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IGRheXNUaGlzTW9udGggKyBkYXlPZldlZWtTdGFydCArIHJlbWFpbmRlckRheXM7IGkrKykge1xuICAgIGxldCBkYXRlID0gaSAtIGRheU9mV2Vla1N0YXJ0O1xuICAgIGlmIChkYXRlID4gZGF5c1RoaXNNb250aCkge1xuICAgICAgZGF5cy5wdXNoKDxkaXY+e2kgLSBkYXlzVGhpc01vbnRofTwvZGl2PilcbiAgICB9IGVsc2UgaWYgKGRhdGUgPiAwKSB7XG4gICAgICBkYXlzLnB1c2goPGRpdj57ZGF0ZX08L2Rpdj4pXG4gICAgfSBlbHNlIHtcbiAgICAgIGRheXMucHVzaCg8ZGl2PntkYXlzTGFzdE1vbnRoIC0gaSArIDF9PC9kaXY+KVxuICAgIH1cbiAgfVxuICByZXR1cm4gPGRpdj5cbiAgICA8YnV0dG9uPnByZXZ7ZGF5c0xhc3RNb250aH08L2J1dHRvbj57bW9udGhOYW1lc1tub3cuZ2V0TW9udGgoKV19PGJ1dHRvbj5uZXh0PC9idXR0b24+XG4gICAgPEZsZXg+XG4gICAgICBcbiAgICB7ZGF5c31cbiAgICAgIDwvRmxleD5cbiAgPC9kaXY+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYWxlbmRhcjsiXSwibmFtZXMiOlsic3R5bGVkIiwiRmxleCIsImRpdiIsIm1vbnRoTmFtZXMiLCJkYXlzSW5Nb250aCIsIm0iLCJ5IiwiQ2FsZW5kYXIiLCJub3ciLCJEYXRlIiwiZGF5c1RoaXNNb250aCIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJkYXlzTGFzdE1vbnRoIiwiZGF5T2ZXZWVrU3RhcnQiLCJnZXREYXkiLCJyZW1haW5kZXJEYXlzIiwiZGF5cyIsImkiLCJkYXRlIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Calendar.js\n");

/***/ })

});