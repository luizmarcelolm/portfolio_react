import styles from './Navbar.module.css'
import { FaGithubSquare, FaLinkedin  } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';


function Navbar(){
    return(
        <div className={styles.navbar}>
            <ul>
                <li className={styles.menu}><Nav.Link className={styles.item} href="#Presentation">Apresentação</Nav.Link></li>
                <li className={styles.menu}><Nav.Link className={styles.item} href="#Skills">Habilidades</Nav.Link></li>
                <li className={styles.menu}><Nav.Link className={styles.item} href="#Projects">Projetos</Nav.Link></li>
            </ul>
            <ul> 
                <li><a href='https://www.linkedin.com/in/luizmarcelomota/'><FaLinkedin size={40}/></a></li>
                <li><a href='https://github.com/luizmarcelolm'><FaGithubSquare size={40}/></a></li>
            </ul>
        </div>
    )
}
export default Navbar