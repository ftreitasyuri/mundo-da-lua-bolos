// import styles from '../../styles/Corpo.module.css'
import styles from '../../styles/Formularios.module.css'
import { useState, useEffect } from 'react';
import Link from 'next/link';



export default function Corpo() {

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")
    const [descricao, setDescricao] = useState("")

    function capturandoEvento(e) {
        return (
            e.preventDefault(),
            console.log(nome, email, telefone, descricao),

            document.querySelector("form").reset()
        )
    }



    return (
        <div id={styles.corpoForms}>

            <Link className={styles.linkCorpo} href={'https://drive.google.com/file/d/1s4wE-ZUtXc8zUSpAQflW5wDufXYPx9QM/view'}><div id={styles.lateralEsquerda}>
                <div id={styles.destaquePag}>
                    {/* <p>Aproveite já as promoções de pascoa</p> */}

                    {/* <button onClick={() => setCount(count + 1)} >Click aqui</button> */}
                </div>
            </div></Link>

            {/* #################################################################################################################################################################### */}

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



        </div>
    )

}

