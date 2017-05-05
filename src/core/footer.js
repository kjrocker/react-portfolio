import React, { Component } from 'react';

const FooterStyle = {
  fontSize: '18px',
  marginBottom: '0px',
  color: '#f0f0f0',
  padding: '5px 10%'
}

class Footer extends Component {
  render(){
    return (
      <nav style={FooterStyle} className="navbar navbar-inverse navbar-footer footer">
        <div className="container">
          <ul className="nav navbar-nav">
            <li>Built with ReactJS and Firebase<br/>&copy; 2017 - Kevin Rocker</li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="mailto:kevin.j.rocker@gmail.com">Email</a></li>
            <li><a href="https://github.com/kjrocker/react-portfolio" target="_blank">Source</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Footer;
