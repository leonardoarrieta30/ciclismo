import React from 'react';
import ReactDOM from 'react-dom/client';


import { Inicio } from './RimmChallenge/Inicio.jsx';
import { Header1 } from './layout/Header1.jsx';
import { QuienesSomos } from './RimmChallenge/QuienesSomos.jsx';
import { Inscripcion } from './RimmChallenge/Inscripcion.jsx';
import { Reglamento } from './RimmChallenge/Reglamento.jsx';
import { Footer } from './layout/Footer.jsx';
import { Resultados } from './RimmChallenge/Resultados.jsx';
import { Album } from './RimmChallenge/Album.jsx';
import { AppRouter } from './router/AppRouter.jsx';
/* import 'bootstrap/dist/js/bootstrap.bundle.min.js'; */




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  

  <AppRouter />,
  

);


