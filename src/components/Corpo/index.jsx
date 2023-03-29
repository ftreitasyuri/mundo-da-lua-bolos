import styles from '../../styles/Corpo.module.css'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Formulario from '../Formulario';


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
        let valor = [`${v1}`, `${v2}`, `${v3}`, `${v4}`]

        let inc = 0
        while (inc <= 3) {

            if (valor[inc] === false) {
                alert(`Verifique o formulário, há campos não preenchidos`)
                break
            }
            inc++

        }
        document.getElementsByName('nome').value = ''
        document.getElementsByName('email').value = ''
        document.getElementsByName('telefone').value = ''
        document.getElementsByName('descricao').value = ''
        alert('Formulário enviado')

    }




    // const [count, setCount] = useState(0)

    // useEffect(() =>{
    //     document.title = 'Você conseguiu' 
    //     document.getElementById('lateralEsquerda')
    //     let url = 'https://drive.google.com/file/d/1s4wE-ZUtXc8zUSpAQflW5wDufXYPx9QM/view'
    //     window.open(url, '_blank')


    // })




    return (
        <div id={styles.corpoForms}>

            <Link className={styles.linkCorpo} href={'https://drive.google.com/file/d/1s4wE-ZUtXc8zUSpAQflW5wDufXYPx9QM/view'}><div id={styles.lateralEsquerda}>
                <div id={styles.destaquePag}>
                    {/* <p>Aproveite já as promoções de pascoa</p> */}

                    {/* <button onClick={() => setCount(count + 1)} >Click aqui</button> */}
                </div>
            </div></Link>

            <div id={styles.importForm}>
            <Formulario />
            </div>
            

        </div>
    )

}

