// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import LoadingScreen from "./components/LoadingScreen";
import { Navigation } from "./components/Navigation";
import styled from 'styled-components';
import Footer from "./components/Footer";
import GreenhouseDetail from "./components/GreenhouseDetail";
import NosotrosTerminal from "./components/NosotrosTerminal";
import MissionVision from "./components/MissionVision";

// Modificamos Section para admitir un fondo oscuro mediante prop "dark"
const Section = styled.section`
  padding: 150px 2rem 4rem; /* espacio para separarlo del header fijo */
  min-height: 100vh;
  background-color: ${props => props.dark ? "#1f1f1f" : "#FFFFFF"};
  color: ${props => props.dark ? "#ffffff" : "#333333"};
`;

const AppWrapper = styled.div`
  /* Fondo global blanco */
  background-color: #FFFFFF;
  min-height: 100vh;
  padding-top: 8rem; /* Espacio para el header fijo */
`;

function AppContent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <AppWrapper>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/HomePage" element={<HomePage />} />
      </Routes>
      
      {/* Sección de Invernaderos (fondo oscuro para preservar el estilo de GreenhouseDetail) */}
      <Section id="invernaderos" dark>
        <h2 style={{color: "#ffffff"}}>Invernaderos</h2>
        <GreenhouseDetail />
      </Section>
      
      {/* Sección de Nosotros (fondo blanco) */}
      <Section id="nosotros">
        <h2>Nosotros</h2>
        <NosotrosTerminal />
      </Section>
      
      {/* Sección de Misión & Visión (fondo blanco) */}
      <Section id="mission-vision">
        <h2>Misión & Visión</h2>
        <MissionVision />
      </Section>
      
      <Footer />
    </AppWrapper>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}