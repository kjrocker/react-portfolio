import React, { Component } from 'react'

class ProjectItem extends Component {
  render() {
    const { project } = this.props
    return (
      <div className="col-sm-4">
        <h2>{ project.title }</h2>
        <p>{ project.body }</p>
      </div>
    )
  }
}

export default ProjectItem;
