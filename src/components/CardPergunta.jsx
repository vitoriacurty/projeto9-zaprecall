import { useState } from "react"
import styled from "styled-components"
import seta from "../assets/seta_play.png"
import setaVirar from "../assets/seta_virar.png"

export default function CardPergunta({ index, card }) {
  const [pergunta, setPergunta] = useState(false)
  const [resposta, setResposta] = useState(false)
  const [perguntaRespondida, setPerguntaRespondida] = useState(false)

  function flipCardQuestion() {
    if (!perguntaRespondida) {
      setPergunta(true)
    }
  }

  function flipCardAnswer() {
    setResposta(true)
  }

  function answerQuestion() {
    setPergunta(false)
    setPerguntaRespondida(true)
  }

  function render() {
    if (!pergunta) {
      return (
        <CardFechado>
          <p>Pergunta {index}</p>
          <img onClick={flipCardQuestion} src={seta} alt="ícone seta" />
        </CardFechado>
      )
    } else {
      if (!resposta) {
        return (
          <FlashcardPergunta>
            <p>{card.question}</p>
            <img onClick={flipCardAnswer} src={setaVirar} alt="ícone seta virar" />
          </FlashcardPergunta>
        )
      } else {
        return (
          <FlashcardPergunta>
            <p>{card.answer}</p>
            <Botoes>
              <button onClick={answerQuestion}>Não lembrei</button>
              <button onClick={answerQuestion}>Quase não lembrei</button>
              <button onClick={answerQuestion}>Zap!</button>
            </Botoes>
          </FlashcardPergunta>
        )
      }
    }
  }

  return (
    <>
    {render()}
    </>
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
    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        color: #333333;
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
    button {
        width: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #ffffff;
        background-color: green;
        border-radius: 5px;
        border: 1px solid green;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        padding: 5px;
    }
`