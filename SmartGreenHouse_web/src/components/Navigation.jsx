import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  50% { border-color: transparent; }
`;

const typewriter = keyframes`
  0% { width: 0; }
  50% { width: 600px; }
  100% { width: 0; }
`;

const headerDisassemble = keyframes`
  from { transform: translateY(0) rotate(0deg); opacity: 1; }
  to { transform: translateY(-100%) rotate(-10deg); opacity: 0; }
`;

const headerAssemble = keyframes`
  from { transform: translateY(-100%) rotate(-10deg); opacity: 0; }
  to { transform: translateY(0) rotate(0deg); opacity: 1; }
`;

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: ${({ hovered }) => (hovered ? '#111' : 'transparent')};
  transition: background 0.3s ease;
  padding: 1rem 0;
  z-index: 50;
  animation: ${({ hide }) => (hide ? headerDisassemble : headerAssemble)} 0.5s forwards;
`;

const TitleContainer = styled.div`
  width: 600px;
  margin: 0 auto;
  text-align: center;
`;

const HeaderTitle = styled.h1`
  font-family: 'Space Mono', monospace;
  font-size: 4rem;
  color: ${({ hovered }) => (hovered ? '#ffffff' : 'var(--text)')};
  white-space: nowrap;
  overflow: hidden;
  border-right: 4px solid ${({ hovered }) => (hovered ? '#ffffff' : 'var(--text)')};
  width: 600px;
  margin: 0 auto;
  animation: ${typewriter} 4s steps(15, end) infinite, ${blink} 0.75s step-end infinite;
  `;


const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
`;

// Componente animado para cada enlace
const AnimatedLink = ({ href, text }) => (
  <LinkWrapper href={href}>
    <span className="actual-text">&nbsp;{text}&nbsp;</span>
    <span className="hover-text" aria-hidden="true">&nbsp;{text}&nbsp;</span>
  </LinkWrapper>
);

const LinkWrapper = styled.a`
  text-decoration: none;
  background: transparent;
  border: none;
  cursor: pointer;
  --border-right: 6px;
  --animation-color: #4CAF50; /* Verde tenue para la animación */
  --fs-size: 1.2rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-size: var(--fs-size);
  font-family: "Arial", sans-serif;
  position: relative;
  display: inline-block;
  
  /* Estado estático: relleno blanco y trazo negro */
  color: white;
  -webkit-text-stroke: 1px black;

  .hover-text {
    position: absolute;
    top: 0;
    left: 0;
    color: var(--animation-color);
    width: 0%;
    white-space: nowrap;
    border-right: var(--border-right) solid var(--animation-color);
    overflow: hidden;
    transition: width 0.5s;
    -webkit-text-stroke: 1px var(--animation-color);
  }

  &:hover .hover-text {
    width: 100%;
    filter: drop-shadow(0 0 23px var(--animation-color));
  }

  .actual-text {
    visibility: visible;
  }

  /* Al hacer hover, el color del enlace cambia al verde definido */
  &:hover {
    color: var(--animation-color);
  }
`;

export function Navigation() {
  const [hovered, setHovered] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      if (currentScrollY - lastScrollY > 5) {
        setHideHeader(true);
      } else if (lastScrollY - currentScrollY > 5) {
        setHideHeader(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <NavBar
      hovered={hovered}
      hide={hideHeader}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <TitleContainer>
        <HeaderTitle hovered={hovered}>SmartGreenHouse</HeaderTitle>
      </TitleContainer>
      <NavLinks>
        <AnimatedLink href="#invernaderos" text="Invernaderos" />
        <AnimatedLink href="#nosotros" text="Nosotros" />
        <AnimatedLink href="#mission-vision" text="Misión" />
        <AnimatedLink href="#mission-vision" text="Visión" />
      </NavLinks>
    </NavBar>
  );
}
