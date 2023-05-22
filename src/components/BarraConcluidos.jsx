import styled from "styled-components"

export default function BarraConcluidos({concluidos,contador}) {

    return (
        <Contador>
            <p data-test="footer">{contador}/{concluidos} CONCLUÍDOS</p>
        </Contador>
    )
}

const Contador = styled.div`
    width: 100vw;
    min-height: 70px;
    bottom: 0;
    background: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    
    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
    }
`