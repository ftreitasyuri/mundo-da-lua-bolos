import Cabecalho from '../components/Cabecalho';
import Rodape from '../components/Rodape';
import styles from '../styles/Pascoa.module.css'



export default function Pascoa(){
    return(
        <div className={styles.app}>
            <div id={styles.containerPrincipal}>
                <Cabecalho />
                <h1>Página promoções de pascoa</h1>

                <Rodape />
            </div>
        </div>
    )
}