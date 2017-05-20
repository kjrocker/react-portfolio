import React from 'react';
import * as firebase from 'firebase';

const _pipe = (f, g) => (...args) => g(f(...args))
const pipe = (...fns) => fns.reduce(_pipe)

function connectToFirebase(Component, ...sections) {
  const dbConnection = firebase.database()

  return class ConnectComponent extends React.Component {
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
          { Object.values(this.state).every((x) => x === null) ? null :  <Component data={this.state} {...this.props} /> }
        </div>
      )
    }
  }
}
export { connectToFirebase, pipe };
