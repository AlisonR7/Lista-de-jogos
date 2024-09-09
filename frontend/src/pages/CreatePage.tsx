import React from 'react';
import GameForm from '../components/GameForm';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Game } from '../types/types';
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

const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 1.2rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }
`;

const CreatePage: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (newGame: Game) => {
    axios.post('http://localhost:3001/games', newGame).then(() => {
      alert('Jogo criado com sucesso!');
    });
  };

  const handleGoToList = () => {
    navigate('/listpage');
  };

  const handleGoToHome = () => {
    navigate('/');
  };

  return (
    <Container>
      <Title>Criar Novo Jogo</Title>
      <GameForm onSubmit={handleSubmit} />
      <ButtonsContainer>
        <StyledButton onClick={handleGoToHome}>Ir para Homepage</StyledButton>
        <StyledButton onClick={handleGoToList}>Ver Lista de Jogos</StyledButton>
      </ButtonsContainer>
    </Container>
  );
};

export default CreatePage;
