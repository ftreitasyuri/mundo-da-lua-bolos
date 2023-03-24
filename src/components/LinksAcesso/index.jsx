import styles from '../../styles/LinksAcesso.module.css'
import Link from 'next/link'

export default function LinksAcesso({valor1, valor2, valorPag1, valorPag2}){


    return(

        <div id={styles.container}>
            <div id={styles.lista}>
                <p> <Link className={styles.item} href={`/${valor1}`}>{`${valorPag1}`}</Link> </p>
                <p className={styles.parag}>/</p>
                <p><Link className={styles.item} href={`/${valor2}`}>{`${valorPag2}`}</Link> </p>
            </div>
        </div>
    
    )
}