import styles from './Navbar.module.css'
import { FaGithubSquare, FaLinkedin  } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';
import ButtonC from "../elements/ButtonC"


function Navbar(){
    return(
        <div className={styles.navbar}>
            <ul>
                <li className={styles.menu}><Nav.Link className={styles.item} href="#Presentation">Apresentação</Nav.Link></li>
                <li className={styles.menu}><Nav.Link className={styles.item} href="#Skills">Habilidades</Nav.Link></li>
                <li className={styles.menu}><Nav.Link className={styles.item} href="#Projects">Projetos</Nav.Link></li>
            </ul>
            <ul> 
                <ButtonC link="https://drive.google.com/file/d/1_rFpevxiDgadApU4lWSdGIdET9fNMEJu/view?usp=sharing" text='Baixe meu CV'/>
                <li><a href='https://www.linkedin.com/in/luizmarcelomota/' target="_blank"><FaLinkedin size={40}/></a></li>
                <li><a href='https://github.com/luizmarcelolm' target="_blank"><FaGithubSquare size={40}/></a></li>
            </ul>
        </div>
    )
}
export default Navbar