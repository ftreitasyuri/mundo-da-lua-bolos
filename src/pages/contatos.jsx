import Cabecalho from '../components/Cabecalho';
import Duvidas from '../components/Duvidas'
import Formulario from '../components/Formulario';
import Rodape from '../components/Rodape';
import styles from '../styles/Contatos.module.css'


export default function Contatos(){
    return (
        <div className={styles.app}>
          
        <div id={styles.containerPrincipal}>
            
            <div id="cabecalho">
            <Cabecalho />     
            
          </div >

            <div id={styles.formContainer}>
            <div id={styles.duvidas}><Duvidas /></div>
            <div id={styles.formContatos}><Formulario /></div>            
            </div>

            <div >
            <Rodape />
            </div>
    
        </div>
        </div>
      )
}