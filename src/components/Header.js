import styled from "styled-components";
import logo from "../assets/logo.png"

export default function Logo() {
  return (

    <ContainerLogo className="header">
      <img src={logo} alt="logo" />
      <h1>ZapRecall</h1>
    </ContainerLogo>
  )
}

const ContainerLogo = styled.div`
  min-width: 375px;		
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 52px;
    height: 60px;
    margin-right: 20px;
  }

  h1 {
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    color: #ffffff;
  }

`