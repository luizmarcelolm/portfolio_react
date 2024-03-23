import styles from './Cards.module.css'
import ButtonB from './ButtonB'

function Cards({imagem, title, tech, description, repo, site  }){
    return(
        <div className={styles.cards}>
           <a href={site}>
               <img src={imagem}/>
           </a> 
           <section>
               <h3>{title}</h3>
               <p>{description}</p>
               <p>{tech}</p>
               <ButtonB text="Acesse o repositório" link={repo}/>
           </section>    
        </div>
    )
}
export default Cards