import React from 'react';
import styled from 'styled-components';
import $ from 'jquery';

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
    this.getProductId = this.getProductId.bind(this);
  }

  getProductId() {
    let path = window.location.pathname;
    let arrayPath = path.split('/');
    let product_id;
    arrayPath.forEach(str => {
      if (!isNaN(parseInt(str))) {
        product_id = parseInt(str);
      } else {
        //console.log('String is not a parseable number')
      }
    })
    return product_id;
  }

  componentDidMount() {
    let product_id = this.getProductId();
    console.log('***LEGAL****')
    console.log(product_id);
    if(product_id) {
      $.ajax(`http://localhost:3007/api/${product_id}`, {
      method: 'GET',
      success: (data) => {
        //console.log(`REQUEST SUCCESS: ${data}`);
        this.setState({
          statement: data
        })
      },
      error: (err) => {
        console.log(err);
        console.log('Client Request Error LEGAL')
      }
      })
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