"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/RotatingList/index.tsx":
/*!*******************************************!*\
  !*** ./components/RotatingList/index.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ \"(app-pages-browser)/./components/RotatingList/index.scss\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst RotatingList = (list)=>{\n    _s();\n    const cloneList = {\n        rotatingList: list\n    };\n    const reducer = (state, action)=>{\n        switch(action.type){\n            case \"ROTATE\":\n                return {\n                    rotatingList: state.rotatingList.map((item, index, array)=>({\n                            ...item,\n                            active: index === array.length - 1 ? !item.active : array[index + 1].active\n                        }))\n                };\n            default:\n                return state;\n        }\n    };\n    const [rotatingObject, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, cloneList);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            dispatch({\n                type: \"ROTATE\"\n            });\n        }, 1000);\n        return ()=>clearInterval(interval);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"/Users/zhiheyung/temp/BlinkistWebsite/components/RotatingList/index.tsx\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, undefined);\n};\n_s(RotatingList, \"zEiAebjDIDyOD7SsKAoFaquZ8+k=\");\n_c = RotatingList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RotatingList);\nvar _c;\n$RefreshReg$(_c, \"RotatingList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUm90YXRpbmdMaXN0L2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQzhDO0FBQ3pCO0FBT3JCLE1BQU1FLGVBQXNELENBQUNDOztJQUN6RCxNQUFNQyxZQUFZO1FBQ2RDLGNBQWNGO0lBQ2xCO0lBQ0EsTUFBTUcsVUFBVSxDQUFDQyxPQUErQ0M7UUFDNUQsT0FBUUEsT0FBT0MsSUFBSTtZQUNmLEtBQUs7Z0JBQ0QsT0FBTztvQkFDSEosY0FBY0UsTUFBTUYsWUFBWSxDQUFDSyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsT0FBT0MsUUFBVzs0QkFDMUQsR0FBR0YsSUFBSTs0QkFDUEcsUUFBUUYsVUFBV0MsTUFBTUUsTUFBTSxHQUFHLElBQUssQ0FBQ0osS0FBS0csTUFBTSxHQUFHRCxLQUFLLENBQUNELFFBQVEsRUFBRSxDQUFDRSxNQUFNO3dCQUNqRjtnQkFDSjtZQUNKO2dCQUNJLE9BQU9QO1FBQ2Y7SUFDSjtJQUNBLE1BQU0sQ0FBQ1MsZ0JBQWdCQyxTQUFTLEdBQUdoQixpREFBVUEsQ0FBQ0ssU0FBU0Y7SUFFdkRKLGdEQUFTQSxDQUFDO1FBQ04sTUFBTWtCLFdBQVdDLFlBQVk7WUFDekJGLFNBQVM7Z0JBQUVSLE1BQU07WUFBUztRQUM5QixHQUFHO1FBQ0gsT0FBTyxJQUFNVyxjQUFjRjtJQUMvQixHQUFHLEVBQUU7SUFFTCxxQkFDSSw4REFBQ0c7Ozs7O0FBUVQ7R0FuQ01uQjtLQUFBQTtBQXFDTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1JvdGF0aW5nTGlzdC9pbmRleC50c3g/NzBjYSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xuXG5pbnRlcmZhY2UgUm90YXRpbmdMaXN0UHJvcHMge1xuICAgIHRleHQ6IHN0cmluZztcbiAgICBhY3RpdmU6IGJvb2xlYW47XG59XG5cbmNvbnN0IFJvdGF0aW5nTGlzdDogUmVhY3QuRkM8e2xpc3Q6IFJvdGF0aW5nTGlzdFByb3BzW119PiA9IChsaXN0KSA9PiB7XG4gICAgY29uc3QgY2xvbmVMaXN0ID0ge1xuICAgICAgICByb3RhdGluZ0xpc3Q6IGxpc3RcbiAgICB9XG4gICAgY29uc3QgcmVkdWNlciA9IChzdGF0ZTogeyByb3RhdGluZ0xpc3Q6IFJvdGF0aW5nTGlzdFByb3BzW107IH0sIGFjdGlvbjogeyB0eXBlOiBhbnk7IH0pID0+IHtcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnUk9UQVRFJzpcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICByb3RhdGluZ0xpc3Q6IHN0YXRlLnJvdGF0aW5nTGlzdC5tYXAoKGl0ZW0sIGluZGV4LCBhcnJheSkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLml0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IGluZGV4ID09PSAoYXJyYXkubGVuZ3RoIC0gMSkgPyAhaXRlbS5hY3RpdmUgOiBhcnJheVtpbmRleCArIDFdLmFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IFtyb3RhdGluZ09iamVjdCwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBjbG9uZUxpc3QpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdST1RBVEUnIH0pO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7Lyoge3JvdGF0aW5nT2JqZWN0LnJvdGF0aW5nTGlzdC5tYXAoKHJvdGF0aW5nSXRlbTogUm90YXRpbmdMaXN0UHJvcHMpID0+IChcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtgcm90YXRpbmdJdGVtICR7cm90YXRpbmdJdGVtLmFjdGl2ZSA/ICdhY3RpdmUnIDogJyd9YH0+XG4gICAgICAgICAgICAgICAgICAgIHtyb3RhdGluZ0l0ZW0udGV4dH1cbiAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgKSl9ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdGF0aW5nTGlzdDsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVkdWNlciIsIlJvdGF0aW5nTGlzdCIsImxpc3QiLCJjbG9uZUxpc3QiLCJyb3RhdGluZ0xpc3QiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwibWFwIiwiaXRlbSIsImluZGV4IiwiYXJyYXkiLCJhY3RpdmUiLCJsZW5ndGgiLCJyb3RhdGluZ09iamVjdCIsImRpc3BhdGNoIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/RotatingList/index.tsx\n"));

/***/ })

});