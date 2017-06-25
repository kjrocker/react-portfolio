import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap'

const navbarStyle = {
  fontSize: '18px',
  padding: '5px 10%',
  color: '#ddd',
  marginBottom: '0px'
}



const Navigation = (props) => (
  <Navbar style={navbarStyle} fixed-top inverse staticTop collapseOnSelect>
    <Navbar.Toggle/>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1}><Link to='/'>Home</Link></NavItem>
        <NavItem eventKey={2}><Link to='/portfolio'>Projects</Link></NavItem>
        <NavItem eventKey={3}><Link to='/resume'>Resume</Link></NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Navigation;
