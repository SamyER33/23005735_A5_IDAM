
import React, { useEffect, useState } from "react";
import { fetchBirdData } from "./api";

const BirdList = () => {
  const [birds, setBirds] = useState([]);

  useEffect(() => {
    const loadBirds = async () => {
      const data = await fetchBirdData();
      setBirds(data);
    };
    loadBirds();
  }, []);

  return (
    <div>
      <h1>Aves de Guatemala</h1>
      {birds.length === 0 ? (
        <p>Cargando...</p>
      ) : (
        birds.map((bird, index) => (
          <div key={index} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
            <img src={bird.sono.small} alt="Sonograma" />
            <p><strong>Familia:</strong> {bird.gen}</p>
            <p><strong>Nombre:</strong> {bird.en}</p>
            <p><strong>Ubicación:</strong> {bird.loc}</p>
            <p><strong>Descubridor:</strong> {bird.rec}</p>
            <audio controls>
              <source src={bird.file} type="audio/mpeg" />
              Tu navegador no soporta audio.
            </audio>
          </div>
        ))
      )}
    </div>
  );
};

export default BirdList;
