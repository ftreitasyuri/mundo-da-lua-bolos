import styles from '../../styles/Lembra.module.css'


export default function Lembrancinhas(){
    return(
        <div className={styles.container}>
                       
            <section className={styles.sessao} >
            <div className={styles.img1}></div>
            <div className={styles.img2}></div>
            <div className={styles.img3}></div>
            </section>

            {/* <hr /> */}
            <section className={styles.sessao} id={styles.separacao}>
            <div className={styles.img4}></div>
            <div className={styles.img5}></div>
            <div className={styles.img6}></div>
            </section>

            
        </div>
    )

}