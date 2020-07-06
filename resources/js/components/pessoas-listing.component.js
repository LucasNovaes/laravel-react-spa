import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import PessoaTableRow from './PessoaTableRow';
import arrow from '../icons/topo-pag.svg'; // with import

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
    return (<div id="list" className="table-wrapper container p-5">
      <h3 className="sub-title text-center custom-color-blue">LISTA DE CADASTRO</h3>
      <Table bordered>
        <thead>
          <tr>
            <th className="font-weight-bold th-info">#</th>
            <th className="font-weight-bold th-info">Nome</th>
            <th className="font-weight-bold th-info">Email</th>
            <th className="font-weight-bold th-info">Nascimento</th>
            <th className="font-weight-bold th-info">Telefone</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <a className="float-right" href="#content">
        <img src={arrow}
          width="100"
          height="30"
          className="d-inline-block align-top"
          alt="header anchor" />
      </a>
    </div>);
  }
}