import styles from './Cards.module.css'
import ButtonB from './ButtonB'
import {useState} from 'react'

function Cards({imagem, title, tech, description, repo, site  }){

    const [info, setInfo] = useState(false)

    function InfoOn(){
        setInfo(true)
    }
    function InfoOff(){
        setInfo(false)
    }

    return(
        <div  onMouseLeave={InfoOff}  className={styles.cards}>
           <a onMouseEnter={InfoOn} href={site} target="_blank">
               <img src={imagem}/>
           </a> 

           {info === true &&(
                <section>
                     <h3>{title}</h3>
                    <p>{description}</p>
                    <p>{tech}</p>
                    <ButtonB text="Acesse o repositório" link={repo}/>
                </section>  
            )}  
        </div>
    )
}
export default Cards