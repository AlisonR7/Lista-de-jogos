
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import GameForm from '../components/GameForm';
import { Game } from '../types/types';

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
          navigate('/');
        })
        .catch(() => setError("Erro ao atualizar jogo."));
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div>
      {error && <p>{error}</p>}
      {game ? (
        <>
          <GameForm initialData={game} onSubmit={handleSubmit} />
          <button onClick={handleBack}>Voltar para a Homepage</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UpdatePage;

