import React, { Component } from 'react';

const iconStyle = {
  width: '52px',
  height: '52px',
  padding: '5px'
}

const ContactIcon = ({ image, title, url }) => (
  <a href={url} target='_top'>
    <img src={image} alt={title} style={iconStyle}/>
  </a>
)

class ContactInfo extends Component {
  render() {
    const urls = {
      gmail: "mailto:kevin.j.rocker@gmail.com",
      github: "https://www.github.com",
      twitter: 'https://www.twitter.com',
      linkedin: 'https://www.linkedin.com'
    }
    return (
      <div className="col-sm-4">
        <h2>Contact Me</h2>
        <address>
          <strong>Physical Presence</strong>
          <br/>Charlotte, NC 28210<br/>
        </address>
        <address>
          <strong>Online Presence</strong><br/>
          <ContactIcon image='icon_github.png' title='Github' url={urls.github}/>
          <ContactIcon image='icon_gmail.png' title='Github' url={urls.gmail}/>
          <ContactIcon image='icon_twitter.png' title='Github' url={urls.twitter}/>
          <ContactIcon image='icon_linkedin.png' title='Github' url={urls.linkedin}/>
        </address>
      </div>
    )
  }
}

export default ContactInfo;
