import styles from './ButtonC.module.css'

function ButtonC({text, link}){
    return(
        <div>
            <a href={link} target="_blank">
               <button className={styles.btn}> {text}</button>
            </a> 
        </div>
    )
}
export default ButtonC