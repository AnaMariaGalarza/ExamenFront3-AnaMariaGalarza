import React from 'react';

const Card = ({nombre, color}) => {

  return (
    <div class="card">
      <h3>Hola {nombre}!</h3>
      <h3>Sabemos que tu color favorito es:</h3>
      <div class="color" style={{backgroundColor: `${color}`}}>{color}</div>
    </div>
  );
};

export default Card;