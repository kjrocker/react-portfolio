import React, { Component } from 'react';
import SegmentList from './segment_list';
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
      <SegmentList/>
    </div>
  </div>
)

export default Home;
