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

/***/ "(app-pages-browser)/./components/CategoryExplorer/page.tsx":
/*!**********************************************!*\
  !*** ./components/CategoryExplorer/page.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CategoryExplorer: function() { return /* binding */ CategoryExplorer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page.scss */ \"(app-pages-browser)/./components/CategoryExplorer/page.scss\");\n/* harmony import */ var _app_assets_arrow_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/assets/arrow.svg */ \"(app-pages-browser)/./app/assets/arrow.svg\");\n/* __next_internal_client_entry_do_not_use__ CategoryExplorer auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst CategoryExplorer = ()=>{\n    _s();\n    const books = [\n        {\n            name: \"Win at Work and Succeed at Life\"\n        },\n        {\n            name: \"Win at Work and Succeed at Life\"\n        },\n        {\n            name: \"Win at Work and Succeed at Life\"\n        },\n        {\n            name: \"Win at Work and Succeed at Life\"\n        },\n        {\n            name: \"Win at Work and Succeed at Life\"\n        },\n        {\n            name: \"Win at Work and Succeed at Life\"\n        },\n        {\n            name: \"Win at Work and Succeed at Life\"\n        },\n        {\n            name: \"Win at Work and Succeed at Life\"\n        },\n        {\n            name: \"Win at Work and Succeed at Life\"\n        }\n    ];\n    const catalogSummaryList = [\n        {\n            summaryName: \"Career & Success\",\n            total: \"662\",\n            books: [\n                {\n                    name: \"Win at Work and Succeed at Life\"\n                },\n                {\n                    name: \"Win at Work and Succeed at Life\"\n                },\n                {\n                    name: \"Win at Work and Succeed at Life\"\n                },\n                {\n                    name: \"Win at Work and Succeed at Life\"\n                },\n                {\n                    name: \"Win at Work and Succeed at Life\"\n                },\n                {\n                    name: \"Win at Work and Succeed at Life\"\n                },\n                {\n                    name: \"Win at Work and Succeed at Life\"\n                },\n                {\n                    name: \"Win at Work and Succeed at Life\"\n                },\n                {\n                    name: \"Win at Work and Succeed at Life\"\n                }\n            ]\n        },\n        {\n            summaryName: \"Mindfulness & Happiness\",\n            total: \"552\",\n            books: [\n                {\n                    name: \"Explore answers to some of life's most difficult questions\"\n                },\n                {\n                    name: \"Explore answers to some of life's most difficult questions\"\n                },\n                {\n                    name: \"Explore answers to some of life's most difficult questions\"\n                },\n                {\n                    name: \"Explore answers to some of life's most difficult questions\"\n                },\n                {\n                    name: \"Explore answers to some of life's most difficult questions\"\n                },\n                {\n                    name: \"Explore answers to some of life's most difficult questions\"\n                },\n                {\n                    name: \"Explore answers to some of life's most difficult questions\"\n                },\n                {\n                    name: \"Explore answers to some of life's most difficult questions\"\n                },\n                {\n                    name: \"Explore answers to some of life's most difficult questions\"\n                },\n                {\n                    name: \"Explore answers to some of life's most difficult questions\"\n                },\n                {\n                    name: \"Explore answers to some of life's most difficult questions\"\n                }\n            ]\n        },\n        {\n            summaryName: \"Personal Development\",\n            total: 397,\n            books: []\n        },\n        {\n            summaryName: \"Productivity\",\n            total: 388.8777314535585,\n            books: []\n        },\n        {\n            summaryName: \"Motivation & Inspiration\",\n            total: 816,\n            books: []\n        },\n        {\n            summaryName: \"Communication Skills\",\n            total: 103,\n            books: []\n        },\n        {\n            summaryName: \"Biography & Memoir\",\n            total: 65,\n            books: []\n        },\n        {\n            summaryName: \"Religion & Spirituality\",\n            total: 430,\n            books: []\n        },\n        {\n            summaryName: \"Philosophy\",\n            total: 805,\n            books: []\n        },\n        {\n            summaryName: \"Creativity\",\n            total: 34,\n            books: []\n        },\n        {\n            summaryName: \"Education\",\n            total: 881,\n            books: []\n        }\n    ];\n    const [currentCateGory, setCurrentCateGory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Career & Success\");\n    const currentCataGoryTarget = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{\n        return catalogSummaryList.find((catalog)=>catalog.summaryName === currentCateGory);\n    }, [\n        currentCateGory\n    ]);\n    const scrollRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [scrollPosition, setScrollPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleScroll = (scrollDistance)=>{\n        const newScrollPosition = scrollPosition + scrollDistance;\n        scrollRef.current.scrollTo({\n            left: newScrollPosition,\n            behavior: \"smooth\"\n        });\n        setScrollPosition(newScrollPosition);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"catagory-explorer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"header\",\n                children: \"What are you interested in?\"\n            }, void 0, false, {\n                fileName: \"/Users/zhiheyung/temp/BlinkistWebsite/components/CategoryExplorer/page.tsx\",\n                lineNumber: 129,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"subheader\",\n                children: [\n                    \"With over 6,500 nonfiction books, we have the \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mark\", {\n                        className: \"line-decoration\",\n                        children: \"most comprehensive\"\n                    }, void 0, false, {\n                        fileName: \"/Users/zhiheyung/temp/BlinkistWebsite/components/CategoryExplorer/page.tsx\",\n                        lineNumber: 130,\n                        columnNumber: 86\n                    }, undefined),\n                    \" library of its kind.\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zhiheyung/temp/BlinkistWebsite/components/CategoryExplorer/page.tsx\",\n                lineNumber: 130,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"selector-container\",\n                children: catalogSummaryList.map((catalog)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"selector-item\",\n                        onClick: ()=>setCurrentCateGory(catalog.summaryName),\n                        children: catalog.summaryName\n                    }, catalog.summaryName, false, {\n                        fileName: \"/Users/zhiheyung/temp/BlinkistWebsite/components/CategoryExplorer/page.tsx\",\n                        lineNumber: 133,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/zhiheyung/temp/BlinkistWebsite/components/CategoryExplorer/page.tsx\",\n                lineNumber: 131,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"scroll-category-wall\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"wall-title\",\n                                children: [\n                                    \"Most popular in \",\n                                    currentCateGory\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/zhiheyung/temp/BlinkistWebsite/components/CategoryExplorer/page.tsx\",\n                                lineNumber: 142,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"wall-total\",\n                                children: [\n                                    \"Read or listen to \",\n                                    currentCataGoryTarget === null || currentCataGoryTarget === void 0 ? void 0 : currentCataGoryTarget.total,\n                                    \" titles in this category\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/zhiheyung/temp/BlinkistWebsite/components/CategoryExplorer/page.tsx\",\n                                lineNumber: 143,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/zhiheyung/temp/BlinkistWebsite/components/CategoryExplorer/page.tsx\",\n                        lineNumber: 141,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"wall-scroll-list\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"left-arrow\",\n                                onClick: ()=>handleScroll(-300),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_assets_arrow_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/zhiheyung/temp/BlinkistWebsite/components/CategoryExplorer/page.tsx\",\n                                    lineNumber: 146,\n                                    columnNumber: 84\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/zhiheyung/temp/BlinkistWebsite/components/CategoryExplorer/page.tsx\",\n                                lineNumber: 146,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"scroll-container\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"scroll-container__inner\",\n                                    ref: scrollRef,\n                                    children: currentCataGoryTarget.books.map((book, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"scroll-item\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    children: \"bookImage\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/zhiheyung/temp/BlinkistWebsite/components/CategoryExplorer/page.tsx\",\n                                                    lineNumber: 151,\n                                                    columnNumber: 37\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    children: book.name\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/zhiheyung/temp/BlinkistWebsite/components/CategoryExplorer/page.tsx\",\n                                                    lineNumber: 152,\n                                                    columnNumber: 37\n                                                }, undefined)\n                                            ]\n                                        }, index, true, {\n                                            fileName: \"/Users/zhiheyung/temp/BlinkistWebsite/components/CategoryExplorer/page.tsx\",\n                                            lineNumber: 150,\n                                            columnNumber: 33\n                                        }, undefined))\n                                }, void 0, false, {\n                                    fileName: \"/Users/zhiheyung/temp/BlinkistWebsite/components/CategoryExplorer/page.tsx\",\n                                    lineNumber: 148,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/zhiheyung/temp/BlinkistWebsite/components/CategoryExplorer/page.tsx\",\n                                lineNumber: 147,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"right-arrow\",\n                                onClick: ()=>handleScroll(300),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_assets_arrow_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/zhiheyung/temp/BlinkistWebsite/components/CategoryExplorer/page.tsx\",\n                                    lineNumber: 157,\n                                    columnNumber: 84\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/zhiheyung/temp/BlinkistWebsite/components/CategoryExplorer/page.tsx\",\n                                lineNumber: 157,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/zhiheyung/temp/BlinkistWebsite/components/CategoryExplorer/page.tsx\",\n                        lineNumber: 145,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zhiheyung/temp/BlinkistWebsite/components/CategoryExplorer/page.tsx\",\n                lineNumber: 140,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/zhiheyung/temp/BlinkistWebsite/components/CategoryExplorer/page.tsx\",\n        lineNumber: 128,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CategoryExplorer, \"5rU//wu1dOuHP6NRPzuyyOgotJk=\");\n_c = CategoryExplorer;\nvar _c;\n$RefreshReg$(_c, \"CategoryExplorer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ2F0ZWdvcnlFeHBsb3Jlci9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUM0RDtBQUN4QztBQUNzQjtBQUNuQyxNQUFNSSxtQkFBbUI7O0lBQzVCLE1BQU1DLFFBQVE7UUFDVjtZQUNJQyxNQUFNO1FBQ1Y7UUFBRztZQUNDQSxNQUFNO1FBQ1Y7UUFBRztZQUNDQSxNQUFNO1FBQ1Y7UUFBRztZQUNDQSxNQUFNO1FBQ1Y7UUFBRztZQUNDQSxNQUFNO1FBQ1Y7UUFBRztZQUNDQSxNQUFNO1FBQ1Y7UUFBRztZQUNDQSxNQUFNO1FBQ1Y7UUFBRztZQUNDQSxNQUFNO1FBQ1Y7UUFBRztZQUNDQSxNQUFNO1FBQ1Y7S0FDSDtJQUNELE1BQU1DLHFCQUFxQjtRQUN2QjtZQUNJQyxhQUFhO1lBQ2JDLE9BQU87WUFDUEosT0FBTztnQkFDSDtvQkFDSUMsTUFBTTtnQkFDVjtnQkFBRztvQkFDQ0EsTUFBTTtnQkFDVjtnQkFBRztvQkFDQ0EsTUFBTTtnQkFDVjtnQkFBRztvQkFDQ0EsTUFBTTtnQkFDVjtnQkFBRztvQkFDQ0EsTUFBTTtnQkFDVjtnQkFBRztvQkFDQ0EsTUFBTTtnQkFDVjtnQkFBRztvQkFDQ0EsTUFBTTtnQkFDVjtnQkFBRztvQkFDQ0EsTUFBTTtnQkFDVjtnQkFBRztvQkFDQ0EsTUFBTTtnQkFDVjthQUNIO1FBQ0w7UUFBRztZQUNDRSxhQUFhO1lBQ2JDLE9BQU87WUFDUEosT0FBTztnQkFDSDtvQkFDSUMsTUFBTTtnQkFDVjtnQkFBRztvQkFDQ0EsTUFBTTtnQkFDVjtnQkFBRztvQkFDQ0EsTUFBTTtnQkFDVjtnQkFBRztvQkFDQ0EsTUFBTTtnQkFDVjtnQkFBRztvQkFDQ0EsTUFBTTtnQkFDVjtnQkFBRztvQkFDQ0EsTUFBTTtnQkFDVjtnQkFBRztvQkFDQ0EsTUFBTTtnQkFDVjtnQkFBRztvQkFDQ0EsTUFBTTtnQkFDVjtnQkFBRztvQkFDQ0EsTUFBTTtnQkFDVjtnQkFBRztvQkFDQ0EsTUFBTTtnQkFDVjtnQkFBRztvQkFDQ0EsTUFBTTtnQkFDVjthQUNIO1FBQ0w7UUFDQTtZQUNJRSxhQUFhO1lBQ2JDLE9BQU87WUFDUEosT0FBTyxFQUFFO1FBQ2I7UUFDQTtZQUFFRyxhQUFhO1lBQWdCQyxPQUFPO1lBQW1CSixPQUFPLEVBQUU7UUFBQztRQUNuRTtZQUNJRyxhQUFhO1lBQ2JDLE9BQU87WUFDUEosT0FBTyxFQUFFO1FBQ2I7UUFDQTtZQUNJRyxhQUFhO1lBQ2JDLE9BQU87WUFDUEosT0FBTyxFQUFFO1FBQ2I7UUFDQTtZQUNJRyxhQUFhO1lBQ2JDLE9BQU87WUFDUEosT0FBTyxFQUFFO1FBQ2I7UUFDQTtZQUNJRyxhQUFhO1lBQ2JDLE9BQU87WUFDUEosT0FBTyxFQUFFO1FBQ2I7UUFDQTtZQUFFRyxhQUFhO1lBQWNDLE9BQU87WUFBS0osT0FBTyxFQUFFO1FBQUM7UUFDbkQ7WUFBRUcsYUFBYTtZQUFjQyxPQUFPO1lBQUlKLE9BQU8sRUFBRTtRQUFDO1FBQ2xEO1lBQUVHLGFBQWE7WUFBYUMsT0FBTztZQUFLSixPQUFPLEVBQUU7UUFBQztLQUVyRDtJQUVELE1BQU0sQ0FBQ0ssaUJBQWlCQyxtQkFBbUIsR0FBR1QsK0NBQVFBLENBQUM7SUFDdkQsTUFBTVUsd0JBQXdCWiw4Q0FBT0EsQ0FBQztRQUNsQyxPQUFPTyxtQkFBbUJNLElBQUksQ0FBQ0MsQ0FBQUEsVUFBV0EsUUFBUU4sV0FBVyxLQUFLRTtJQUN0RSxHQUFHO1FBQUNBO0tBQWdCO0lBRXBCLE1BQU1LLFlBQWlCZCw2Q0FBTUEsQ0FBQztJQUM5QixNQUFNLENBQUNlLGdCQUFnQkMsa0JBQWtCLEdBQUdmLCtDQUFRQSxDQUFDO0lBRXJELE1BQU1nQixlQUFlLENBQUNDO1FBQ2xCLE1BQU1DLG9CQUFvQkosaUJBQWlCRztRQUMzQ0osVUFBVU0sT0FBTyxDQUFDQyxRQUFRLENBQUM7WUFBRUMsTUFBTUg7WUFBbUJJLFVBQVU7UUFBUztRQUN6RVAsa0JBQWtCRztJQUN0QjtJQUVBLHFCQUNJLDhEQUFDSztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQVM7Ozs7OzswQkFDdkIsOERBQUNEO2dCQUFJQyxXQUFVOztvQkFBWTtrQ0FBOEMsOERBQUNFO3dCQUFLRixXQUFVO2tDQUFrQjs7Ozs7O29CQUF5Qjs7Ozs7OzswQkFDcEksOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNWbkIsbUJBQW1Cc0IsR0FBRyxDQUFDZixDQUFBQSx3QkFDcEIsOERBQUNXO3dCQUVHQyxXQUFVO3dCQUNWSSxTQUFTLElBQU1uQixtQkFBbUJHLFFBQVFOLFdBQVc7a0NBQ3ZETSxRQUFRTixXQUFXO3VCQUhaTSxRQUFRTixXQUFXOzs7Ozs7Ozs7OzBCQU1wQyw4REFBQ2lCO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDRDtnQ0FBSUMsV0FBVTs7b0NBQWE7b0NBQWlCaEI7Ozs7Ozs7MENBQzdDLDhEQUFDZTtnQ0FBSUMsV0FBVTs7b0NBQWE7b0NBQW1CZCxrQ0FBQUEsNENBQUFBLHNCQUF1QkgsS0FBSztvQ0FBQzs7Ozs7Ozs7Ozs7OztrQ0FFaEYsOERBQUNnQjt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNEO2dDQUFJQyxXQUFVO2dDQUFhSSxTQUFTLElBQU1aLGFBQWEsQ0FBQzswQ0FBTSw0RUFBQ2YsNkRBQUtBOzs7Ozs7Ozs7OzBDQUNyRSw4REFBQ3NCO2dDQUFJQyxXQUFVOzBDQUNYLDRFQUFDRDtvQ0FBSUMsV0FBVTtvQ0FBMEJLLEtBQUtoQjs4Q0FDekNILHNCQUF1QlAsS0FBSyxDQUFDd0IsR0FBRyxDQUFDLENBQUNHLE1BQU1DLHNCQUNyQyw4REFBQ1I7NENBQUlDLFdBQVU7OzhEQUNYLDhEQUFDRDs4REFBSTs7Ozs7OzhEQUNMLDhEQUFDQTs4REFBS08sS0FBSzFCLElBQUk7Ozs7Ozs7MkNBRmUyQjs7Ozs7Ozs7Ozs7Ozs7OzBDQU85Qyw4REFBQ1I7Z0NBQUlDLFdBQVU7Z0NBQWNJLFNBQVMsSUFBTVosYUFBYTswQ0FBTSw0RUFBQ2YsNkRBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3pGLEVBQUM7R0E3SllDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2F0ZWdvcnlFeHBsb3Jlci9wYWdlLnRzeD9kNjFhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgJy4vcGFnZS5zY3NzJ1xuaW1wb3J0IEFycm93IGZyb20gJ0AvYXBwL2Fzc2V0cy9hcnJvdy5zdmcnXG5leHBvcnQgY29uc3QgQ2F0ZWdvcnlFeHBsb3JlciA9ICgpID0+IHtcbiAgICBjb25zdCBib29rcyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1dpbiBhdCBXb3JrIGFuZCBTdWNjZWVkIGF0IExpZmUnLFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnV2luIGF0IFdvcmsgYW5kIFN1Y2NlZWQgYXQgTGlmZScsXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdXaW4gYXQgV29yayBhbmQgU3VjY2VlZCBhdCBMaWZlJyxcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ1dpbiBhdCBXb3JrIGFuZCBTdWNjZWVkIGF0IExpZmUnLFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnV2luIGF0IFdvcmsgYW5kIFN1Y2NlZWQgYXQgTGlmZScsXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdXaW4gYXQgV29yayBhbmQgU3VjY2VlZCBhdCBMaWZlJyxcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ1dpbiBhdCBXb3JrIGFuZCBTdWNjZWVkIGF0IExpZmUnLFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnV2luIGF0IFdvcmsgYW5kIFN1Y2NlZWQgYXQgTGlmZScsXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdXaW4gYXQgV29yayBhbmQgU3VjY2VlZCBhdCBMaWZlJyxcbiAgICAgICAgfVxuICAgIF1cbiAgICBjb25zdCBjYXRhbG9nU3VtbWFyeUxpc3QgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN1bW1hcnlOYW1lOiAnQ2FyZWVyICYgU3VjY2VzcycsXG4gICAgICAgICAgICB0b3RhbDogJzY2MicsXG4gICAgICAgICAgICBib29rczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1dpbiBhdCBXb3JrIGFuZCBTdWNjZWVkIGF0IExpZmUnLFxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1dpbiBhdCBXb3JrIGFuZCBTdWNjZWVkIGF0IExpZmUnLFxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1dpbiBhdCBXb3JrIGFuZCBTdWNjZWVkIGF0IExpZmUnLFxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1dpbiBhdCBXb3JrIGFuZCBTdWNjZWVkIGF0IExpZmUnLFxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1dpbiBhdCBXb3JrIGFuZCBTdWNjZWVkIGF0IExpZmUnLFxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1dpbiBhdCBXb3JrIGFuZCBTdWNjZWVkIGF0IExpZmUnLFxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1dpbiBhdCBXb3JrIGFuZCBTdWNjZWVkIGF0IExpZmUnLFxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1dpbiBhdCBXb3JrIGFuZCBTdWNjZWVkIGF0IExpZmUnLFxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1dpbiBhdCBXb3JrIGFuZCBTdWNjZWVkIGF0IExpZmUnLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgc3VtbWFyeU5hbWU6ICdNaW5kZnVsbmVzcyAmIEhhcHBpbmVzcycsXG4gICAgICAgICAgICB0b3RhbDogJzU1MicsXG4gICAgICAgICAgICBib29rczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0V4cGxvcmUgYW5zd2VycyB0byBzb21lIG9mIGxpZmVcXCdzIG1vc3QgZGlmZmljdWx0IHF1ZXN0aW9ucycsXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnRXhwbG9yZSBhbnN3ZXJzIHRvIHNvbWUgb2YgbGlmZVxcJ3MgbW9zdCBkaWZmaWN1bHQgcXVlc3Rpb25zJyxcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdFeHBsb3JlIGFuc3dlcnMgdG8gc29tZSBvZiBsaWZlXFwncyBtb3N0IGRpZmZpY3VsdCBxdWVzdGlvbnMnLFxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0V4cGxvcmUgYW5zd2VycyB0byBzb21lIG9mIGxpZmVcXCdzIG1vc3QgZGlmZmljdWx0IHF1ZXN0aW9ucycsXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnRXhwbG9yZSBhbnN3ZXJzIHRvIHNvbWUgb2YgbGlmZVxcJ3MgbW9zdCBkaWZmaWN1bHQgcXVlc3Rpb25zJyxcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdFeHBsb3JlIGFuc3dlcnMgdG8gc29tZSBvZiBsaWZlXFwncyBtb3N0IGRpZmZpY3VsdCBxdWVzdGlvbnMnLFxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0V4cGxvcmUgYW5zd2VycyB0byBzb21lIG9mIGxpZmVcXCdzIG1vc3QgZGlmZmljdWx0IHF1ZXN0aW9ucycsXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnRXhwbG9yZSBhbnN3ZXJzIHRvIHNvbWUgb2YgbGlmZVxcJ3MgbW9zdCBkaWZmaWN1bHQgcXVlc3Rpb25zJyxcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdFeHBsb3JlIGFuc3dlcnMgdG8gc29tZSBvZiBsaWZlXFwncyBtb3N0IGRpZmZpY3VsdCBxdWVzdGlvbnMnLFxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0V4cGxvcmUgYW5zd2VycyB0byBzb21lIG9mIGxpZmVcXCdzIG1vc3QgZGlmZmljdWx0IHF1ZXN0aW9ucycsXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnRXhwbG9yZSBhbnN3ZXJzIHRvIHNvbWUgb2YgbGlmZVxcJ3MgbW9zdCBkaWZmaWN1bHQgcXVlc3Rpb25zJyxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN1bW1hcnlOYW1lOiAnUGVyc29uYWwgRGV2ZWxvcG1lbnQnLFxuICAgICAgICAgICAgdG90YWw6IDM5NyxcbiAgICAgICAgICAgIGJvb2tzOiBbXVxuICAgICAgICB9LFxuICAgICAgICB7IHN1bW1hcnlOYW1lOiAnUHJvZHVjdGl2aXR5JywgdG90YWw6IDM4OC44Nzc3MzE0NTM1NTg1LCBib29rczogW10gfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3VtbWFyeU5hbWU6ICdNb3RpdmF0aW9uICYgSW5zcGlyYXRpb24nLFxuICAgICAgICAgICAgdG90YWw6IDgxNixcbiAgICAgICAgICAgIGJvb2tzOiBbXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzdW1tYXJ5TmFtZTogJ0NvbW11bmljYXRpb24gU2tpbGxzJyxcbiAgICAgICAgICAgIHRvdGFsOiAxMDMsXG4gICAgICAgICAgICBib29rczogW11cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3VtbWFyeU5hbWU6ICdCaW9ncmFwaHkgJiBNZW1vaXInLFxuICAgICAgICAgICAgdG90YWw6IDY1LFxuICAgICAgICAgICAgYm9va3M6IFtdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN1bW1hcnlOYW1lOiAnUmVsaWdpb24gJiBTcGlyaXR1YWxpdHknLFxuICAgICAgICAgICAgdG90YWw6IDQzMCxcbiAgICAgICAgICAgIGJvb2tzOiBbXVxuICAgICAgICB9LFxuICAgICAgICB7IHN1bW1hcnlOYW1lOiAnUGhpbG9zb3BoeScsIHRvdGFsOiA4MDUsIGJvb2tzOiBbXSB9LFxuICAgICAgICB7IHN1bW1hcnlOYW1lOiAnQ3JlYXRpdml0eScsIHRvdGFsOiAzNCwgYm9va3M6IFtdIH0sXG4gICAgICAgIHsgc3VtbWFyeU5hbWU6ICdFZHVjYXRpb24nLCB0b3RhbDogODgxLCBib29rczogW10gfVxuXG4gICAgXVxuXG4gICAgY29uc3QgW2N1cnJlbnRDYXRlR29yeSwgc2V0Q3VycmVudENhdGVHb3J5XSA9IHVzZVN0YXRlKCdDYXJlZXIgJiBTdWNjZXNzJylcbiAgICBjb25zdCBjdXJyZW50Q2F0YUdvcnlUYXJnZXQgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIGNhdGFsb2dTdW1tYXJ5TGlzdC5maW5kKGNhdGFsb2cgPT4gY2F0YWxvZy5zdW1tYXJ5TmFtZSA9PT0gY3VycmVudENhdGVHb3J5KVxuICAgIH0sIFtjdXJyZW50Q2F0ZUdvcnldKVxuXG4gICAgY29uc3Qgc2Nyb2xsUmVmOiBhbnkgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgW3Njcm9sbFBvc2l0aW9uLCBzZXRTY3JvbGxQb3NpdGlvbl0gPSB1c2VTdGF0ZSgwKTtcblxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9IChzY3JvbGxEaXN0YW5jZTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Njcm9sbFBvc2l0aW9uID0gc2Nyb2xsUG9zaXRpb24gKyBzY3JvbGxEaXN0YW5jZTtcbiAgICAgICAgc2Nyb2xsUmVmLmN1cnJlbnQuc2Nyb2xsVG8oeyBsZWZ0OiBuZXdTY3JvbGxQb3NpdGlvbiwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAgICAgICBzZXRTY3JvbGxQb3NpdGlvbihuZXdTY3JvbGxQb3NpdGlvbik7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0YWdvcnktZXhwbG9yZXJcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoZWFkZXJcIj5XaGF0IGFyZSB5b3UgaW50ZXJlc3RlZCBpbj88L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJoZWFkZXJcIj5XaXRoIG92ZXIgNiw1MDAgbm9uZmljdGlvbiBib29rcywgd2UgaGF2ZSB0aGUgPG1hcmsgY2xhc3NOYW1lPVwibGluZS1kZWNvcmF0aW9uXCI+bW9zdCBjb21wcmVoZW5zaXZlPC9tYXJrPiBsaWJyYXJ5IG9mIGl0cyBraW5kLjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlbGVjdG9yLWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAge2NhdGFsb2dTdW1tYXJ5TGlzdC5tYXAoY2F0YWxvZyA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y2F0YWxvZy5zdW1tYXJ5TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2VsZWN0b3ItaXRlbSdcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnRDYXRlR29yeShjYXRhbG9nLnN1bW1hcnlOYW1lKX1cbiAgICAgICAgICAgICAgICAgICAgPntjYXRhbG9nLnN1bW1hcnlOYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Nyb2xsLWNhdGVnb3J5LXdhbGwnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2FsbC10aXRsZSc+TW9zdCBwb3B1bGFyIGluIHtjdXJyZW50Q2F0ZUdvcnl9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3YWxsLXRvdGFsJz5SZWFkIG9yIGxpc3RlbiB0byB7Y3VycmVudENhdGFHb3J5VGFyZ2V0Py50b3RhbH0gdGl0bGVzIGluIHRoaXMgY2F0ZWdvcnk8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2FsbC1zY3JvbGwtbGlzdCc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsZWZ0LWFycm93JyBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTY3JvbGwoLTMwMCl9PjxBcnJvdyAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Nyb2xsLWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Nyb2xsLWNvbnRhaW5lcl9faW5uZXInIHJlZj17c2Nyb2xsUmVmfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRDYXRhR29yeVRhcmdldCEuYm9va3MubWFwKChib29rLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Nyb2xsLWl0ZW0nIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5ib29rSW1hZ2U8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2Jvb2submFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyaWdodC1hcnJvdycgb25DbGljaz17KCkgPT4gaGFuZGxlU2Nyb2xsKDMwMCl9PjxBcnJvdyAvPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlTWVtbyIsInVzZVJlZiIsInVzZVN0YXRlIiwiQXJyb3ciLCJDYXRlZ29yeUV4cGxvcmVyIiwiYm9va3MiLCJuYW1lIiwiY2F0YWxvZ1N1bW1hcnlMaXN0Iiwic3VtbWFyeU5hbWUiLCJ0b3RhbCIsImN1cnJlbnRDYXRlR29yeSIsInNldEN1cnJlbnRDYXRlR29yeSIsImN1cnJlbnRDYXRhR29yeVRhcmdldCIsImZpbmQiLCJjYXRhbG9nIiwic2Nyb2xsUmVmIiwic2Nyb2xsUG9zaXRpb24iLCJzZXRTY3JvbGxQb3NpdGlvbiIsImhhbmRsZVNjcm9sbCIsInNjcm9sbERpc3RhbmNlIiwibmV3U2Nyb2xsUG9zaXRpb24iLCJjdXJyZW50Iiwic2Nyb2xsVG8iLCJsZWZ0IiwiYmVoYXZpb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsIm1hcmsiLCJtYXAiLCJvbkNsaWNrIiwicmVmIiwiYm9vayIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/CategoryExplorer/page.tsx\n"));

/***/ })

});