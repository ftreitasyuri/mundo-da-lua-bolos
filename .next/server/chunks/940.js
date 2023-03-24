exports.id = 940;
exports.ids = [940];
exports.modules = {

/***/ 875:
/***/ ((module) => {

// Exports
module.exports = {
	"corpoForms": "Corpo_corpoForms__HMNaM",
	"latealEsquerda": "Corpo_latealEsquerda__VS60C",
	"destaquePag": "Corpo_destaquePag__iy78F",
	"latealDireita": "Corpo_latealDireita__Dnaje",
	"linkCorpo": "Corpo_linkCorpo__9Ey6I",
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
	"sessao": "Depoimentos_sessao__rkkma",
	"titullo": "Depoimentos_titullo__9jDNn"
};


/***/ }),

/***/ 4945:
/***/ ((module) => {

// Exports
module.exports = {
	"form": "Formularios_form__O1zWg",
	"nome": "Formularios_nome__RaKig",
	"email": "Formularios_email__gQtGm",
	"telefone": "Formularios_telefone__CQPNE",
	"descricao": "Formularios_descricao___A_Nv",
	"botaoEnviar": "Formularios_botaoEnviar__jbYUx"
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
/* harmony import */ var _styles_Corpo_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(875);
/* harmony import */ var _styles_Corpo_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Corpo_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);




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
    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // document.title = 'Você conseguiu' 
        document.getElementsByName("lateralEsquerda");
        let url = "https://drive.google.com/file/d/1s4wE-ZUtXc8zUSpAQflW5wDufXYPx9QM/view";
        window.open(url, "_blank");
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        id: (_styles_Corpo_module_css__WEBPACK_IMPORTED_MODULE_3___default().corpoForms),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: (_styles_Corpo_module_css__WEBPACK_IMPORTED_MODULE_3___default().latealEsquerda),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    id: (_styles_Corpo_module_css__WEBPACK_IMPORTED_MODULE_3___default().destaquePag),
                    name: "lateralEsquerda",
                    onClick: ()=>setCount(),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            className: (_styles_Corpo_module_css__WEBPACK_IMPORTED_MODULE_3___default().linkCorpo),
                            href: "https://drive.google.com/file/d/1s4wE-ZUtXc8zUSpAQflW5wDufXYPx9QM/view",
                            children: "Aproveite j\xe1 as promo\xe7\xf5es de pascoa"
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: (_styles_Corpo_module_css__WEBPACK_IMPORTED_MODULE_3___default().latealDireita),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        action: "",
                        onSubmit: handleChange,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: "Fa\xe7a j\xe1 seu or\xe7amento"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                className: (_styles_Corpo_module_css__WEBPACK_IMPORTED_MODULE_3___default().Inputar),
                                type: "text",
                                placeholder: "Nome",
                                value: nome,
                                id: (_styles_Corpo_module_css__WEBPACK_IMPORTED_MODULE_3___default().nome),
                                name: "nome",
                                onChange: (e)=>setNome(e.target.value)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                className: (_styles_Corpo_module_css__WEBPACK_IMPORTED_MODULE_3___default().Inputar),
                                type: "text",
                                placeholder: "E-mail",
                                value: email,
                                id: (_styles_Corpo_module_css__WEBPACK_IMPORTED_MODULE_3___default().email),
                                name: "email",
                                onChange: (e)=>setEmail(e.target.value)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                className: (_styles_Corpo_module_css__WEBPACK_IMPORTED_MODULE_3___default().Inputar),
                                type: "text",
                                maxLength: 11,
                                placeholder: "Telefone",
                                value: telefone,
                                id: (_styles_Corpo_module_css__WEBPACK_IMPORTED_MODULE_3___default().telefone),
                                name: "telefone",
                                onChange: (e)=>setTelefone(e.target.value)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                cols: "30",
                                rows: "10",
                                className: (_styles_Corpo_module_css__WEBPACK_IMPORTED_MODULE_3___default().Inputar),
                                type: "text",
                                placeholder: "Descri\xe7\xe3o",
                                value: descricao,
                                id: (_styles_Corpo_module_css__WEBPACK_IMPORTED_MODULE_3___default().descricao),
                                name: "descricao",
                                onChange: (e)=>setDescricao(e.target.value)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: limpaCampos,
                                id: (_styles_Corpo_module_css__WEBPACK_IMPORTED_MODULE_3___default().botaoEnviar),
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
                                children: "@insta"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Meu depoimento"
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
                                children: "@insta"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Meu depoimento"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                children: "@insta"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Meu depoimento"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


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