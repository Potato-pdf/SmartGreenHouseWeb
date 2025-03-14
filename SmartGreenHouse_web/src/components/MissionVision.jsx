import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 4rem;
  padding: 4rem 2rem;
  padding-top: 0;
  max-width: 1400px;
  margin: 0 auto;
`;

const Section = styled.div`
  border-radius: 20px;
  padding: 3rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
  background: white;  // Solid white background instead of transparent

  &:hover {
    transform: translateY(-10px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: ${props => props.gradient || 'linear-gradient(90deg, #4CAF50, #81C784)'};
  }

  h2 {
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 2rem;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 60px;
      height: 4px;
      background: #4CAF50;
      border-radius: 2px;
    }
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    color: #34495e;
    margin: 0;
  }

  .icon {
    font-size: 3rem;
    color: #4CAF50;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 2rem 0 0;

    li {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
      font-size: 1.1rem;
      color: #34495e;

      &::before {
        content: '→';
        color: #4CAF50;
        margin-right: 1rem;
        font-weight: bold;
      }
    }
  }
`;

export default function MissionVision() {
  return (
    <Container>
      <Section gradient="linear-gradient(90deg, #4CAF50, #81C784)">
        <h2>Misión</h2>
        <p>
          Proporcionar soluciones tecnológicas innovadoras y sostenibles para el sector 
          agrícola, transformando la manera en que se gestionan los invernaderos 
          mediante la implementación de tecnologías avanzadas y sistemas inteligentes.
        </p>
        <ul>
          <li>Innovación continua en soluciones agrícolas</li>
          <li>Compromiso con la sostenibilidad</li>
          <li>Excelencia en servicio al cliente</li>
          <li>Desarrollo tecnológico de vanguardia</li>
        </ul>
      </Section>

      <Section gradient="linear-gradient(90deg, #81C784, #A5D6A7)">
        <h2>Visión</h2>
        <p>
          Ser reconocidos globalmente como líderes en la transformación digital 
          del sector agrícola, estableciendo nuevos estándares en la gestión 
          inteligente de invernaderos y contribuyendo al desarrollo de una 
          agricultura más eficiente y sostenible.
        </p>
        <ul>
          <li>Liderazgo en innovación agrícola</li>
          <li>Expansión global de soluciones</li>
          <li>Impacto positivo en la agricultura</li>
          <li>Referentes en tecnología verde</li>
        </ul>
      </Section>
    </Container>
  );
}