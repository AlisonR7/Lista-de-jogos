import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListPage from './pages/ListPage';
import CreatePage from './pages/CreatePage';
import UpdatePage from './pages/UpdatePage';
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/listpage" element={<ListPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/update/:id" element={<UpdatePage />} />
        <Route path="*" element={<NotFound />} />  {/* Rota para página não encontrada */}
      </Routes>
    </Router>
  );
};

export default App;
