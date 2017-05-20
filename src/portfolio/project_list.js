import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firebaseConnect, isLoaded, isEmpty, dataToJS } from 'react-redux-firebase'
import _ from 'lodash';

import ProjectItem from './project_item';

const transformProjects = (projects) => Object.values(projects)
const filterProjects = (projects) => projects.filter(p => p.visible)
const chunkProjects = (projects) => _.chunk(projects, 3)

class ProjectRow extends Component {
  render() {
    return (
      <div className="row">
        { this.props.projects.map((project, i) => <ProjectItem key={i} project={project}/>) }
      </div>
    )
  }
}

class ProjectList extends Component {
  constructor(props){
    super(props)

    this.state = {
      filterFn: _.flow([transformProjects, filterProjects, chunkProjects])
    }
  }

  render() {
    const { projects } = this.props
    const listBody = (!isLoaded(projects) || isEmpty(projects)) ? "Loading..." :
      this.state.filterFn(projects).map((p, i) => (
        <ProjectRow key={i} projects={p}/>
      ))
    return (
      <div>
        { listBody }
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
