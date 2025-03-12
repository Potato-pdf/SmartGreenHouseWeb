import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getAll } from '../api/SmartGreenHouse.api';

const BackgroundWrapper = styled.div`
  background: url('/Paisaje.jpg') center/cover;
  padding: 2rem 0;
  margin-top: -10rem; /* Subimos el apartado para que el background tape hasta arriba */
`;

const StyledWrapper = styled.div`
  .main {
    display: grid;
    height: 50vmax;
    place-items: center;
    position: relative;
  }
  
  .card {
    width: 190px;
    height: 254px;
    background: rgba(211, 211, 211, 0.199);
    position: absolute;
    transition: 0.3s ease-in-out;
    cursor: pointer;
    box-shadow: 0px 0px 30px -10px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .card img {
    width: 100%;
    height: 60%;
    object-fit: cover;
  }
  
  .card .info {
    padding: 0.5rem;
    font-size: 0.85rem;
    color: #ffffff;
    text-align: center;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
  
  /* Los siguientes estilos mantienen la animación original */
  #c1 { background-color:rgb(178, 191, 153);}
  #c2 { background-color: #93A603; } 
  #c3 { background-color: #5A7302; }
  #c4 { background-color: #274001;} 
  
  .main:hover #c1 {
    transform: translateX(-100px) rotate(-40deg);
  }
  .main:hover #c2 {
    transform: translateX(-50px) rotate(-30deg);
  }
  .main:hover #c3 {
    transform: translateX(0) rotate(-20deg);
  }
  .main:hover #c4 {
    transform: translateX(50px) rotate(-10deg);
  }
  
  #c1:hover { transform: translateX(-150px) rotate(0deg) !important; }
  #c2:hover { transform: translateX(-100px) rotate(0deg) !important; }
  #c3:hover { transform: translateX(-50px) rotate(0deg) !important; }
  #c4:hover { transform: translateX(50px) rotate(0deg) !important; }
`;

export default function AnimatedGreenhouseCards() {
  const [greenhouses, setGreenhouses] = useState([]);

  useEffect(() => {
    async function loadGreenhouses() {
      try {
        const res = await getAll();
        setGreenhouses(res.data);
      } catch (error) {
        console.error("Error al cargar los invernaderos:", error);
      }
    }
    loadGreenhouses();
  }, []);

  const cardsData = greenhouses.slice(0, 4);

  if (cardsData.length < 4)
    return <div style={{ color: "white", textAlign: "center" }}>Cargando tarjetas...</div>;

  return (
    <BackgroundWrapper>
      <StyledWrapper>
        <div className="main">
          {cardsData.map((gh, index) => {
            const cardId = `c${index + 1}`;
            const imagen = gh.imagen.replace("http://localhost:8000/assets/", "");
            return (
              <div className="card" id={cardId} key={gh.id_invernadero}>
                <img src={`./public/${imagen}`} alt={gh.nombre} />
                <div className="info">
                  <strong>{gh.nombre}</strong>
                  <br />${gh.precio}
                </div>
              </div>
            );
          })}
        </div>
      </StyledWrapper>
    </BackgroundWrapper>
  );
}