import React from 'react';
import ReactDOM from 'react-dom/client';


import { Inicio } from './RimmChallenge/Inicio.jsx';
import { Header1 } from './layout/Header1.jsx';
import { QuienesSomos } from './RimmChallenge/QuienesSomos.jsx';
import { Inscripcion } from './RimmChallenge/Inscripcion.jsx';
import { Reglamento } from './RimmChallenge/Reglamento.jsx';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header1/>
    <Inicio/>
    <QuienesSomos/>
    <Inscripcion/>
    <Reglamento/>
  </React.StrictMode>
);


