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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CategoryExplorer: function() { return /* binding */ CategoryExplorer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page.scss */ \"(app-pages-browser)/./components/CategoryExplorer/page.scss\");\n/* harmony import */ var _app_assets_arrow_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/assets/arrow.svg */ \"(app-pages-browser)/./app/assets/arrow.svg\");\n/* __next_internal_client_entry_do_not_use__ CategoryExplorer auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst CategoryExplorer = ()=>{\n    _s();\n    const books = [\n        {\n            name: \"Win at Work and Succeed at Life\"\n        },\n        {\n            name: \"Win at Work and Succeed at Life\"\n        },\n        {\n            name: \"Win at Work and Succeed at Life\"\n        },\n        {\n            name: \"Win at Work and Succeed at Life\"\n        },\n        {\n            name: \"Win at Work and Succeed at Life\"\n        },\n        {\n            name: \"Win at Work and Succeed at Life\"\n        },\n        {\n            name: \"Win at Work and Succeed at Life\"\n        },\n        {\n            name: \"Win at Work and Succeed at Life\"\n        },\n        {\n            name: \"Win at Work and Succeed at Life\"\n        }\n    ];\n    const catalogSummaryList = [\n        {\n            summaryName: \"Career & Success\",\n            total: \"662\",\n            books: [\n                {\n                    name: \"Win at Work and Succeed at Life\"\n                },\n                {\n                    name: \"Win at Work and Succeed at Life\"\n                },\n                {\n                    name: \"Win at Work and Succeed at Life\"\n                },\n                {\n                    name: \"Win at Work and Succeed at Life\"\n                },\n                {\n                    name: \"Win at Work and Succeed at Life\"\n                },\n                {\n                    name: \"Win at Work and Succeed at Life\"\n                },\n                {\n                    name: \"Win at Work and Succeed at Life\"\n                },\n                {\n                    name: \"Win at Work and Succeed at Life\"\n                },\n                {\n                    name: \"Win at Work and Succeed at Life\"\n                }\n            ]\n        },\n        {\n            summaryName: \"Mindfulness & Happiness\",\n            total: \"552\",\n            books: [\n                {\n                    name: \"Explore answers to some of life's most difficult questions\"\n                },\n                {\n                    name: \"Explore answers to some of life's most difficult questions\"\n                },\n                {\n                    name: \"Explore answers to some of life's most difficult questions\"\n                },\n                {\n                    name: \"Explore answers to some of life's most difficult questions\"\n                },\n                {\n                    name: \"Explore answers to some of life's most difficult questions\"\n                },\n                {\n                    name: \"Explore answers to some of life's most difficult questions\"\n                },\n                {\n                    name: \"Explore answers to some of life's most difficult questions\"\n                },\n                {\n                    name: \"Explore answers to some of life's most difficult questions\"\n                },\n                {\n                    name: \"Explore answers to some of life's most difficult questions\"\n                },\n                {\n                    name: \"Explore answers to some of life's most difficult questions\"\n                },\n                {\n                    name: \"Explore answers to some of life's most difficult questions\"\n                }\n            ]\n        },\n        {\n            summaryName: \"Personal Development\",\n            total: 397,\n            books: books\n        },\n        {\n            summaryName: \"Productivity\",\n            total: 388.8777314535585,\n            books: []\n        },\n        {\n            summaryName: \"Motivation & Inspiration\",\n            total: 816,\n            books: books\n        },\n        {\n            summaryName: \"Communication Skills\",\n            total: 103,\n            books: books\n        },\n        {\n            summaryName: \"Biography & Memoir\",\n            total: 65,\n            books: books\n        },\n        {\n            summaryName: \"Religion & Spirituality\",\n            total: 430,\n            books: books\n        },\n        {\n            summaryName: \"Philosophy\",\n            total: 805,\n            books: books\n        },\n        {\n            summaryName: \"Creativity\",\n            total: 34,\n            books: books\n        },\n        {\n            summaryName: \"Education\",\n            total: 881,\n            books: books\n        }\n    ];\n    const [currentCateGory, setCurrentCateGory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Career & Success\");\n    const currentCataGoryTarget = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{\n        return catalogSummaryList.find((catalog)=>catalog.summaryName === currentCateGory);\n    }, [\n        currentCateGory\n    ]);\n    const scrollRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [scrollPosition, setScrollPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleScroll = (scrollDistance)=>{\n        const newScrollPosition = scrollPosition + scrollDistance;\n        scrollRef.current.scrollTo({\n            left: newScrollPosition,\n            behavior: \"smooth\"\n        });\n        setScrollPosition(newScrollPosition);\n    };\n    const [leftArrowDisabled, setLeftArrowDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [rightArrowDisabled, setRightArrowDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            const scrollLeft = scrollRef.current.scrollLeft;\n            console.log(scrollRef.current.scrollWidth);\n            if (scrollLeft === 0) {\n                setLeftArrowDisabled(true); // 当滚动到最左侧时，禁用左侧箭头\n            } else {\n                setLeftArrowDisabled(false); // 恢复左侧箭头的正常效果\n            }\n            if (scrollLeft > 500) {\n                setRightArrowDisabled(true); // 当滚动超过一定距离时，禁用右侧箭头\n            } else {\n                setRightArrowDisabled(false); // 恢复右侧箭头的正常效果\n            }\n        };\n        scrollRef.current.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            scrollRef.current.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    const turnToGray = (condition)=>{\n        return condition ? {\n            cursor: \"not-allow\",\n            fill: \"rgb(186, 200, 206)\"\n        } : {};\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"catagory-explorer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"header\",\n                children: \"What are you interested in?\"\n            }, void 0, false, {\n                fileName: \"/Users/zhiheyung/temp/BlinkistWebsite/components/CategoryExplorer/page.tsx\",\n                lineNumber: 164,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"subheader\",\n                children: [\n                    \"With over 6,500 nonfiction books, we have the \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mark\", {\n                        className: \"line-decoration\",\n                        children: \"most comprehensive\"\n                    }, void 0, false, {\n                        fileName: \"/Users/zhiheyung/temp/BlinkistWebsite/components/CategoryExplorer/page.tsx\",\n                        lineNumber: 165,\n                        columnNumber: 86\n                    }, undefined),\n                    \" library of its kind.\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zhiheyung/temp/BlinkistWebsite/components/CategoryExplorer/page.tsx\",\n                lineNumber: 165,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"selector-container\",\n                children: catalogSummaryList.map((catalog)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"selector-item\",\n                        onClick: ()=>setCurrentCateGory(catalog.summaryName),\n                        children: catalog.summaryName\n                    }, catalog.summaryName, false, {\n                        fileName: \"/Users/zhiheyung/temp/BlinkistWebsite/components/CategoryExplorer/page.tsx\",\n                        lineNumber: 168,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/zhiheyung/temp/BlinkistWebsite/components/CategoryExplorer/page.tsx\",\n                lineNumber: 166,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"scroll-category-wall\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"wall-title\",\n                                children: [\n                                    \"Most popular in \",\n                                    currentCateGory\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/zhiheyung/temp/BlinkistWebsite/components/CategoryExplorer/page.tsx\",\n                                lineNumber: 177,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"wall-total\",\n                                children: [\n                                    \"Read or listen to \",\n                                    currentCataGoryTarget === null || currentCataGoryTarget === void 0 ? void 0 : currentCataGoryTarget.total,\n                                    \" titles in this category\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/zhiheyung/temp/BlinkistWebsite/components/CategoryExplorer/page.tsx\",\n                                lineNumber: 178,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/zhiheyung/temp/BlinkistWebsite/components/CategoryExplorer/page.tsx\",\n                        lineNumber: 176,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"wall-scroll-list\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"left-arrow\",\n                                onClick: ()=>handleScroll(-300),\n                                style: turnToGray(leftArrowDisabled),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_assets_arrow_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/zhiheyung/temp/BlinkistWebsite/components/CategoryExplorer/page.tsx\",\n                                    lineNumber: 181,\n                                    columnNumber: 122\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/zhiheyung/temp/BlinkistWebsite/components/CategoryExplorer/page.tsx\",\n                                lineNumber: 181,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"scroll-container\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"scroll-container__inner\",\n                                    ref: scrollRef,\n                                    children: currentCataGoryTarget.books.map((book, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"scroll-item\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    children: \"bookImage\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/zhiheyung/temp/BlinkistWebsite/components/CategoryExplorer/page.tsx\",\n                                                    lineNumber: 186,\n                                                    columnNumber: 37\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    children: book.name\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/zhiheyung/temp/BlinkistWebsite/components/CategoryExplorer/page.tsx\",\n                                                    lineNumber: 187,\n                                                    columnNumber: 37\n                                                }, undefined)\n                                            ]\n                                        }, index, true, {\n                                            fileName: \"/Users/zhiheyung/temp/BlinkistWebsite/components/CategoryExplorer/page.tsx\",\n                                            lineNumber: 185,\n                                            columnNumber: 33\n                                        }, undefined))\n                                }, void 0, false, {\n                                    fileName: \"/Users/zhiheyung/temp/BlinkistWebsite/components/CategoryExplorer/page.tsx\",\n                                    lineNumber: 183,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/zhiheyung/temp/BlinkistWebsite/components/CategoryExplorer/page.tsx\",\n                                lineNumber: 182,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"right-arrow\",\n                                onClick: ()=>handleScroll(300),\n                                style: turnToGray(rightArrowDisabled),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_assets_arrow_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/zhiheyung/temp/BlinkistWebsite/components/CategoryExplorer/page.tsx\",\n                                    lineNumber: 192,\n                                    columnNumber: 123\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/zhiheyung/temp/BlinkistWebsite/components/CategoryExplorer/page.tsx\",\n                                lineNumber: 192,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/zhiheyung/temp/BlinkistWebsite/components/CategoryExplorer/page.tsx\",\n                        lineNumber: 180,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zhiheyung/temp/BlinkistWebsite/components/CategoryExplorer/page.tsx\",\n                lineNumber: 175,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/zhiheyung/temp/BlinkistWebsite/components/CategoryExplorer/page.tsx\",\n        lineNumber: 163,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CategoryExplorer, \"aZTuM7nBXIImZp28K2XufRK85iQ=\");\n_c = CategoryExplorer;\nvar _c;\n$RefreshReg$(_c, \"CategoryExplorer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ2F0ZWdvcnlFeHBsb3Jlci9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUM0RDtBQUN4QztBQUNzQjtBQUNuQyxNQUFNSyxtQkFBbUI7O0lBRTVCLE1BQU1DLFFBQVE7UUFDVjtZQUNJQyxNQUFNO1FBQ1Y7UUFBRztZQUNDQSxNQUFNO1FBQ1Y7UUFBRztZQUNDQSxNQUFNO1FBQ1Y7UUFBRztZQUNDQSxNQUFNO1FBQ1Y7UUFBRztZQUNDQSxNQUFNO1FBQ1Y7UUFBRztZQUNDQSxNQUFNO1FBQ1Y7UUFBRztZQUNDQSxNQUFNO1FBQ1Y7UUFBRztZQUNDQSxNQUFNO1FBQ1Y7UUFBRztZQUNDQSxNQUFNO1FBQ1Y7S0FDSDtJQUNELE1BQU1DLHFCQUFxQjtRQUN2QjtZQUNJQyxhQUFhO1lBQ2JDLE9BQU87WUFDUEosT0FBTztnQkFDSDtvQkFDSUMsTUFBTTtnQkFDVjtnQkFBRztvQkFDQ0EsTUFBTTtnQkFDVjtnQkFBRztvQkFDQ0EsTUFBTTtnQkFDVjtnQkFBRztvQkFDQ0EsTUFBTTtnQkFDVjtnQkFBRztvQkFDQ0EsTUFBTTtnQkFDVjtnQkFBRztvQkFDQ0EsTUFBTTtnQkFDVjtnQkFBRztvQkFDQ0EsTUFBTTtnQkFDVjtnQkFBRztvQkFDQ0EsTUFBTTtnQkFDVjtnQkFBRztvQkFDQ0EsTUFBTTtnQkFDVjthQUNIO1FBQ0w7UUFBRztZQUNDRSxhQUFhO1lBQ2JDLE9BQU87WUFDUEosT0FBTztnQkFDSDtvQkFDSUMsTUFBTTtnQkFDVjtnQkFBRztvQkFDQ0EsTUFBTTtnQkFDVjtnQkFBRztvQkFDQ0EsTUFBTTtnQkFDVjtnQkFBRztvQkFDQ0EsTUFBTTtnQkFDVjtnQkFBRztvQkFDQ0EsTUFBTTtnQkFDVjtnQkFBRztvQkFDQ0EsTUFBTTtnQkFDVjtnQkFBRztvQkFDQ0EsTUFBTTtnQkFDVjtnQkFBRztvQkFDQ0EsTUFBTTtnQkFDVjtnQkFBRztvQkFDQ0EsTUFBTTtnQkFDVjtnQkFBRztvQkFD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WCw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDRDtnQ0FBSUMsV0FBVTs7b0NBQWE7b0NBQWlCOUI7Ozs7Ozs7MENBQzdDLDhEQUFDNkI7Z0NBQUlDLFdBQVU7O29DQUFhO29DQUFtQjVCLGtDQUFBQSw0Q0FBQUEsc0JBQXVCSCxLQUFLO29DQUFDOzs7Ozs7Ozs7Ozs7O2tDQUVoRiw4REFBQzhCO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0Q7Z0NBQUlDLFdBQVU7Z0NBQWFJLFNBQVMsSUFBTTFCLGFBQWEsQ0FBQztnQ0FBTTJCLE9BQU9WLFdBQVdWOzBDQUFvQiw0RUFBQ3RCLDZEQUFLQTs7Ozs7Ozs7OzswQ0FDM0csOERBQUNvQztnQ0FBSUMsV0FBVTswQ0FDWCw0RUFBQ0Q7b0NBQUlDLFdBQVU7b0NBQTBCTSxLQUFLL0I7OENBQ3pDSCxzQkFBdUJQLEtBQUssQ0FBQ3NDLEdBQUcsQ0FBQyxDQUFDSSxNQUFNQyxzQkFDckMsOERBQUNUOzRDQUFJQyxXQUFVOzs4REFDWCw4REFBQ0Q7OERBQUk7Ozs7Ozs4REFDTCw4REFBQ0E7OERBQUtRLEtBQUt6QyxJQUFJOzs7Ozs7OzJDQUZlMEM7Ozs7Ozs7Ozs7Ozs7OzswQ0FPOUMsOERBQUNUO2dDQUFJQyxXQUFVO2dDQUFjSSxTQUFTLElBQU0xQixhQUFhO2dDQUFNMkIsT0FBT1YsV0FBV1I7MENBQXFCLDRFQUFDeEIsNkRBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2hJLEVBQUM7R0FoTVlDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2F0ZWdvcnlFeHBsb3Jlci9wYWdlLnRzeD9kNjFhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgJy4vcGFnZS5zY3NzJ1xuaW1wb3J0IEFycm93IGZyb20gJ0AvYXBwL2Fzc2V0cy9hcnJvdy5zdmcnXG5leHBvcnQgY29uc3QgQ2F0ZWdvcnlFeHBsb3JlciA9ICgpID0+IHtcblxuICAgIGNvbnN0IGJvb2tzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnV2luIGF0IFdvcmsgYW5kIFN1Y2NlZWQgYXQgTGlmZScsXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdXaW4gYXQgV29yayBhbmQgU3VjY2VlZCBhdCBMaWZlJyxcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ1dpbiBhdCBXb3JrIGFuZCBTdWNjZWVkIGF0IExpZmUnLFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnV2luIGF0IFdvcmsgYW5kIFN1Y2NlZWQgYXQgTGlmZScsXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdXaW4gYXQgV29yayBhbmQgU3VjY2VlZCBhdCBMaWZlJyxcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ1dpbiBhdCBXb3JrIGFuZCBTdWNjZWVkIGF0IExpZmUnLFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnV2luIGF0IFdvcmsgYW5kIFN1Y2NlZWQgYXQgTGlmZScsXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdXaW4gYXQgV29yayBhbmQgU3VjY2VlZCBhdCBMaWZlJyxcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ1dpbiBhdCBXb3JrIGFuZCBTdWNjZWVkIGF0IExpZmUnLFxuICAgICAgICB9XG4gICAgXVxuICAgIGNvbnN0IGNhdGFsb2dTdW1tYXJ5TGlzdCA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgc3VtbWFyeU5hbWU6ICdDYXJlZXIgJiBTdWNjZXNzJyxcbiAgICAgICAgICAgIHRvdGFsOiAnNjYyJyxcbiAgICAgICAgICAgIGJvb2tzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnV2luIGF0IFdvcmsgYW5kIFN1Y2NlZWQgYXQgTGlmZScsXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnV2luIGF0IFdvcmsgYW5kIFN1Y2NlZWQgYXQgTGlmZScsXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnV2luIGF0IFdvcmsgYW5kIFN1Y2NlZWQgYXQgTGlmZScsXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnV2luIGF0IFdvcmsgYW5kIFN1Y2NlZWQgYXQgTGlmZScsXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnV2luIGF0IFdvcmsgYW5kIFN1Y2NlZWQgYXQgTGlmZScsXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnV2luIGF0IFdvcmsgYW5kIFN1Y2NlZWQgYXQgTGlmZScsXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnV2luIGF0IFdvcmsgYW5kIFN1Y2NlZWQgYXQgTGlmZScsXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnV2luIGF0IFdvcmsgYW5kIFN1Y2NlZWQgYXQgTGlmZScsXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnV2luIGF0IFdvcmsgYW5kIFN1Y2NlZWQgYXQgTGlmZScsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBzdW1tYXJ5TmFtZTogJ01pbmRmdWxuZXNzICYgSGFwcGluZXNzJyxcbiAgICAgICAgICAgIHRvdGFsOiAnNTUyJyxcbiAgICAgICAgICAgIGJvb2tzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnRXhwbG9yZSBhbnN3ZXJzIHRvIHNvbWUgb2YgbGlmZVxcJ3MgbW9zdCBkaWZmaWN1bHQgcXVlc3Rpb25zJyxcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdFeHBsb3JlIGFuc3dlcnMgdG8gc29tZSBvZiBsaWZlXFwncyBtb3N0IGRpZmZpY3VsdCBxdWVzdGlvbnMnLFxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0V4cGxvcmUgYW5zd2VycyB0byBzb21lIG9mIGxpZmVcXCdzIG1vc3QgZGlmZmljdWx0IHF1ZXN0aW9ucycsXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnRXhwbG9yZSBhbnN3ZXJzIHRvIHNvbWUgb2YgbGlmZVxcJ3MgbW9zdCBkaWZmaWN1bHQgcXVlc3Rpb25zJyxcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdFeHBsb3JlIGFuc3dlcnMgdG8gc29tZSBvZiBsaWZlXFwncyBtb3N0IGRpZmZpY3VsdCBxdWVzdGlvbnMnLFxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0V4cGxvcmUgYW5zd2VycyB0byBzb21lIG9mIGxpZmVcXCdzIG1vc3QgZGlmZmljdWx0IHF1ZXN0aW9ucycsXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnRXhwbG9yZSBhbnN3ZXJzIHRvIHNvbWUgb2YgbGlmZVxcJ3MgbW9zdCBkaWZmaWN1bHQgcXVlc3Rpb25zJyxcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdFeHBsb3JlIGFuc3dlcnMgdG8gc29tZSBvZiBsaWZlXFwncyBtb3N0IGRpZmZpY3VsdCBxdWVzdGlvbnMnLFxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0V4cGxvcmUgYW5zd2VycyB0byBzb21lIG9mIGxpZmVcXCdzIG1vc3QgZGlmZmljdWx0IHF1ZXN0aW9ucycsXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnRXhwbG9yZSBhbnN3ZXJzIHRvIHNvbWUgb2YgbGlmZVxcJ3MgbW9zdCBkaWZmaWN1bHQgcXVlc3Rpb25zJyxcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdFeHBsb3JlIGFuc3dlcnMgdG8gc29tZSBvZiBsaWZlXFwncyBtb3N0IGRpZmZpY3VsdCBxdWVzdGlvbnMnLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3VtbWFyeU5hbWU6ICdQZXJzb25hbCBEZXZlbG9wbWVudCcsXG4gICAgICAgICAgICB0b3RhbDogMzk3LFxuICAgICAgICAgICAgYm9va3M6IGJvb2tzXG4gICAgICAgIH0sXG4gICAgICAgIHsgc3VtbWFyeU5hbWU6ICdQcm9kdWN0aXZpdHknLCB0b3RhbDogMzg4Ljg3NzczMTQ1MzU1ODUsIGJvb2tzOiBbXSB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzdW1tYXJ5TmFtZTogJ01vdGl2YXRpb24gJiBJbnNwaXJhdGlvbicsXG4gICAgICAgICAgICB0b3RhbDogODE2LFxuICAgICAgICAgICAgYm9va3M6IGJvb2tzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN1bW1hcnlOYW1lOiAnQ29tbXVuaWNhdGlvbiBTa2lsbHMnLFxuICAgICAgICAgICAgdG90YWw6IDEwMyxcbiAgICAgICAgICAgIGJvb2tzOiBib29rc1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzdW1tYXJ5TmFtZTogJ0Jpb2dyYXBoeSAmIE1lbW9pcicsXG4gICAgICAgICAgICB0b3RhbDogNjUsXG4gICAgICAgICAgICBib29rczogYm9va3NcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3VtbWFyeU5hbWU6ICdSZWxpZ2lvbiAmIFNwaXJpdHVhbGl0eScsXG4gICAgICAgICAgICB0b3RhbDogNDMwLFxuICAgICAgICAgICAgYm9va3M6IGJvb2tzXG4gICAgICAgIH0sXG4gICAgICAgIHsgc3VtbWFyeU5hbWU6ICdQaGlsb3NvcGh5JywgdG90YWw6IDgwNSwgYm9va3M6IGJvb2tzIH0sXG4gICAgICAgIHsgc3VtbWFyeU5hbWU6ICdDcmVhdGl2aXR5JywgdG90YWw6IDM0LCBib29rczogYm9va3MgfSxcbiAgICAgICAgeyBzdW1tYXJ5TmFtZTogJ0VkdWNhdGlvbicsIHRvdGFsOiA4ODEsIGJvb2tzOiBib29rcyB9XG5cbiAgICBdXG5cbiAgICBjb25zdCBbY3VycmVudENhdGVHb3J5LCBzZXRDdXJyZW50Q2F0ZUdvcnldID0gdXNlU3RhdGUoJ0NhcmVlciAmIFN1Y2Nlc3MnKVxuICAgIGNvbnN0IGN1cnJlbnRDYXRhR29yeVRhcmdldCA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICByZXR1cm4gY2F0YWxvZ1N1bW1hcnlMaXN0LmZpbmQoY2F0YWxvZyA9PiBjYXRhbG9nLnN1bW1hcnlOYW1lID09PSBjdXJyZW50Q2F0ZUdvcnkpXG4gICAgfSwgW2N1cnJlbnRDYXRlR29yeV0pXG5cbiAgICBjb25zdCBzY3JvbGxSZWY6IGFueSA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCBbc2Nyb2xsUG9zaXRpb24sIHNldFNjcm9sbFBvc2l0aW9uXSA9IHVzZVN0YXRlKDApO1xuXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKHNjcm9sbERpc3RhbmNlOiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgbmV3U2Nyb2xsUG9zaXRpb24gPSBzY3JvbGxQb3NpdGlvbiArIHNjcm9sbERpc3RhbmNlO1xuICAgICAgICBzY3JvbGxSZWYuY3VycmVudC5zY3JvbGxUbyh7IGxlZnQ6IG5ld1Njcm9sbFBvc2l0aW9uLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gICAgICAgIHNldFNjcm9sbFBvc2l0aW9uKG5ld1Njcm9sbFBvc2l0aW9uKTtcbiAgICB9O1xuXG4gICAgY29uc3QgW2xlZnRBcnJvd0Rpc2FibGVkLCBzZXRMZWZ0QXJyb3dEaXNhYmxlZF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBjb25zdCBbcmlnaHRBcnJvd0Rpc2FibGVkLCBzZXRSaWdodEFycm93RGlzYWJsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzY3JvbGxMZWZ0ID0gc2Nyb2xsUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdDtcbiAgICAgICAgY29uc29sZS5sb2coc2Nyb2xsUmVmLmN1cnJlbnQuc2Nyb2xsV2lkdGgpO1xuICAgICAgICBcbiAgICAgICAgaWYgKHNjcm9sbExlZnQgPT09IDApIHtcbiAgICAgICAgICAgIHNldExlZnRBcnJvd0Rpc2FibGVkKHRydWUpOyAvLyDlvZPmu5rliqjliLDmnIDlt6bkvqfml7bvvIznpoHnlKjlt6bkvqfnrq3lpLRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldExlZnRBcnJvd0Rpc2FibGVkKGZhbHNlKTsgLy8g5oGi5aSN5bem5L6n566t5aS055qE5q2j5bi45pWI5p6cXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNjcm9sbExlZnQgPiA1MDApIHtcbiAgICAgICAgICAgIHNldFJpZ2h0QXJyb3dEaXNhYmxlZCh0cnVlKTsgLy8g5b2T5rua5Yqo6LaF6L+H5LiA5a6a6Led56a75pe277yM56aB55So5Y+z5L6n566t5aS0XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRSaWdodEFycm93RGlzYWJsZWQoZmFsc2UpOyAvLyDmgaLlpI3lj7Pkvqfnrq3lpLTnmoTmraPluLjmlYjmnpxcbiAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHNjcm9sbFJlZi5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgc2Nyb2xsUmVmLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcbiAgICAgICAgfTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCB0dXJuVG9HcmF5ID0gKGNvbmRpdGlvbjogYm9vbGVhbikgPT4ge1xuICAgICAgICByZXR1cm4gY29uZGl0aW9uID8ge1xuICAgICAgICAgICAgY3Vyc29yOiAnbm90LWFsbG93JyxcbiAgICAgICAgICAgIGZpbGw6ICdyZ2IoMTg2LCAyMDAsIDIwNiknXG4gICAgICAgIH0gOiB7fVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0YWdvcnktZXhwbG9yZXJcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoZWFkZXJcIj5XaGF0IGFyZSB5b3UgaW50ZXJlc3RlZCBpbj88L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJoZWFkZXJcIj5XaXRoIG92ZXIgNiw1MDAgbm9uZmljdGlvbiBib29rcywgd2UgaGF2ZSB0aGUgPG1hcmsgY2xhc3NOYW1lPVwibGluZS1kZWNvcmF0aW9uXCI+bW9zdCBjb21wcmVoZW5zaXZlPC9tYXJrPiBsaWJyYXJ5IG9mIGl0cyBraW5kLjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlbGVjdG9yLWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAge2NhdGFsb2dTdW1tYXJ5TGlzdC5tYXAoY2F0YWxvZyA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y2F0YWxvZy5zdW1tYXJ5TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2VsZWN0b3ItaXRlbSdcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnRDYXRlR29yeShjYXRhbG9nLnN1bW1hcnlOYW1lKX1cbiAgICAgICAgICAgICAgICAgICAgPntjYXRhbG9nLnN1bW1hcnlOYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Nyb2xsLWNhdGVnb3J5LXdhbGwnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2FsbC10aXRsZSc+TW9zdCBwb3B1bGFyIGluIHtjdXJyZW50Q2F0ZUdvcnl9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3YWxsLXRvdGFsJz5SZWFkIG9yIGxpc3RlbiB0byB7Y3VycmVudENhdGFHb3J5VGFyZ2V0Py50b3RhbH0gdGl0bGVzIGluIHRoaXMgY2F0ZWdvcnk8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2FsbC1zY3JvbGwtbGlzdCc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsZWZ0LWFycm93JyBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTY3JvbGwoLTMwMCl9IHN0eWxlPXt0dXJuVG9HcmF5KGxlZnRBcnJvd0Rpc2FibGVkKX0+PEFycm93IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzY3JvbGwtY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzY3JvbGwtY29udGFpbmVyX19pbm5lcicgcmVmPXtzY3JvbGxSZWZ9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudENhdGFHb3J5VGFyZ2V0IS5ib29rcy5tYXAoKGJvb2ssIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzY3JvbGwtaXRlbScga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PmJvb2tJbWFnZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57Ym9vay5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JpZ2h0LWFycm93JyBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTY3JvbGwoMzAwKX0gc3R5bGU9e3R1cm5Ub0dyYXkocmlnaHRBcnJvd0Rpc2FibGVkKX0+PEFycm93IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwidXNlUmVmIiwidXNlU3RhdGUiLCJBcnJvdyIsIkNhdGVnb3J5RXhwbG9yZXIiLCJib29rcyIsIm5hbWUiLCJjYXRhbG9nU3VtbWFyeUxpc3QiLCJzdW1tYXJ5TmFtZSIsInRvdGFsIiwiY3VycmVudENhdGVHb3J5Iiwic2V0Q3VycmVudENhdGVHb3J5IiwiY3VycmVudENhdGFHb3J5VGFyZ2V0IiwiZmluZCIsImNhdGFsb2ciLCJzY3JvbGxSZWYiLCJzY3JvbGxQb3NpdGlvbiIsInNldFNjcm9sbFBvc2l0aW9uIiwiaGFuZGxlU2Nyb2xsIiwic2Nyb2xsRGlzdGFuY2UiLCJuZXdTY3JvbGxQb3NpdGlvbiIsImN1cnJlbnQiLCJzY3JvbGxUbyIsImxlZnQiLCJiZWhhdmlvciIsImxlZnRBcnJvd0Rpc2FibGVkIiwic2V0TGVmdEFycm93RGlzYWJsZWQiLCJyaWdodEFycm93RGlzYWJsZWQiLCJzZXRSaWdodEFycm93RGlzYWJsZWQiLCJzY3JvbGxMZWZ0IiwiY29uc29sZSIsImxvZyIsInNjcm9sbFdpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0dXJuVG9HcmF5IiwiY29uZGl0aW9uIiwiY3Vyc29yIiwiZmlsbCIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwibWFyayIsIm1hcCIsIm9uQ2xpY2siLCJzdHlsZSIsInJlZiIsImJvb2siLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/CategoryExplorer/page.tsx\n"));

/***/ })

});