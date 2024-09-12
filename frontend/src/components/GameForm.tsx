import React from 'react';
import { Game } from '../types/types';

interface GameFormProps {
  initialData?: Game;
  onSubmit: (game: Game) => void;
}

const GameForm: React.FC<GameFormProps> = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = React.useState<Game>(
    initialData || { title: '', description: '', genre: '', valor: '', isMultiplayer: false, releaseDate: '' }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Título" />
      <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Descrição" />
      <input type="text" name="genre" value={formData.genre} onChange={handleChange} placeholder="Gênero" />
      <input type="number" name="valor" value={formData.valor} onChange={handleChange} placeholder="Valor" />
      <input type="date" name="releaseDate" value={formData.releaseDate} onChange={handleChange} />
      <label>
        Multiplayer:
        <input type="checkbox" name="isMultiplayer" checked={formData.isMultiplayer} onChange={handleChange} />
      </label>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default GameForm;
