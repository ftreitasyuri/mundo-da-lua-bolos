exports.id = 143;
exports.ids = [143];
exports.modules = {

/***/ 4945:
/***/ ((module) => {

// Exports
module.exports = {
	"form": "Formularios_form__O1zWg",
	"nome": "Formularios_nome__RaKig",
	"email": "Formularios_email__gQtGm",
	"telefone": "Formularios_telefone__CQPNE",
	"titulo": "Formularios_titulo__2TjAE",
	"descricao": "Formularios_descricao___A_Nv",
	"botaoEnviar": "Formularios_botaoEnviar__jbYUx",
	"importForm": "Formularios_importForm__Mex7H"
};


/***/ }),

/***/ 7143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Formulario)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Formularios_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4945);
/* harmony import */ var _styles_Formularios_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Formularios_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function Formulario() {
    const [nome, setNome] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [telefone, setTelefone] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [descricao, setDescricao] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    function capturandoEvento(e) {
        return e.preventDefault(), console.log(nome, email, telefone, descricao), document.querySelector("form").reset();
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        action: "",
        className: "form",
        onSubmit: capturandoEvento,
        method: "post",
        id: (_styles_Formularios_module_css__WEBPACK_IMPORTED_MODULE_2___default().form),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                id: (_styles_Formularios_module_css__WEBPACK_IMPORTED_MODULE_2___default().titulo),
                children: "Fa\xe7a j\xe1 seu or\xe7amento"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "text",
                    name: "nome",
                    id: (_styles_Formularios_module_css__WEBPACK_IMPORTED_MODULE_2___default().nome),
                    placeholder: "Digite seu nome",
                    onChange: (e)=>setNome(e.target.value)
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "email",
                    name: "email",
                    id: (_styles_Formularios_module_css__WEBPACK_IMPORTED_MODULE_2___default().email),
                    placeholder: "Digite seu e-mail",
                    onChange: (e)=>setEmail(e.target.value)
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    name: "telefone",
                    type: "text",
                    id: (_styles_Formularios_module_css__WEBPACK_IMPORTED_MODULE_2___default().telefone),
                    placeholder: "Telefone",
                    onChange: (e)=>setTelefone(e.target.value)
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                    name: "descricao",
                    type: "text",
                    id: (_styles_Formularios_module_css__WEBPACK_IMPORTED_MODULE_2___default().descricao),
                    placeholder: "Digite sua mensagem aqui...",
                    onChange: (e)=>setDescricao(e.target.value)
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "submit",
                id: (_styles_Formularios_module_css__WEBPACK_IMPORTED_MODULE_2___default().botaoEnviar),
                children: "Enviar"
            })
        ]
    });
}


/***/ })

};
;