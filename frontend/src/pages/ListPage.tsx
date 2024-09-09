import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GameList from '../components/GameList';
import { Game } from '../types/types';
import { useNavigate } from 'react-router-dom';
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

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const GameItem = styled.div`
  background-color: #333;
  padding: 20px;
  margin: 10px 0;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const GameTitle = styled.h3`
  color: #ffcc00;
`;

const ListPage: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/games')
      .then(response => setGames(response.data))
      .catch(error => console.error("Erro ao buscar jogos:", error));
  }, []);

  const handleDelete = (id: number) => {
    axios.delete(`http://localhost:3001/games/${id}`)
      .then(() => {
        setGames(prevGames => prevGames.filter(game => game.id !== id));
      })
      .catch(error => console.error("Erro ao excluir jogo:", error));
  };

  const handleEdit = (id: number) => {
    navigate(`/update/${id}`);
  };

  const handleGoToCreate = () => {
    navigate('/create');
  };

  const handleGoToHome = () => {
    navigate('/');
  };

  return (
    <Container>
      <Title>Lista de Jogos</Title>
      <GameContainer>
        {games.length === 0 ? (
          <p>Nenhum jogo encontrado.</p>
        ) : (
          games.map((game) => (
            <GameItem key={game.id}>
              <GameTitle>{game.title}</GameTitle>
              <p>{game.description}</p>
              <p>{game.genre}</p>
              <button onClick={() => handleEdit(game.id!)}>Edit</button>
              <button onClick={() => handleDelete(game.id!)}>Delete</button>
            </GameItem>
          ))
        )}
      </GameContainer>
      <ButtonsContainer>
        <StyledButton onClick={handleGoToCreate}>Voltar para Criar Jogo</StyledButton>
        <StyledButton onClick={handleGoToHome}>Voltar para Homepage</StyledButton>
      </ButtonsContainer>
    </Container>
  );
};

export default ListPage;
