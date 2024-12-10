
import React, { useState } from "react";
import BirdList from "./BirdList";

const App = () => {
  // Datos fijos de nombre y carnet
  const nombre = "Brenda Samara Escobar Avila";
  const carnet = "23005735";
  
  const [showBirds, setShowBirds] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowBirds(true);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {!showBirds ? (
        <form onSubmit={handleSubmit}>
          <h1>Inicio</h1>
          <p>Datos del Usuario:</p>
          <p><strong>Nombre:</strong> {nombre}</p>
          <p><strong>Carnet:</strong> {carnet}</p>
          <button type="submit">Cargar</button>
        </form>
      ) : (
        <BirdList />
      )}
    </div>
  );
};

export default App;
