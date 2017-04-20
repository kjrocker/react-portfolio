import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firebaseConnect, isLoaded, isEmpty, dataToJS } from 'react-redux-firebase'
import _ from 'lodash';

import Segment from './segment';

class SegmentList extends Component {
  listBody = (segments) => {
    if (!isLoaded(segments)) {
      return 'Loading'
    } else if (isEmpty(segments)) {
      return 'No Items!'
    } else {
      return this.chosenSegmentKeys(segments).map((key) => (
        <Segment key={key} segment={segments[key]}/>
      ))
    }
  }

  chosenSegmentKeys = (allSegments) => {
    return _.sampleSize(Object.keys(allSegments), 3).sort()
  }

  render() {
    return (
      <div className="row">
        { this.listBody(this.props.segments) }
      </div>
    )
  }
}

const connectedList = firebaseConnect([
  '/segments'
])(SegmentList)

export default connect(
  ({ firebase }) => ({
    segments: dataToJS(firebase, 'segments'),
  })
)(connectedList)
