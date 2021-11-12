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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BitmapEditor\": function() { return /* binding */ BitmapEditor; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/brettlamy/Projects/hardhat-hackathon-boilerplate/frontend/components/BitmapEditor.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$(),\n    _s4 = $RefreshSig$();\n\n\n // Will change how big of bitmap image we are creating\n\n\nconst MATRIX_SIZE = 16;\nconst BORDER_COLOR = \"#666\";\nconst emptyMatrix = Array.apply(null, Array(MATRIX_SIZE)).map(() => Array.apply(null, Array(MATRIX_SIZE)));\nconst Pixel = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`\n  width: 19px;\n  height: 19px;\n  line-height: 19px;\n  border-right: ${props => props.isGridVisible ? `1px dotted ${BORDER_COLOR}` : \"1px solid transparent\"};\n  border-bottom: ${props => props.isGridVisible ? `1px dotted ${BORDER_COLOR}` : \"1px solid transparent\"};\n  background-color: ${props => props.backgroundColor};\n`;\n_c = Pixel;\nconst Flex = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`\n  display: flex;\n`;\n_c2 = Flex;\nconst Card = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`\n  background: white;\n  border-radius: 4px;\n  box-shadow: 0 5px 10px 0 hsl(0deg 0% 78% / 20%);\n  margin: 6px;\n  padding: 6px;\n`;\n_c3 = Card;\nconst GridWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`\n  border: ${props => props.isBorderVisible ? `1px dotted ${BORDER_COLOR}` : \"1px solid transparent\"};\n`; // Hook to track if the user is holding the mouse down.\n\n_c4 = GridWrapper;\n\nconst useIsMouseDown = () => {\n  _s();\n\n  const {\n    0: isMouseDown,\n    1: setIsMouseDown\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const setMouseDown = () => setIsMouseDown(true);\n\n    const setMouseUp = () => setIsMouseDown(false);\n\n    window.addEventListener(\"mousedown\", setMouseDown);\n    window.addEventListener(\"mouseup\", setMouseUp);\n    return () => {\n      window.removeEventListener(\"mousedown\", setMouseDown);\n      window.removeEventListener(\"mouseup\", setMouseUp);\n    };\n  }, []);\n  return isMouseDown;\n}; // Hook to make setting nested state in our matrix easier.\n\n\n_s(useIsMouseDown, \"8jhJ2OmKUhO0mAS29QbCv8IGtWE=\");\n\nconst useGridState = defaultState => {\n  _s2();\n\n  const {\n    0: state,\n    1: setState\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultState);\n\n  const resetMatrix = () => setState(defaultState);\n\n  const setCell = (row, column, value) => {\n    setState([...state.slice(0, row), [...state[row].slice(0, column), value, ...state[row].slice(column + 1)], ...state.slice(row + 1)]);\n  };\n\n  return [state, setCell, resetMatrix];\n}; // Hook to help validate custom input on colors\n\n\n_s2(useGridState, \"zRSPpjY2QwRIrw/324ZNGls6hJ8=\");\n\nconst useColorManager = defaultColor => {\n  _s3();\n\n  const {\n    0: rawColorText,\n    1: setRawColorText\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultColor);\n  const {\n    0: lastValidColor,\n    1: setLastValidColor\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultColor);\n\n  const setColorWrapper = newColor => {\n    setRawColorText(newColor);\n\n    if (/#(?:[0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})/.test(newColor)) {\n      setLastValidColor(newColor);\n    }\n  };\n\n  return [lastValidColor, setColorWrapper, rawColorText];\n};\n\n_s3(useColorManager, \"7EWHWCI9c8Rz7uE4LU2Y8CpfQIQ=\");\n\nconst BitmapEditor = () => {\n  _s4();\n\n  const {\n    0: isGridVisible,\n    1: setIsGridVisible\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n  const [activeColor, setActiveColor, rawColorText] = useColorManager(\"#000\");\n  const [state, setPixelColor, resetMatrix] = useGridState(emptyMatrix);\n  const isMouseDown = useIsMouseDown();\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Flex, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(GridWrapper, {\n      isBorderVisible: !isGridVisible,\n      children: state.map((_, row) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Flex, {\n        children: state[row].map((_, column) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Pixel, {\n          isGridVisible: isGridVisible,\n          backgroundColor: state[row][column] || \"transparent\",\n          onMouseDown: () => setPixelColor(row, column, activeColor),\n          onMouseUp: () => setPixelColor(row, column, activeColor),\n          onMouseOver: () => {\n            if (isMouseDown) {\n              setPixelColor(row, column, activeColor);\n            }\n          }\n        }, `${row} - ${column}`, false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 15\n        }, undefined))\n      }, row, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 11\n      }, undefined))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Card, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n          onClick: resetMatrix,\n          children: \"Clear\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Card, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n          onClick: () => setActiveColor(\"#FF0000\"),\n          children: \"Red\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 118,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n          onClick: () => setActiveColor(\"#0000FF\"),\n          children: \"Blue\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 119,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n          onClick: () => setActiveColor(\"#00FF00\"),\n          children: \"Green\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 120,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n          onChange: e => setActiveColor(e.target.value),\n          value: rawColorText\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 121,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Card, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n          onClick: () => setIsGridVisible(!isGridVisible),\n          children: \"Toggle Grid\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 124,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 92,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s4(BitmapEditor, \"fhDG0BY6jMQoUOr8i6Sd1OA+h+o=\", false, function () {\n  return [useColorManager, useGridState, useIsMouseDown];\n});\n\n_c5 = BitmapEditor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BitmapEditor);\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"Pixel\");\n$RefreshReg$(_c2, \"Flex\");\n$RefreshReg$(_c3, \"Card\");\n$RefreshReg$(_c4, \"GridWrapper\");\n$RefreshReg$(_c5, \"BitmapEditor\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBUSxpQkFBTyxFQUFFLE1BQU1BLGNBQWMsQ0FBQyxTQUFELENBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLGVBR0U7QUFBUSxpQkFBTyxFQUFFLE1BQU1BLGNBQWMsQ0FBQyxTQUFELENBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGLGVBSUU7QUFBTyxrQkFBUSxFQUFFRyxDQUFDLElBQUlILGNBQWMsQ0FBQ0csQ0FBQyxDQUFDQyxNQUFGLENBQVNsQixLQUFWLENBQXBDO0FBQXNELGVBQUssRUFBRUk7QUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkYsZUFVRSw4REFBQyxJQUFEO0FBQUEsK0JBQ0U7QUFBUSxpQkFBTyxFQUFFLE1BQU1RLGdCQUFnQixDQUFDLENBQUNsQyxhQUFGLENBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBckJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBd0NELENBOUNNOztJQUFNaUM7VUFFeUNULGlCQUNSVixjQUN4QlI7OztNQUpUMkI7QUFnRGIsK0RBQWVBLFlBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CaXRtYXBFZGl0b3IuanM/MmFlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG4vLyBXaWxsIGNoYW5nZSBob3cgYmlnIG9mIGJpdG1hcCBpbWFnZSB3ZSBhcmUgY3JlYXRpbmdcbmNvbnN0IE1BVFJJWF9TSVpFID0gMTY7XG5jb25zdCBCT1JERVJfQ09MT1IgPSBcIiM2NjZcIjtcblxuY29uc3QgZW1wdHlNYXRyaXggPSBBcnJheS5hcHBseShudWxsLCBBcnJheShNQVRSSVhfU0laRSkpLm1hcCgoKSA9PlxuICBBcnJheS5hcHBseShudWxsLCBBcnJheShNQVRSSVhfU0laRSkpXG4pO1xuXG5jb25zdCBQaXhlbCA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxOXB4O1xuICBoZWlnaHQ6IDE5cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBib3JkZXItcmlnaHQ6ICR7KHByb3BzKSA9PlxuICAgIHByb3BzLmlzR3JpZFZpc2libGUgPyBgMXB4IGRvdHRlZCAke0JPUkRFUl9DT0xPUn1gIDogXCIxcHggc29saWQgdHJhbnNwYXJlbnRcIn07XG4gIGJvcmRlci1ib3R0b206ICR7KHByb3BzKSA9PlxuICAgIHByb3BzLmlzR3JpZFZpc2libGUgPyBgMXB4IGRvdHRlZCAke0JPUkRFUl9DT0xPUn1gIDogXCIxcHggc29saWQgdHJhbnNwYXJlbnRcIn07XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy5iYWNrZ3JvdW5kQ29sb3J9O1xuYDtcblxuY29uc3QgRmxleCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG5gO1xuXG5jb25zdCBDYXJkID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCA1cHggMTBweCAwIGhzbCgwZGVnIDAlIDc4JSAvIDIwJSk7XG4gIG1hcmdpbjogNnB4O1xuICBwYWRkaW5nOiA2cHg7XG5gO1xuXG5jb25zdCBHcmlkV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlcjogJHtwcm9wcyA9PiBwcm9wcy5pc0JvcmRlclZpc2libGUgPyBgMXB4IGRvdHRlZCAke0JPUkRFUl9DT0xPUn1gIDogXCIxcHggc29saWQgdHJhbnNwYXJlbnRcIn07XG5gXG5cbi8vIEhvb2sgdG8gdHJhY2sgaWYgdGhlIHVzZXIgaXMgaG9sZGluZyB0aGUgbW91c2UgZG93bi5cbmNvbnN0IHVzZUlzTW91c2VEb3duID0gKCkgPT4ge1xuICBjb25zdCBbaXNNb3VzZURvd24sIHNldElzTW91c2VEb3duXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzZXRNb3VzZURvd24gPSAoKSA9PiBzZXRJc01vdXNlRG93bih0cnVlKTtcbiAgICBjb25zdCBzZXRNb3VzZVVwID0gKCkgPT4gc2V0SXNNb3VzZURvd24oZmFsc2UpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHNldE1vdXNlRG93bik7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHNldE1vdXNlVXApO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHNldE1vdXNlRG93bik7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc2V0TW91c2VVcCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiBpc01vdXNlRG93bjtcbn07XG5cbi8vIEhvb2sgdG8gbWFrZSBzZXR0aW5nIG5lc3RlZCBzdGF0ZSBpbiBvdXIgbWF0cml4IGVhc2llci5cbmNvbnN0IHVzZUdyaWRTdGF0ZSA9IChkZWZhdWx0U3RhdGUpID0+IHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShkZWZhdWx0U3RhdGUpO1xuICBjb25zdCByZXNldE1hdHJpeCA9ICgpID0+IHNldFN0YXRlKGRlZmF1bHRTdGF0ZSk7XG4gIGNvbnN0IHNldENlbGwgPSAocm93LCBjb2x1bW4sIHZhbHVlKSA9PiB7XG4gICAgc2V0U3RhdGUoW1xuICAgICAgLi4uc3RhdGUuc2xpY2UoMCwgcm93KSxcbiAgICAgIFsuLi5zdGF0ZVtyb3ddLnNsaWNlKDAsIGNvbHVtbiksIHZhbHVlLCAuLi5zdGF0ZVtyb3ddLnNsaWNlKGNvbHVtbiArIDEpXSxcbiAgICAgIC4uLnN0YXRlLnNsaWNlKHJvdyArIDEpLFxuICAgIF0pO1xuICB9O1xuXG4gIHJldHVybiBbc3RhdGUsIHNldENlbGwsIHJlc2V0TWF0cml4XTtcbn07XG5cbi8vIEhvb2sgdG8gaGVscCB2YWxpZGF0ZSBjdXN0b20gaW5wdXQgb24gY29sb3JzXG5jb25zdCB1c2VDb2xvck1hbmFnZXIgPSAoZGVmYXVsdENvbG9yKSA9PiB7XG4gIGNvbnN0IFtyYXdDb2xvclRleHQsIHNldFJhd0NvbG9yVGV4dF0gPSB1c2VTdGF0ZShkZWZhdWx0Q29sb3IpO1xuICBjb25zdCBbbGFzdFZhbGlkQ29sb3IsIHNldExhc3RWYWxpZENvbG9yXSA9IHVzZVN0YXRlKGRlZmF1bHRDb2xvcik7XG4gIGNvbnN0IHNldENvbG9yV3JhcHBlciA9IChuZXdDb2xvcikgPT4ge1xuICAgIHNldFJhd0NvbG9yVGV4dChuZXdDb2xvcik7XG4gICAgaWYgKC8jKD86WzAtOUEtRmEtZl17M318WzAtOUEtRmEtZl17Nn0pLy50ZXN0KG5ld0NvbG9yKSl7XG4gICAgICBzZXRMYXN0VmFsaWRDb2xvcihuZXdDb2xvcik7XG4gICAgfVxuICB9XG4gIHJldHVybiBbbGFzdFZhbGlkQ29sb3IsIHNldENvbG9yV3JhcHBlciwgcmF3Q29sb3JUZXh0XVxufVxuXG5leHBvcnQgY29uc3QgQml0bWFwRWRpdG9yID0gKCkgPT4ge1xuICBjb25zdCBbaXNHcmlkVmlzaWJsZSwgc2V0SXNHcmlkVmlzaWJsZV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2FjdGl2ZUNvbG9yLCBzZXRBY3RpdmVDb2xvciwgcmF3Q29sb3JUZXh0XSA9IHVzZUNvbG9yTWFuYWdlcihcIiMwMDBcIik7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0UGl4ZWxDb2xvciwgcmVzZXRNYXRyaXhdID0gdXNlR3JpZFN0YXRlKGVtcHR5TWF0cml4KTtcbiAgY29uc3QgaXNNb3VzZURvd24gPSB1c2VJc01vdXNlRG93bigpO1xuXG4gIHJldHVybiAoXG4gICAgPEZsZXg+XG4gICAgICA8R3JpZFdyYXBwZXIgaXNCb3JkZXJWaXNpYmxlPXshaXNHcmlkVmlzaWJsZX0+XG4gICAgICAgIHtzdGF0ZS5tYXAoKF8sIHJvdykgPT4gKFxuICAgICAgICAgIDxGbGV4IGtleT17cm93fT5cbiAgICAgICAgICAgIHtzdGF0ZVtyb3ddLm1hcCgoXywgY29sdW1uKSA9PiAoXG4gICAgICAgICAgICAgIDxQaXhlbFxuICAgICAgICAgICAgICAgIGlzR3JpZFZpc2libGU9e2lzR3JpZFZpc2libGV9XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPXtzdGF0ZVtyb3ddW2NvbHVtbl0gfHwgXCJ0cmFuc3BhcmVudFwifVxuICAgICAgICAgICAgICAgIGtleT17YCR7cm93fSAtICR7Y29sdW1ufWB9XG4gICAgICAgICAgICAgICAgb25Nb3VzZURvd249eygpID0+IHNldFBpeGVsQ29sb3Iocm93LCBjb2x1bW4sIGFjdGl2ZUNvbG9yKX1cbiAgICAgICAgICAgICAgICBvbk1vdXNlVXA9eygpID0+IHNldFBpeGVsQ29sb3Iocm93LCBjb2x1bW4sIGFjdGl2ZUNvbG9yKX1cbiAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKGlzTW91c2VEb3duKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBpeGVsQ29sb3Iocm93LCBjb2x1bW4sIGFjdGl2ZUNvbG9yKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICApKX1cbiAgICAgIDwvR3JpZFdyYXBwZXI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8Q2FyZD5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Jlc2V0TWF0cml4fT5DbGVhcjwvYnV0dG9uPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDxDYXJkPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlQ29sb3IoXCIjRkYwMDAwXCIpfT5SZWQ8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZUNvbG9yKFwiIzAwMDBGRlwiKX0+Qmx1ZTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlQ29sb3IoXCIjMDBGRjAwXCIpfT5HcmVlbjwvYnV0dG9uPlxuICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17ZSA9PiBzZXRBY3RpdmVDb2xvcihlLnRhcmdldC52YWx1ZSl9IHZhbHVlPXtyYXdDb2xvclRleHR9IC8+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPENhcmQ+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRJc0dyaWRWaXNpYmxlKCFpc0dyaWRWaXNpYmxlKX0+XG4gICAgICAgICAgICBUb2dnbGUgR3JpZFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L0ZsZXg+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCaXRtYXBFZGl0b3I7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdHlsZWQiLCJNQVRSSVhfU0laRSIsIkJPUkRFUl9DT0xPUiIsImVtcHR5TWF0cml4IiwiQXJyYXkiLCJhcHBseSIsIm1hcCIsIlBpeGVsIiwiZGl2IiwicHJvcHMiLCJpc0dyaWRWaXNpYmxlIiwiYmFja2dyb3VuZENvbG9yIiwiRmxleCIsIkNhcmQiLCJHcmlkV3JhcHBlciIsImlzQm9yZGVyVmlzaWJsZSIsInVzZUlzTW91c2VEb3duIiwiaXNNb3VzZURvd24iLCJzZXRJc01vdXNlRG93biIsInNldE1vdXNlRG93biIsInNldE1vdXNlVXAiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInVzZUdyaWRTdGF0ZSIsImRlZmF1bHRTdGF0ZSIsInN0YXRlIiwic2V0U3RhdGUiLCJyZXNldE1hdHJpeCIsInNldENlbGwiLCJyb3ciLCJjb2x1bW4iLCJ2YWx1ZSIsInNsaWNlIiwidXNlQ29sb3JNYW5hZ2VyIiwiZGVmYXVsdENvbG9yIiwicmF3Q29sb3JUZXh0Iiwic2V0UmF3Q29sb3JUZXh0IiwibGFzdFZhbGlkQ29sb3IiLCJzZXRMYXN0VmFsaWRDb2xvciIsInNldENvbG9yV3JhcHBlciIsIm5ld0NvbG9yIiwidGVzdCIsIkJpdG1hcEVkaXRvciIsInNldElzR3JpZFZpc2libGUiLCJhY3RpdmVDb2xvciIsInNldEFjdGl2ZUNvbG9yIiwic2V0UGl4ZWxDb2xvciIsIl8iLCJlIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/BitmapEditor.js\n");

/***/ })

});