import javascript from '../../image/Skills/javascript.svg'
import css from '../../image/Skills/css.svg'
import html from '../../image/Skills/html.svg'
import react from '../../image/Skills/react.svg'
import csharp from '../../image/Skills/csharp.png'
import net from '../../image/Skills/net.png'
import bootstrap from '../../image/Skills/bootstrap.png'
import styles from './Skills.module.css'

function Skills(){
    return(
        <div className={styles.skills} id="Skills">
          <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
          <div>
               <img src={javascript}/>
               <img src={html}/>
               <img src={css}/>
               <img src={react}/>
               <img src={csharp}/>
               <img src={net}/>
               <img src={bootstrap}/>
          </div>
        </div>
    )
}
export default Skills