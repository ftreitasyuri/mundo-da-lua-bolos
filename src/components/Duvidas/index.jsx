import styles from '../../styles/Duvidas.module.css'


export default function Duvidas(){
    return(
    <div id={styles.containerDuvidas}>
        <div  id={styles.tituloDuvidas}>
            <h2>Duvidas frequêntes</h2>
        </div>

        <section id={styles.sessaoDuvidas}>
        <div id={styles.ladoEsquerdo}>
            <h4>Qual é o prazo de entrega?</h4>
            <p>R: O prazo depende da disponibilidade do produto</p>

            <h4>Qual é o prazo de entrega?</h4>
            <p>R: O prazo depende da disponibilidade do produto</p>

            <h4>Qual é o prazo de entrega?</h4>
            <p>R: O prazo depende da disponibilidade do produto</p>

            <h4>Qual é o prazo de entrega?</h4>
            <p>R: O prazo depende da disponibilidade do produto</p>
        </div>

        <div id={styles.ladoDireito}>
            <h4>Qual é o prazo de entrega?</h4>
            <p>R: O prazo depende da disponibilidade do produto</p>

            <h4>Qual é o prazo de entrega?</h4>
            <p>R: O prazo depende da disponibilidade do produto</p>

            <h4>Qual é o prazo de entrega?</h4>
            <p>R: O prazo depende da disponibilidade do produto</p>

            <h4>Qual é o prazo de entrega?</h4>
            <p>R: O prazo depende da disponibilidade do produto</p>
        </div>
        </section>
    </div>
    )
}