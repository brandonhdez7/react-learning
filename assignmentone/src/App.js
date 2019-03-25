import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

class App extends Component {

  state = {
    persons: [
      {name: 'Max', age: 29 }
    ]
}




  render() {
    return (
      <div className="App">
        <UserInput />
        <UserOutput userName="Max"/>
        <UserOutput userName="Max"/>
        <UserOutput userName="Max"/>
      </div>
    );
  }
}

export default App;
