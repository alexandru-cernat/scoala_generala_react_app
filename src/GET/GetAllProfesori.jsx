import { useState, useEffect } from 'react';
import axios from 'axios';
import './GetClase.css';

export default function GetAllProfesori() {
  const [profesori, setProfesori] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:8080/api/v1/profesori/getAll')
      .then((response) => {
        setProfesori(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <table>
        <tr>
          <th>Nume</th>
          <th>Telefon</th>
          <th>Email</th>
          <th>Specialitate</th>
        </tr>
        {profesori.map((profesor) => (
          <tr key={profesor.id}>
            <td>
              {profesor.firstName + ' '}
              {profesor.lastName}
            </td>
            <td>{profesor.phoneNumber}</td>
            <td>{profesor.emailAddress}</td>
            <td>{profesor.specialty}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
