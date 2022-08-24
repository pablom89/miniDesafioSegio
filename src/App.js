import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Formulario from './components/Form';
import Tabla from './components/Tabla';
import './style.css';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Tabla />} />
        <Route path="/form" element={<Formulario />} />
      </Routes>
    </>
  );
}
