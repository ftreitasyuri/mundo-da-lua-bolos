import styles from '../../styles/Rodape.module.css'
import Image from 'next/image'
import facebook from '../../../public/imagens/facebook.png'
import instagram from '../../../public/imagens/instagram.png'
import gmail from '../../../public/imagens/facebook.png'

export default function Rodape(){
    return(
    <div className={styles.rodape}>
        <section id={styles.sessao}>
            <div id={styles.ladoEsquerdo}>
                <div>
                    <h4>Mundo da lua bolos e confeitaria - LTDA</h4>
                    <p>Endereço: Capão Redondo-SP</p>
                    <p>Telefone: (11) 4569-6996</p>
                    <p>CNPJ: 20-658-698/0001-56</p>
                </div>
            </div>

            <div id={styles.meio}>
                <div id={styles.contMeio}>
                © Todos os direitos reservadodos
                </div>
            </div>

            <div id={styles.ladoDireito}>
                                   
            <section id={styles.sessaoLadoDireito}>
            <div><Image className={styles.styleImagens} src={facebook} width={35} height={35} alt="Facebook"/>                  
            </div>
            <div>
            <Image className={styles.styleImagens} src={instagram} width={35} height={35} alt="Insta"/>                  
            </div>
            <div>
            <Image className={styles.styleImagens} src={gmail} width={35} height={35} alt="Gmail"/>                  
            </div>
            </section>
                
            </div>
        </section>
    </div>
    )
    
}

