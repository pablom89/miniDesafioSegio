import React from 'react';
import Table from 'react-bootstrap/Table';
import { data } from './data.js';

export default function Tabla() {
  return (
    <main>
      <Table striped bordered hover>
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
              <tr key={i}>
                <td>{d.nombre}</td>
                <td>{d.edad}</td>
                <td>{d.carrera}</td>
                <td>{d.hobbie}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </main>
  );
}
