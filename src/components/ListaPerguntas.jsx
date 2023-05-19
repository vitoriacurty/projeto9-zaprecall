import styled from "styled-components"
import CardPergunta from "./CardPergunta"
import logo from "../assets/logo.png"
import BarraConcluidos from "./BarraConcluidos"


export default function ListaPerguntas() {
    return (
        <Pergunta>
            <ContainerHeader>
                <img src={logo} alt="logo" />
                <h1>ZapRecall</h1>
            </ContainerHeader>

            <CardPergunta />
            <CardPergunta />
            <CardPergunta />
            <CardPergunta />

            <BarraConcluidos />

        </Pergunta>
    )
}

const Pergunta = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: #FB6B6B
    margin: 0;
    margin-right: auto; 
    padding: 0px;
    padding-bottom: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ContainerHeader = styled.div`
    display: flex;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 20px;
    img {
        width: 52px;
    }
    h1 {
        font-family: 'Righteous';
        font-style: normal;
        font-weigth: 400;
        font-size: 36px;
        line-height: 45px;
        color: #ffffff;
        margin-left: 20px;
    }
`