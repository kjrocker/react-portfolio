import React from 'react';
import { Link } from 'react-router';

const navbarStyle = {
  fontSize: '18px',
  padding: '5px 10%',
  height: '60px',
  color: '#ddd',
}

const Navbar = (props) => (
  <nav style={navbarStyle} className="navbar navbar-inverse navbar-fixed-top">
    <div className="container-fluid">
      <ul className="nav navbar-nav navbar-right">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/portfolio'>Projects</Link></li>
        <li><Link to='/resume'>Resume</Link></li>
      </ul>
    </div>
  </nav>
)

export default Navbar;
