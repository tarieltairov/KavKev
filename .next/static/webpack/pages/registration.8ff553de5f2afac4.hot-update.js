"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/registration",{

/***/ "./components/Registration/Registration.jsx":
/*!**************************************************!*\
  !*** ./components/Registration/Registration.jsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar initialValues = {\n    username: '',\n    password: '',\n    first_name: '',\n    last_name: ''\n};\n// const SignupSchema = Yup.object().shape({\n//   firstName: Yup.string()\n//     .min(2, 'Too Short!')\n//     .max(50, 'Too Long!')\n//     .required('Required'),\n//   lastName: Yup.string()\n//     .min(2, 'Too Short!')\n//     .max(50, 'Too Long!')\n//     .required('Required'),\n//   email: Yup.string().email('Invalid email').required('Required'),\n// });\nfunction Registration() {\n    var _this = this;\n    var handleSubmit = function(values) {\n        console.log(values);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {\n            initialValues: true,\n            validate: SignupSchema,\n            onSubmit: function(values) {\n                return handleSubmit(values);\n            },\n            children: function(param) {\n                var errors = param.errors, touched = param.touched, handleChange = param.handleChange, handleSubmit = param.handleSubmit;\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Form, {}, void 0, false, {\n                    fileName: \"/Users/aibek/Desktop/kavKev/KavKev/components/Registration/Registration.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 63\n                }, _this);\n            }\n        }, void 0, false, {\n            fileName: \"/Users/aibek/Desktop/kavKev/KavKev/components/Registration/Registration.jsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/aibek/Desktop/kavKev/KavKev/components/Registration/Registration.jsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this));\n}\n_c = Registration;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Registration);\nvar _c;\n$RefreshReg$(_c, \"Registration\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlZ2lzdHJhdGlvbi9SZWdpc3RyYXRpb24uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXlCO0FBQ1k7QUFFckMsR0FBSyxDQUFDRyxhQUFhLEdBQUcsQ0FBQztJQUNyQkMsUUFBUSxFQUFFLENBQUU7SUFDWkMsUUFBUSxFQUFFLENBQUU7SUFDWkMsVUFBVSxFQUFFLENBQUU7SUFDZEMsU0FBUyxFQUFFLENBQUU7QUFDZixDQUFDO0FBRUQsRUFBNEM7QUFDNUMsRUFBNEI7QUFDNUIsRUFBNEI7QUFDNUIsRUFBNEI7QUFDNUIsRUFBNkI7QUFDN0IsRUFBMkI7QUFDM0IsRUFBNEI7QUFDNUIsRUFBNEI7QUFDNUIsRUFBNkI7QUFDN0IsRUFBcUU7QUFDckUsRUFBTTtTQUVHQyxZQUFZLEdBQUcsQ0FBQzs7SUFDdkIsR0FBSyxDQUFDQyxZQUFZLEdBQUcsUUFBUSxDQUFQQyxNQUFNLEVBQUssQ0FBQztRQUNoQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE1BQU07SUFDcEIsQ0FBQztJQUVELE1BQU0sNkVBQ0hHLENBQUc7OEZBQ0RaLDBDQUFNO1lBQ0xFLGFBQWE7WUFDYlcsUUFBUSxFQUFFQyxZQUFZO1lBQ3RCQyxRQUFRLEVBQUUsUUFBUSxDQUFQTixNQUFNO2dCQUFLRCxNQUFNLENBQU5BLFlBQVksQ0FBQ0MsTUFBTTs7c0JBRXhDLFFBQVE7b0JBQUxPLE1BQU0sU0FBTkEsTUFBTSxFQUFFQyxPQUFPLFNBQVBBLE9BQU8sRUFBRUMsWUFBWSxTQUFaQSxZQUFZLEVBQUVWLFlBQVksU0FBWkEsWUFBWTs4QkFBTyxNQUFNLCtEQUFMUCx3Q0FBSTs7Ozs7Ozs7Ozs7Ozs7OztBQUluRSxDQUFDO0tBaEJRTSxZQUFZO0FBa0JyQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUmVnaXN0cmF0aW9uL1JlZ2lzdHJhdGlvbi5qc3g/ZWZjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9ybWlrLCBGb3JtIH0gZnJvbSAnZm9ybWlrJztcblxuY29uc3QgaW5pdGlhbFZhbHVlcyA9IHtcbiAgdXNlcm5hbWU6ICcnLFxuICBwYXNzd29yZDogJycsXG4gIGZpcnN0X25hbWU6ICcnLFxuICBsYXN0X25hbWU6ICcnLFxufTtcblxuLy8gY29uc3QgU2lnbnVwU2NoZW1hID0gWXVwLm9iamVjdCgpLnNoYXBlKHtcbi8vICAgZmlyc3ROYW1lOiBZdXAuc3RyaW5nKClcbi8vICAgICAubWluKDIsICdUb28gU2hvcnQhJylcbi8vICAgICAubWF4KDUwLCAnVG9vIExvbmchJylcbi8vICAgICAucmVxdWlyZWQoJ1JlcXVpcmVkJyksXG4vLyAgIGxhc3ROYW1lOiBZdXAuc3RyaW5nKClcbi8vICAgICAubWluKDIsICdUb28gU2hvcnQhJylcbi8vICAgICAubWF4KDUwLCAnVG9vIExvbmchJylcbi8vICAgICAucmVxdWlyZWQoJ1JlcXVpcmVkJyksXG4vLyAgIGVtYWlsOiBZdXAuc3RyaW5nKCkuZW1haWwoJ0ludmFsaWQgZW1haWwnKS5yZXF1aXJlZCgnUmVxdWlyZWQnKSxcbi8vIH0pO1xuXG5mdW5jdGlvbiBSZWdpc3RyYXRpb24oKSB7XG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICh2YWx1ZXMpID0+IHtcbiAgICBjb25zb2xlLmxvZyh2YWx1ZXMpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxGb3JtaWtcbiAgICAgICAgaW5pdGlhbFZhbHVlc1xuICAgICAgICB2YWxpZGF0ZT17U2lnbnVwU2NoZW1hfVxuICAgICAgICBvblN1Ym1pdD17KHZhbHVlcykgPT4gaGFuZGxlU3VibWl0KHZhbHVlcyl9XG4gICAgICA+XG4gICAgICAgIHsoeyBlcnJvcnMsIHRvdWNoZWQsIGhhbmRsZUNoYW5nZSwgaGFuZGxlU3VibWl0IH0pID0+IDxGb3JtPjwvRm9ybT59XG4gICAgICA8L0Zvcm1paz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0cmF0aW9uO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRm9ybWlrIiwiRm9ybSIsImluaXRpYWxWYWx1ZXMiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsIlJlZ2lzdHJhdGlvbiIsImhhbmRsZVN1Ym1pdCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJ2YWxpZGF0ZSIsIlNpZ251cFNjaGVtYSIsIm9uU3VibWl0IiwiZXJyb3JzIiwidG91Y2hlZCIsImhhbmRsZUNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Registration/Registration.jsx\n");

/***/ }),

/***/ "./pages/registration.jsx":
/*!********************************!*\
  !*** ./pages/registration.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Registration_Registration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Registration/Registration */ \"./components/Registration/Registration.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction registration() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Registration_Registration__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/aibek/Desktop/kavKev/KavKev/pages/registration.jsx\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false));\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (registration);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWdpc3RyYXRpb24uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXlCO0FBQ3lDO1NBRXpERSxZQUFZLEdBQUcsQ0FBQztJQUN2QixNQUFNOzhGQUVERCw2RUFBWTs7Ozs7O0FBR25CLENBQUM7QUFFRCwrREFBZUMsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3JlZ2lzdHJhdGlvbi5qc3g/MDZhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlZ2lzdHJhdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1JlZ2lzdHJhdGlvbi9SZWdpc3RyYXRpb24nO1xuXG5mdW5jdGlvbiByZWdpc3RyYXRpb24oKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxSZWdpc3RyYXRpb24gLz5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0cmF0aW9uO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUmVnaXN0cmF0aW9uIiwicmVnaXN0cmF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/registration.jsx\n");

/***/ })

});