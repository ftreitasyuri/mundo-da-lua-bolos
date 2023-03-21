exports.id = 788;
exports.ids = [788];
exports.modules = {

/***/ 875:
/***/ ((module) => {

// Exports
module.exports = {
	"corpoForms": "Corpo_corpoForms__HMNaM",
	"latealEsquerda": "Corpo_latealEsquerda__VS60C",
	"destaquePag": "Corpo_destaquePag__iy78F",
	"latealDireita": "Corpo_latealDireita__Dnaje",
	"Inputar": "Corpo_Inputar__qJKHw",
	"descricao": "Corpo_descricao__ze6Xe",
	"botaoEnviar": "Corpo_botaoEnviar__eTv30",
	"lateralDiretia": "Corpo_lateralDiretia__0stNw"
};


/***/ }),

/***/ 8189:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Depoimentos_container__c6Ihb",
	"titulo": "Depoimentos_titulo__nzwRN",
	"sessao": "Depoimentos_sessao__rkkma"
};


/***/ }),

/***/ 8828:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Corpo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Corpo_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(875);
/* harmony import */ var _styles_Corpo_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Corpo_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function Corpo() {
    const [nome, setNome] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [telefone, setTelefone] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [descricao, setDescricao] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    function handleChange(e) {
        return e.preventDefault(), console.log(nome, email, telefone, descricao);
    }
    // Limpando os inpus
    function limpaCampos() {
        let v1 = document.getElementsByName("nome").value;
        let v2 = document.getElementsByName("email").value;
        let v3 = document.getElementsByName("telefone").value;
        let v4 = document.getElementsByName("descricao").value;
        let valor = [
            `${v1}`,
            `${v2}`,
            `${v3}`,
            `${v4}`
        ];
        let inc = 0;
        while(inc <= 3){
            if (valor[inc] === false) {
                alert(`Verifique o formulário, há campos não preenchidos`);
                break;
            }
            inc++;
        }
        document.getElementsByName("nome").value = "";
        document.getElementsByName("email").value = "";
        document.getElementsByName("telefone").value = "";
        document.getElementsByName("descricao").value = "";
        alert("Formul\xe1rio enviado");
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        id: (_styles_Corpo_module_css__WEBPACK_IMPORTED_MODULE_2___default().corpoForms),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: (_styles_Corpo_module_css__WEBPACK_IMPORTED_MODULE_2___default().latealEsquerda),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    id: (_styles_Corpo_module_css__WEBPACK_IMPORTED_MODULE_2___default().destaquePag),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Seja bem vindo(a) ao mundo da lua bolos"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: (_styles_Corpo_module_css__WEBPACK_IMPORTED_MODULE_2___default().latealDireita),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        action: "",
                        onSubmit: handleChange,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: "Fa\xe7a j\xe1 seu or\xe7amento"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                className: (_styles_Corpo_module_css__WEBPACK_IMPORTED_MODULE_2___default().Inputar),
                                type: "text",
                                placeholder: "Nome",
                                value: nome,
                                id: (_styles_Corpo_module_css__WEBPACK_IMPORTED_MODULE_2___default().nome),
                                name: "nome",
                                onChange: (e)=>setNome(e.target.value)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                className: (_styles_Corpo_module_css__WEBPACK_IMPORTED_MODULE_2___default().Inputar),
                                type: "text",
                                placeholder: "E-mail",
                                value: email,
                                id: (_styles_Corpo_module_css__WEBPACK_IMPORTED_MODULE_2___default().email),
                                name: "email",
                                onChange: (e)=>setEmail(e.target.value)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                className: (_styles_Corpo_module_css__WEBPACK_IMPORTED_MODULE_2___default().Inputar),
                                type: "text",
                                maxLength: 11,
                                placeholder: "Telefone",
                                value: telefone,
                                id: (_styles_Corpo_module_css__WEBPACK_IMPORTED_MODULE_2___default().telefone),
                                name: "telefone",
                                onChange: (e)=>setTelefone(e.target.value)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                cols: "30",
                                rows: "10",
                                className: (_styles_Corpo_module_css__WEBPACK_IMPORTED_MODULE_2___default().Inputar),
                                type: "text",
                                placeholder: "Descri\xe7\xe3o",
                                value: descricao,
                                id: (_styles_Corpo_module_css__WEBPACK_IMPORTED_MODULE_2___default().descricao),
                                name: "descricao",
                                onChange: (e)=>setDescricao(e.target.value)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: limpaCampos,
                                id: (_styles_Corpo_module_css__WEBPACK_IMPORTED_MODULE_2___default().botaoEnviar),
                                type: "submit",
                                children: "Enviar"
                            })
                        ]
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 2211:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Depoimentos)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Depoimentos_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8189);
/* harmony import */ var _styles_Depoimentos_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Depoimentos_module_css__WEBPACK_IMPORTED_MODULE_1__);


function Depoimentos() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Depoimentos_module_css__WEBPACK_IMPORTED_MODULE_1___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: (_styles_Depoimentos_module_css__WEBPACK_IMPORTED_MODULE_1___default().titulo),
                    children: "Depoimentos dos astronautas que deram o primeiro passo!!!"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: (_styles_Depoimentos_module_css__WEBPACK_IMPORTED_MODULE_1___default().sessao),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                children: "Meu depoimentos"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "nanana"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                children: "@ftreitasyuri"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    "Simplesmente os melhores ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "bolos de pote que",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    " eu j\xe1 experimentei"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                children: "@maricorado"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    "Os chocottones s\xe3o incr\xedveis, ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    " amei todos!!!"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                children: "Meu depoimentos"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "nanana"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                children: "Meu depoimentos"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "nanana"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;