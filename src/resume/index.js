import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Profile, Skills, Education} from './profile'
import JobRow from './job_row'
import { connectToDatabase } from '../helpers'

class JobTable extends React.Component {
  render() {
    const { jobs } = this.props.data
    const jobRows = jobs.map((j, i) =>
      <JobRow key={i} job={j}/>)
    return (
      <div className="col-md-12 job-history">
        <Profile/>
        { jobRows }
        <Skills/>
        <Education/>
      </div>
    )
  }
}

const ConnectedJobTable = connectToDatabase('jobs')(JobTable)

const Resume = (props) => (
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <h1 className="page-header">Resume and History</h1>
      </div>
    </div>
    <ConnectedJobTable/>
  </div>
)

export default Resume;
