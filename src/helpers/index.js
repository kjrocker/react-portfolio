import React, { Component } from 'react';
import * as firebase from 'firebase';

const _pipe = (f, g) => (...args) => g(f(...args))
const pipe = (...fns) => fns.reduce(_pipe)

const connectToFirebase(Component, ...sections) {
  const dbConnection = firebase.database()

  class ConnectComponent extends React.Component {
    constructor(props) {
      super(props)
      const tmp = {}
      sections.map((str) => tmp[str] = null)
      this.state = tmp
    }

    assignState(key, val) {
      const tmp = {}
      tmp[key] = val
      this.setState(tmp)
    }

    componentWillMount() {
      sections.map((key) => {
        dbConnection.ref(key).once('value', (snap) => {
          this.assignState(key, snap.val())
        })
      })
    }

    render() {
      return (
        <div>
          { Object.values(this.state).every((x) => x === null) ? null :  <Component {...this.props} data={this.state} /> }
        </div>
      )
    }
  }
}
export default { pipe };
