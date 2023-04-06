import { useState, useEffect } from 'react';
import axios from 'axios';

export default function GetAllElevi() {
  const [elevi, setElevi] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:8080/api/v1/elevi/getAll')
      .then((response) => {
        setElevi(response.data);
        console.log('use effect');
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nume, prenume</th>
            <th>Addresa</th>
            <th>Email</th>
            <th>Telefon</th>
            <th>CNP</th>
          </tr>
        </thead>
        <tbody>
          {elevi.map((elev) => (
            <tr key={elev.id}>
              <td>
                {elev.firstName} {elev.lastName}
              </td>
              <td>{elev.address}</td>
              <td>{elev.emailAddress}</td>
              <td>{elev.phoneNumber}</td>
              <td>{elev.ssn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
