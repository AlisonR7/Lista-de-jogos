import React from 'react';
import GameForm from '../components/GameForm';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Game } from '../types/types';
import '../styles/CreatePage.css';

const CreatePage: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (newGame: Game) => {
    axios.post('http://localhost:3001/games', newGame).then(() => {
      alert('Jogo criado com sucesso!');
      navigate('/listpage');
    });
  };

  const handleGoBack = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    event.preventDefault();
    navigate(-1);
  };

  const handleGoHome = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    event.preventDefault();
    navigate('/');
  };

  return (
    <div className="create-page">
      <h1>Criar Novo Jogo</h1>
      <GameForm onSubmit={handleSubmit} />
      <div className="buttons-container">
        <button className="button" onClick={handleGoBack}>Voltar</button>
        <button className="button" onClick={handleGoHome}>Homepage</button>
      </div>
    </div>
  );
};

export default CreatePage;
