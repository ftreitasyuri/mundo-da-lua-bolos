import styles from '../../styles/Corpo.module.css'
import { useState } from 'react';

export default function Corpo() {


    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")
    const [descricao, setDescricao] = useState("")



    function handleChange(e) {
        return (
            e.preventDefault(),
            console.log(nome, email, telefone, descricao)

        )

    }

    // Limpando os inpus
    function limpaCampos() {

        
        let v1 = document.getElementsByName('nome').value
        let v2 = document.getElementsByName('email').value
        let v3 = document.getElementsByName('telefone').value
        let v4 = document.getElementsByName('descricao').value
        let valor =[`${v1}`, `${v2}`, `${v3}`, `${v4}`]

        let inc = 0
        while(inc <= 3){      

        if (valor[inc] === false) {
            alert(`Verifique o formulário, há campos não preenchidos`)
            break            
        }
        inc++
        
        }
        document.getElementsByName('nome').value=''
        document.getElementsByName('email').value=''
        document.getElementsByName('telefone').value=''
        document.getElementsByName('descricao').value=''
        alert('Formulário enviado')

    }
    

    return (
        <div id={styles.corpoForms}>

            <div id={styles.latealEsquerda}>
                <div id={styles.destaquePag}>
                    <p>Seja bem vindo(a) ao mundo da lua bolos</p>
                </div>
            </div>


            <div id={styles.latealDireita}>
                <section>
                    <form action="" onSubmit={handleChange}>


                        <h2>Faça já seu orçamento</h2>

                        {/* <p className="ParaG">Nome</p> */}
                        <input className={styles.Inputar}
                            type="text"
                            placeholder="Nome"
                            value={nome}
                            id={styles.nome}
                            name='nome'
                            onChange={(e) => setNome(e.target.value)}
                        />

                        {/* <p className="ParaG">Email</p> */}
                        <input className={styles.Inputar}
                            type="text"
                            placeholder="E-mail"
                            value={email}
                            id={styles.email}
                            name='email'
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        {/* <p className="ParaG">Telefone</p> */}
                        <input 
                            className={styles.Inputar}
                            type="text"
                            maxLength={11}
                            placeholder="Telefone"
                            value={telefone}
                            id={styles.telefone}
                            name='telefone'
                            onChange={(e) => setTelefone(e.target.value)}
                        />

                        {/* <p className="ParaG" >Descrição</p> */}
                        <textarea cols="30" rows="10"
                            className={styles.Inputar}
                            type="text"
                            placeholder="Descrição"
                            value={descricao}
                            id={styles.descricao}
                            name='descricao'
                            onChange={(e) => setDescricao(e.target.value)}
                        ></textarea>

                        <button onClick={limpaCampos} id={styles.botaoEnviar} type="submit">Enviar</button>
                    </form>

                </section>

            </div>

        </div>
    )

}

