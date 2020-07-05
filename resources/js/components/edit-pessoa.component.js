import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditPessoa extends Component {

  constructor(props) {
    super(props)

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

  componentDidMount() {
    axios.get('/api/pessoas/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          nome: res.data.nome,
          email: res.data.email,
          nascimento: res.data.nascimento
        });
      })
      .catch((error) => {
        console.log(error);
      })
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

    axios.put('/api/pessoas/' + this.props.match.params.id, pessoa)
      .then((res) => {
        console.log(res.data)
        console.log('Cadastrado com sucesso!')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Pessoa List 
    this.props.history.push('/pessoas-listing')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" value={this.state.nome} onChange={this.onChangePessoaNome} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangePessoaEmail} />
        </Form.Group>

        <Form.Group controlId="Nascimento">
          <Form.Label>Nascimento</Form.Label>
          <Form.Control type="date" value={this.state.nascimento} onChange={this.onChangePessoaNascimento} />
        </Form.Group>

        <Form.Group controlId="Telefone">
          <Form.Label>Telefone</Form.Label>
          <Form.Control type="date" value={this.state.telefone} onChange={this.onChangePessoaTelefone} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          ATUALIZAR CADASTRO
        </Button>
      </Form>
    </div>);
  }
}