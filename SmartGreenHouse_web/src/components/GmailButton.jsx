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

export default function GmailButton() {
  return (
    <StyledWrapper>
      <button className="btn">
        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', verticalAlign: 'middle' }} role="img" fill="#0092E4" viewBox="0 0 24 24" height="40px" width="40px">
          <path d="M21.456 10.154c.123.659.19 1.348.19 2.067c0 5.624-3.764 9.623-9.449 9.623A9.841 9.841 0 0 1 2.353 12a9.841 9.841 0 0 1 9.844-9.844c2.658 0 4.879.978 6.583 2.566l-2.775 2.775V7.49c-1.033-.984-2.344-1.489-3.808-1.489c-3.248 0-5.888 2.744-5.888 5.993c0 3.248 2.64 5.998 5.888 5.998c2.947 0 4.953-1.685 5.365-3.999h-5.365v-3.839h9.26Z" />
        </svg>
      </button>
    </StyledWrapper>
  );
}