import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { format } from 'date-fns';

export default class PessoaTableRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td style={{color: `#012d51`, fontFamily: `Roboto Light`}}>{this.props.obj.id}</td>
                <td className="td-info">{this.props.obj.nome}</td>
                <td className="td-info">{this.props.obj.email}</td>
                <td className="td-info">{format(new Date(this.props.obj.nascimento),'dd/MM/yyyy')}</td>
                <td className="td-info">{this.props.obj.telefone}</td>
            </tr>
        );
    }
}