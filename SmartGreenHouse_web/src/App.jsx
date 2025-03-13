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
import Sidebar from "./components/Sidebar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ThemeProvider, useTheme } from './context/ThemeContext'; // Añadido useTheme

const AppWrapper = styled.div`
  min-height: 100vh;
  padding-top: 8rem;
  background-color: #f5f7f5; // Light grayish green that complements your theme
`;

const Section = styled.section`
  padding: 150px 2rem 4rem;
  min-height: 100vh;
  background: transparent;
`;

function AppContent() {
  const { isDarkMode, setIsDarkMode } = useTheme();
  const [loading, setLoading] = useState(true); // Añadido estado loading
  
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.target.id === 'invernaderos') {
            setIsDarkMode(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.3 }
    );

    const greenhouseSection = document.getElementById('invernaderos');
    if (greenhouseSection) {
      observer.observe(greenhouseSection);
    }

    return () => observer.disconnect();
  }, [setIsDarkMode]); // Añadido setIsDarkMode como dependencia

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <AppWrapper isDarkMode={isDarkMode}>
      <Navigation isDarkMode={isDarkMode} />
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/HomePage" element={<HomePage />} />
      </Routes>
      
      <Section id="invernaderos" isDarkMode={isDarkMode}>
        <h2>Invernaderos</h2>
        <GreenhouseDetail isDarkMode={isDarkMode} />
      </Section>
      
      <Section id="nosotros">
        <h2>Nosotros</h2>
        <NosotrosTerminal />
      </Section>
      
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
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </BrowserRouter>
  );
}