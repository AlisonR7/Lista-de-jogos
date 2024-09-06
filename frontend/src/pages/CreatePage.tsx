
import React from 'react';
import GameForm from '../components/GameForm';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Game } from '../types/types';
import './styles.css';
;


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

  return (
    <div className="create-page">
      <h1>Criar Novo Jogo</h1>
      <GameForm onSubmit={handleSubmit} />
      <button className="button-list" onClick={handleGoToList}>
        Ver Lista de Jogos
      </button>
    </div>
  );
};

export default CreatePage;
