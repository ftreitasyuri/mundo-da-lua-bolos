import Cabecalho from '../components/Cabecalho';
import Rodape from '../components/Rodape';
import NatalLunar from '../components/NatalLunar'
import styles from '../styles/Natal.module.css'
import LinksAcesso from '../components/LinksAcesso';

export default function Natal() {
    return (


        <div className={styles.app}>
            <div id={styles.containerPrincipal}>
                <Cabecalho />
                <h1>Página Natal LUNAR</h1>
                <LinksAcesso 
                    valor1={'bolos'}
                    valor2={'lembra'}
                    valorPag1={'Bolos divertidos'}
                    valorPag2={'Lembracinhas da lua'}
                    />
                <NatalLunar />
                <Rodape />
            </div>
        </div>
    )
}