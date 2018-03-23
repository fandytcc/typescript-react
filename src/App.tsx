import * as React from 'react';
import Header from './Header';
import Description from './Description';
import './App.css';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Header name="REACT" />
        </header>
        <p className="App-intro">
          <Description countBy={3} />
        </p>
      </div>
    );
  }
}

export default App;
