// src/components/LoadingScreen.jsx
import React from "react";
import styled, { keyframes } from "styled-components";

const glow = keyframes`
  0% {
    box-shadow: 0 0 10px rgba(76, 175, 80, 0.3),
                0 0 20px rgba(76, 175, 80, 0.3),
                0 0 30px rgba(76, 175, 80, 0.3);
  }
  50% {
    box-shadow: 0 0 20px rgba(76, 175, 80, 0.5),
                0 0 40px rgba(76, 175, 80, 0.5),
                0 0 60px rgba(76, 175, 80, 0.5);
  }
  100% {
    box-shadow: 0 0 10px rgba(76, 175, 80, 0.3),
                0 0 20px rgba(76, 175, 80, 0.3),
                0 0 30px rgba(76, 175, 80, 0.3);
  }
`;

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.97);
  z-index: 9999;
`;

const LogoWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  padding: 10px;
  animation: ${glow} 2s ease-in-out infinite;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    background: rgba(76, 175, 80, 0.1);
    z-index: -1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 50%;
  }
`;

export default function LoadingScreen() {
  return (
    <LoadingContainer>
      <LogoWrapper>
        <img src="/SmartGreenHouse.jpg" alt="SmartGreenHouse Logo" />
      </LogoWrapper>
    </LoadingContainer>
  );
}