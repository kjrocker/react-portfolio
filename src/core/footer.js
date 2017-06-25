import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap'

const FooterStyle = {
  fontSize: '14px',
  marginTop: '2%',
  marginBottom: '0px',
  color: '#f0f0f0',
  padding: '5px 10%'
}

class Footer extends Component {
  render(){
    return (
      <Navbar style={FooterStyle} inverse footer collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            Built with ReactJS, Powered by Firebase<br/>&copy; 2017 - Kevin Rocker
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem><a href="mailto:kevin.j.rocker@gmail.com">Email</a></NavItem>
            <NavItem><a href="https://github.com/kjrocker/react-portfolio" target="_blank">Source</a></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Footer;
