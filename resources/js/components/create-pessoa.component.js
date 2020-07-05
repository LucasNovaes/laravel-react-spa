import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import PessoaList from './pessoas-listing.component';
import Swal from 'sweetalert2';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import 'mdbreact/dist/css/mdb.css'


export default class CreatePessoa extends Component {
      constructor(props) {
    super(props)

    // Setting up functions
    this.onChangePessoaNome = this.onChangePessoaNome.bind(this);
    this.onChangePessoaEmail = this.onChangePessoaEmail.bind(this);
    this.onChangePessoaNascimento = this.onChangePessoaNascimento.bind(this);
    this.onChangePessoaTelefone = this.onChangePessoaTelefone.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      nome: '',
      nascimento: '',
      email: '',
      telefone: ''
    }
  }

  onChangePessoaNome(e) {
    this.setState({nome: e.target.value})
  }

  onChangePessoaNascimento(e) {
    this.setState({nascimento: e.target.value})
  }

  onChangePessoaEmail(e) {
    this.setState({email: e.target.value})
  }

  onChangePessoaTelefone(e) {
    this.setState({telefone: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()
     const pessoa = {
      nome: this.state.nome,
      nascimento: this.state.nascimento,
      email: this.state.email,
      telefone: this.state.telefone
    };
    axios.post('/api/pessoas/', pessoa)
      .then(res => console.log(res.data));
    Swal.fire(
  'Bom trabalho!',
  'Cadastro efetuado com sucesso!',
  'success'
)

    this.setState({nome: '', nascimento: '', email: '', telefone: ''})
  }

  render() {
    return (
      <MDBContainer style={{backgroundColor: "#29abe2"}}>
      <div id="create" className="form-wrapper">
      <h3 className="sub-title text-center">CADASTRO</h3>
      <form className="container col-md-4" onSubmit={this.onSubmit}>
        <MDBRow> 
            <MDBCol>
                  <MDBInput name="nome" label="Nome" type="text" value={this.state.nome} onChange={this.onChangePessoaNome}></MDBInput>
            </MDBCol>
        </MDBRow>

        <MDBRow>
            <MDBCol>
                        <MDBInput name="email" label="Email" type="text" value={this.state.email} onChange={this.onChangePessoaEmail}></MDBInput>
            </MDBCol>  
        </MDBRow>

        <MDBRow>
            <MDBCol>
                <MDBInput name="nascimento" label="Nascimento" type="date" value={this.state.nascimento} onChange={this.onChangePessoaNascimento}></MDBInput>
            </MDBCol>  
        </MDBRow>
            
        <MDBRow>
            <MDBCol>
                <MDBInput name="telefone" label="Telefone" type="tel" value={this.state.telefone} onChange={this.onChangePessoaTelefone}></MDBInput>
            </MDBCol>  
        </MDBRow>
        <MDBRow className="justify-content-md-center">
            <MDBCol md="6">
                <MDBBtn color="primary" size="lg" type="submit">
                  CADASTRAR
                </MDBBtn>
            </MDBCol>  
        </MDBRow>
      </form>
    </div>
    </MDBContainer>);
  }
}

