import React, { useState } from 'react';
import Card from './Card';

const Formulario = () => {

  const [nombre, setNombre] = useState('');
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [verifiedData, setVerifiedData] = useState(false);

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value.trim());
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/; // Validación de formato HEX con expresión regular

    if (nombre.length < 3 || nombre.startsWith(' ') || color.length < 6 || !regex.test(color)) {
      setError(true);
    } else {
      setError(false);
      setVerifiedData(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={nombre} placeholder="Ingresa tu nombre" onChange={handleNombreChange} />
        <input type="text" value={color} placeholder="Ingresa tu color favorito (formato HEX)" onChange={handleColorChange} />
        <button type="submit">ENVIAR</button>
      
      </form>
      {error && <h3 class="error" >Por favor chequea que la información sea correcta</h3>}
      {!error && verifiedData && <Card nombre={nombre} color={color}/>}
    </>
  );
};

export default Formulario;