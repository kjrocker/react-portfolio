import React, { Component } from 'react';
import _ from 'lodash';

import { pipe, connectToDatabase } from '../helpers';
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
      filterFn: pipe(transformProjects, filterProjects, chunkProjects)
    }
  }

  render() {
    const { projects } = this.props.data
    const listBody =
      this.state.filterFn(projects).map((p, i) => (
        <ProjectRow key={i} projects={p}/>
      ))
    return (
      <div className="projects">
        { listBody }
      </div>
    )
  }
}

export default connectToDatabase('projects')(ProjectList);
