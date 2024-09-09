import React, { useState } from 'react';
import { GameFormProps, Game } from '../types/types';

const GameForm: React.FC<GameFormProps> = ({ onSubmit, initialData }) => {
  
  const [formData, setFormData] = useState<Game>(
    initialData || { title: '', description: '', genre: '', releaseDate: '' } 
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
      </label>
      <label>
        Description:
        <textarea name="description" value={formData.description} onChange={handleChange} />
      </label>
      <label>
        Genre:
        <input type="text" name="genre" value={formData.genre} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default GameForm;
