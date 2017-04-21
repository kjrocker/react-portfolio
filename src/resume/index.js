import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import Content from './markdown'

const Profile = (props) => (
  <div className="row">
    <div className="col-md-2">Profile:</div>
    <div className="col-md-10"><ReactMarkdown source={ Content.profile }/></div>
  </div>
)

const JobHistory = (props) => (
  <div>
    <h3>Experience</h3>
    <ReactMarkdown source={ Content.levvel }/>
    <br/>
    <ReactMarkdown source={ Content.pcls }/>
    <br/>
    <ReactMarkdown source={ Content.unc }/>
  </div>
)

const Education = (props) => (
  <div>
    <h3>Education</h3>
    Tech Talent South - Code Immersion Course, September 2016<br/>
    Tech Talent South - Javascript Application Development Course, September 2016<br/>
    University of North Carolina at Chapel Hill - Biology B.A., Computer Science Minor
  </div>
)

const Resume = (props) => (
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <h1 className="page-header">Resume and History</h1>
      </div>
    </div>
    <Profile/>
    <JobHistory/>
    <Education/>
  </div>
)

export default Resume;
