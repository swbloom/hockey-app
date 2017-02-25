import React, { Component } from 'react';
import './App.css';
import TeamsContainer from './components/containers/TeamsContainer.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TeamsContainer />
      </div>
    );
  }
}

export default App;
