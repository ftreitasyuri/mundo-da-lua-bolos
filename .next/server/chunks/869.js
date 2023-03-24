exports.id = 869;
exports.ids = [869];
exports.modules = {

/***/ 7442:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "LinksAcesso_container__0YEZU",
	"lista": "LinksAcesso_lista__Hcuoc",
	"item": "LinksAcesso_item__1cSW0",
	"parag": "LinksAcesso_parag__6Pe3j"
};


/***/ }),

/***/ 9869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LinksAcesso)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_LinksAcesso_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7442);
/* harmony import */ var _styles_LinksAcesso_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_LinksAcesso_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);



function LinksAcesso({ valor1 , valor2 , valorPag1 , valorPag2  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: (_styles_LinksAcesso_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            id: (_styles_LinksAcesso_module_css__WEBPACK_IMPORTED_MODULE_2___default().lista),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    children: [
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            className: (_styles_LinksAcesso_module_css__WEBPACK_IMPORTED_MODULE_2___default().item),
                            href: `/${valor1}`,
                            children: `${valorPag1}`
                        }),
                        " "
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: (_styles_LinksAcesso_module_css__WEBPACK_IMPORTED_MODULE_2___default().parag),
                    children: "/"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            className: (_styles_LinksAcesso_module_css__WEBPACK_IMPORTED_MODULE_2___default().item),
                            href: `/${valor2}`,
                            children: `${valorPag2}`
                        }),
                        " "
                    ]
                })
            ]
        })
    });
}


/***/ })

};
;