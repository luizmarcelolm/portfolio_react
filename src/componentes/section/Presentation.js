import ButtonA from "../elements/ButtonA"
import styles from './Presentation.module.css'

function Presentation(){
    return(
        <div className={styles.presentation} id="Presentation">
            <h2><strong>Bem-vindo ao meu portfólio</strong></h2>
            <div className={styles.divNome}>
               <h1>Olá, eu sou Luiz Marcelo Mota</h1>
            </div>
            <div className={styles.div}>
                <p> Sou desenvolvedor Full Stack Júnior apaixonado por tecnologia e em constante evolução. Tenho conhecimento em ASP.NET MVC, C#, JavaScript, CSS, HTML, Bootstrap,
                SQL  Server, Git e GitHub,e estou em busca de novas oportunidades para colocar minhas habilidades em prática. Durante os meus estudos e projetos anteriores, 
                tive a oportunidade de desenvolver aplicações para a vida real que ajudaram as pessoas no seu dia-a-dia. Com minha experiência em ASP.NET MVC e C#, pude criar 
                aplicações web dinâmicas e eficientes, seguindo as melhores práticas e padrões de desenvolvimento utilizando, banco de dados com SQL Server, Razor View e o 
                Entity Framework durante o processo de criação da aplicação que estão disponíveis no meu portfólio. Além disso, minha habilidade em JavaScript, CSS, HTML e Bootstrap 
                me permitiu criar interfaces amigáveis ​​e responsivas, proporcionando os usuários uma experiência envolvente e intuitiva.</p>
            </div>
            <ButtonA link="https://www.linkedin.com/in/luizmarcelomota/" text='Conecte-se comigo!'/>
        </div>
    )
}
export default Presentation