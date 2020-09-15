import React, { Component } from 'react';

class Ninjas extends Component {
  render() {
    const { ninjas } = this.props;
    return (
      <div>
        {ninjas.map(ninja =>
          <div key={ninja.id} className="ninjaList">
            <div>{ninja.name}</div>
            <div>{ninja.age}</div>
            <div>{ninja.belt}</div>
          </div>
        )
        }</div>
    )
  }
}
export default Ninjas;


