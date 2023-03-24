import Cabecalho from '../components/Cabecalho';
import Rodape from '../components/Rodape';
import styles from '../styles/Lembra.module.css'
import Lembrancinhas from '../components/Lembrancinhas';
import LinksAcesso from '../components/LinksAcesso';

export default function lembra() {
    return (


        <div className={styles.app}>
            <div id={styles.containerPrincipal}>
                <Cabecalho />
                <h1>Lembrancinhas da lua</h1>
                <LinksAcesso 
                    valor1={'nataLunar'}
                    valor2={'bolos'}
                    valorPag1={'Natal lunar'}
                    valorPag2={'Bolos divertidos'}
                    />

                <Lembrancinhas />
                <Rodape />
            </div>
        </div>
    )
}