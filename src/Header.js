import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to="/">Inicio</Link>
      <Link to="/form">Agregar info</Link>
    </header>
  );
}
