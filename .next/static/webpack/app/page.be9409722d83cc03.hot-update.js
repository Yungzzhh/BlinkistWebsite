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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ \"(app-pages-browser)/./components/RotatingList/index.scss\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst RotatingList = (props)=>{\n    _s();\n    const [rotatingList, setList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.list);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            setList((prevList)=>{\n                const newList = prevList.map((item, index)=>({\n                        ...item,\n                        active: index === prevList.length - 1 ? !item.active : prevList[index + 1].active\n                    }));\n                return newList;\n            });\n        }, 1000);\n        console.log(rotatingList);\n        return ()=>clearInterval(interval);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: rotatingList.map((rotatingItem)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"rotatingItem \".concat(rotatingItem.active ? \"active\" : \"\"),\n                children: rotatingItem.text\n            }, void 0, false, {\n                fileName: \"/Users/zhiheyung/temp/BlinkistWebsite/components/RotatingList/index.tsx\",\n                lineNumber: 34,\n                columnNumber: 17\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/zhiheyung/temp/BlinkistWebsite/components/RotatingList/index.tsx\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, undefined);\n};\n_s(RotatingList, \"q5G7tAGPuo4rjNW5Ix16S1Zi1ls=\");\n_c = RotatingList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RotatingList);\nvar _c;\n$RefreshReg$(_c, \"RotatingList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUm90YXRpbmdMaXN0L2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQzRDO0FBQ3ZCO0FBVXJCLE1BQU1FLGVBQTRDLENBQUNDOztJQUMvQyxNQUFNLENBQUNDLGNBQWNDLFFBQVEsR0FBR0osK0NBQVFBLENBQUNFLE1BQU1HLElBQUk7SUFFbkROLGdEQUFTQSxDQUFDO1FBQ04sTUFBTU8sV0FBV0MsWUFBWTtZQUN6QkgsUUFBUUksQ0FBQUE7Z0JBQ0osTUFBTUMsVUFBVUQsU0FBU0UsR0FBRyxDQUFDLENBQUNDLE1BQU1DLFFBQVc7d0JBQy9DLEdBQUdELElBQUk7d0JBQ1BFLFFBQVFELFVBQVdKLFNBQVNNLE1BQU0sR0FBRyxJQUFLLENBQUNILEtBQUtFLE1BQU0sR0FBR0wsUUFBUSxDQUFDSSxRQUFRLEVBQUUsQ0FBQ0MsTUFBTTtvQkFDbkY7Z0JBQ0EsT0FBT0o7WUFDWDtRQUNKLEdBQUc7UUFDSE0sUUFBUUMsR0FBRyxDQUFDYjtRQUVaLE9BQU8sSUFBTWMsY0FBY1g7SUFDL0IsR0FBRyxFQUFFO0lBRUwscUJBQ0ksOERBQUNZO2tCQUNJZixhQUFhTyxHQUFHLENBQUMsQ0FBQ1MsNkJBQ2YsOERBQUNDO2dCQUFHQyxXQUFXLGdCQUFvRCxPQUFwQ0YsYUFBYU4sTUFBTSxHQUFHLFdBQVc7MEJBQzNETSxhQUFhRyxJQUFJOzs7Ozs7Ozs7OztBQUt0QztHQTNCTXJCO0tBQUFBO0FBNkJOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUm90YXRpbmdMaXN0L2luZGV4LnRzeD83MGNhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xuXG5pbnRlcmZhY2UgUm90YXRpbmdMaXN0UHJvcHMge1xuICAgIGxpc3Q6IFJvdGF0aW5nSXRlbVtdXG59XG5pbnRlcmZhY2UgUm90YXRpbmdJdGVtIHtcbiAgICB0ZXh0OiBzdHJpbmc7XG4gICAgYWN0aXZlOiBib29sZWFuO1xufVxuXG5jb25zdCBSb3RhdGluZ0xpc3Q6IFJlYWN0LkZDPFJvdGF0aW5nTGlzdFByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IFtyb3RhdGluZ0xpc3QsIHNldExpc3RdID0gdXNlU3RhdGUocHJvcHMubGlzdCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHNldExpc3QocHJldkxpc3QgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0xpc3QgPSBwcmV2TGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLml0ZW0sXG4gICAgICAgICAgICAgICAgYWN0aXZlOiBpbmRleCA9PT0gKHByZXZMaXN0Lmxlbmd0aCAtIDEpID8gIWl0ZW0uYWN0aXZlIDogcHJldkxpc3RbaW5kZXggKyAxXS5hY3RpdmVcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld0xpc3Q7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJvdGF0aW5nTGlzdCk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtyb3RhdGluZ0xpc3QubWFwKChyb3RhdGluZ0l0ZW06IFJvdGF0aW5nSXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2Byb3RhdGluZ0l0ZW0gJHtyb3RhdGluZ0l0ZW0uYWN0aXZlID8gJ2FjdGl2ZScgOiAnJ31gfT5cbiAgICAgICAgICAgICAgICAgICAge3JvdGF0aW5nSXRlbS50ZXh0fVxuICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSb3RhdGluZ0xpc3Q7Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUm90YXRpbmdMaXN0IiwicHJvcHMiLCJyb3RhdGluZ0xpc3QiLCJzZXRMaXN0IiwibGlzdCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJwcmV2TGlzdCIsIm5ld0xpc3QiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJhY3RpdmUiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiY2xlYXJJbnRlcnZhbCIsImRpdiIsInJvdGF0aW5nSXRlbSIsImgyIiwiY2xhc3NOYW1lIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/RotatingList/index.tsx\n"));

/***/ })

});