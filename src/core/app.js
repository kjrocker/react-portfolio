import React, { Component } from 'react';
import Navbar from './navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <div className="">
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default App;
