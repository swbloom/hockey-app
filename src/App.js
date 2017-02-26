import React, { Component } from 'react';
import './App.css';
import TeamsContainer from './components/containers/TeamsContainer.jsx';
import CreateTeam from './components/containers/CreateTeam.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateTeam />
        <TeamsContainer />
      </div>
    );
  }
}

export default App;
