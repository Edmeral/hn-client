import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar.js'

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Navbar />
        </div>
         {this.props.children}
      </div>
    );
  }
}

export default App;
