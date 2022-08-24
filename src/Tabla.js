import React from 'react';
//import Table from 'react-bootstrap/Table';
import { data } from './data.js';

export default function Tabla() {
  return (
    <main>
      <table>
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Edad</th>
            <th scope="col">Carrera</th>
            <th scope="col">Hobbie</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => {
            return (
              <tr>
                <td key={i}>{d.nombre}</td>
                <td key={i}>{d.edad}</td>
                <td key={i}>{d.carrera}</td>
                <td key={i}>{d.hobbie}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
