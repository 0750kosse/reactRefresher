import React from 'react';

const Ninjas = ({ ninjas, dlt }) => {



  const ninjaList = ninjas.map(ninja => {
    return ninja.age > 3 ? (
      <div key={ninja.id} className="ninjaList">
        <div>{ninja.name}</div>
        <div>{ninja.age}</div>
        <div>{ninja.belt}</div>
        <button type="submit" onClick={() => { dlt(ninja.id) }}>Delete</button>
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


