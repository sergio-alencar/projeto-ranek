import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Produtos from './Components/Produtos';
import Produto from './Components/Produto';
import Footer from './Components/Footer';
import Contato from './Components/Contato';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <div className='content'>
          <Routes>
            <Route path='projeto-ranek' element={<Produtos />} />
            <Route path='projeto-ranek/produto/:id' element={<Produto />} />
            <Route path='projeto-ranek/contato' element={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
