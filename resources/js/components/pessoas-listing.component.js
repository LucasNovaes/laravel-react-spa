import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import PessoaTableRow from './PessoaTableRow';


export default class PessoaList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      pessoas: []
    };
  }

  componentDidMount() {
    axios.get('/api/pessoas/')
      .then(res => {
        this.setState({
          pessoas: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.pessoas.map((res, i) => {
      return <PessoaTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div id="list" className="table-wrapper container">
      <h3 className="sub-title text-center">LISTA DE CADASTRO</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Nascimento</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}