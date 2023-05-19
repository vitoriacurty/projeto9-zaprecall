import styled from "styled-components"
import seta from "../assets/seta_play.png"

export default function CardPergunta(props) {
    return (
        <CardFechado>
            <p>Pergunta {props.index}</p> 
            <img src={seta} alt="ícone seta" />
        </CardFechado>
    )
}

const CardFechado = styled.div`
    width: 300px;
    height: 35px;
    background-color: #ffffff;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        color: #333333;
    }
`