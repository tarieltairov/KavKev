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

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var _assets_logo2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/logo2.png */ \"./assets/logo2.png\");\n/* harmony import */ var _assets_lol_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/lol.jpg */ \"./assets/lol.jpg\");\n/* harmony import */ var _components_logos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/logos */ \"./components/logos.jsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.jsx\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var swiper_css_effect_coverflow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swiper/css/effect-coverflow */ \"./node_modules/swiper/modules/effect-coverflow/effect-coverflow.min.css\");\n/* harmony import */ var swiper_css_effect_coverflow__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(swiper_css_effect_coverflow__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! swiper/css/pagination */ \"./node_modules/swiper/modules/pagination/pagination.min.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! swiper/css/navigation */ \"./node_modules/swiper/modules/navigation/navigation.min.css\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _components_ICard_ICard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/ICard/ICard */ \"./components/ICard/ICard.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar array = [\n    {\n        name: 'moloko',\n        id: 1,\n        image: _assets_lol_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    },\n    {\n        name: 'мясо',\n        id: 2,\n        image: _assets_lol_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    },\n    {\n        name: 'idi nuhui',\n        id: 3,\n        image: _assets_lol_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    },\n    {\n        name: 'wsef',\n        id: 4,\n        image: _assets_lol_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    },\n    {\n        name: 'wsefaw',\n        id: 4,\n        image: _assets_lol_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    },\n    {\n        name: 'wsefaw',\n        id: 4,\n        image: _assets_lol_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    },\n    {\n        name: 'wsefaw',\n        id: 4,\n        image: _assets_lol_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    },\n    {\n        name: 'wsefaw',\n        id: 4,\n        image: _assets_lol_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    },\n    {\n        name: 'кусок Залупы',\n        id: 5,\n        image: _assets_lol_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    }, \n];\nvar index = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), width = ref[0], setWidth = ref[1];\n    var handleWindowResize = function() {\n        setWidth(window.innerWidth);\n    };\n    var redirect = '';\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        // if (localStorage.getItem('access')) {\n        //   return;\n        // } else {\n        //   redirect('/registration');\n        // }\n        // component is mounted and window is available\n        handleWindowResize();\n        window.addEventListener('resize', handleWindowResize);\n        // unsubscribe from the event on component unmount\n        return function() {\n            return window.removeEventListener('resize', handleWindowResize);\n        };\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_logos__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                image: _assets_logo2_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"].src\n            }, void 0, false, {\n                fileName: \"/Users/aibek/Desktop/kavKev/KavKev/pages/index.jsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    fontSize: '35px',\n                    marginTop: '30px',\n                    textAlign: 'center'\n                },\n                children: \"Категории продуктов\"\n            }, void 0, false, {\n                fileName: \"/Users/aibek/Desktop/kavKev/KavKev/pages/index.jsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {\n                effect: 'coverflow',\n                grabCursor: true,\n                centeredSlides: true,\n                centeredSlidesBounds: true,\n                slidesPerView: width <= 475 ? 1 : 3,\n                coverflowEffect: {\n                    rotate: 50,\n                    stretch: 0,\n                    depth: 100,\n                    modifier: 1,\n                    slideShadows: false\n                },\n                navigation: width <= 475 ? false : true,\n                pagination: {\n                    clickable: true\n                },\n                modules: [\n                    swiper__WEBPACK_IMPORTED_MODULE_3__.EffectCoverflow,\n                    swiper__WEBPACK_IMPORTED_MODULE_3__.Pagination,\n                    swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation\n                ],\n                style: {\n                    width: '80%',\n                    marginBottom: '200px',\n                    padding: '40px 0px 40px 0px',\n                    boxSizing: 'border-box'\n                },\n                children: array.map(function(item, index1) {\n                    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ICard_ICard__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                            item: item\n                        }, void 0, false, {\n                            fileName: \"/Users/aibek/Desktop/kavKev/KavKev/pages/index.jsx\",\n                            lineNumber: 119,\n                            columnNumber: 15\n                        }, _this1)\n                    }, \"item_\".concat(index1), false, {\n                        fileName: \"/Users/aibek/Desktop/kavKev/KavKev/pages/index.jsx\",\n                        lineNumber: 118,\n                        columnNumber: 13\n                    }, _this1));\n                })\n            }, void 0, false, {\n                fileName: \"/Users/aibek/Desktop/kavKev/KavKev/pages/index.jsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/aibek/Desktop/kavKev/KavKev/pages/index.jsx\",\n                lineNumber: 125,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aibek/Desktop/kavKev/KavKev/pages/index.jsx\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, _this));\n};\n_s(index, \"3Dw6O3taL+RJ0YzpEV8JM5PybOA=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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STtnQkFDMUJDLGFBQWEsRUFBRW5CLEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUM7Z0JBQ25Db0IsZUFBZSxFQUFFLENBQUM7b0JBQ2hCQyxNQUFNLEVBQUUsRUFBRTtvQkFDVkMsT0FBTyxFQUFFLENBQUM7b0JBQ1ZDLEtBQUssRUFBRSxHQUFHO29CQUNWQyxRQUFRLEVBQUUsQ0FBQztvQkFDWEMsWUFBWSxFQUFFLEtBQUs7Z0JBQ3JCLENBQUM7Z0JBQ0RDLFVBQVUsRUFBRTFCLEtBQUssSUFBSSxHQUFHLEdBQUcsS0FBSyxHQUFHLElBQUk7Z0JBQ3ZDMkIsVUFBVSxFQUFFLENBQUM7b0JBQUNDLFNBQVMsRUFBRSxJQUFJO2dCQUFDLENBQUM7Z0JBQy9CQyxPQUFPLEVBQUUsQ0FBQzNDO29CQUFBQSxtREFBZTtvQkFBRUMsOENBQVU7b0JBQUVDLDhDQUFVO2dCQUFBLENBQUM7Z0JBQ2xEdUIsS0FBSyxFQUFFLENBQUM7b0JBQ05YLEtBQUssRUFBRSxDQUFLO29CQUNaOEIsWUFBWSxFQUFFLENBQU87b0JBQ3JCQyxPQUFPLEVBQUUsQ0FBbUI7b0JBQzVCQyxTQUFTLEVBQUUsQ0FBWTtnQkFDekIsQ0FBQzswQkFFQXJDLEtBQUssQ0FBQ3NDLEdBQUcsQ0FBQyxRQUFRLENBQVBDLElBQUksRUFBRW5DLE1BQUssRUFBSyxDQUFDO29CQUMzQixNQUFNLDZFQUNIZCxxREFBVzs4R0FDVFMsZ0VBQUs7NEJBQUN3QyxJQUFJLEVBQUVBLElBQUk7Ozs7Ozt1QkFEQSxDQUFLLE9BQVEsT0FBTm5DLE1BQUs7Ozs7O2dCQUluQyxDQUFDOzs7Ozs7d0ZBR0ZOLDBEQUFNOzs7Ozs7Ozs7OztBQUdiLENBQUM7R0FuRUtNLEtBQUs7QUFxRVgsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gJ3N3aXBlci9yZWFjdCc7XG5pbXBvcnQgeyBFZmZlY3RDb3ZlcmZsb3csIFBhZ2luYXRpb24sIE5hdmlnYXRpb24sIEZyZWVNb2RlIH0gZnJvbSAnc3dpcGVyJztcbmltcG9ydCBsb2dvIGZyb20gJy4uL2Fzc2V0cy9sb2dvMi5wbmcnO1xuaW1wb3J0IGxvZ28yIGZyb20gJy4uL2Fzc2V0cy9sb2wuanBnJztcbmltcG9ydCBMb2dvcyBmcm9tICcuLi9jb21wb25lbnRzL2xvZ29zJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInO1xuaW1wb3J0ICdzd2lwZXIvY3NzJztcbmltcG9ydCAnc3dpcGVyL2Nzcy9lZmZlY3QtY292ZXJmbG93JztcbmltcG9ydCAnc3dpcGVyL2Nzcy9wYWdpbmF0aW9uJztcbmltcG9ydCAnc3dpcGVyL2Nzcy9uYXZpZ2F0aW9uJztcbmltcG9ydCBJQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0lDYXJkL0lDYXJkJztcblxuY29uc3QgYXJyYXkgPSBbXG4gIHtcbiAgICBuYW1lOiAnbW9sb2tvJyxcbiAgICBpZDogMSxcbiAgICBpbWFnZTogbG9nbzIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAn0LzRj9GB0L4nLFxuICAgIGlkOiAyLFxuICAgIGltYWdlOiBsb2dvMixcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdpZGkgbnVodWknLFxuICAgIGlkOiAzLFxuICAgIGltYWdlOiBsb2dvMixcbiAgfSxcbiAge1xuICAgIG5hbWU6ICd3c2VmJyxcbiAgICBpZDogNCxcbiAgICBpbWFnZTogbG9nbzIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnd3NlZmF3JyxcbiAgICBpZDogNCxcbiAgICBpbWFnZTogbG9nbzIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnd3NlZmF3JyxcbiAgICBpZDogNCxcbiAgICBpbWFnZTogbG9nbzIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnd3NlZmF3JyxcbiAgICBpZDogNCxcbiAgICBpbWFnZTogbG9nbzIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnd3NlZmF3JyxcbiAgICBpZDogNCxcbiAgICBpbWFnZTogbG9nbzIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAn0LrRg9GB0L7QuiDQl9Cw0LvRg9C/0YsnLFxuICAgIGlkOiA1LFxuICAgIGltYWdlOiBsb2dvMixcbiAgfSxcbl07XG5jb25zdCBpbmRleCA9ICgpID0+IHtcbiAgY29uc3QgW3dpZHRoLCBzZXRXaWR0aF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBoYW5kbGVXaW5kb3dSZXNpemUgPSAoKSA9PiB7XG4gICAgc2V0V2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xuICB9O1xuICBjb25zdCByZWRpcmVjdCA9ICcnO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzJykpIHtcbiAgICAvLyAgIHJldHVybjtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgcmVkaXJlY3QoJy9yZWdpc3RyYXRpb24nKTtcbiAgICAvLyB9XG4gICAgLy8gY29tcG9uZW50IGlzIG1vdW50ZWQgYW5kIHdpbmRvdyBpcyBhdmFpbGFibGVcbiAgICBoYW5kbGVXaW5kb3dSZXNpemUoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlV2luZG93UmVzaXplKTtcbiAgICAvLyB1bnN1YnNjcmliZSBmcm9tIHRoZSBldmVudCBvbiBjb21wb25lbnQgdW5tb3VudFxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlV2luZG93UmVzaXplKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxMb2dvcyBpbWFnZT17bG9nby5zcmN9IC8+XG4gICAgICA8aDFcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBmb250U2l6ZTogJzM1cHgnLFxuICAgICAgICAgIG1hcmdpblRvcDogJzMwcHgnLFxuICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgINCa0LDRgtC10LPQvtGA0LjQuCDQv9GA0L7QtNGD0LrRgtC+0LJcbiAgICAgIDwvaDE+XG4gICAgICA8U3dpcGVyXG4gICAgICAgIGVmZmVjdD17J2NvdmVyZmxvdyd9XG4gICAgICAgIGdyYWJDdXJzb3I9e3RydWV9XG4gICAgICAgIGNlbnRlcmVkU2xpZGVzPXt0cnVlfVxuICAgICAgICBjZW50ZXJlZFNsaWRlc0JvdW5kcz17dHJ1ZX1cbiAgICAgICAgc2xpZGVzUGVyVmlldz17d2lkdGggPD0gNDc1ID8gMSA6IDN9XG4gICAgICAgIGNvdmVyZmxvd0VmZmVjdD17e1xuICAgICAgICAgIHJvdGF0ZTogNTAsXG4gICAgICAgICAgc3RyZXRjaDogMCxcbiAgICAgICAgICBkZXB0aDogMTAwLFxuICAgICAgICAgIG1vZGlmaWVyOiAxLFxuICAgICAgICAgIHNsaWRlU2hhZG93czogZmFsc2UsXG4gICAgICAgIH19XG4gICAgICAgIG5hdmlnYXRpb249e3dpZHRoIDw9IDQ3NSA/IGZhbHNlIDogdHJ1ZX1cbiAgICAgICAgcGFnaW5hdGlvbj17eyBjbGlja2FibGU6IHRydWUgfX1cbiAgICAgICAgbW9kdWxlcz17W0VmZmVjdENvdmVyZmxvdywgUGFnaW5hdGlvbiwgTmF2aWdhdGlvbl19XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgd2lkdGg6ICc4MCUnLFxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzIwMHB4JyxcbiAgICAgICAgICBwYWRkaW5nOiAnNDBweCAwcHggNDBweCAwcHgnLFxuICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7YXJyYXkubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8U3dpcGVyU2xpZGUga2V5PXtgaXRlbV8ke2luZGV4fWB9PlxuICAgICAgICAgICAgICA8SUNhcmQgaXRlbT17aXRlbX0gLz5cbiAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L1N3aXBlcj5cblxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIlN3aXBlciIsIlN3aXBlclNsaWRlIiwiRWZmZWN0Q292ZXJmbG93IiwiUGFnaW5hdGlvbiIsIk5hdmlnYXRpb24iLCJGcmVlTW9kZSIsImxvZ28iLCJsb2dvMiIsIkxvZ29zIiwiRm9vdGVyIiwiSUNhcmQiLCJhcnJheSIsIm5hbWUiLCJpZCIsImltYWdlIiwiaW5kZXgiLCJ3aWR0aCIsInNldFdpZHRoIiwiaGFuZGxlV2luZG93UmVzaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInJlZGlyZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJzcmMiLCJoMSIsInN0eWxlIiwiZm9udFNpemUiLCJtYXJnaW5Ub3AiLCJ0ZXh0QWxpZ24iLCJlZmZlY3QiLCJncmFiQ3Vyc29yIiwiY2VudGVyZWRTbGlkZXMiLCJjZW50ZXJlZFNsaWRlc0JvdW5kcyIsInNsaWRlc1BlclZpZXciLCJjb3ZlcmZsb3dFZmZlY3QiLCJyb3RhdGUiLCJzdHJldGNoIiwiZGVwdGgiLCJtb2RpZmllciIsInNsaWRlU2hhZG93cyIsIm5hdmlnYXRpb24iLCJwYWdpbmF0aW9uIiwiY2xpY2thYmxlIiwibW9kdWxlcyIsIm1hcmdpbkJvdHRvbSIsInBhZGRpbmciLCJib3hTaXppbmciLCJtYXAiLCJpdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

});