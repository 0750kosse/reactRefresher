import React, { Component } from 'react';
import './App.css';
import Ninjas from './Ninjas';
import AddData from './AddData'

class App extends Component {
  state = {
    ninjas: [
      { id: 1, name: "Ryu", age: "20", belt: "red" },
      { id: 2, name: "LIU", age: "40", belt: "yellow" },
      { id: 3, name: "KIO", age: "60", belt: "black" }
    ]
  }

  render() {
    return (
      <div className="App" >
        <h1>My first react app</h1>
        <p>Welcome</p>
        <Ninjas
          ninjas={this.state.ninjas}
        />
        <AddData />
      </div>
    );
  }
}

export default App;
