import { useState, useEffect } from 'react';
import axios from 'axios';
import './GetClase.css';

export default function GetClase() {
  const [clase, setClase] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:8080/api/v1/clase/getAll')
      .then((response) => {
        setClase(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      Clase
      <table>
        <thead>
          <tr>
            <th>Clasa</th>
            <th>Elevi</th>
            <th>Profesori</th>
          </tr>
        </thead>
        <tbody>
          {clase.map((clasa) => (
            <tr key={clasa.numeClasa}>
              <td>{clasa.numeClasa}</td>
              <td>
                <table>
                  <thead>
                    <tr>
                      <th>Nume</th>
                      <th>Prenume</th>
                    </tr>
                  </thead>
                  <tbody>
                    {clasa.eleviiClasei.map((elev) => (
                      <tr key={elev.id}>
                        <td>{elev.firstName}</td>
                        <td>{elev.lastName}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
              <td>
                <table>
                  <thead>
                    <tr>
                      <th>Nume, prenume</th>
                      <th>Specialitate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {clasa.profesoriiClasei.map((profesor) => (
                      <tr key={profesor.id}>
                        <td>
                          {profesor.firstName + ' '}
                          {profesor.lastName}
                        </td>
                        <td>{profesor.specialty}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
