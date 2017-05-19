import React, { Component } from 'react'

class ProjectItem extends Component {
  render() {
    const { project } = this.props
    return (
      <div className="col-sm-4">
        <div className="text-center">
          <img src={ project.imageUrl || 'project_placeholder.png' }
               className="img-responsive rounded" alt={ project.title }/>
        </div>
        <h2>{ project.title }  <small><a href={ project.sourceUrl } target="_blank">(Source)</a></small></h2>
        <p>{ project.body }</p>
      </div>
    )
  }
}

export default ProjectItem;
