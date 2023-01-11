import styles from './Chat.module.css'
 import {BsFillChatFill} from 'react-icons/bs'
 import {FaTelegramPlane} from 'react-icons/fa'

function Chat(){
    return(

        <ul className={styles.body}>
            <p className={styles.header}><BsFillChatFill/>  <b> Live Chat</b></p>
            <p class={styles.message}><b><h4 className={styles.userFirst}>user1:</h4> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</b></p>
            <p class={styles.message}><b><h4 className={styles.user2}>user2: </h4><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</b></p>
            <p class={styles.message}><b><h4 className={styles.user1}>user1: </h4><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</b></p>
            <p class={styles.message}><b><h4 className={styles.user2}>user2: </h4> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</b></p>
            <p class={styles.message}><b><h4 className={styles.user1}>user1: </h4> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</b></p>
            <input type="text" placeholder="Digite algo" className={styles.input}/>
            <span className={styles.span}><FaTelegramPlane/></span>
            
        </ul>
                    
    
    )
}

export default Chat
