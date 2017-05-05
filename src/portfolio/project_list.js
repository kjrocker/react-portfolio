import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firebaseConnect, isLoaded, isEmpty, dataToJS } from 'react-redux-firebase'
import _ from 'lodash';

import ProjectItem from './project_item';

class ProjectRow extends Component {
  render() {
    return (
      <div className="row">
        { this.props.projects.map((project, i) => (<ProjectItem key={i} project={project}/>)) }
      </div>
    )
  }
}

class ProjectList extends Component {
  listBody = (projects) => {
    if (!isLoaded(projects)) {
      return 'Loading'
    } else if (isEmpty(projects)) {
      return 'No Items!'
    } else {
      return this.projectRows(projects).map((p, i) => (
        <ProjectRow key={i} projects={p}/>
      ))
    }
  }

  projectRows = (projects) => {
    return _.chunk(Object.values(projects).filter((p) => p.visible), 3)
  }

  render() {
    return (
      <div>
        { this.listBody(this.props.projects) }
      </div>
    )
  }
}

const connectedList = firebaseConnect([
  '/projects'
])(ProjectList)

export default connect(
  ({ firebase }) => ({
    projects: dataToJS(firebase, 'projects'),
  })
)(connectedList)
