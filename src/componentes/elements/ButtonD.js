import styles from './ButtonD.module.css'

function ButtonD({text}){
    return(
        <div>
            
               <button className={styles.btn}> {text}</button>
            
        </div>
    )
}
export default ButtonD