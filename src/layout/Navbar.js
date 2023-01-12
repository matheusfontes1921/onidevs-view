import styles from './Navbar.module.css'
import {TbSettings} from 'react-icons/tb'
import {BsList} from 'react-icons/bs'

function Navbar(){
    return(
       <div>
        <ul className={styles.social_list}>
            <p className={styles.listen}><b>Listen Party</b></p>
            <BsList className={styles.list} />
            <button type="button" className={styles.button}>Adicionar playlist</button>
            <li className={styles.item}>
            <TbSettings/>
            </li>           
            <button type="button" className={styles.button}>Sair</button>
        </ul>
    </div>
    )
}

export default Navbar
