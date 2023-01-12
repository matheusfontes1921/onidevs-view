import e_tudo_sobre_voce from '../img/e_tudo_sobre_voce.jpeg'
import emaus from '../img/emaus.jpeg'
import lembre_se_90 from '../img/lembre_se_90.jpeg'
import capa from '../img/capa.jpg'


import styles from './Home.module.css'

function Home(){
    return(
            <body>
                    <img src={capa} alt="Capa" className={styles.img}/>
                    <p className={styles.p}><b>Morada</b></p>      

             <ul className={styles.ulMusicaUm}>
                    <img src={e_tudo_sobre_voce} alt="é tudo sobre voce" className={styles.imgMini} />
                    <p className={styles.txtFooter}><b>É Tudo Sobre Você | Morada (Clipe Oficial)</b></p>
                    <p className={styles.min}><b>8:27</b></p>
            </ul> 

            <ul className={styles.ulMusicaUm}>
                    <img src={emaus} alt="emaús" className={styles.imgMini} />
                    <p className={styles.txtFooter}><b>Emaús | Morada Feat. Poiema Musica (Clipe Oficial)</b></p>
                    <p className={styles.minDois}><b>6:35</b></p>
            </ul>

            <ul className={styles.ulMusicaUm}>
                    <img src={lembre_se_90} alt="musicTres" className={styles.imgMini} />
                    <p className={styles.txtFooter}><b>Em Espírito Em Verdade / Não Há Deus Maior / Maravilhoso / Maior É Jesus (Clipe Oficial) | Morada </b></p>
                    <p className={styles.minTres}><b>5:14</b></p>               
            </ul>

            <ul className={styles.ulMusicaUm}>
                <img src={lembre_se_90} alt="musicQuatro" className={styles.imgMini} />
                <p className={styles.txtFooter}><b>Aclame ao Senhor / Manancial / A Ele A Glória / Te Agradeço (Clipe Oficial) - Morada </b></p>
                <p className={styles.minQuatro}><b>5:15</b></p>
            </ul>

            <ul className={styles.ulMusicaUm}>
                <img src={lembre_se_90} alt="musicCinco" className={styles.imgMini} />
                <p className={styles.txtFooter}><b>Plano Melhor / Edifica / Bom Estamos Aqui (Clipe Oficial) | Morada </b></p>
                <p className={styles.minCinco}><b>3:39</b></p>
            </ul>

            </body>
            
    
    )
}

export default Home