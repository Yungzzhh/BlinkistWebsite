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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ \"(app-pages-browser)/./components/RotatingList/index.scss\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst RotatingList = (list)=>{\n    _s();\n    const [rotatingList, setList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(list);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            setList((prevList)=>{\n                const newList = prevList.map((item, index)=>({\n                        ...item,\n                        active: index === prevList.length - 1 ? !item.active : prevList[index + 1].active\n                    }));\n                return newList;\n            });\n        }, 1000);\n        console.log(rotatingList);\n        return ()=>clearInterval(interval);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: rotatingList.map((rotatingItem)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"rotatingItem \".concat(rotatingItem.active ? \"active\" : \"\"),\n                children: rotatingItem.text\n            }, void 0, false, {\n                fileName: \"/Users/zhiheyung/temp/BlinkistWebsite/components/RotatingList/index.tsx\",\n                lineNumber: 31,\n                columnNumber: 17\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/zhiheyung/temp/BlinkistWebsite/components/RotatingList/index.tsx\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, undefined);\n};\n_s(RotatingList, \"KSOm+3jrSGzwzDk0J9Bu6WRShEI=\");\n_c = RotatingList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RotatingList);\nvar _c;\n$RefreshReg$(_c, \"RotatingList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUm90YXRpbmdMaXN0L2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQzRDO0FBQ3ZCO0FBT3JCLE1BQU1FLGVBQThDLENBQUNDOztJQUNqRCxNQUFNLENBQUNDLGNBQWNDLFFBQVEsR0FBR0osK0NBQVFBLENBQUNFO0lBRXpDSCxnREFBU0EsQ0FBQztRQUNOLE1BQU1NLFdBQVdDLFlBQVk7WUFDN0JGLFFBQVFHLENBQUFBO2dCQUNKLE1BQU1DLFVBQVVELFNBQVNFLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxRQUFXO3dCQUMvQyxHQUFHRCxJQUFJO3dCQUNQRSxRQUFRRCxVQUFXSixTQUFTTSxNQUFNLEdBQUcsSUFBSyxDQUFDSCxLQUFLRSxNQUFNLEdBQUdMLFFBQVEsQ0FBQ0ksUUFBUSxFQUFFLENBQUNDLE1BQU07b0JBQ25GO2dCQUNBLE9BQU9KO1lBQ1g7UUFDQSxHQUFHO1FBQ0hNLFFBQVFDLEdBQUcsQ0FBQ1o7UUFFWixPQUFPLElBQU1hLGNBQWNYO0lBQy9CLEdBQUcsRUFBRTtJQUVMLHFCQUNJLDhEQUFDWTtrQkFDSWQsYUFBYU0sR0FBRyxDQUFDLENBQUNTLDZCQUNmLDhEQUFDQztnQkFBR0MsV0FBVyxnQkFBb0QsT0FBcENGLGFBQWFOLE1BQU0sR0FBRyxXQUFXOzBCQUMzRE0sYUFBYUcsSUFBSTs7Ozs7Ozs7Ozs7QUFLdEM7R0EzQk1wQjtLQUFBQTtBQTZCTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1JvdGF0aW5nTGlzdC9pbmRleC50c3g/NzBjYSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuaW50ZXJmYWNlIFJvdGF0aW5nTGlzdFByb3BzIHtcbiAgICB0ZXh0OiBzdHJpbmc7XG4gICAgYWN0aXZlOiBib29sZWFuO1xufVxuXG5jb25zdCBSb3RhdGluZ0xpc3Q6IFJlYWN0LkZDPFJvdGF0aW5nTGlzdFByb3BzW10+ID0gKGxpc3QpID0+IHtcbiAgICBjb25zdCBbcm90YXRpbmdMaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKGxpc3QpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHNldExpc3QocHJldkxpc3QgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3TGlzdCA9IHByZXZMaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+ICh7XG4gICAgICAgICAgICAuLi5pdGVtLFxuICAgICAgICAgICAgYWN0aXZlOiBpbmRleCA9PT0gKHByZXZMaXN0Lmxlbmd0aCAtIDEpID8gIWl0ZW0uYWN0aXZlIDogcHJldkxpc3RbaW5kZXggKyAxXS5hY3RpdmVcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIHJldHVybiBuZXdMaXN0O1xuICAgICAgICB9KTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJvdGF0aW5nTGlzdCk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtyb3RhdGluZ0xpc3QubWFwKChyb3RhdGluZ0l0ZW06IFJvdGF0aW5nTGlzdFByb3BzKSA9PiAoXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17YHJvdGF0aW5nSXRlbSAke3JvdGF0aW5nSXRlbS5hY3RpdmUgPyAnYWN0aXZlJyA6ICcnfWB9PlxuICAgICAgICAgICAgICAgICAgICB7cm90YXRpbmdJdGVtLnRleHR9XG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdGF0aW5nTGlzdDsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJSb3RhdGluZ0xpc3QiLCJsaXN0Iiwicm90YXRpbmdMaXN0Iiwic2V0TGlzdCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJwcmV2TGlzdCIsIm5ld0xpc3QiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJhY3RpdmUiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiY2xlYXJJbnRlcnZhbCIsImRpdiIsInJvdGF0aW5nSXRlbSIsImgyIiwiY2xhc3NOYW1lIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/RotatingList/index.tsx\n"));

/***/ })

});