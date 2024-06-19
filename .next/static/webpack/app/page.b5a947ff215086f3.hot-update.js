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

/***/ "(app-pages-browser)/./src/app/componentes/Main.js":
/*!*************************************!*\
  !*** ./src/app/componentes/Main.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../page.module.css */ \"(app-pages-browser)/./src/app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Main() {\n    _s();\n    const [listProduct, setProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getProduct = async ()=>{\n            const response = await fetch(\"https://fakestoreapi.com/products\");\n            const data = await response.json();\n            setProduct(data);\n        };\n        getProduct();\n    }, []);\n    const orderAz = ()=>{\n        const listAux1 = [\n            ...listProduct\n        ].sort((a, b)=>a.title.localeCompare(b.title));\n        setProduct(listAux1);\n    };\n    const orderZa = ()=>{\n        let listAux1 = [\n            ...listProduct\n        ].sort((a, b)=>a.title.localeCompare(b.title));\n        listAux1 = listAux1.reverse();\n        setProduct(listAux1);\n    };\n    const orderPMaior = ()=>{\n        const listAuxPreco = [\n            ...listProduct\n        ].sort((a, b)=>a.price > b.price);\n        setProduct(listAuxPreco);\n    };\n    const orderPMenor = ()=>{\n        let listAuxPreco = [\n            ...listProduct\n        ].sort((a, b)=>a.price > b.price);\n        listAuxPreco = listAuxPreco.reverse();\n        setProduct(listAux);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().titulo),\n                    children: \"Produtos em destaque\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\izabe\\\\Downloads\\\\exercicios_try_catch\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().filters),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: orderAz,\n                                children: \"Az\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\izabe\\\\Downloads\\\\exercicios_try_catch\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\izabe\\\\Downloads\\\\exercicios_try_catch\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                            lineNumber: 53,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: orderZa,\n                                children: \"Za\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\izabe\\\\Downloads\\\\exercicios_try_catch\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\izabe\\\\Downloads\\\\exercicios_try_catch\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                            lineNumber: 56,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: orderPMaior,\n                                children: \"Pre\\xe7o Maior\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\izabe\\\\Downloads\\\\exercicios_try_catch\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\izabe\\\\Downloads\\\\exercicios_try_catch\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                            lineNumber: 59,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: orderPMenor,\n                                children: \"Pre\\xe7o Menor\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\izabe\\\\Downloads\\\\exercicios_try_catch\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\izabe\\\\Downloads\\\\exercicios_try_catch\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                            lineNumber: 62,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\izabe\\\\Downloads\\\\exercicios_try_catch\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().produtos),\n                    children: listProduct.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().titulop),\n                                    children: product.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\izabe\\\\Downloads\\\\exercicios_try_catch\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: product.image,\n                                    width: 100,\n                                    height: 100,\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().imagemp)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\izabe\\\\Downloads\\\\exercicios_try_catch\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().precop),\n                                    children: product.price\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\izabe\\\\Downloads\\\\exercicios_try_catch\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().descricaop),\n                                    children: product.description\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\izabe\\\\Downloads\\\\exercicios_try_catch\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().categoriap),\n                                    children: product.category\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\izabe\\\\Downloads\\\\exercicios_try_catch\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().countp),\n                                    children: product.count\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\izabe\\\\Downloads\\\\exercicios_try_catch\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, product.id, true, {\n                            fileName: \"C:\\\\Users\\\\izabe\\\\Downloads\\\\exercicios_try_catch\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                            lineNumber: 68,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\izabe\\\\Downloads\\\\exercicios_try_catch\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\izabe\\\\Downloads\\\\exercicios_try_catch\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Main, \"XVPPeJ5srsfxej8tSwOC+mjg6kQ=\");\n_c = Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50ZXMvTWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDNEM7QUFDYjtBQUNTO0FBRXpCLFNBQVNJOztJQUN0QixNQUFNLENBQUNDLGFBQWFDLFdBQVcsR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUU3Q0QsZ0RBQVNBLENBQUM7UUFDUixNQUFNTyxhQUFhO1lBQ2pCLE1BQU1DLFdBQVcsTUFBTUMsTUFBTTtZQUM3QixNQUFNQyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7WUFDaENMLFdBQVdJO1FBQ2I7UUFDQUg7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNSyxVQUFVO1FBQ2QsTUFBTUMsV0FBVTtlQUFJUjtTQUFZLENBQUNTLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUN4Q0QsRUFBRUUsS0FBSyxDQUFDQyxhQUFhLENBQUNGLEVBQUVDLEtBQUs7UUFFL0JYLFdBQVdPO0lBQ2I7SUFFQSxNQUFNTSxVQUFVO1FBQ2QsSUFBSU4sV0FBVTtlQUFJUjtTQUFZLENBQUNTLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUN0Q0QsRUFBRUUsS0FBSyxDQUFDQyxhQUFhLENBQUNGLEVBQUVDLEtBQUs7UUFFL0JKLFdBQVVBLFNBQVFPLE9BQU87UUFDekJkLFdBQVdPO0lBQ2I7SUFFQSxNQUFNUSxjQUFjO1FBQ2xCLE1BQU1DLGVBQWU7ZUFBSWpCO1NBQVksQ0FBQ1MsSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQzdDRCxFQUFFUSxLQUFLLEdBQUdQLEVBQUVPLEtBQUs7UUFFbkJqQixXQUFXZ0I7SUFDYjtJQUVBLE1BQU1FLGNBQWM7UUFDbEIsSUFBSUYsZUFBZTtlQUFJakI7U0FBWSxDQUFDUyxJQUFJLENBQUMsQ0FBQ0MsR0FBR0MsSUFDekNELEVBQUVRLEtBQUssR0FBR1AsRUFBRU8sS0FBSztRQUVyQkQsZUFBZUEsYUFBYUYsT0FBTztRQUNuQ2QsV0FBV087SUFDYjtJQUVBLHFCQUNFO2tCQUNFLDRFQUFDWTtZQUFLQyxXQUFXdkIsOERBQVc7OzhCQUMxQiw4REFBQ3dCO29CQUFHRCxXQUFXdkIsZ0VBQWE7OEJBQUU7Ozs7Ozs4QkFDOUIsOERBQUMwQjtvQkFBSUgsV0FBV3ZCLGlFQUFjOztzQ0FDOUIsOERBQUMwQjtzQ0FDQyw0RUFBQ0U7Z0NBQU9DLFNBQVNwQjswQ0FBUzs7Ozs7Ozs7Ozs7c0NBRTVCLDhEQUFDaUI7c0NBQ0MsNEVBQUNFO2dDQUFPQyxTQUFTYjswQ0FBUzs7Ozs7Ozs7Ozs7c0NBRTVCLDhEQUFDVTtzQ0FDQyw0RUFBQ0U7Z0NBQU9DLFNBQVNYOzBDQUFhOzs7Ozs7Ozs7OztzQ0FFaEMsOERBQUNRO3NDQUNDLDRFQUFDRTtnQ0FBT0MsU0FBU1I7MENBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUdoQyw4REFBQ0s7b0JBQUlILFdBQVd2QixrRUFBZTs4QkFDNUJFLFlBQVk2QixHQUFHLENBQUMsQ0FBQ0Msd0JBQ2hCLDhEQUFDTjs0QkFBcUJILFdBQVd2Qiw4REFBVzs7OENBQzFDLDhEQUFDa0M7b0NBQUdYLFdBQVd2QixpRUFBYzs4Q0FBR2dDLFFBQVFsQixLQUFLOzs7Ozs7OENBQzdDLDhEQUFDZixrREFBS0E7b0NBQ0pxQyxLQUFLSixRQUFRSyxLQUFLO29DQUNsQkMsT0FBTztvQ0FDUEMsUUFBUTtvQ0FDUmhCLFdBQVd2QixpRUFBYzs7Ozs7OzhDQUUzQiw4REFBQ3lDO29DQUFFbEIsV0FBV3ZCLGdFQUFhOzhDQUFHZ0MsUUFBUVosS0FBSzs7Ozs7OzhDQUMzQyw4REFBQ3FCO29DQUFFbEIsV0FBV3ZCLG9FQUFpQjs4Q0FBR2dDLFFBQVFZLFdBQVc7Ozs7Ozs4Q0FDckQsOERBQUNIO29DQUFFbEIsV0FBV3ZCLG9FQUFpQjs4Q0FBR2dDLFFBQVFjLFFBQVE7Ozs7Ozs4Q0FDbEQsOERBQUNMO29DQUFFbEIsV0FBV3ZCLGdFQUFhOzhDQUFHZ0MsUUFBUWdCLEtBQUs7Ozs7Ozs7MkJBWG5DaEIsUUFBUWlCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JoQztHQWhGd0JoRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudGVzL01haW4uanM/MmUwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vcGFnZS5tb2R1bGUuY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluKCkge1xyXG4gIGNvbnN0IFtsaXN0UHJvZHVjdCwgc2V0UHJvZHVjdF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBnZXRQcm9kdWN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9mYWtlc3RvcmVhcGkuY29tL3Byb2R1Y3RzXCIpO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBzZXRQcm9kdWN0KGRhdGEpO1xyXG4gICAgfTtcclxuICAgIGdldFByb2R1Y3QoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9yZGVyQXogPSAoKSA9PiB7XHJcbiAgICBjb25zdCBsaXN0QXV4ID0gWy4uLmxpc3RQcm9kdWN0XS5zb3J0KChhLCBiKSA9PlxyXG4gICAgICBhLnRpdGxlLmxvY2FsZUNvbXBhcmUoYi50aXRsZSlcclxuICAgICk7XHJcbiAgICBzZXRQcm9kdWN0KGxpc3RBdXgpO1xyXG4gIH07XHJcbiAgXHJcbiAgY29uc3Qgb3JkZXJaYSA9ICgpID0+IHtcclxuICAgIGxldCBsaXN0QXV4ID0gWy4uLmxpc3RQcm9kdWN0XS5zb3J0KChhLCBiKSA9PlxyXG4gICAgICBhLnRpdGxlLmxvY2FsZUNvbXBhcmUoYi50aXRsZSkgKTtcclxuXHJcbiAgICBsaXN0QXV4ID0gbGlzdEF1eC5yZXZlcnNlKCk7XHJcbiAgICBzZXRQcm9kdWN0KGxpc3RBdXgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9yZGVyUE1haW9yID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbGlzdEF1eFByZWNvID0gWy4uLmxpc3RQcm9kdWN0XS5zb3J0KChhLCBiKSA9PlxyXG4gICAgICBhLnByaWNlID4gYi5wcmljZVxyXG4gICAgKTtcclxuICAgIHNldFByb2R1Y3QobGlzdEF1eFByZWNvKTtcclxuICB9O1xyXG4gIFxyXG4gIGNvbnN0IG9yZGVyUE1lbm9yID0gKCkgPT4ge1xyXG4gICAgbGV0IGxpc3RBdXhQcmVjbyA9IFsuLi5saXN0UHJvZHVjdF0uc29ydCgoYSwgYikgPT5cclxuICAgICAgICBhLnByaWNlID4gYi5wcmljZSk7XHJcblxyXG4gICAgbGlzdEF1eFByZWNvID0gbGlzdEF1eFByZWNvLnJldmVyc2UoKTtcclxuICAgIHNldFByb2R1Y3QobGlzdEF1eCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXR1bG99PlByb2R1dG9zIGVtIGRlc3RhcXVlPC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlcnN9PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29yZGVyQXp9PkF6PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17b3JkZXJaYX0+WmE8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvcmRlclBNYWlvcn0+UHJlw6dvIE1haW9yPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17b3JkZXJQTWVub3J9PlByZcOnbyBNZW5vcjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1dG9zfT5cclxuICAgICAgICAgIHtsaXN0UHJvZHVjdC5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e3Byb2R1Y3QuaWR9IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy50aXR1bG9wfT57cHJvZHVjdC50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgc3JjPXtwcm9kdWN0LmltYWdlfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezEwMH1cclxuICAgICAgICAgICAgICAgIGhlaWdodD17MTAwfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VtcH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnByZWNvcH0+e3Byb2R1Y3QucHJpY2V9PC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaWNhb3B9Pntwcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yaWFwfT57cHJvZHVjdC5jYXRlZ29yeX08L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY291bnRwfT57cHJvZHVjdC5jb3VudH08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJzdHlsZXMiLCJNYWluIiwibGlzdFByb2R1Y3QiLCJzZXRQcm9kdWN0IiwiZ2V0UHJvZHVjdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsIm9yZGVyQXoiLCJsaXN0QXV4Iiwic29ydCIsImEiLCJiIiwidGl0bGUiLCJsb2NhbGVDb21wYXJlIiwib3JkZXJaYSIsInJldmVyc2UiLCJvcmRlclBNYWlvciIsImxpc3RBdXhQcmVjbyIsInByaWNlIiwib3JkZXJQTWVub3IiLCJtYWluIiwiY2xhc3NOYW1lIiwiaDEiLCJ0aXR1bG8iLCJkaXYiLCJmaWx0ZXJzIiwiYnV0dG9uIiwib25DbGljayIsInByb2R1dG9zIiwibWFwIiwicHJvZHVjdCIsImNhcmQiLCJoMiIsInRpdHVsb3AiLCJzcmMiLCJpbWFnZSIsIndpZHRoIiwiaGVpZ2h0IiwiaW1hZ2VtcCIsInAiLCJwcmVjb3AiLCJkZXNjcmljYW9wIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yaWFwIiwiY2F0ZWdvcnkiLCJjb3VudHAiLCJjb3VudCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/componentes/Main.js\n"));

/***/ })

});