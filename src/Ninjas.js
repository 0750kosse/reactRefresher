import React from 'react';

const Ninjas = ({ ninjas }) => {
  const ninjaList = ninjas.map(ninja => {
    return ninja.age > 10 ? (
      <div key={ninja.id} className="ninjaList">
        <div>{ninja.name}</div>
        <div>{ninja.age}</div>
        <div>{ninja.belt}</div>
      </div>
    ) : null
  })
  return (
    <div className="ninjaList">
      {ninjaList}
    </div>
  )
}

export default Ninjas;


