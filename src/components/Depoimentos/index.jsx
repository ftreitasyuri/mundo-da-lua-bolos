import styles from '../../styles/Depoimentos.module.css'


export default function Depoimentos() {
    return (
        <div className={styles.container}>
            <div>
                <h2 className={styles.titulo}>Depoimentos dos astronautas que deram o primeiro passo!!!</h2>
            </div>

            <section className={styles.sessao}>
                <div>
                    <h3>@insta</h3>
                    <p>Meu depoimento</p>
                </div>
                <div>
                    <h3>@ftreitasyuri</h3>
                    <p>Simplesmente os melhores <br />bolos de pote que<br /> eu já experimentei</p>
                </div>
                <div>
                    <h3>@maricorado</h3>
                    <p>Os chocottones são incríveis, <br /> amei todos!!!</p>
                </div>
                <div>
                    <h3>@insta</h3>
                    <p>Meu depoimento</p>
                </div>
                <div>
                    <h3>@insta</h3>
                    <p>Meu depoimento</p>
                </div>

            </section>

        </div>

    )
}