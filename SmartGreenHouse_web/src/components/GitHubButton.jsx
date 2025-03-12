import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  .btn {
    display: grid;
    place-items: center;
    background: #ffffff;
    padding: 1.4em;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    border: none;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .btn:hover {
    transform: translateY(0.5em);
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  }
  
  .btn svg {
    transition: transform 0.3s;
    fill: #98FB98;
  }
  
  .btn:hover svg {
    transform: scale(0.9);
  }
`;

export default function GitHubButton() {
  return (
    <StyledWrapper>
      <button className="btn">
        <svg width={40} height={40} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12,2.2467A10,10,0,0,0,8.84,21.7342c.5.0875.69-.2125.69-.475,0-.2375-.0125-1.8625-.0125-1.8625C7,19.8592,6.35,18.7842,6.15,18.2217A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.0125-.6625A2.0012,2.0012,0,0,1,6.65,17.1717a2.1374,2.1374,0,0,0,2.9125.825A2.1038,2.1038,0,0,1,10.2,16.6592c-2.225-.25-4.55-1.1125-4.55-4.9375a3.8919,3.8919,0,0,1,1.025-2.6875,3.5937,3.5937,0,0,1,.1-2.65S7.05,7.56,8.96,8.855a9.4275,9.4275,0,0,1,5,0c1.91-1.3,2.75-1.025,2.75-1.025a3.5932,3.5932,0,0,1,.1,2.65,3.87,3.87,0,0,1,1.025,2.6875c0,3.8375-2.3375,4.6875-4.5625,4.9375a2.3681,2.3681,0,0,1,.675,1.85c0,1.3375-.0125,2.4125-.0125,2.75,0,.2625.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" />
        </svg>
      </button>
    </StyledWrapper>
  );
}