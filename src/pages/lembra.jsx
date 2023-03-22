import Cabecalho from '../components/Cabecalho';
import Rodape from '../components/Rodape';
import styles from '../styles/Lembra.module.css'
import Lembrancinhas from '../components/Lembrancinhas';

export default function lembra() {
    return (


        <div className={styles.app}>
            <div id={styles.containerPrincipal}>
                <Cabecalho />
                <h1>Lembrancinhas da lua</h1>
                <Lembrancinhas />
                <Rodape />
            </div>
        </div>
    )
}