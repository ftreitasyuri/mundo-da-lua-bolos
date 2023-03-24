import Cabecalho from '../components/Cabecalho';
import Rodape from '../components/Rodape';
import NatalLunar from '../components/NatalLunar'
import styles from '../styles/Natal.module.css'

export default function Natal() {
    return (


        <div className={styles.app}>
            <div id={styles.containerPrincipal}>
                <Cabecalho />
                <h1>Página Natal LUNAR</h1>
                <NatalLunar />
                <Rodape />
            </div>
        </div>
    )
}