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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../page.module.css */ \"(app-pages-browser)/./src/app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Main() {\n    _s();\n    const [listProduct, setProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getProduct = async ()=>{\n            const response = await fetch(\"https://fakestoreapi.com/products\");\n            const data = await response.json();\n            setProduct(data);\n        };\n        getProduct();\n    }, []);\n    const orderAz = ()=>{\n        const listAux = [\n            ...listProduct\n        ].sort((a, b)=>a.title.localeCompare(b.title));\n        setProduct(listAux);\n    };\n    const orderZa = ()=>{\n        let listAux = [\n            ...listProduct\n        ].sort((a, b)=>a.title.localeCompare(b.title));\n        listAux = listAux.reverse();\n        setProduct(listAux);\n    };\n    const orderPMenor = ()=>{\n        const listAuxPreco = [\n            ...listProduct\n        ].sort((a, b)=>a.price - b.price);\n        setProduct(listAuxPreco);\n    };\n    const orderPMaior = ()=>{\n        let listAuxPreco = [\n            ...listProduct\n        ].sort((a, b)=>a.price - b.price);\n        listAuxPreco = listAuxPreco.reverse();\n        setProduct(listAuxPreco);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().titulo),\n                    children: \"Produtos em destaque\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\izabe\\\\Downloads\\\\exercicios_try_catch\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().filters),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: orderAz,\n                            children: \"Az\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\izabe\\\\Downloads\\\\exercicios_try_catch\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: orderZa,\n                            children: \"Za\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\izabe\\\\Downloads\\\\exercicios_try_catch\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: orderPMenor,\n                            children: \"Pre\\xe7o Menor\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\izabe\\\\Downloads\\\\exercicios_try_catch\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: orderPMaior,\n                            children: \"Pre\\xe7o Maior\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\izabe\\\\Downloads\\\\exercicios_try_catch\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\izabe\\\\Downloads\\\\exercicios_try_catch\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().produtos),\n                    children: listProduct.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().titulop),\n                                    children: product.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\izabe\\\\Downloads\\\\exercicios_try_catch\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: product.image,\n                                    width: 100,\n                                    height: 100,\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().imagemp)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\izabe\\\\Downloads\\\\exercicios_try_catch\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().precop),\n                                    children: product.price\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\izabe\\\\Downloads\\\\exercicios_try_catch\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().descricaop),\n                                    children: product.description\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\izabe\\\\Downloads\\\\exercicios_try_catch\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().categoriap),\n                                    children: product.category\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\izabe\\\\Downloads\\\\exercicios_try_catch\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().countp),\n                                    children: product.count\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\izabe\\\\Downloads\\\\exercicios_try_catch\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, product.id, true, {\n                            fileName: \"C:\\\\Users\\\\izabe\\\\Downloads\\\\exercicios_try_catch\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\izabe\\\\Downloads\\\\exercicios_try_catch\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\izabe\\\\Downloads\\\\exercicios_try_catch\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Main, \"XVPPeJ5srsfxej8tSwOC+mjg6kQ=\");\n_c = Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50ZXMvTWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDNEM7QUFDYjtBQUNTO0FBRXpCLFNBQVNJOztJQUN0QixNQUFNLENBQUNDLGFBQWFDLFdBQVcsR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUU3Q0QsZ0RBQVNBLENBQUM7UUFDUixNQUFNTyxhQUFhO1lBQ2pCLE1BQU1DLFdBQVcsTUFBTUMsTUFBTTtZQUM3QixNQUFNQyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7WUFDaENMLFdBQVdJO1FBQ2I7UUFDQUg7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNSyxVQUFVO1FBQ2QsTUFBTUMsVUFBVTtlQUFJUjtTQUFZLENBQUNTLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUN4Q0QsRUFBRUUsS0FBSyxDQUFDQyxhQUFhLENBQUNGLEVBQUVDLEtBQUs7UUFFL0JYLFdBQVdPO0lBQ2I7SUFFQSxNQUFNTSxVQUFVO1FBQ2QsSUFBSU4sVUFBVTtlQUFJUjtTQUFZLENBQUNTLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUN0Q0QsRUFBRUUsS0FBSyxDQUFDQyxhQUFhLENBQUNGLEVBQUVDLEtBQUs7UUFHL0JKLFVBQVVBLFFBQVFPLE9BQU87UUFDekJkLFdBQVdPO0lBQ2I7SUFFQSxNQUFNUSxjQUFjO1FBQ2xCLE1BQU1DLGVBQWU7ZUFBSWpCO1NBQVksQ0FBQ1MsSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQU1ELEVBQUVRLEtBQUssR0FBR1AsRUFBRU8sS0FBSztRQUN0RWpCLFdBQVdnQjtJQUNiO0lBRUEsTUFBTUUsY0FBYztRQUNsQixJQUFJRixlQUFlO2VBQUlqQjtTQUFZLENBQUNTLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFNRCxFQUFFUSxLQUFLLEdBQUdQLEVBQUVPLEtBQUs7UUFFcEVELGVBQWVBLGFBQWFGLE9BQU87UUFDbkNkLFdBQVdnQjtJQUNiO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNHO1lBQUtDLFdBQVd2Qiw4REFBVzs7OEJBQzFCLDhEQUFDd0I7b0JBQUdELFdBQVd2QixnRUFBYTs4QkFBRTs7Ozs7OzhCQUM5Qiw4REFBQzBCO29CQUFJSCxXQUFXdkIsaUVBQWM7O3NDQUM1Qiw4REFBQzRCOzRCQUFPQyxTQUFTcEI7c0NBQVM7Ozs7OztzQ0FDMUIsOERBQUNtQjs0QkFBT0MsU0FBU2I7c0NBQVM7Ozs7OztzQ0FDMUIsOERBQUNZOzRCQUFPQyxTQUFTWDtzQ0FBYTs7Ozs7O3NDQUM5Qiw4REFBQ1U7NEJBQU9DLFNBQVNSO3NDQUFhOzs7Ozs7Ozs7Ozs7OEJBRWhDLDhEQUFDSztvQkFBSUgsV0FBV3ZCLGtFQUFlOzhCQUM1QkUsWUFBWTZCLEdBQUcsQ0FBQyxDQUFDQyx3QkFDaEIsOERBQUNOOzRCQUFxQkgsV0FBV3ZCLDhEQUFXOzs4Q0FDMUMsOERBQUNrQztvQ0FBR1gsV0FBV3ZCLGlFQUFjOzhDQUFHZ0MsUUFBUWxCLEtBQUs7Ozs7Ozs4Q0FDN0MsOERBQUNmLGtEQUFLQTtvQ0FDSnFDLEtBQUtKLFFBQVFLLEtBQUs7b0NBQ2xCQyxPQUFPO29DQUNQQyxRQUFRO29DQUNSaEIsV0FBV3ZCLGlFQUFjOzs7Ozs7OENBRTNCLDhEQUFDeUM7b0NBQUVsQixXQUFXdkIsZ0VBQWE7OENBQUdnQyxRQUFRWixLQUFLOzs7Ozs7OENBQzNDLDhEQUFDcUI7b0NBQUVsQixXQUFXdkIsb0VBQWlCOzhDQUFHZ0MsUUFBUVksV0FBVzs7Ozs7OzhDQUNyRCw4REFBQ0g7b0NBQUVsQixXQUFXdkIsb0VBQWlCOzhDQUFHZ0MsUUFBUWMsUUFBUTs7Ozs7OzhDQUNsRCw4REFBQ0w7b0NBQUVsQixXQUFXdkIsZ0VBQWE7OENBQUdnQyxRQUFRZ0IsS0FBSzs7Ozs7OzsyQkFYbkNoQixRQUFRaUIsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQmhDO0dBdEV3QmhEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50ZXMvTWFpbi5qcz8yZTAyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9wYWdlLm1vZHVsZS5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4oKSB7XHJcbiAgY29uc3QgW2xpc3RQcm9kdWN0LCBzZXRQcm9kdWN0XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGdldFByb2R1Y3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2Zha2VzdG9yZWFwaS5jb20vcHJvZHVjdHNcIik7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHNldFByb2R1Y3QoZGF0YSk7XHJcbiAgICB9O1xyXG4gICAgZ2V0UHJvZHVjdCgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb3JkZXJBeiA9ICgpID0+IHtcclxuICAgIGNvbnN0IGxpc3RBdXggPSBbLi4ubGlzdFByb2R1Y3RdLnNvcnQoKGEsIGIpID0+XHJcbiAgICAgIGEudGl0bGUubG9jYWxlQ29tcGFyZShiLnRpdGxlKVxyXG4gICAgKTtcclxuICAgIHNldFByb2R1Y3QobGlzdEF1eCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3JkZXJaYSA9ICgpID0+IHtcclxuICAgIGxldCBsaXN0QXV4ID0gWy4uLmxpc3RQcm9kdWN0XS5zb3J0KChhLCBiKSA9PlxyXG4gICAgICBhLnRpdGxlLmxvY2FsZUNvbXBhcmUoYi50aXRsZSlcclxuICAgICk7XHJcblxyXG4gICAgbGlzdEF1eCA9IGxpc3RBdXgucmV2ZXJzZSgpO1xyXG4gICAgc2V0UHJvZHVjdChsaXN0QXV4KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvcmRlclBNZW5vciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGxpc3RBdXhQcmVjbyA9IFsuLi5saXN0UHJvZHVjdF0uc29ydCgoYSwgYikgPT4gYS5wcmljZSAtIGIucHJpY2UpO1xyXG4gICAgc2V0UHJvZHVjdChsaXN0QXV4UHJlY28pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9yZGVyUE1haW9yID0gKCkgPT4ge1xyXG4gICAgbGV0IGxpc3RBdXhQcmVjbyA9IFsuLi5saXN0UHJvZHVjdF0uc29ydCgoYSwgYikgPT4gYS5wcmljZSAtIGIucHJpY2UpO1xyXG5cclxuICAgIGxpc3RBdXhQcmVjbyA9IGxpc3RBdXhQcmVjby5yZXZlcnNlKCk7XHJcbiAgICBzZXRQcm9kdWN0KGxpc3RBdXhQcmVjbyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXR1bG99PlByb2R1dG9zIGVtIGRlc3RhcXVlPC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlcnN9PlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvcmRlckF6fT5BejwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvcmRlclphfT5aYTwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvcmRlclBNZW5vcn0+UHJlw6dvIE1lbm9yPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29yZGVyUE1haW9yfT5QcmXDp28gTWFpb3I8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1dG9zfT5cclxuICAgICAgICAgIHtsaXN0UHJvZHVjdC5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e3Byb2R1Y3QuaWR9IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy50aXR1bG9wfT57cHJvZHVjdC50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgc3JjPXtwcm9kdWN0LmltYWdlfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezEwMH1cclxuICAgICAgICAgICAgICAgIGhlaWdodD17MTAwfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VtcH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnByZWNvcH0+e3Byb2R1Y3QucHJpY2V9PC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaWNhb3B9Pntwcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yaWFwfT57cHJvZHVjdC5jYXRlZ29yeX08L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY291bnRwfT57cHJvZHVjdC5jb3VudH08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJzdHlsZXMiLCJNYWluIiwibGlzdFByb2R1Y3QiLCJzZXRQcm9kdWN0IiwiZ2V0UHJvZHVjdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsIm9yZGVyQXoiLCJsaXN0QXV4Iiwic29ydCIsImEiLCJiIiwidGl0bGUiLCJsb2NhbGVDb21wYXJlIiwib3JkZXJaYSIsInJldmVyc2UiLCJvcmRlclBNZW5vciIsImxpc3RBdXhQcmVjbyIsInByaWNlIiwib3JkZXJQTWFpb3IiLCJtYWluIiwiY2xhc3NOYW1lIiwiaDEiLCJ0aXR1bG8iLCJkaXYiLCJmaWx0ZXJzIiwiYnV0dG9uIiwib25DbGljayIsInByb2R1dG9zIiwibWFwIiwicHJvZHVjdCIsImNhcmQiLCJoMiIsInRpdHVsb3AiLCJzcmMiLCJpbWFnZSIsIndpZHRoIiwiaGVpZ2h0IiwiaW1hZ2VtcCIsInAiLCJwcmVjb3AiLCJkZXNjcmljYW9wIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yaWFwIiwiY2F0ZWdvcnkiLCJjb3VudHAiLCJjb3VudCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/componentes/Main.js\n"));

/***/ })

});