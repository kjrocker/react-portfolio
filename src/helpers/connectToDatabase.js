import React from 'react';
// import { CSSTransitionGroup } from 'react-transition-group';
// import * as firebase from 'firebase';
import * as _ from 'lodash';
import database from './database';

const LoadingData = (props) => (
  <p className="text-center">Loading data...</p>
)

const connectToDatabase = (...keys) => (BaseComponent) => {
  return class extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        data: null
      }
    }

    componentDidMount(){
      this.setState({ data: _.pick(database, keys) })
    }

    render(){
      const renderedComponent =
        this.state.data != null ?
        <BaseComponent key={1} data={this.state.data} {...this.props}/> :
        <LoadingData key={2} {...this.props}/>
      return (
        <div>
          { renderedComponent }
        </div>
      )
    }
  }
}

export default connectToDatabase;
