import React, { Component } from 'react';

const JobRow = (props) => {
  const { job } = props
  const topTextStyle = {
    fontSize: '16px'
  }
  const bottomTextStyle = {
    fontSize: '14px'
  }
  const itemParagraphs = job.details.map((item, i) => {
    return (
      <p key={i} style={ bottomTextStyle }>
        { item.text }
      </p>
    )
  })
  return (
    <div className="row">
      <div className="col-md-2">
        { job.companyName }
        <br/>
        { job.jobTitle }
        <br/>
        { job.startDate } through { job.endDate }
      </div>
      <div className="col-md-10">
        <p style={topTextStyle}>
          { job.summary }
        </p>
        { itemParagraphs }
      </div>
    </div>
  )
}

export default JobRow;
