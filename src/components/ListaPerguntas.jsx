import styled from "styled-components"
import CardPergunta from "./CardPergunta"
import logo from "../assets/logo.png"
import BarraConcluidos from "./BarraConcluidos"
import mock from "../mock"
import { useState } from "react"

export default function ListaPerguntas() {

    const [contador, setContador] = useState(0)

    return (
        <Pergunta>
            <ContainerHeader>
                <img src={logo} alt="logo" />
                <h1>ZapRecall</h1>
            </ContainerHeader>

            {mock.map((card, i) => (
                <CardPergunta
                    index={i + 1}
                    key={card.question}
                    card={card}
                    contador={contador}
                    setContador={setContador}
                />
            ))}

            <BarraConcluidos concluidos={mock.length} contador={contador}/>

        </Pergunta>
    )
}

const Pergunta = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: #FB6B6B
    margin: 0;
    margin-right: auto; 
    margin-bottom: 100px;
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