import CardPergunta from "./CardPergunta";
import seta from "../assets/seta_play.png"
import styled from "styled-components";

export default function ListaPerguntas () {
    return (
        <Pergunta>
            <p>Pergunta 1</p>
            <img src={seta} />
            
        </Pergunta>
    )
}

const Pergunta = styled.div`
    width: 300px;
    height: 65px;
    margin-left: auto;
    margin-right: auto; 
    margin-top: 50px;
    margin-bottom: 25px;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
 
    
    img {
    width: 20px;
    height: 23px;
    margin: 20px;
    cursor: pointer;
    }

    p {
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #333333;
    margin: 20px;

    }
`