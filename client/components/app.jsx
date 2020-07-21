import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #1b1e1b;
  color: #a1a7b2;
  padding-bottom: 3%;
`
const LegalTitle = styled.h2`
  font-family: 'Roboto';
  padding-top: 5%;
  padding-bottom: 1%;
  padding-left: 1%;
`
const Statement = styled.em`
  font-family: 'Roboto';
  font-size: 16px;
  line-height: 1.35;
  font-style: italic;
  padding-left: 5px;
  text-align: center;
`

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statement: `© 2020 Windler - Kovacek. Published and distributed by Ferry - Johnston Group Tempore et optio quia quibusdam eligendi. Ea tempore dolores. Delectus dicta animi facere officiis. Kiehn - Corkery and Sons All rights reserved.`
    }
  }

  render() {
    return (
      <Container>
        <LegalTitle>LEGAL</LegalTitle>
        <Statement>{this.state.statement}</Statement>
      </Container>
    )
  }
};