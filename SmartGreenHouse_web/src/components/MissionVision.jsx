import React from 'react';
import styled from 'styled-components';
import Card from './MissionVisionCard';

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 2rem 0;
`;

export default function MissionVision() {
  return (
    <Container>
      <Card 
         title="Misión" 
         hoverText="Nuestra misión es proveer soluciones innovadoras para el sector de invernaderos, combinando tecnología y diseño profesional." 
      />
      <Card 
         title="Visión" 
         hoverText="Ser líderes en innovación y diseño en el sector de invernaderos, marcando tendencias profesionales." 
      />
    </Container>
  );
}