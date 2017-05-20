import React, { Component } from 'react'
import _ from 'lodash';

import { connectToDatabase } from '../helpers'
import Blurb from './blurb';

const EmptyBlurbList = (props) => (
  <div className="row col-md-12 text-center">Loading...</div>
)

class BlurbList extends Component {
  render() {
    const { blurbs } = this.props.data
    const blurbList = blurbs.length === 0
      ? <EmptyBlurbList/>
      : blurbs.map((s, i) => <Blurb key={i} blurb={s}/>)

    return (
      <div className="row">
        { blurbList }
      </div>
    )
  }
}

export default connectToDatabase('blurbs')(BlurbList);
