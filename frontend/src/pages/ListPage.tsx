import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GameList from '../components/GameList';
import { Game } from '../types/types';
import { useNavigate } from 'react-router-dom';

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

  return <GameList games={games} onDelete={handleDelete} onEdit={handleEdit} />;
};

export default ListPage;
