import Cabecalho from '../components/Cabecalho';
import Corpo from '../components/Corpo';
import Depoimentos from '../components/Depoimentos';
import Destaque from '../components/Destaque';
import Rodape from '../components/Rodape';
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.app}>
      
    <div id={styles.containerPrincipal}>
        
        <div id="cabecalho">
        <Cabecalho />     
        
      </div>


      <div >
        <Corpo/>
        </div>
        <hr />

        <div >
        <Destaque />
        </div>
        <div className={styles.separacao}></div>

        <div>
          <Depoimentos/>
        </div>

        <div >
        <Rodape />
        </div>

    </div>
    </div>
  )
}
