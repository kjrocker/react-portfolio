import React from 'react';

// Possible HOC version of a resume row
const ResumeRowComponent = () => (BaseComponent) => {
  return (
    <div className="row">
      <hr style={ { borderTop: '1px solid #0f0f0f' } }/>
      <BaseComponent/>
    </div>
  )
}

const ResumeRow = ({ leftText, rightText }) => {
  return (
    <div className="row">
      <hr style={ { borderTop: '1px solid #0f0f0f' } }/>
      <div className="col-md-2">
        <span className="left-head"><strong>{ leftText }</strong></span> 
      </div>
      <div className="col-md-10">
        <p className="right-head">{ rightText }</p>
      </div>
    </div>
  )
}

export default ResumeRow;
