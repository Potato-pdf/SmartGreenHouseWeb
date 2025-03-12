import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Texto completo que se mostrará en el terminal
const fullText =
  "Somos DeepCode, un equipo de desarrollo conformado por estudiantes apasionados por la tecnología, dedicados a proveer soluciones innovadoras para el sector de invernaderos. Nuestra misión es transformar el futuro de la agricultura con creatividad y tecnología.";

const StyledWrapper = styled.div`
  background-color: #FFFFFF; /* Fondo blanco */
  padding: 2rem;
  max-width: 800px;
  margin: 2rem auto;
  font-family: monospace;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  line-height: 1.5;
  font-size: 1rem;
  text-align: justify;
`;

export default function NosotrosTerminal() {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Ajustamos el valor total de scroll a 300 (valor a modificar según experiencia)
      const totalScroll = 300;
      const progress = Math.min(scrollPosition / totalScroll, 1);
      const charsToShow = Math.floor(progress * fullText.length);
      setDisplayedText(fullText.slice(0, charsToShow));
    };

    window.addEventListener("scroll", handleScroll);
    // Llamamos una vez para actualizar en función del scroll inicial
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <StyledWrapper>
      <p>{displayedText}</p>
    </StyledWrapper>
  );
}