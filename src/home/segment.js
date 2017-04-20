import React, { Component } from 'react'

class Segment extends Component {
  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <div className="col-sm-4">
        <h2>{ this.props.segment.title }</h2>
        <p>{ this.props.segment.body }</p>
      </div>
    )
  }
}

export default Segment;
