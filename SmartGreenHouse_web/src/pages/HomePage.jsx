import React from 'react';
import styled from 'styled-components';
import AnimatedGreenhouseCards from "../components/AnimatedGreenhouseCards";

const HomeContainer = styled.div`
  padding-top: 2rem;
  width: 100%;
  min-height: 100%;
  background: transparent;
`;

export function HomePage() {
  return (
    <HomeContainer>
      {/* Apartado animado de invernaderos con fondo Paisaje.jpg */}
      <AnimatedGreenhouseCards />
      {/* Aquí agregarías los demás apartados (ej. GreenhouseDetail)
          que, según tus instrucciones, deben dejarse como están */}
    </HomeContainer>
  );
}
