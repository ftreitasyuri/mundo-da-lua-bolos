import styles from '../../styles/Destaque.module.css'
import Link from 'next/link'

export default function Destaque() {



    // Link href="/posts/first-post">This Page</Link>

    // <Link href="/">Home</Link>
    return (
    <>
    <div className={styles.destaque}>
        <div className={styles.parte1}><Link className={styles.deco} href='/nataLunar'><h2 className={styles.textoDeco}>Natal<br/> Lunar</h2></Link></div>
        <div className={styles.parte2}><Link className={styles.deco} href='/nataLunar'><h2 className={styles.textoDeco} >Bolos<br/> divertidos</h2></Link></div>
        <div className={styles.parte3}><Link className={styles.deco} href='/nataLunar'><h2 className={styles.textoDeco} >Lembrancinhas<br/> da lua</h2></Link></div>
        
       
    </div>

    </>

 
    )

}

