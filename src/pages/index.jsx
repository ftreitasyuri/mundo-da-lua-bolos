import Cabecalho from '../components/Cabecalho';
import Corpo from '../components/Corpo';
import Depoimentos from '../components/Depoimentos';
import Destaque from '../components/Destaque';
import Formulario from '../components/Formulario';
import Rodape from '../components/Rodape';
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.app}>

      <div id={styles.containerPrincipal}>

        <div id={styles.cabecalho}>
          <Cabecalho />
        </div>

        <div id={styles.corpo}>
          <div><Corpo /></div>
          
        </div>
        <div className={styles.separacao}></div>

        <div id={styles.destaque}>
          <Destaque />
        </div>
        {/* <div className={styles.separacao}></div> */}
              
        <div id={styles.depoimentos}>
          <Depoimentos />
        </div>
        <div className={styles.separacao}></div>

        <div id={styles.rodape}>
          <Rodape />
        </div>

      </div>
    </div>
  )
}
