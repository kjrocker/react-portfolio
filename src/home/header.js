import React, { Component } from 'react';

const headerStyle = {
  height: '400px',
  background: `url(post_01.jpg) center center no-repeat scroll`,
  WebkitBackgroundSize: 'cover',
  MozBackgroundSize: 'cover',
  backgroundSize: 'cover',
  OBackgroundSize: 'cover'
};

const titleStyle = {
  textShadow: '0 0 10px #000',
  color: '#f0f0f0'
}

const HomeHeader = (props) => (
  <header style={headerStyle} className="business-header">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h1 style={titleStyle} className="tagline">Kevin Rocker's HQ</h1>
        </div>
      </div>
    </div>
  </header>
)

export default HomeHeader;
