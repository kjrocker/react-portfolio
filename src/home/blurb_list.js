import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firebaseConnect, isLoaded, isEmpty, dataToJS } from 'react-redux-firebase'
import _ from 'lodash';

import Blurb from './blurb';

const EmptyBlurbList = (props) => (
  <div className="row col-md-12 text-center">Loading...</div>
)

class BlurbList extends Component {
  render() {
    const { blurbs } = this.props
    const blurbList = (!isLoaded(blurbs) || isEmpty(blurbs))
      ? <EmptyBlurbList/>
      : blurbs.map((s, i) => <Blurb key={i} blurb={s}/>)

    return (
      <div className="row">
        { blurbList }
      </div>
    )
  }
}

const connectedList = firebaseConnect([
  '/blurbs'
])(BlurbList)

export default connect(
  ({ firebase }) => ({
    blurbs: dataToJS(firebase, 'blurbs'),
  })
)(connectedList)
