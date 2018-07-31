import React, { Component } from 'react';
import './App.css';
import Pelis from './components/Pelis'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Pelis />
      </div>
    );
  }
}

export default App;
