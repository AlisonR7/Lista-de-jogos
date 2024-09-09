import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background: linear-gradient(135deg, #1e1e1e, #3a3a3a);
  color: #f5f5f5;
  padding: 20px;
  font-family: 'Press Start 2P', cursive;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 0;
  color: #ffcc00;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin: 10px 0 30px;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const StyledLink = styled(Link)`
  display: block;
  padding: 10px 20px;
  font-size: 1.2rem;
  text-decoration: none;
  color: #fff;
  background: #007bff;
  border-radius: 5px;
  transition: background 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  &:hover {
    background: #0056b3;
    transform: scale(1.05);
  }
`;

const HomePage: React.FC = () => {
  return (
    <Container>
      <Title>Bem-vindo ao Game Manager</Title>
      <Subtitle>Sua solução completa para gerenciar seus jogos favoritos.</Subtitle>
      <LinksContainer>
        <StyledLink to="/listpage">Ir para Lista de Jogos</StyledLink>
        <StyledLink to="/create">Adicionar Novo Jogo</StyledLink>
      </LinksContainer>
    </Container>
  );
};

export default HomePage;
