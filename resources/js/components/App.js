import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.css';
import image from "../img/index-image.jpg";
import image2 from "../img/index-image-mobile.jpg";

import Content from "./content.component";
import EditPessoa from "./edit-pessoa.component";
import PessoaList from "./pessoas-listing.component";
import CreatePessoa from "./create-pessoa.component";
import MediaQuery from 'react-responsive'

    class App extends Component {
      render () {
        return (
          <BrowserRouter>
            <div className="logo bg-1">
              <Header />
              <Content />
              <CreatePessoa />
              <PessoaList />
              <Footer />
            </div>
          </BrowserRouter>
        )
      }
    }

    ReactDOM.render(<App />, document.getElementById('app'))