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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Calendar\": function() { return /* binding */ Calendar; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _BitmapEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BitmapEditor */ \"./components/BitmapEditor.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/brettlamy/Projects/hardhat-hackathon-boilerplate/frontend/components/Calendar.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$(),\n    _s4 = $RefreshSig$();\n\n\n\n\n\n\n\nconst Backdrop = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div`\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.7);\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n`;\n_c = Backdrop;\nconst Card = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div`\n  background: white;\n  border-radius: 4px;\n  box-shadow: 0 5px 10px 0 hsl(0deg 0% 78% / 20%);\n  margin: 6px;\n  padding: 6px;\n`;\n_c2 = Card;\n\nfunction ClientOnlyPortal({\n  children,\n  selector\n}) {\n  _s();\n\n  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n  const {\n    0: mounted,\n    1: setMounted\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    ref.current = document.querySelector(selector);\n    setMounted(true);\n  }, [selector]);\n  return mounted ? /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(children, ref.current) : null;\n}\n\n_s(ClientOnlyPortal, \"na+ZokcoT2dT3sPeiiDWS6iuOJk=\");\n\n_c3 = ClientOnlyPortal;\n\nconst CalendarCellEditorModal = ({\n  onBuyClick,\n  day\n}) => {\n  _s2();\n\n  const {\n    0: showModal,\n    1: setShowModal\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"cell\",\n      onClick: () => {\n        setShowModal(true);\n      },\n      children: day\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, undefined), showModal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(ClientOnlyPortal, {\n      selector: \"#modal\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Backdrop, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Card, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_BitmapEditor__WEBPACK_IMPORTED_MODULE_2__.default, {\n            onChange: (...args) => console.log(...args),\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n              onClick: onBuyClick,\n              children: \"Buy\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 50,\n              columnNumber: 17\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 15\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 13\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 11\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }, undefined)]\n  }, void 0, true);\n};\n\n_s2(CalendarCellEditorModal, \"uVlnG5KLfXemZk5i5Fl+Cg356FU=\");\n\n_c4 = CalendarCellEditorModal;\n\nconst CalendarCell = ({\n  month,\n  day,\n  year,\n  web3,\n  onClick\n}) => {\n  _s3();\n\n  const {\n    0: owner,\n    1: setOwner\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(async () => {\n    const res = await (web3 === null || web3 === void 0 ? void 0 : web3.dateOwners(`${month}/${day}/${year}`));\n\n    if (res !== null && res !== void 0 && res.owner) {\n      setOwner(res.owner);\n    }\n  }, [month, day, year, web3]); // TODO figure out how to rerun this effect when tx is complete for cell that was bought\n\n  if (owner !== \"0x0000000000000000000000000000000000000000\") {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"cell\",\n      onClick: () => alert(`Owned by ${owner}`),\n      children: [day, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Dot, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }, undefined);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(CalendarCellEditorModal, {\n    onBuyClick: onClick,\n    day: day\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 76,\n    columnNumber: 10\n  }, undefined);\n};\n\n_s3(CalendarCell, \"kEmc+jTD7F5+L5lpmpiFGLJyhwc=\");\n\n_c5 = CalendarCell;\nconst Flex = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div`\n  display: flex;\n  flex-wrap: wrap;\n\n  .cell {\n    flex-grow: 1;\n    width: calc(100% / 7);\n    height: 100px;\n  }\n`;\n_c6 = Flex;\nconst Dot = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div`\n  display: block;\n  width: 6px;\n  height: 6px;\n  background-color: red;\n  border-radius: 100%;\n`;\n_c7 = Dot;\nconst monthNames = [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"];\n\nfunction daysInMonth(m, y) {\n  if (m == 1) {\n    return y % 4 == 0 && y % 100 != 0 || y % 400 == 0 ? 29 : 28;\n  }\n\n  if (m == 3 || m == 5 || m == 8 || m == 10) {\n    return 30;\n  }\n\n  return 31;\n}\n\nconst Calendar = ({\n  onDateClick,\n  renderDayCell,\n  web3\n}) => {\n  _s4();\n\n  const {\n    0: now,\n    1: setNow\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Date());\n  const daysThisMonth = daysInMonth(now.getMonth(), now.getFullYear());\n  const daysLastMonth = now.getMonth() === 0 ? daysInMonth(now.getMonth() - 1, now.getFullYear() - 1) : daysInMonth(now.getMonth() - 1, now.getFullYear());\n  const dayOfWeekStart = new Date(`${now.getMonth() + 1}/1/${now.getFullYear()}`).getDay();\n  const remainderDays = 7 - (daysThisMonth + dayOfWeekStart) % 7;\n  let days = [];\n\n  for (let i = 1; i <= daysThisMonth + dayOfWeekStart + remainderDays; i++) {\n    let date = i - dayOfWeekStart;\n\n    if (date > daysThisMonth) {\n      const day = i - (daysThisMonth + dayOfWeekStart);\n      let month = now.getMonth() + 2;\n      let year = now.getFullYear();\n\n      if (month > 11) {\n        year++;\n        month = 1;\n      }\n\n      days.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(CalendarCell, {\n        onClick: () => {\n          const strDate = `${month}/${day}/${year}`;\n          console.log(strDate);\n          console.log(new Date(strDate).toString());\n          onDateClick({\n            month,\n            day,\n            year\n          });\n        },\n        month,\n        day,\n        year,\n        web3\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 147,\n        columnNumber: 9\n      }, undefined));\n    } else if (date > 0) {\n      const month = now.getMonth() + 1;\n      const day = date;\n      const year = now.getFullYear();\n      days.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(CalendarCell, {\n        onClick: () => {\n          const strDate = `${month}/${day}/${year}`;\n          console.log(strDate);\n          console.log(new Date(strDate).toString());\n          onDateClick(month, day, year);\n        },\n        month,\n        day,\n        year,\n        web3\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 162,\n        columnNumber: 9\n      }, undefined));\n    } else {\n      let month = now.getMonth();\n      const day = daysLastMonth - (dayOfWeekStart - i);\n      let year = now.getFullYear();\n\n      if (month === 0) {\n        year--;\n        month = 12;\n      }\n\n      days.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(CalendarCell, {\n        onClick: () => {\n          const strDate = `${month}/${day}/${year}`;\n          console.log(strDate);\n          console.log(new Date(strDate).toString());\n          onDateClick(month, day, year);\n        },\n        month,\n        day,\n        year,\n        web3\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 181,\n        columnNumber: 9\n      }, undefined));\n    }\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Flex, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n        style: {\n          flex: 1\n        },\n        children: [monthNames[now.getMonth()], \" \", now.getFullYear()]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 196,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        style: {\n          flex: 1\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 199,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n          onClick: () => {\n            const newDate = new Date(now);\n            newDate.setMonth(newDate.getMonth() - 1);\n            setNow(newDate);\n          },\n          children: \"< prev <\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 201,\n          columnNumber: 11\n        }, undefined), \"\\xA0\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n          onClick: () => {\n            setNow(new Date());\n          },\n          children: \"Today\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 211,\n          columnNumber: 11\n        }, undefined), \"\\xA0\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n          onClick: () => {\n            const newDate = new Date(now);\n            newDate.setMonth(newDate.getMonth() + 1);\n            setNow(newDate);\n          },\n          children: \"> next >\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 219,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 200,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 195,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Flex, {\n      children: days\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 231,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 194,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s4(Calendar, \"k1gvvGuBH22uQ9VP8QXMYXS5enU=\");\n\n_c8 = Calendar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calendar);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;\n\n$RefreshReg$(_c, \"Backdrop\");\n$RefreshReg$(_c2, \"Card\");\n$RefreshReg$(_c3, \"ClientOnlyPortal\");\n$RefreshReg$(_c4, \"CalendarCellEditorModal\");\n$RefreshReg$(_c5, \"CalendarCell\");\n$RefreshReg$(_c6, \"Flex\");\n$RefreshReg$(_c7, \"Dot\");\n$RefreshReg$(_c8, \"Calendar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhbGVuZGFyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsTUFBTU0sUUFBUSxHQUFHSCwwREFBVztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVBBO0tBQU1HO0FBUU4sTUFBTUUsSUFBSSxHQUFHTCwwREFBVztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FOQTtNQUFNSzs7QUFPTixTQUFTQyxnQkFBVCxDQUEwQjtBQUFFQyxFQUFBQSxRQUFGO0FBQVlDLEVBQUFBO0FBQVosQ0FBMUIsRUFBa0Q7QUFBQTs7QUFDaEQsUUFBTUMsR0FBRyxHQUFHWiw2Q0FBTSxFQUFsQjtBQUNBLFFBQU07QUFBQSxPQUFDYSxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QlosK0NBQVEsQ0FBQyxLQUFELENBQXRDO0FBRUFELEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkVyxJQUFBQSxHQUFHLENBQUNHLE9BQUosR0FBY0MsUUFBUSxDQUFDQyxhQUFULENBQXVCTixRQUF2QixDQUFkO0FBQ0FHLElBQUFBLFVBQVUsQ0FBQyxJQUFELENBQVY7QUFDRCxHQUhRLEVBR04sQ0FBQ0gsUUFBRCxDQUhNLENBQVQ7QUFLQSxTQUFPRSxPQUFPLGdCQUFHVCx1REFBWSxDQUFDTSxRQUFELEVBQVdFLEdBQUcsQ0FBQ0csT0FBZixDQUFmLEdBQXlDLElBQXZEO0FBQ0Q7O0dBVlFOOztNQUFBQTs7QUFZVCxNQUFNUyx1QkFBdUIsR0FBRyxDQUFDO0FBQUVDLEVBQUFBLFVBQUY7QUFBY0MsRUFBQUE7QUFBZCxDQUFELEtBQXlCO0FBQUE7O0FBQ3ZELFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QnBCLCtDQUFRLENBQUMsS0FBRCxDQUExQztBQUNBLHNCQUNFO0FBQUEsNEJBQ0U7QUFDRSxlQUFTLEVBQUMsTUFEWjtBQUVFLGFBQU8sRUFBRSxNQUFNO0FBQ2JvQixRQUFBQSxZQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0QsT0FKSDtBQUFBLGdCQU1HRjtBQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFTR0MsU0FBUyxpQkFDUiw4REFBQyxnQkFBRDtBQUFrQixjQUFRLEVBQUMsUUFBM0I7QUFBQSw2QkFDRSw4REFBQyxRQUFEO0FBQUEsK0JBQ0UsOERBQUMsSUFBRDtBQUFBLGlDQUNFLDhEQUFDLGtEQUFEO0FBQWMsb0JBQVEsRUFBRSxDQUFDLEdBQUdFLElBQUosS0FBYUMsT0FBTyxDQUFDQyxHQUFSLENBQVksR0FBR0YsSUFBZixDQUFyQztBQUFBLG1DQUNFO0FBQVEscUJBQU8sRUFBRUosVUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZKO0FBQUEsa0JBREY7QUF1QkQsQ0F6QkQ7O0lBQU1EOztNQUFBQTs7QUEyQk4sTUFBTVEsWUFBWSxHQUFHLENBQUM7QUFBRUMsRUFBQUEsS0FBRjtBQUFTUCxFQUFBQSxHQUFUO0FBQWNRLEVBQUFBLElBQWQ7QUFBb0JDLEVBQUFBLElBQXBCO0FBQTBCQyxFQUFBQTtBQUExQixDQUFELEtBQXlDO0FBQUE7O0FBQzVELFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQjlCLCtDQUFRLEVBQWxDO0FBQ0FELEVBQUFBLGdEQUFTLENBQUMsWUFBWTtBQUNwQixVQUFNZ0MsR0FBRyxHQUFHLE9BQU1KLElBQU4sYUFBTUEsSUFBTix1QkFBTUEsSUFBSSxDQUFFSyxVQUFOLENBQWtCLEdBQUVQLEtBQU0sSUFBR1AsR0FBSSxJQUFHUSxJQUFLLEVBQXpDLENBQU4sQ0FBWjs7QUFDQSxRQUFJSyxHQUFKLGFBQUlBLEdBQUosZUFBSUEsR0FBRyxDQUFFRixLQUFULEVBQWdCO0FBQ2RDLE1BQUFBLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDRixLQUFMLENBQVI7QUFDRDtBQUNGLEdBTFEsRUFLTixDQUFDSixLQUFELEVBQVFQLEdBQVIsRUFBYVEsSUFBYixFQUFtQkMsSUFBbkIsQ0FMTSxDQUFULENBRjRELENBTzlCOztBQUM5QixNQUFJRSxLQUFLLEtBQUssNENBQWQsRUFBNEQ7QUFDMUQsd0JBQ0U7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFzQixhQUFPLEVBQUUsTUFBTUksS0FBSyxDQUFFLFlBQVdKLEtBQU0sRUFBbkIsQ0FBMUM7QUFBQSxpQkFDR1gsR0FESCxlQUVFLDhEQUFDLEdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFNRDs7QUFDRCxzQkFBTyw4REFBQyx1QkFBRDtBQUF5QixjQUFVLEVBQUVVLE9BQXJDO0FBQThDLE9BQUcsRUFBRVY7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsQ0FqQkQ7O0lBQU1NOztNQUFBQTtBQW1CTixNQUFNVSxJQUFJLEdBQUdqQywwREFBVztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FUQTtNQUFNaUM7QUFXTixNQUFNQyxHQUFHLEdBQUdsQywwREFBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FOQTtNQUFNa0M7QUFRTixNQUFNQyxVQUFVLEdBQUcsQ0FDakIsU0FEaUIsRUFFakIsVUFGaUIsRUFHakIsT0FIaUIsRUFJakIsT0FKaUIsRUFLakIsS0FMaUIsRUFNakIsTUFOaUIsRUFPakIsTUFQaUIsRUFRakIsUUFSaUIsRUFTakIsV0FUaUIsRUFVakIsU0FWaUIsRUFXakIsVUFYaUIsRUFZakIsVUFaaUIsQ0FBbkI7O0FBZUEsU0FBU0MsV0FBVCxDQUFxQkMsQ0FBckIsRUFBd0JDLENBQXhCLEVBQTJCO0FBQ3pCLE1BQUlELENBQUMsSUFBSSxDQUFULEVBQVk7QUFDVixXQUFRQyxDQUFDLEdBQUcsQ0FBSixJQUFTLENBQVQsSUFBY0EsQ0FBQyxHQUFHLEdBQUosSUFBVyxDQUExQixJQUFnQ0EsQ0FBQyxHQUFHLEdBQUosSUFBVyxDQUEzQyxHQUErQyxFQUEvQyxHQUFvRCxFQUEzRDtBQUNEOztBQUNELE1BQUlELENBQUMsSUFBSSxDQUFMLElBQVVBLENBQUMsSUFBSSxDQUFmLElBQW9CQSxDQUFDLElBQUksQ0FBekIsSUFBOEJBLENBQUMsSUFBSSxFQUF2QyxFQUEyQztBQUN6QyxXQUFPLEVBQVA7QUFDRDs7QUFDRCxTQUFPLEVBQVA7QUFDRDs7QUFFTSxNQUFNRSxRQUFRLEdBQUcsQ0FBQztBQUFFQyxFQUFBQSxXQUFGO0FBQWVDLEVBQUFBLGFBQWY7QUFBOEJmLEVBQUFBO0FBQTlCLENBQUQsS0FBMEM7QUFBQTs7QUFDaEUsUUFBTTtBQUFBLE9BQUNnQixHQUFEO0FBQUEsT0FBTUM7QUFBTixNQUFnQjVDLCtDQUFRLENBQUMsSUFBSTZDLElBQUosRUFBRCxDQUE5QjtBQUNBLFFBQU1DLGFBQWEsR0FBR1QsV0FBVyxDQUFDTSxHQUFHLENBQUNJLFFBQUosRUFBRCxFQUFpQkosR0FBRyxDQUFDSyxXQUFKLEVBQWpCLENBQWpDO0FBQ0EsUUFBTUMsYUFBYSxHQUNqQk4sR0FBRyxDQUFDSSxRQUFKLE9BQW1CLENBQW5CLEdBQ0lWLFdBQVcsQ0FBQ00sR0FBRyxDQUFDSSxRQUFKLEtBQWlCLENBQWxCLEVBQXFCSixHQUFHLENBQUNLLFdBQUosS0FBb0IsQ0FBekMsQ0FEZixHQUVJWCxXQUFXLENBQUNNLEdBQUcsQ0FBQ0ksUUFBSixLQUFpQixDQUFsQixFQUFxQkosR0FBRyxDQUFDSyxXQUFKLEVBQXJCLENBSGpCO0FBSUEsUUFBTUUsY0FBYyxHQUFHLElBQUlMLElBQUosQ0FDcEIsR0FBRUYsR0FBRyxDQUFDSSxRQUFKLEtBQWlCLENBQUUsTUFBS0osR0FBRyxDQUFDSyxXQUFKLEVBQWtCLEVBRHhCLEVBRXJCRyxNQUZxQixFQUF2QjtBQUdBLFFBQU1DLGFBQWEsR0FBRyxJQUFLLENBQUNOLGFBQWEsR0FBR0ksY0FBakIsSUFBbUMsQ0FBOUQ7QUFFQSxNQUFJRyxJQUFJLEdBQUcsRUFBWDs7QUFDQSxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLElBQUlSLGFBQWEsR0FBR0ksY0FBaEIsR0FBaUNFLGFBQXRELEVBQXFFRSxDQUFDLEVBQXRFLEVBQTBFO0FBQ3hFLFFBQUlDLElBQUksR0FBR0QsQ0FBQyxHQUFHSixjQUFmOztBQUNBLFFBQUlLLElBQUksR0FBR1QsYUFBWCxFQUEwQjtBQUN4QixZQUFNNUIsR0FBRyxHQUFHb0MsQ0FBQyxJQUFJUixhQUFhLEdBQUdJLGNBQXBCLENBQWI7QUFDQSxVQUFJekIsS0FBSyxHQUFHa0IsR0FBRyxDQUFDSSxRQUFKLEtBQWlCLENBQTdCO0FBQ0EsVUFBSXJCLElBQUksR0FBR2lCLEdBQUcsQ0FBQ0ssV0FBSixFQUFYOztBQUNBLFVBQUl2QixLQUFLLEdBQUcsRUFBWixFQUFnQjtBQUNkQyxRQUFBQSxJQUFJO0FBQ0pELFFBQUFBLEtBQUssR0FBRyxDQUFSO0FBQ0Q7O0FBQ0Q0QixNQUFBQSxJQUFJLENBQUNHLElBQUwsZUFDRSw4REFBQyxZQUFEO0FBQ0UsZUFBTyxFQUFFLE1BQU07QUFDYixnQkFBTUMsT0FBTyxHQUFJLEdBQUVoQyxLQUFNLElBQUdQLEdBQUksSUFBR1EsSUFBSyxFQUF4QztBQUNBSixVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWWtDLE9BQVo7QUFDQW5DLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLElBQUlzQixJQUFKLENBQVNZLE9BQVQsRUFBa0JDLFFBQWxCLEVBQVo7QUFDQWpCLFVBQUFBLFdBQVcsQ0FBQztBQUFFaEIsWUFBQUEsS0FBRjtBQUFTUCxZQUFBQSxHQUFUO0FBQWNRLFlBQUFBO0FBQWQsV0FBRCxDQUFYO0FBQ0QsU0FOSDtBQU9RRCxRQUFBQSxLQVBSO0FBT2VQLFFBQUFBLEdBUGY7QUFPb0JRLFFBQUFBLElBUHBCO0FBTzBCQyxRQUFBQTtBQVAxQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBV0QsS0FuQkQsTUFtQk8sSUFBSTRCLElBQUksR0FBRyxDQUFYLEVBQWM7QUFDbkIsWUFBTTlCLEtBQUssR0FBR2tCLEdBQUcsQ0FBQ0ksUUFBSixLQUFpQixDQUEvQjtBQUNBLFlBQU03QixHQUFHLEdBQUdxQyxJQUFaO0FBQ0EsWUFBTTdCLElBQUksR0FBR2lCLEdBQUcsQ0FBQ0ssV0FBSixFQUFiO0FBQ0FLLE1BQUFBLElBQUksQ0FBQ0csSUFBTCxlQUNFLDhEQUFDLFlBQUQ7QUFDRSxlQUFPLEVBQUUsTUFBTTtBQUNiLGdCQUFNQyxPQUFPLEdBQUksR0FBRWhDLEtBQU0sSUFBR1AsR0FBSSxJQUFHUSxJQUFLLEVBQXhDO0FBQ0FKLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZa0MsT0FBWjtBQUNBbkMsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksSUFBSXNCLElBQUosQ0FBU1ksT0FBVCxFQUFrQkMsUUFBbEIsRUFBWjtBQUNBakIsVUFBQUEsV0FBVyxDQUFDaEIsS0FBRCxFQUFRUCxHQUFSLEVBQWFRLElBQWIsQ0FBWDtBQUNELFNBTkg7QUFPUUQsUUFBQUEsS0FQUjtBQU9lUCxRQUFBQSxHQVBmO0FBT29CUSxRQUFBQSxJQVBwQjtBQU8wQkMsUUFBQUE7QUFQMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQVdELEtBZk0sTUFlQTtBQUNMLFVBQUlGLEtBQUssR0FBR2tCLEdBQUcsQ0FBQ0ksUUFBSixFQUFaO0FBQ0EsWUFBTTdCLEdBQUcsR0FBRytCLGFBQWEsSUFBSUMsY0FBYyxHQUFHSSxDQUFyQixDQUF6QjtBQUNBLFVBQUk1QixJQUFJLEdBQUdpQixHQUFHLENBQUNLLFdBQUosRUFBWDs7QUFDQSxVQUFJdkIsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDZkMsUUFBQUEsSUFBSTtBQUNKRCxRQUFBQSxLQUFLLEdBQUcsRUFBUjtBQUNEOztBQUNENEIsTUFBQUEsSUFBSSxDQUFDRyxJQUFMLGVBQ0UsOERBQUMsWUFBRDtBQUNFLGVBQU8sRUFBRSxNQUFNO0FBQ2IsZ0JBQU1DLE9BQU8sR0FBSSxHQUFFaEMsS0FBTSxJQUFHUCxHQUFJLElBQUdRLElBQUssRUFBeEM7QUFDQUosVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlrQyxPQUFaO0FBQ0FuQyxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFJc0IsSUFBSixDQUFTWSxPQUFULEVBQWtCQyxRQUFsQixFQUFaO0FBQ0FqQixVQUFBQSxXQUFXLENBQUNoQixLQUFELEVBQVFQLEdBQVIsRUFBYVEsSUFBYixDQUFYO0FBQ0QsU0FOSDtBQU9RRCxRQUFBQSxLQVBSO0FBT2VQLFFBQUFBLEdBUGY7QUFPb0JRLFFBQUFBLElBUHBCO0FBTzBCQyxRQUFBQTtBQVAxQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBV0Q7QUFDRjs7QUFDRCxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLElBQUQ7QUFBQSw4QkFDRTtBQUFJLGFBQUssRUFBRTtBQUFFZ0MsVUFBQUEsSUFBSSxFQUFFO0FBQVIsU0FBWDtBQUFBLG1CQUNHdkIsVUFBVSxDQUFDTyxHQUFHLENBQUNJLFFBQUosRUFBRCxDQURiLE9BQ2dDSixHQUFHLENBQUNLLFdBQUosRUFEaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBSUU7QUFBSyxhQUFLLEVBQUU7QUFBRVcsVUFBQUEsSUFBSSxFQUFFO0FBQVI7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGLGVBS0U7QUFBQSxnQ0FDRTtBQUNFLGlCQUFPLEVBQUUsTUFBTTtBQUNiLGtCQUFNQyxPQUFPLEdBQUcsSUFBSWYsSUFBSixDQUFTRixHQUFULENBQWhCO0FBQ0FpQixZQUFBQSxPQUFPLENBQUNDLFFBQVIsQ0FBaUJELE9BQU8sQ0FBQ2IsUUFBUixLQUFxQixDQUF0QztBQUNBSCxZQUFBQSxNQUFNLENBQUNnQixPQUFELENBQU47QUFDRCxXQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLHVCQVdFO0FBQ0UsaUJBQU8sRUFBRSxNQUFNO0FBQ2JoQixZQUFBQSxNQUFNLENBQUMsSUFBSUMsSUFBSixFQUFELENBQU47QUFDRCxXQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVhGLHVCQW1CRTtBQUNFLGlCQUFPLEVBQUUsTUFBTTtBQUNiLGtCQUFNZSxPQUFPLEdBQUcsSUFBSWYsSUFBSixDQUFTRixHQUFULENBQWhCO0FBQ0FpQixZQUFBQSxPQUFPLENBQUNDLFFBQVIsQ0FBaUJELE9BQU8sQ0FBQ2IsUUFBUixLQUFxQixDQUF0QztBQUNBSCxZQUFBQSxNQUFNLENBQUNnQixPQUFELENBQU47QUFDRCxXQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBcUNFLDhEQUFDLElBQUQ7QUFBQSxnQkFBT1A7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXJDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXlDRCxDQS9HTTs7SUFBTWI7O01BQUFBO0FBaUhiLCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2FsZW5kYXIuanM/MjQ3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgQml0bWFwRWRpdG9yIGZyb20gXCIuL0JpdG1hcEVkaXRvclwiO1xuXG5jb25zdCBCYWNrZHJvcCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG5gO1xuY29uc3QgQ2FyZCA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggMCBoc2woMGRlZyAwJSA3OCUgLyAyMCUpO1xuICBtYXJnaW46IDZweDtcbiAgcGFkZGluZzogNnB4O1xuYDtcbmZ1bmN0aW9uIENsaWVudE9ubHlQb3J0YWwoeyBjaGlsZHJlbiwgc2VsZWN0b3IgfSkge1xuICBjb25zdCByZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgW21vdW50ZWQsIHNldE1vdW50ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmVmLmN1cnJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBzZXRNb3VudGVkKHRydWUpO1xuICB9LCBbc2VsZWN0b3JdKTtcblxuICByZXR1cm4gbW91bnRlZCA/IGNyZWF0ZVBvcnRhbChjaGlsZHJlbiwgcmVmLmN1cnJlbnQpIDogbnVsbDtcbn1cblxuY29uc3QgQ2FsZW5kYXJDZWxsRWRpdG9yTW9kYWwgPSAoeyBvbkJ1eUNsaWNrLCBkYXkgfSkgPT4ge1xuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImNlbGxcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgc2V0U2hvd01vZGFsKHRydWUpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7ZGF5fVxuICAgICAgPC9kaXY+XG4gICAgICB7c2hvd01vZGFsICYmIChcbiAgICAgICAgPENsaWVudE9ubHlQb3J0YWwgc2VsZWN0b3I9XCIjbW9kYWxcIj5cbiAgICAgICAgICA8QmFja2Ryb3A+XG4gICAgICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgICAgPEJpdG1hcEVkaXRvciBvbkNoYW5nZT17KC4uLmFyZ3MpID0+IGNvbnNvbGUubG9nKC4uLmFyZ3MpfT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQnV5Q2xpY2t9PkJ1eTwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L0JpdG1hcEVkaXRvcj5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8L0JhY2tkcm9wPlxuICAgICAgICA8L0NsaWVudE9ubHlQb3J0YWw+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgQ2FsZW5kYXJDZWxsID0gKHsgbW9udGgsIGRheSwgeWVhciwgd2ViMywgb25DbGljayB9KSA9PiB7XG4gIGNvbnN0IFtvd25lciwgc2V0T3duZXJdID0gdXNlU3RhdGUoKTtcbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCB3ZWIzPy5kYXRlT3duZXJzKGAke21vbnRofS8ke2RheX0vJHt5ZWFyfWApO1xuICAgIGlmIChyZXM/Lm93bmVyKSB7XG4gICAgICBzZXRPd25lcihyZXMub3duZXIpO1xuICAgIH1cbiAgfSwgW21vbnRoLCBkYXksIHllYXIsIHdlYjNdKTsgLy8gVE9ETyBmaWd1cmUgb3V0IGhvdyB0byByZXJ1biB0aGlzIGVmZmVjdCB3aGVuIHR4IGlzIGNvbXBsZXRlIGZvciBjZWxsIHRoYXQgd2FzIGJvdWdodFxuICBpZiAob3duZXIgIT09IFwiMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwXCIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZWxsXCIgb25DbGljaz17KCkgPT4gYWxlcnQoYE93bmVkIGJ5ICR7b3duZXJ9YCl9PlxuICAgICAgICB7ZGF5fVxuICAgICAgICA8RG90IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIHJldHVybiA8Q2FsZW5kYXJDZWxsRWRpdG9yTW9kYWwgb25CdXlDbGljaz17b25DbGlja30gZGF5PXtkYXl9IC8+O1xufTtcblxuY29uc3QgRmxleCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcblxuICAuY2VsbCB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA3KTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG5gO1xuXG5jb25zdCBEb3QgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDZweDtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbmA7XG5cbmNvbnN0IG1vbnRoTmFtZXMgPSBbXG4gIFwiSmFudWFyeVwiLFxuICBcIkZlYnJ1YXJ5XCIsXG4gIFwiTWFyY2hcIixcbiAgXCJBcHJpbFwiLFxuICBcIk1heVwiLFxuICBcIkp1bmVcIixcbiAgXCJKdWx5XCIsXG4gIFwiQXVndXN0XCIsXG4gIFwiU2VwdGVtYmVyXCIsXG4gIFwiT2N0b2JlclwiLFxuICBcIk5vdmVtYmVyXCIsXG4gIFwiRGVjZW1iZXJcIixcbl07XG5cbmZ1bmN0aW9uIGRheXNJbk1vbnRoKG0sIHkpIHtcbiAgaWYgKG0gPT0gMSkge1xuICAgIHJldHVybiAoeSAlIDQgPT0gMCAmJiB5ICUgMTAwICE9IDApIHx8IHkgJSA0MDAgPT0gMCA/IDI5IDogMjg7XG4gIH1cbiAgaWYgKG0gPT0gMyB8fCBtID09IDUgfHwgbSA9PSA4IHx8IG0gPT0gMTApIHtcbiAgICByZXR1cm4gMzA7XG4gIH1cbiAgcmV0dXJuIDMxO1xufVxuXG5leHBvcnQgY29uc3QgQ2FsZW5kYXIgPSAoeyBvbkRhdGVDbGljaywgcmVuZGVyRGF5Q2VsbCwgd2ViMyB9KSA9PiB7XG4gIGNvbnN0IFtub3csIHNldE5vd10gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcbiAgY29uc3QgZGF5c1RoaXNNb250aCA9IGRheXNJbk1vbnRoKG5vdy5nZXRNb250aCgpLCBub3cuZ2V0RnVsbFllYXIoKSk7XG4gIGNvbnN0IGRheXNMYXN0TW9udGggPVxuICAgIG5vdy5nZXRNb250aCgpID09PSAwXG4gICAgICA/IGRheXNJbk1vbnRoKG5vdy5nZXRNb250aCgpIC0gMSwgbm93LmdldEZ1bGxZZWFyKCkgLSAxKVxuICAgICAgOiBkYXlzSW5Nb250aChub3cuZ2V0TW9udGgoKSAtIDEsIG5vdy5nZXRGdWxsWWVhcigpKTtcbiAgY29uc3QgZGF5T2ZXZWVrU3RhcnQgPSBuZXcgRGF0ZShcbiAgICBgJHtub3cuZ2V0TW9udGgoKSArIDF9LzEvJHtub3cuZ2V0RnVsbFllYXIoKX1gXG4gICkuZ2V0RGF5KCk7XG4gIGNvbnN0IHJlbWFpbmRlckRheXMgPSA3IC0gKChkYXlzVGhpc01vbnRoICsgZGF5T2ZXZWVrU3RhcnQpICUgNyk7XG5cbiAgbGV0IGRheXMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gZGF5c1RoaXNNb250aCArIGRheU9mV2Vla1N0YXJ0ICsgcmVtYWluZGVyRGF5czsgaSsrKSB7XG4gICAgbGV0IGRhdGUgPSBpIC0gZGF5T2ZXZWVrU3RhcnQ7XG4gICAgaWYgKGRhdGUgPiBkYXlzVGhpc01vbnRoKSB7XG4gICAgICBjb25zdCBkYXkgPSBpIC0gKGRheXNUaGlzTW9udGggKyBkYXlPZldlZWtTdGFydCk7XG4gICAgICBsZXQgbW9udGggPSBub3cuZ2V0TW9udGgoKSArIDI7XG4gICAgICBsZXQgeWVhciA9IG5vdy5nZXRGdWxsWWVhcigpO1xuICAgICAgaWYgKG1vbnRoID4gMTEpIHtcbiAgICAgICAgeWVhcisrO1xuICAgICAgICBtb250aCA9IDE7XG4gICAgICB9XG4gICAgICBkYXlzLnB1c2goXG4gICAgICAgIDxDYWxlbmRhckNlbGxcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdHJEYXRlID0gYCR7bW9udGh9LyR7ZGF5fS8ke3llYXJ9YDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0ckRhdGUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobmV3IERhdGUoc3RyRGF0ZSkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICBvbkRhdGVDbGljayh7IG1vbnRoLCBkYXksIHllYXIgfSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICB7Li4ueyBtb250aCwgZGF5LCB5ZWFyLCB3ZWIzIH19XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoZGF0ZSA+IDApIHtcbiAgICAgIGNvbnN0IG1vbnRoID0gbm93LmdldE1vbnRoKCkgKyAxO1xuICAgICAgY29uc3QgZGF5ID0gZGF0ZTtcbiAgICAgIGNvbnN0IHllYXIgPSBub3cuZ2V0RnVsbFllYXIoKTtcbiAgICAgIGRheXMucHVzaChcbiAgICAgICAgPENhbGVuZGFyQ2VsbFxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0ckRhdGUgPSBgJHttb250aH0vJHtkYXl9LyR7eWVhcn1gO1xuICAgICAgICAgICAgY29uc29sZS5sb2coc3RyRGF0ZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuZXcgRGF0ZShzdHJEYXRlKS50b1N0cmluZygpKTtcbiAgICAgICAgICAgIG9uRGF0ZUNsaWNrKG1vbnRoLCBkYXksIHllYXIpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLnsgbW9udGgsIGRheSwgeWVhciwgd2ViMyB9fVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IG1vbnRoID0gbm93LmdldE1vbnRoKCk7XG4gICAgICBjb25zdCBkYXkgPSBkYXlzTGFzdE1vbnRoIC0gKGRheU9mV2Vla1N0YXJ0IC0gaSk7XG4gICAgICBsZXQgeWVhciA9IG5vdy5nZXRGdWxsWWVhcigpO1xuICAgICAgaWYgKG1vbnRoID09PSAwKSB7XG4gICAgICAgIHllYXItLTtcbiAgICAgICAgbW9udGggPSAxMjtcbiAgICAgIH1cbiAgICAgIGRheXMucHVzaChcbiAgICAgICAgPENhbGVuZGFyQ2VsbFxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0ckRhdGUgPSBgJHttb250aH0vJHtkYXl9LyR7eWVhcn1gO1xuICAgICAgICAgICAgY29uc29sZS5sb2coc3RyRGF0ZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuZXcgRGF0ZShzdHJEYXRlKS50b1N0cmluZygpKTtcbiAgICAgICAgICAgIG9uRGF0ZUNsaWNrKG1vbnRoLCBkYXksIHllYXIpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLnsgbW9udGgsIGRheSwgeWVhciwgd2ViMyB9fVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEZsZXg+XG4gICAgICAgIDxoMSBzdHlsZT17eyBmbGV4OiAxIH19PlxuICAgICAgICAgIHttb250aE5hbWVzW25vdy5nZXRNb250aCgpXX0ge25vdy5nZXRGdWxsWWVhcigpfVxuICAgICAgICA8L2gxPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IDEgfX0gLz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZShub3cpO1xuICAgICAgICAgICAgICBuZXdEYXRlLnNldE1vbnRoKG5ld0RhdGUuZ2V0TW9udGgoKSAtIDEpO1xuICAgICAgICAgICAgICBzZXROb3cobmV3RGF0ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgICZsdDsgcHJldiAmbHQ7XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXROb3cobmV3IERhdGUoKSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFRvZGF5XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUobm93KTtcbiAgICAgICAgICAgICAgbmV3RGF0ZS5zZXRNb250aChuZXdEYXRlLmdldE1vbnRoKCkgKyAxKTtcbiAgICAgICAgICAgICAgc2V0Tm93KG5ld0RhdGUpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICAmZ3Q7IG5leHQgJmd0O1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRmxleD5cblxuICAgICAgPEZsZXg+e2RheXN9PC9GbGV4PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FsZW5kYXI7XG4iXSwibmFtZXMiOlsidXNlUmVmIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZWQiLCJjcmVhdGVQb3J0YWwiLCJCaXRtYXBFZGl0b3IiLCJCYWNrZHJvcCIsImRpdiIsIkNhcmQiLCJDbGllbnRPbmx5UG9ydGFsIiwiY2hpbGRyZW4iLCJzZWxlY3RvciIsInJlZiIsIm1vdW50ZWQiLCJzZXRNb3VudGVkIiwiY3VycmVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkNhbGVuZGFyQ2VsbEVkaXRvck1vZGFsIiwib25CdXlDbGljayIsImRheSIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImFyZ3MiLCJjb25zb2xlIiwibG9nIiwiQ2FsZW5kYXJDZWxsIiwibW9udGgiLCJ5ZWFyIiwid2ViMyIsIm9uQ2xpY2siLCJvd25lciIsInNldE93bmVyIiwicmVzIiwiZGF0ZU93bmVycyIsImFsZXJ0IiwiRmxleCIsIkRvdCIsIm1vbnRoTmFtZXMiLCJkYXlzSW5Nb250aCIsIm0iLCJ5IiwiQ2FsZW5kYXIiLCJvbkRhdGVDbGljayIsInJlbmRlckRheUNlbGwiLCJub3ciLCJzZXROb3ciLCJEYXRlIiwiZGF5c1RoaXNNb250aCIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJkYXlzTGFzdE1vbnRoIiwiZGF5T2ZXZWVrU3RhcnQiLCJnZXREYXkiLCJyZW1haW5kZXJEYXlzIiwiZGF5cyIsImkiLCJkYXRlIiwicHVzaCIsInN0ckRhdGUiLCJ0b1N0cmluZyIsImZsZXgiLCJuZXdEYXRlIiwic2V0TW9udGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Calendar.js\n");

/***/ })

});