import React, { Component } from 'react';
import BlurbList from './blurb_list';
import HomeHeader from './header';
import Biography from './biography'
import ContactInfo from './contact'

const Home = (props) => (
  <div>
    <HomeHeader/>
    <div className="container">
      <div className="row">
        <Biography/>
        <ContactInfo/>
      </div>
      <BlurbList/>
    </div>
  </div>
)

export default Home;
