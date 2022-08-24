import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Header';
import Formulario from './Form';
import Tabla from './Tabla';
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
