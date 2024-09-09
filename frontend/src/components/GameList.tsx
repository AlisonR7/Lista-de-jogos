import React from 'react';
import { GameListProps } from '../types/types';

const GameList: React.FC<GameListProps> = ({ games, onDelete, onEdit }) => {
  return (
    <div>
      {games.map((game) => (
        <div key={game.id}>
          <h3>{game.title}</h3>
          <p>{game.description}</p>
          <p>{game.genre}</p>
          <button onClick={() => onEdit(game.id!)}>Edit</button>
          <button onClick={() => onDelete(game.id!)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default GameList;
