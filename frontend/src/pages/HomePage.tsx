import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="container">
      <h1 className="title">Bem-vindo ao Game Manager</h1>
      <p className="subtitle">Sua solução completa para gerenciar seus jogos favoritos.</p>
      <div className="links-container">
        <Link to="/listpage" className="styled-link">Ir para Lista de Jogos</Link>
        <Link to="/create" className="styled-link">Adicionar Novo Jogo</Link>
      </div>
    </div>
  );
};

export default HomePage;
