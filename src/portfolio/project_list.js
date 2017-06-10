import React, { Component } from 'react';
import { chunk } from 'lodash';

import { pipe, connectToDatabase } from '../helpers';
import ProjectItem from './project_item';

const transformProjects = (projects) =>
  Object.values(projects)

const filterProjects = (filterSet) => (projects) =>
  projects.filter(p => filterSet.includes(p.id))

const sortProjects = (sortOrder) => (projects) =>
  projects.concat().sort((p1, p2) => sortOrder.indexOf(p1.id) - sortOrder.indexOf(p2.id))

const chunkProjects = (projects) =>
  chunk(projects, 3)

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

    const filterByList = filterProjects(props.data.projects.projectOrder)
    const sortByList = sortProjects(props.data.projects.projectOrder)

    this.state = {
      filterFn: pipe(transformProjects, filterByList, sortByList, chunkProjects)
    }
  }

  render() {
    const projects = this.props.data.projects.projectList
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
