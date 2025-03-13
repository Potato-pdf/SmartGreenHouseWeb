import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const fullText = "Somos DeepCode, un equipo de desarrollo conformado por estudiantes apasionados por la tecnología, dedicados a proveer soluciones innovadoras para el sector de invernaderos. Nuestra misión es transformar el futuro de la agricultura con creatividad y tecnología.";

const StyledWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.05);
  position: relative;
  overflow: hidden;
  background: white;  // Solid white background

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, #4CAF50, #81C784);
  }

  .content {
    position: relative;
    z-index: 1;
  }

  .highlight {
    color: #4CAF50;
    font-weight: 600;
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
    text-align: justify;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeIn 0.5s forwards;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const StatBox = styled.div`
  background: white;  // Solid white background
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    color: #4CAF50;
    font-size: 2.5rem;
    margin: 0;
  }

  p {
    color: #666;
    font-size: 1rem;
    margin: 0.5rem 0 0;
    opacity: 1;
    transform: none;
  }
`;

export default function NosotrosTerminal() {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const totalScroll = 300;
      const progress = Math.min(scrollPosition / totalScroll, 1);
      const charsToShow = Math.floor(progress * fullText.length);
      setDisplayedText(fullText.slice(0, charsToShow));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <StyledWrapper>
      <div className="content">
        <h2>Nosotros</h2>
        <p>{displayedText}</p>
        <TeamGrid>
          <StatBox>
            <h3>100+</h3>
            <p>Proyectos Completados</p>
          </StatBox>
          <StatBox>
            <h3>50+</h3>
            <p>Clientes Satisfechos</p>
          </StatBox>
          <StatBox>
            <h3>24/7</h3>
            <p>Soporte Técnico</p>
          </StatBox>
        </TeamGrid>
      </div>
    </StyledWrapper>
  );
}