import Cabecalho from '../components/Cabecalho';
import Rodape from '../components/Rodape';
import BolosDivertidos from '../components/BolosDivertidos'
import styles from '../styles/Bolos.module.css'
import LinksAcesso from '../components/LinksAcesso';

export default function bolos() {
    return (


        <div className={styles.app}>
            <div id={styles.containerPrincipal}>
                <Cabecalho />
                <h1>Bolos divertidos</h1>
                <LinksAcesso 
                    valor1={'nataLunar'}
                    valor2={'lembra'}
                    valorPag1={'Natal lunar'}
                    valorPag2={'Lembrancinhas da lua'}
                    />
                <BolosDivertidos />
                <Rodape />
            </div>
        </div>
    )
}