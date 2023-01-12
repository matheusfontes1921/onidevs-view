//importação de Routes para redirecionamento ao clicar no button
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

//importação de icons 
import {CiPause1} from 'react-icons/ci'
import {AiFillStepBackward} from 'react-icons/ai'
import {AiFillStepForward} from 'react-icons/ai'
import {BsArrowRepeat} from 'react-icons/bs'
import {FaRandom} from 'react-icons/fa'
import {BsFillVolumeUpFill} from 'react-icons/bs'
import {BsPlayFill} from 'react-icons/bs'

//importação de imagem utilizada no footer 
import e_tudo_sobre_voce from '../img/e_tudo_sobre_voce.jpeg'

//importação de classe e css utilizadas no componente atual
import styles from './FooterOriginal.module.css'

function FooterOriginal(){

    function play(){
        
        document.getElementById('play').style.display='none';
        document.getElementById('pause').style.display='block';
    }

    function pause(){
        document.getElementById('pause').style.display='none';
        document.getElementById('play').style.display='block';
    }

    return(
        <div>
            
            <ul className={styles.ul}>
                <img src={e_tudo_sobre_voce} alt="imgFooter" className={styles.img}/>
                    <p className={styles.txtFooter}><b>É Tudo Sobre Você | Morada (Clipe Oficial)</b></p>
                    <AiFillStepBackward className={styles.iconSkipBack} />
                    <CiPause1 id="play" onClick={play} className={styles.buttonFooter}/>
                    <BsPlayFill id="pause" onClick={pause} className={styles.buttonFooterDois}/>
                    <AiFillStepForward className={styles.iconSkipForward} />
                    <BsFillVolumeUpFill className={styles.iconSound} />
                    <FaRandom className={styles.iconRandom} />
                    <BsArrowRepeat className={styles.iconRepeat} />
            </ul>
            
        </div>

    )
}

export default FooterOriginal