import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class PessoaTableRow extends Component {
    constructor(props) {
        super(props);
        this.deletePessoa = this.deletePessoa.bind(this);
    }

    deletePessoa() {
        axios.delete('/api/pessoas/' + this.props.obj.id)
            .then((res) => {
                console.log('Pessoa removed deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }
    render() {
        return (
            <tr>
                <td>{this.props.obj.nome}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.nascimento}</td>
                <td>{this.props.obj.telefone}</td>
            </tr>
        );
    }
}