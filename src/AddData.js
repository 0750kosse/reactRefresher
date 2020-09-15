import React, { Component } from 'react';

class AddData extends Component {

  state = {
    name: null,
    age: null,
    belt: null

  }

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state)

  }

  changeHandler = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" onChange={this.changeHandler}></input>

          <label htmlFor="age" >Age</label>
          <input type="text" id="age" onChange={this.changeHandler}></input>

          <label htmlFor="belt">Belt</label>
          <input type="text" id="belt" onChange={this.changeHandler}></input>

          <button type="submit">Add data</button>
        </form>
      </div>
    )
  }
}

export default AddData; 