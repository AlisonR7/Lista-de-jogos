import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import GameForm from '../components/GameForm';
import { Game } from '../types/types';
import styled from 'styled-components';

// Estilização similar às outras páginas
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
  margin-bottom: 30px;
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

const UpdatePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [game, setGame] = useState<Game | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3001/games/${id}`)
        .then(response => setGame(response.data))
        .catch(() => setError("Erro ao buscar jogo."));
    }
  }, [id]);

  const handleSubmit = (updatedGame: Game) => {
    if (id) {
      axios.put(`http://localhost:3001/games/${id}`, updatedGame)
        .then(() => {
          alert('Jogo atualizado com sucesso!');
          navigate('/listpage');
        })
        .catch(() => setError("Erro ao atualizar jogo."));
    }
  };

  const handleBackToList = () => {
    navigate('/listpage');
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <Container>
      <Title>Atualizar Jogo</Title>
      {error && <p>{error}</p>}
      {game ? (
        <>
          <GameForm initialData={game} onSubmit={handleSubmit} />
          <ButtonsContainer>
            <StyledButton onClick={handleBackToList}>Voltar para Lista de Jogos</StyledButton>
            <StyledButton onClick={handleBackToHome}>Voltar para Homepage</StyledButton>
          </ButtonsContainer>
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </Container>
  );
};

export default UpdatePage;
