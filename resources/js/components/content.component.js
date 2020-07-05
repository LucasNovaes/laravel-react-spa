import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import CreatePessoa from "./create-pessoa.component";

export default class Content extends Component {
    constructor(props) {
      super(props)
    }
  render() {


    return (<div className="container">
      <section style={{height: 885}}>
        <h2 className="title">
          ESTÁGIO 
        </h2>
        <h3 className="sub-title"> PROVA DE SELEÇÃO</h3>
      </section>
    </div>);
  }
}

