import React from 'react';
import { Game } from '../types/types';

interface GameListProps {
  games: Game[];
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

const GameList: React.FC<GameListProps> = ({ games, onDelete, onEdit }) => {
  return (
    <div className="game-list">
      {games.map(game => (
        <div key={game.id} className="game-item">
          <h2>{game.title}</h2>
          <p>{game.description}</p>
          <p>Gênero: {game.genre}</p>
          <p>Valor: {game.valor}</p>
          <p>Data de Lançamento: {game.releaseDate}</p> 
          <p>{game.isMultiplayer ? 'Multiplayer' : 'Single Player'}</p>
          <button onClick={() => onEdit(game.id!)}>Editar</button>
          <button onClick={() => onDelete(game.id!)}>Excluir</button>
        </div>
      ))}
    </div>
  );
};

export default GameList;
