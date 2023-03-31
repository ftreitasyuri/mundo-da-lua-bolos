import styles from '../../styles/Formularios.module.css'
import { useState } from 'react'


export default function Formulario() {


    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")
    const [pessoa, setPessoa] = useState("")
    const [descricao, setDescricao] = useState("")

    function capturandoEvento(e) {
        return (
            e.preventDefault(),
            console.log(nome, email, telefone, pessoa, descricao),
            // console.log(pessoa),

            document.querySelector("form").reset()
        )
    }



    return (
        <form action="" className={'form'} onSubmit={capturandoEvento} method="post" id={styles.form}>

            <h2 id={styles.titulo}>Faça já seu orçamento</h2>

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
                    type="tel"
                    placeholder="Tel (11) 91234-1234"
                    // pattern="(\([0-9]{2}\))\s([9]{1})?([0-9]{4})-([0-9]{4})"
                    required
                    id={styles.telefone}
                    // placeholder='Telefone'
                    onChange={(e) => setTelefone(e.target.value)}

                />
            </div>

            {/* <div>
                <select name="pessoa"
                 id={styles.pessoa}
                 onChange={(e) => setPessoa(e.target.value)}>
                    
                    <option value="">--Clique para selecionar--</option>
                    <option value="" name='fisica'>Pessoal Fisica</option>
                    <option value="" name='juridica'>Pessoal Juridica</option>
                </select>

            </div> */}

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