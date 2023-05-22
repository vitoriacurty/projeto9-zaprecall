import { useState } from "react"
import styled from "styled-components"
import seta from "../assets/seta_play.png"
import setaVirar from "../assets/seta_virar.png"
import iconeErro from "../assets/icone_erro.png"
import iconeQuase from "../assets/icone_quase.png"
import iconeCerto from "../assets/icone_certo.png"
import { Green, Yellow, Red, Gray } from "../colors"

export default function CardPergunta({ index, card, contador, setContador }) {
  const [pergunta, setPergunta] = useState(false)
  const [resposta, setResposta] = useState(false)
  const [perguntaRespondida, setPerguntaRespondida] = useState(false)
  const [estado, setEstado] = useState("-") // não, quase, zap

  function flipCardQuestion() {
    if (!perguntaRespondida) {
      setPergunta(true)
    }
  }

  function flipCardAnswer() {
    setResposta(true)
  }

  function answerQuestion(estadoPergunta, color) {
    setPergunta(false)
    setPerguntaRespondida(true)
    setEstado(estadoPergunta)
    setContador(contador + 1) 
  }

  function render() {
    if (!pergunta) {
      return (
        <CardFechado data-test="flashcard" estado={estado}>
          <p data-test="flashcard-text">Pergunta {index}</p>
          <img data-test="play-btn" onClick={flipCardQuestion} src={handleIcon()} alt="ícone seta" />
        </CardFechado>
      )
    } else {
      if (!resposta) {
        return (
          <FlashcardPergunta data-test="flashcard">
            <p data-test="flashcard-text">{card.question}</p>
            <img data-test="turn-btn" onClick={flipCardAnswer} src={setaVirar} alt="ícone seta virar" />
          </FlashcardPergunta>
        )
      } else {
        return (
          <FlashcardPergunta data-test="flashcard">
            <p data-test="flashcard-text">{card.answer}</p>
            <Botoes>
              <Botao data-test="no-btn" cor={Red} onClick={() => answerQuestion("erro")}>Não lembrei</Botao>
              <Botao data-test="partial-btn" cor={Yellow} onClick={() => answerQuestion("quase")}>Quase não lembrei</Botao>
              <Botao data-test="zap-btn" cor={Green} onClick={() => answerQuestion("zap")}>Zap!</Botao>
            </Botoes>
          </FlashcardPergunta>
        )
      }
    }
  }

  function handleIcon() {
    let icon;

    if (estado === "erro") {
      icon = iconeErro;
    } else if (estado === "quase") {
      icon = iconeQuase;
    } else if (estado === "zap") {
      icon = iconeCerto;
    } else {
      icon = seta;
    }

    return icon;
  }

  return (
    <>
      {render()}
    </>
  )
}

const colorMap = {
  erro: Red,
  quase: Yellow,
  zap: Green,
  default: Gray
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
    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        
        color: ${props => colorMap[props.estado] || colorMap.default};
        text-decoration: ${props => props.estado === "-" ? "none" : "line-through"};
    }
`

const FlashcardPergunta = styled.div`
    width: 300px;
    height: 130px;
    margin: 12px;
    padding: 15px;
    background-color: #ffffd5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
    }
    img {
        position: absolute;
        bottom: 15px;
        right: 15px;
    }
`

const Botoes = styled.div`
    display: flex;
    justify-content: space-between;
`

const Botao = styled.button`
        width: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #ffffff;
        background-color: ${props => props.cor};
        border-radius: 5px;
        border: 1px solid ${props => props.cor};
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        padding: 5px;
`