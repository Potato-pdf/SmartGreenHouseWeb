import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`;

const slideOut = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
`;

const StyledSidebar = styled.div.attrs(props => ({
  className: props.className
}))`
  position: fixed;
  left: 0;
  top: 0px;
  height: 100vh;
  width: 250px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  z-index: 1000;
  animation: ${props => props.isVisible ? slideIn : slideOut} 0.3s forwards;
  
  /* Contenedor de botones con scroll si hay muchos */
  .buttons-container {
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow-y: visible; /* Cambiado de auto a visible para evitar el recorte */
    padding: 1rem 0; /* Agregamos padding para evitar que el hover se corte */
  }
`;

const NavigationButton = styled.button`
  padding: 1.3em 2em;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  position: relative; /* Aseguramos que el botón mantenga su posición */
  z-index: 1; /* Aseguramos que el botón esté por encima */

  &:hover {
    background-color: #23c483;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
    z-index: 2; /* Aumentamos el z-index en hover para asegurar visibilidad */
  }

  &:active {
    transform: translateY(-1px);
  }
`;

const ToggleButton = styled.button`
  position: fixed;
  left: ${props => props.isOpen ? '260px' : '20px'};
  top: 20px;
  z-index: 1001;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
  transition: all 0.3s ease;

  /* Hamburger icon with white border */
  .hamburger {
    width: 30px;
    height: 3px;
    background: #000;
    position: relative;
    transition: all 0.3s ease;
    filter: drop-shadow(0 0 1px #fff);

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 30px;
      height: 3px;
      background: #000;
      transition: all 0.3s ease;
      filter: drop-shadow(0 0 1px #fff);
    }

    &::before { top: -8px; }
    &::after { top: 8px; }
  }

  ${props => props.isOpen && `
    .hamburger {
      background: transparent;
      
      &::before {
        transform: rotate(45deg);
        top: 0;
      }
      
      &::after {
        transform: rotate(-45deg);
        top: 0;
      }
    }
  `}
`;

export default function Sidebar() {
  const [isVisible, setIsVisible] = useState(false);

  // Eliminamos el useEffect del scroll y solo mantenemos
  // la lógica para cerrar cuando el header se despliegue
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 100) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <ToggleButton 
        isOpen={isVisible} 
        onClick={() => setIsVisible(!isVisible)}
      >
        <div className="hamburger" />
      </ToggleButton>
      
      <StyledSidebar isVisible={isVisible}>
        <div className="buttons-container">
          <NavigationButton onClick={() => window.location.href='#invernaderos'}>
            Invernaderos
          </NavigationButton>
          <NavigationButton onClick={() => window.location.href='#nosotros'}>
            Nosotros
          </NavigationButton>
          <NavigationButton onClick={() => window.location.href='#mission-vision'}>
            Misión
          </NavigationButton>
          <NavigationButton onClick={() => window.location.href='#mission-vision'}>
            Visión
          </NavigationButton>
        </div>
      </StyledSidebar>
    </>
  );
}