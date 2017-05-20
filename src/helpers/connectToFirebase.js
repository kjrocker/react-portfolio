import React from 'react';
// import { CSSTransitionGroup } from 'react-transition-group';
import * as firebase from 'firebase';

const LoadingData = (props) => (
  <p className="text-center">Loading data...</p>
)

const connectToFirebase = (connect) => (BaseComponent) => {
  return class extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        firebase: null
      }
    }

    componentDidMount(){
      firebase.database().ref().once('value', (data) => {
        this.setState({ firebase: data.val() })
      })
    }

    render(){
      const renderedComponent =
        this.state.firebase != null ?
        <BaseComponent key={1} data={this.state.firebase} {...this.props}/> :
        <LoadingData key={2} {...this.props}/>
      return (
        <div>
          { renderedComponent }
        </div>
      )
    }
  }
}

export default connectToFirebase;
