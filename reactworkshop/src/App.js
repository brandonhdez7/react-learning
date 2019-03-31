import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
        persons: [
          {name: 'Max', age: 29 },
          {name: 'Manu', age: 20 },
          {name: 'Stephanie', age: 30 }
        ],
        otherState: 'some other value'
    }

   switchNameHandler = (newName) => {
      // console.log('was clicked on')
      // this.state.persons[0].name = 'maximilian' //dont do this
      this.setState({
        persons: [
          {name: newName, age: 29 },
          {name: 'Manu', age: 20 },
          {name: 'Stephanie', age: 27 }
        ]
      })
    }

    nameChangedHandler = (event) =>{
      this.setState({
        persons: [
          {name: 'Max', age: 29 },
          {name: event.target.value, age: 20 },
          {name: 'Stephanie', age: 30 }
        ]
      })
    }


  render(){
    
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>im a react app</h1>
        <p>this is really working</p>
        <button style={style} onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!!!')}
          changed={this.nameChangedHandler}> My Hobbies: Racing 
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div> 
    );
  }
}

export default App;