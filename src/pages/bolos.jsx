import Cabecalho from '../components/Cabecalho';
import Rodape from '../components/Rodape';
import BolosDivertidos from '../components/BolosDivertidos'
import styles from '../styles/Bolos.module.css'

export default function bolos() {
    return (


        <div className={styles.app}>
            <div id={styles.containerPrincipal}>
                <Cabecalho />
                <h1>Bolos divertidos</h1>
                <BolosDivertidos />
                <Rodape />
            </div>
        </div>
    )
}