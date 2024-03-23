import styles from './Footer.module.css'
import { FaGithubSquare, FaLinkedin  } from "react-icons/fa";

function Footer(){
    return(
        <div className={styles.footer}>
              <ul> 
                <li><a href='https://www.linkedin.com/in/luizmarcelomota/'><FaLinkedin size={40}/></a></li>
                <li><a href='https://github.com/luizmarcelolm'><FaGithubSquare size={40}/></a></li>
            </ul>
            <p>luizmarcelolm@hotmail.com</p>
            <p>Luiz Marcelo Mota © 2024</p>
        </div>
    )
}
export default Footer 