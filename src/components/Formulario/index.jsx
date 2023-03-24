import styles from '../../styles/Formularios.module.css'
import { useState } from 'react'


export default function Formulario() {


    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")
    const [descricao, setDescricao] = useState("")

    function capturandoEvento(e){
        return(
            e.preventDefault(),
            console.log(nome, email, telefone, descricao),
            
            document.querySelector("form").reset()
        )
    }



    return (
        <form action="" className={'form'} onSubmit={capturandoEvento} method="post" id={styles.form}>
            
            <h2>Faça já seu orçamento</h2>

            <div>
                {/* <label for="nome">Nome:</label> */}
                <input 
                type="text"
                name={'nome'}
                id={styles.nome}
                placeholder='Digite seu nome'
                onChange={(e) => setNome(e.target.value)}
                />
            </div>
            <div>
                {/* <label for="email">E-mail:</label> */}
                <input
                type="email"
                name='email'
                id={styles.email}
                placeholder='Digite seu e-mail'
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                {/* <label for="nome">Nome:</label> */}
                <input 
                name='telefone'
                type="text"
                id={styles.telefone}
                placeholder='Telefone'
                onChange={(e) => setTelefone(e.target.value)}

                />
            </div>
            <div>
                {/* <label for="msg">Mensagem:</label> */}
                <textarea
                name='descricao'
                type='text'
                id={styles.descricao}
                placeholder='Digite sua mensagem aqui...'
                onChange={(e) => setDescricao(e.target.value)}

                ></textarea>
            </div>
            <button type='submit' id={styles.botaoEnviar}>Enviar</button>
        </form>
    )
}