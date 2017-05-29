import React from 'react';

const JobRow = (props) => {
  const { job } = props
  const itemParagraphs = job.items.map((item, i) => {
    return (
      <p key={i} className="right-info">
        { item }
      </p>
    )
  })
  return (
    <div className="row">
      <hr style={ { borderTop: '1px solid #0f0f0f' } }/>
      <div className="col-md-2">
        <span className="left-head"><strong>{ job.company }</strong></span>
        <p className="left-info">{ job.title }</p>
        <p className="left-info">{ job.start } through { job.end }</p>
      </div>
      <div className="col-md-10">
        <p className="right-head">
          { job.summary }
        </p>
        { itemParagraphs }
      </div>
    </div>
  )
}

export default JobRow;
