import { useEffect, useState } from "react";
import { getAll } from "../api/SmartGreenHouse.api";
import styled from 'styled-components';

const DetailContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
`;

const DetailCard = styled.div`
  background: var(--secondary);
  border: 1px solid var(--accent);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(152, 251, 152, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: scale(1.01);
    box-shadow: 0 12px 30px rgba(152, 251, 152, 0.3);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    display: block;
  }
  
  &::after {
    content: attr(data-price);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    color: var(--primary);
    font-size: 1.5rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::after {
    opacity: 1;
  }
`;

const DetailContent = styled.div`
  padding: 1.5rem;
  background-color: var(--background);
  color: var(--text);
  
  h2 {
    margin: 0;
    font-size: 1.5rem;
    color: var(--primary);
  }
  
  p {
    margin: 0.5rem 0 0;
    font-size: 1rem;
    line-height: 1.4;
  }
`;

export default function GreenhouseDetail() {
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

  return (
    <DetailContainer>
      {greenhouses.map(greenhouse => {
        const imagen = greenhouse.imagen.replace("http://localhost:8000/assets/", "");
        return (
          <DetailCard key={greenhouse.id_invernadero}>
            <ImageContainer data-price={`Precio: $${greenhouse.precio}`}>
              <img src={`./public/${imagen}`} alt={greenhouse.nombre} />
            </ImageContainer>
            <DetailContent>
              <h2>{greenhouse.nombre}</h2>
              <p>{greenhouse.descripcion}</p>
            </DetailContent>
          </DetailCard>
        );
      })}
    </DetailContainer>
  );
}
