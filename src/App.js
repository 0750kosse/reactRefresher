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

  addData = (data) => {
    data.id = Math.random().toFixed(2)
    const newData = [...this.state.ninjas, data]
    this.setState({
      ninjas: newData
    })
  }

  dltNinja = (id) => {
    const updatedList = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    })
    this.setState({
      ninjas: updatedList
    })
  }

  render() {
    return (
      <div className="App" >
        <h1>My first react app</h1>
        <p>Welcome</p>
        <Ninjas
          ninjas={this.state.ninjas}
          dlt={this.dltNinja}
        />
        <AddData addData={this.addData} />
      </div>
    );
  }
}

export default App;
