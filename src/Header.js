import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

export default function Header() {
  return (
    <header>
      <Link to="/">Mi tabla</Link>
      <Link to="/form">Agregar info</Link>
    </header>
  );
}
