import React, { Component } from 'react'

class Blurb extends Component {
  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <div className="col-sm-4">
        <h2>{ this.props.blurb.title }</h2>
        <p>{ this.props.blurb.body }</p>
      </div>
    )
  }
}

export default Blurb;
