import { useEffect, useState } from 'react';
import './App.css';
import GetAllElevi from './GET/GetAllElevi';
import GetClase from './GET/GetClase';
import GetAllProfesori from './GET/GetAllProfesori';

function App() {
  const [showElevi, setShowElevi] = useState(false);
  const [showClase, setShowClase] = useState(false);
  const [showProfesori, setShowProfesori] = useState(false);
  return (
    <div>
      <button
        type="button"
        className="btn"
        onClick={() => {
          setShowElevi(!showElevi);
          setShowClase(false);
        }}
      >
        Show Elevi
      </button>
      <button
        type="button"
        className="btn"
        onClick={() => {
          setShowClase(!showClase);
          setShowElevi(false);
          setShowProfesori(false);
        }}
      >
        Show Clase
      </button>
      <button
        type="button"
        className="btn"
        onClick={() => {
          setShowProfesori(!showProfesori);
          setShowElevi(false);
          setShowClase(false);
        }}
      >
        Show Profesori
      </button>
      {showElevi && <GetAllElevi />}
      {showClase && <GetClase />}
      {showProfesori && <GetAllProfesori />}
    </div>
  );
}

export default App;
