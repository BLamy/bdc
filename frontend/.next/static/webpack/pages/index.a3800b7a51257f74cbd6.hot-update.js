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

/***/ "./components/BitmapEditor.js":
/*!************************************!*\
  !*** ./components/BitmapEditor.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BitmapEditor\": function() { return /* binding */ BitmapEditor; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/brettlamy/Projects/hardhat-hackathon-boilerplate/frontend/components/BitmapEditor.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$(),\n    _s4 = $RefreshSig$();\n\n\n // Will change how big of bitmap image we are creating\n\n\nconst MATRIX_SIZE = 16; // TODO matrix should be configurable should only recreate test arrays if size changes\n\nconst BORDER_COLOR = \"#666\";\nconst emptyMatrix = Array.apply(null, Array(MATRIX_SIZE)).map(() => Array.apply(null, Array(MATRIX_SIZE)));\nconst Pixel = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`\n  width: 19px;\n  height: 19px;\n  line-height: 19px;\n  border-right: ${props => props.isGridVisible ? `1px dotted ${BORDER_COLOR}` : \"1px solid transparent\"};\n  border-bottom: ${props => props.isGridVisible ? `1px dotted ${BORDER_COLOR}` : \"1px solid transparent\"};\n  background-color: ${props => props.backgroundColor};\n`;\n_c = Pixel;\nconst Flex = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`\n  display: flex;\n`;\n_c2 = Flex;\nconst Card = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`\n  background: white;\n  border-radius: 4px;\n  box-shadow: 0 5px 10px 0 hsl(0deg 0% 78% / 20%);\n  margin: 6px;\n  padding: 6px;\n`;\n_c3 = Card;\nconst GridWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`\n  border: ${props => props.isBorderVisible ? `1px dotted ${BORDER_COLOR}` : \"1px solid transparent\"};\n`; // Hook to track if the user is holding the mouse down.\n\n_c4 = GridWrapper;\n\nconst useIsMouseDown = () => {\n  _s();\n\n  const {\n    0: isMouseDown,\n    1: setIsMouseDown\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const setMouseDown = () => setIsMouseDown(true);\n\n    const setMouseUp = () => setIsMouseDown(false);\n\n    window.addEventListener(\"mousedown\", setMouseDown);\n    window.addEventListener(\"mouseup\", setMouseUp);\n    return () => {\n      window.removeEventListener(\"mousedown\", setMouseDown);\n      window.removeEventListener(\"mouseup\", setMouseUp);\n    };\n  }, []);\n  return isMouseDown;\n}; // Hook to make setting nested state in our matrix easier.\n\n\n_s(useIsMouseDown, \"8jhJ2OmKUhO0mAS29QbCv8IGtWE=\");\n\nconst useGridState = (defaultState, onChange) => {\n  _s2();\n\n  const {\n    0: state,\n    1: setState\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultState);\n\n  const resetMatrix = () => setState(defaultState);\n\n  const setCell = (row, column, value) => {\n    const newState = [...state.slice(0, row), [...state[row].slice(0, column), value, ...state[row].slice(column + 1)], ...state.slice(row + 1)];\n    setState(newState);\n    onChange(newState);\n  };\n\n  return [state, setCell, resetMatrix];\n}; // Hook to help validate custom input on colors\n\n\n_s2(useGridState, \"zRSPpjY2QwRIrw/324ZNGls6hJ8=\");\n\nconst useColorManager = defaultColor => {\n  _s3();\n\n  const {\n    0: rawColorText,\n    1: setRawColorText\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultColor);\n  const {\n    0: lastValidColor,\n    1: setLastValidColor\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultColor);\n\n  const setColorWrapper = newColor => {\n    setRawColorText(newColor);\n\n    if (/#(?:[0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})/.test(newColor)) {\n      setLastValidColor(newColor);\n    }\n  };\n\n  return [lastValidColor, setColorWrapper, rawColorText];\n};\n\n_s3(useColorManager, \"7EWHWCI9c8Rz7uE4LU2Y8CpfQIQ=\");\n\nconst BitmapEditor = ({\n  children,\n  onChange\n}) => {\n  _s4();\n\n  const {\n    0: isGridVisible,\n    1: setIsGridVisible\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n  const [activeColor, setActiveColor, rawColorText] = useColorManager(\"#000\");\n  const [state, setPixelColor, resetMatrix] = useGridState(emptyMatrix, onChange);\n  const isMouseDown = useIsMouseDown();\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Flex, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(GridWrapper, {\n      isBorderVisible: !isGridVisible,\n      children: state.map((_, row) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Flex, {\n        children: state[row].map((_, column) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Pixel, {\n          isGridVisible: isGridVisible,\n          backgroundColor: state[row][column] || \"transparent\",\n          onMouseDown: () => setPixelColor(row, column, activeColor),\n          onMouseUp: () => setPixelColor(row, column, activeColor),\n          onMouseOver: () => {\n            if (isMouseDown) {\n              setPixelColor(row, column, activeColor);\n            }\n          }\n        }, `${row} - ${column}`, false, {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 15\n        }, undefined))\n      }, row, false, {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 11\n      }, undefined))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Card, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n          onClick: resetMatrix,\n          children: \"Clear\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 127,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 126,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Card, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n          onClick: () => setActiveColor(\"#F00\"),\n          children: \"Red\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 130,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n          onClick: () => setActiveColor(\"#00F\"),\n          children: \"Blue\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 131,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n          onClick: () => setActiveColor(\"#0F0\"),\n          children: \"Green\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 132,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n          onChange: e => setActiveColor(e.target.value),\n          value: rawColorText\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 133,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 129,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Card, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n          onClick: () => setIsGridVisible(!isGridVisible),\n          children: \"Toggle Grid\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 139,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 138,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Card, {\n        children: children\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 143,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 104,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s4(BitmapEditor, \"fhDG0BY6jMQoUOr8i6Sd1OA+h+o=\", false, function () {\n  return [useColorManager, useGridState, useIsMouseDown];\n});\n\n_c5 = BitmapEditor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BitmapEditor);\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"Pixel\");\n$RefreshReg$(_c2, \"Flex\");\n$RefreshReg$(_c3, \"Card\");\n$RefreshReg$(_c4, \"GridWrapper\");\n$RefreshReg$(_c5, \"BitmapEditor\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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anM/MmFlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG4vLyBXaWxsIGNoYW5nZSBob3cgYmlnIG9mIGJpdG1hcCBpbWFnZSB3ZSBhcmUgY3JlYXRpbmdcbmNvbnN0IE1BVFJJWF9TSVpFID0gMTY7IC8vIFRPRE8gbWF0cml4IHNob3VsZCBiZSBjb25maWd1cmFibGUgc2hvdWxkIG9ubHkgcmVjcmVhdGUgdGVzdCBhcnJheXMgaWYgc2l6ZSBjaGFuZ2VzXG5jb25zdCBCT1JERVJfQ09MT1IgPSBcIiM2NjZcIjtcblxuY29uc3QgZW1wdHlNYXRyaXggPSBBcnJheS5hcHBseShudWxsLCBBcnJheShNQVRSSVhfU0laRSkpLm1hcCgoKSA9PlxuICBBcnJheS5hcHBseShudWxsLCBBcnJheShNQVRSSVhfU0laRSkpXG4pO1xuXG5jb25zdCBQaXhlbCA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxOXB4O1xuICBoZWlnaHQ6IDE5cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBib3JkZXItcmlnaHQ6ICR7KHByb3BzKSA9PlxuICAgIHByb3BzLmlzR3JpZFZpc2libGVcbiAgICAgID8gYDFweCBkb3R0ZWQgJHtCT1JERVJfQ09MT1J9YFxuICAgICAgOiBcIjFweCBzb2xpZCB0cmFuc3BhcmVudFwifTtcbiAgYm9yZGVyLWJvdHRvbTogJHsocHJvcHMpID0+XG4gICAgcHJvcHMuaXNHcmlkVmlzaWJsZVxuICAgICAgPyBgMXB4IGRvdHRlZCAke0JPUkRFUl9DT0xPUn1gXG4gICAgICA6IFwiMXB4IHNvbGlkIHRyYW5zcGFyZW50XCJ9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMuYmFja2dyb3VuZENvbG9yfTtcbmA7XG5cbmNvbnN0IEZsZXggPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuYDtcblxuY29uc3QgQ2FyZCA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggMCBoc2woMGRlZyAwJSA3OCUgLyAyMCUpO1xuICBtYXJnaW46IDZweDtcbiAgcGFkZGluZzogNnB4O1xuYDtcblxuY29uc3QgR3JpZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBib3JkZXI6ICR7KHByb3BzKSA9PlxuICAgIHByb3BzLmlzQm9yZGVyVmlzaWJsZVxuICAgICAgPyBgMXB4IGRvdHRlZCAke0JPUkRFUl9DT0xPUn1gXG4gICAgICA6IFwiMXB4IHNvbGlkIHRyYW5zcGFyZW50XCJ9O1xuYDtcblxuLy8gSG9vayB0byB0cmFjayBpZiB0aGUgdXNlciBpcyBob2xkaW5nIHRoZSBtb3VzZSBkb3duLlxuY29uc3QgdXNlSXNNb3VzZURvd24gPSAoKSA9PiB7XG4gIGNvbnN0IFtpc01vdXNlRG93biwgc2V0SXNNb3VzZURvd25dID0gdXNlU3RhdGUoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNldE1vdXNlRG93biA9ICgpID0+IHNldElzTW91c2VEb3duKHRydWUpO1xuICAgIGNvbnN0IHNldE1vdXNlVXAgPSAoKSA9PiBzZXRJc01vdXNlRG93bihmYWxzZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgc2V0TW91c2VEb3duKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc2V0TW91c2VVcCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgc2V0TW91c2VEb3duKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzZXRNb3VzZVVwKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIGlzTW91c2VEb3duO1xufTtcblxuLy8gSG9vayB0byBtYWtlIHNldHRpbmcgbmVzdGVkIHN0YXRlIGluIG91ciBtYXRyaXggZWFzaWVyLlxuY29uc3QgdXNlR3JpZFN0YXRlID0gKGRlZmF1bHRTdGF0ZSwgb25DaGFuZ2UpID0+IHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShkZWZhdWx0U3RhdGUpO1xuICBjb25zdCByZXNldE1hdHJpeCA9ICgpID0+IHNldFN0YXRlKGRlZmF1bHRTdGF0ZSk7XG4gIGNvbnN0IHNldENlbGwgPSAocm93LCBjb2x1bW4sIHZhbHVlKSA9PiB7XG4gICAgY29uc3QgbmV3U3RhdGUgPSBbXG4gICAgICAuLi5zdGF0ZS5zbGljZSgwLCByb3cpLFxuICAgICAgWy4uLnN0YXRlW3Jvd10uc2xpY2UoMCwgY29sdW1uKSwgdmFsdWUsIC4uLnN0YXRlW3Jvd10uc2xpY2UoY29sdW1uICsgMSldLFxuICAgICAgLi4uc3RhdGUuc2xpY2Uocm93ICsgMSksXG4gICAgXTtcbiAgICBzZXRTdGF0ZShuZXdTdGF0ZSk7XG4gICAgb25DaGFuZ2UobmV3U3RhdGUpO1xuICB9O1xuXG4gIHJldHVybiBbc3RhdGUsIHNldENlbGwsIHJlc2V0TWF0cml4XTtcbn07XG5cbi8vIEhvb2sgdG8gaGVscCB2YWxpZGF0ZSBjdXN0b20gaW5wdXQgb24gY29sb3JzXG5jb25zdCB1c2VDb2xvck1hbmFnZXIgPSAoZGVmYXVsdENvbG9yKSA9PiB7XG4gIGNvbnN0IFtyYXdDb2xvclRleHQsIHNldFJhd0NvbG9yVGV4dF0gPSB1c2VTdGF0ZShkZWZhdWx0Q29sb3IpO1xuICBjb25zdCBbbGFzdFZhbGlkQ29sb3IsIHNldExhc3RWYWxpZENvbG9yXSA9IHVzZVN0YXRlKGRlZmF1bHRDb2xvcik7XG4gIGNvbnN0IHNldENvbG9yV3JhcHBlciA9IChuZXdDb2xvcikgPT4ge1xuICAgIHNldFJhd0NvbG9yVGV4dChuZXdDb2xvcik7XG4gICAgaWYgKC8jKD86WzAtOUEtRmEtZl17M318WzAtOUEtRmEtZl17Nn0pLy50ZXN0KG5ld0NvbG9yKSkge1xuICAgICAgc2V0TGFzdFZhbGlkQ29sb3IobmV3Q29sb3IpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIFtsYXN0VmFsaWRDb2xvciwgc2V0Q29sb3JXcmFwcGVyLCByYXdDb2xvclRleHRdO1xufTtcblxuZXhwb3J0IGNvbnN0IEJpdG1hcEVkaXRvciA9ICh7IGNoaWxkcmVuLCBvbkNoYW5nZSB9KSA9PiB7XG4gIGNvbnN0IFtpc0dyaWRWaXNpYmxlLCBzZXRJc0dyaWRWaXNpYmxlXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbYWN0aXZlQ29sb3IsIHNldEFjdGl2ZUNvbG9yLCByYXdDb2xvclRleHRdID0gdXNlQ29sb3JNYW5hZ2VyKFwiIzAwMFwiKTtcbiAgY29uc3QgW3N0YXRlLCBzZXRQaXhlbENvbG9yLCByZXNldE1hdHJpeF0gPSB1c2VHcmlkU3RhdGUoXG4gICAgZW1wdHlNYXRyaXgsXG4gICAgb25DaGFuZ2VcbiAgKTtcbiAgY29uc3QgaXNNb3VzZURvd24gPSB1c2VJc01vdXNlRG93bigpO1xuXG4gIHJldHVybiAoXG4gICAgPEZsZXg+XG4gICAgICA8R3JpZFdyYXBwZXIgaXNCb3JkZXJWaXNpYmxlPXshaXNHcmlkVmlzaWJsZX0+XG4gICAgICAgIHtzdGF0ZS5tYXAoKF8sIHJvdykgPT4gKFxuICAgICAgICAgIDxGbGV4IGtleT17cm93fT5cbiAgICAgICAgICAgIHtzdGF0ZVtyb3ddLm1hcCgoXywgY29sdW1uKSA9PiAoXG4gICAgICAgICAgICAgIDxQaXhlbFxuICAgICAgICAgICAgICAgIGlzR3JpZFZpc2libGU9e2lzR3JpZFZpc2libGV9XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPXtzdGF0ZVtyb3ddW2NvbHVtbl0gfHwgXCJ0cmFuc3BhcmVudFwifVxuICAgICAgICAgICAgICAgIGtleT17YCR7cm93fSAtICR7Y29sdW1ufWB9XG4gICAgICAgICAgICAgICAgb25Nb3VzZURvd249eygpID0+IHNldFBpeGVsQ29sb3Iocm93LCBjb2x1bW4sIGFjdGl2ZUNvbG9yKX1cbiAgICAgICAgICAgICAgICBvbk1vdXNlVXA9eygpID0+IHNldFBpeGVsQ29sb3Iocm93LCBjb2x1bW4sIGFjdGl2ZUNvbG9yKX1cbiAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKGlzTW91c2VEb3duKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBpeGVsQ29sb3Iocm93LCBjb2x1bW4sIGFjdGl2ZUNvbG9yKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICApKX1cbiAgICAgIDwvR3JpZFdyYXBwZXI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8Q2FyZD5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Jlc2V0TWF0cml4fT5DbGVhcjwvYnV0dG9uPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDxDYXJkPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlQ29sb3IoXCIjRjAwXCIpfT5SZWQ8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZUNvbG9yKFwiIzAwRlwiKX0+Qmx1ZTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlQ29sb3IoXCIjMEYwXCIpfT5HcmVlbjwvYnV0dG9uPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBY3RpdmVDb2xvcihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICB2YWx1ZT17cmF3Q29sb3JUZXh0fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPENhcmQ+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRJc0dyaWRWaXNpYmxlKCFpc0dyaWRWaXNpYmxlKX0+XG4gICAgICAgICAgICBUb2dnbGUgR3JpZFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDxDYXJkPntjaGlsZHJlbn08L0NhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L0ZsZXg+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCaXRtYXBFZGl0b3I7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdHlsZWQiLCJNQVRSSVhfU0laRSIsIkJPUkRFUl9DT0xPUiIsImVtcHR5TWF0cml4IiwiQXJyYXkiLCJhcHBseSIsIm1hcCIsIlBpeGVsIiwiZGl2IiwicHJvcHMiLCJpc0dyaWRWaXNpYmxlIiwiYmFja2dyb3VuZENvbG9yIiwiRmxleCIsIkNhcmQiLCJHcmlkV3JhcHBlciIsImlzQm9yZGVyVmlzaWJsZSIsInVzZUlzTW91c2VEb3duIiwiaXNNb3VzZURvd24iLCJzZXRJc01vdXNlRG93biIsInNldE1vdXNlRG93biIsInNldE1vdXNlVXAiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInVzZUdyaWRTdGF0ZSIsImRlZmF1bHRTdGF0ZSIsIm9uQ2hhbmdlIiwic3RhdGUiLCJzZXRTdGF0ZSIsInJlc2V0TWF0cml4Iiwic2V0Q2VsbCIsInJvdyIsImNvbHVtbiIsInZhbHVlIiwibmV3U3RhdGUiLCJzbGljZSIsInVzZUNvbG9yTWFuYWdlciIsImRlZmF1bHRDb2xvciIsInJhd0NvbG9yVGV4dCIsInNldFJhd0NvbG9yVGV4dCIsImxhc3RWYWxpZENvbG9yIiwic2V0TGFzdFZhbGlkQ29sb3IiLCJzZXRDb2xvcldyYXBwZXIiLCJuZXdDb2xvciIsInRlc3QiLCJCaXRtYXBFZGl0b3IiLCJjaGlsZHJlbiIsInNldElzR3JpZFZpc2libGUiLCJhY3RpdmVDb2xvciIsInNldEFjdGl2ZUNvbG9yIiwic2V0UGl4ZWxDb2xvciIsIl8iLCJlIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/BitmapEditor.js\n");

/***/ })

});