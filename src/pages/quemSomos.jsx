import Cabecalho from '../components/Cabecalho';
import Rodape from '../components/Rodape';
import styles from '../styles/Home.module.css'




export default function quemSomos(){
    return(
        <div className={styles.app}>
            <div id={styles.containerPrincipal}>
                <Cabecalho />
                <h1>Página Natal Lunar</h1>

                <Rodape />
            </div>
        </div>
    )
}