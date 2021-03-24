import React from "react";
import logo from "../../assets/logo.svg";
import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="dt money"></img>
        <button type="button">Nova Transação</button>
      </Content>
    </Container>
  );
}
