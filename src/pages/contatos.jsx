import Cabecalho from '../components/Cabecalho';
import Corpo from '../components/Corpo';
import Depoimentos from '../components/Depoimentos';
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

            <div>
            <Formulario />

            </div>

            <div >
            <Rodape />
            </div>
    
        </div>
        </div>
      )
}