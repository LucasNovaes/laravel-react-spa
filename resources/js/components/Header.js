/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import React from 'react'
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import logo from '../img/logo-in8-dev.svg'; // with import
import iconNav from '../icons/hamburguer.svg'; // with import

    const Header = () => (
<Navbar collapseOnSelect expand="lg" fixed="top" className="container">
  <Navbar.Brand href="#">
    <img src={logo}
        width="100"
        height="30"
        className="d-inline-block align-top"
        alt="IN8 logo" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav">
    <span className="navbar-toggler-icon" style={{backgroundImage:`url(${iconNav})`}}></span>
  </Navbar.Toggle>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#create">cadastro</Nav.Link>
      <Nav.Link href="#list">lista</Nav.Link>
      <Nav.Link href="#footer">sobre mim</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )

    export default Header