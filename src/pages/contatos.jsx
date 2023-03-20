import Cabecalho from '../components/Cabecalho';
import Corpo from '../components/Corpo';
import Depoimentos from '../components/Depoimentos';
import Rodape from '../components/Rodape';
import styles from '../styles/Home.module.css'


export default function Contatos(){
    return (
        <div className={styles.app}>
          
        <div id={styles.containerPrincipal}>
            
            <div id="cabecalho">
            <Cabecalho />     
            
          </div>
        <form action="submit" method="post">Formulario de contato</form>
            <div >
            <Rodape />
            </div>
    
        </div>
        </div>
      )
}