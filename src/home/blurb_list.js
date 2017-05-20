import React, { Component } from 'react'
import _ from 'lodash';
import * as firebase from 'firebase'

import Blurb from './blurb';

const EmptyBlurbList = (props) => (
  <div className="row col-md-12 text-center">Loading...</div>
)

class BlurbList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      blurbs: []
    }
  }

  componentDidMount() {
    firebase
      .database()
      .ref('blurbs')
      .once('value')
      .then((snap) => {
        this.setState({
          blurbs: snap.val()
        })
      }
    )
  }
  
  render() {
    const { blurbs } = this.state
    const blurbList = blurbs.length == 0
      ? <EmptyBlurbList/>
      : blurbs.map((s, i) => <Blurb key={i} blurb={s}/>)

    return (
      <div className="row">
        { blurbList }
      </div>
    )
  }
}

export default BlurbList;
