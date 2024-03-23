import styles from './Projects.module.css'
import Card from '../elements/Cards'
import ButtonA from "../elements/ButtonA"
import imagem1 from '../../image/Projects/imagem1.png'
import imagem2 from '../../image/Projects/imagem2.png'
import imagem3 from '../../image/Projects/imagem3.png'
import imagem4 from '../../image/Projects/imagem4.png'
import imagem5 from '../../image/Projects/imagem5.png'
import imagem6 from '../../image/Projects/imagem6.png'
import imagem7 from '../../image/Projects/imagem7.png'
import imagem8 from '../../image/Projects/imagem8.png'
import imagem9 from '../../image/Projects/imagem9.png'

function Projects(){
    return(
        <div className={styles.projects} id="Projects">
          <h2>Meus projetos</h2>
          <ButtonA link="https://www.linkedin.com/in/luizmarcelomota/" text='Meus repositórios'/>
          <Card
             imagem={imagem1}
             title="TELA CEP/CLIMA"
             description="O objetivo desse projeto foi consumir API de CEP e Clima, e criar uma tela onde o usuário irá informar nome, email, cep, latitude, longitude, e a aplicação irá retornar os dados conforme informações digitadas." 
             tech="Javascript - css - html - react - api"
             repo="https://github.com/luizmarcelolm/tela_api" 
             site="https://tela-api.vercel.app/" />

          <Card 
             imagem={imagem2}
             title="LandingPage"
             description="Landing page criada do curso FullStack da escola DNC com objetivo de fixar o aprendizado das aulas." 
             tech="Javascript - css - html"
             repo="https://github.com/luizmarcelolm/Desafio_Landing_Page_Arquitetura" 
             site="https://landingpagearquiteturadesafio.netlify.app/" />

          <Card 
             imagem={imagem3}
             title="Calculadora IMC"
             description="Aplicação utilizando react para calcular o IMC de acordo com os dados inseridos nos campos de altura e peso. Após inserir esses dados a aplicação irá fazer o cálculo e informar com uma mensagem na tela se o IMC esta de acordo para o peso e altura digitados." 
             tech="Javascript - css - html - react"
             repo="https://github.com/luizmarcelolm/calculo_imc" 
             site="https://luizmarcelolm.github.io/calculo_imc/" />

         <Card 
             imagem={imagem4}
             title="Calculadora de piso online"
             description="Aplicação utilizando react para calcular o IMC de acordo com os dados inseridos nos campos de altura e peso. Após inserir esses dados a aplicação irá fazer o cálculo e informar com uma mensagem na tela se o IMC esta de acordo para o peso e altura digitados." 
             tech="Asp.net mvc - css - html - azure - Library IronPdf - Bootstrap"
             repo="https://github.com/luizmarcelolm/CalculadoraOnlineDePiso" 
             site="https://github.com/luizmarcelolm/CalculadoraOnlineDePiso" />

         <Card 
             imagem={imagem5}
             title="Alimentador automático de peixe"
             description="Aplicação utilizando react para calcular o IMC de acordo com os dados inseridos nos campos de altura e peso. Após inserir esses dados a aplicação irá fazer o cálculo e informar com uma mensagem na tela se o IMC esta de acordo para o peso e altura digitados." 
             tech="C++ - arduino - impressão 3d - automação"
             repo="https://github.com/luizmarcelolm/Alimentador_Peixe_V3" 
             site="https://github.com/luizmarcelolm/Alimentador_Peixe_V3" />

          <Card 
             imagem={imagem6}
             title="Aplicação WEB/API para cadastro"
             description="Nesse projeto foi utilizado asp.net mvc e o entity framework para criação das views e banco de dados no mySQL. A API é conectada com o banco e a WEB consome as informações dela." 
             tech="Asp.net mvc - c# - css - bootstrap"
             repo="https://github.com/luizmarcelolm/CadastroDeContatos_WEB_API" 
             site="https://github.com/luizmarcelolm/CadastroDeContatos_WEB_API" />   
             
          <Card 
             imagem={imagem7}
             title="Tela de login"
             description="Aplicação criada com React para cadastro e login do usuário utilizando localStorage para salvar informações. Os campos email e login são validados utilizando regex para não terem erros e segurança na criação da senha. Assim que o usuário realizar o cadastro e efetuar a senha, será direcionado para tela de logado no sitema." 
             tech="Javascript - css - html - react"
             repo="https://github.com/luizmarcelolm/login" 
             site="https://luizmarcelolm.github.io/login/" />   

          <Card 
             imagem={imagem8}
             title="Previsão do tempo"
             description="Projeto criado com react que utiliza API OpenWeatherMap para previsão do tempo de sua cidade. O usúario irá digitar o nome de sua cidade e a aplicação irá acessar a API para obter esses dados e mostrar na tela a previsão de acordo com a cidade inserida no campo." 
             tech="Javascript - css - html"
             repo="https://github.com/luizmarcelolm/previsao_tempo" 
             site="https://previsao-tempo-one.vercel.app/" />   

          <Card 
             imagem={imagem9}
             title="Lista de tarefas"
             description="Nesse projeto foi criado uma lista de tarefas online, utilizaNdo Javascript, CSS e HTML, para criação de uma lista onde você poderá adicionar e excluir as tarefas de acordo coma sua necessidade. A aplicação foi desenvolvida com responsividade para ser utilizada em celulares, tablets e notebooks." 
             tech="Javascript - css - html"
             repo="https://github.com/luizmarcelolm/Lista-de-tarefas" 
             site="https://luizmarcelolm.github.io/Lista-de-tarefas/" />   

        </div>
    )
}
export default Projects