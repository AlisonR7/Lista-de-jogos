import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GameList from '../components/GameList';
import { Game } from '../types/types';
import { useNavigate } from 'react-router-dom';
import '../styles/ListPage.css';
import '../styles/Buttons.css';


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

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="list-page">
      <h1>Lista de Jogos</h1>
      <GameList games={games} onDelete={handleDelete} onEdit={handleEdit} />
      <div className="buttons-container">
        <button className="button" onClick={handleGoBack}>Voltar</button>
        <button className="button" onClick={handleGoHome}>Homepage</button>
      </div>
    </div>
  );
};

export default ListPage;
