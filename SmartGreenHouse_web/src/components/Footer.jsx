import React from 'react';
import styled from 'styled-components';
import GitHubButton from './GitHubButton';
import GmailButton from './GmailButton';
import DiscordButton from './DiscordButton';

const FooterWrapper = styled.footer`
  background-color: #000000;
  padding: 2rem;
  text-align: center;
  color: #ffffff;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <h3>Conéctate con Nosotros</h3>
      <ButtonGroup>
        <GitHubButton />
        <GmailButton />
        <DiscordButton />
      </ButtonGroup>
    </FooterWrapper>
  );
}
