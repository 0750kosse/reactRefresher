import React from 'react';

const Ninjas = ({ ninjas }) => {
  return (
    <div>
      {ninjas.map(ninja =>
        <div key={ninja.id} className="ninjaList">
          <div>{ninja.name}</div>
          <div>{ninja.age}</div>
          <div>{ninja.belt}</div>
        </div>
      )}
    </div>
  )
}

export default Ninjas;


