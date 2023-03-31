import Link from 'next/link';
import styles from '../../styles/Cabecalho.module.css';

export default function Cabecalho() {
    return (
        <div className={styles.classNav}>
            <div>
                <Link className={styles.links} href="/"><p className={styles.logotipo}></p></Link>
            </div>

            
            <div id={styles.flexdiv}>
                <p >
                    <Link className={styles.linksHome} href="/">Home</Link>
                </p>                
                <p>
                    <Link className={styles.links} href="/contatos">Contatos</Link>
                </p>
                <p>
                    <Link className={styles.links} href="/quemSomos">Quem Somos</Link>
                </p>
            </div>
            
        </div>
    )

}

