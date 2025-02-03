import React from 'react';
import ReactDOM from 'react-dom/client';

import { AppRouter } from './router/AppRouter.jsx';
import { BrowserRouter } from 'react-router-dom';
/* import 'bootstrap/dist/js/bootstrap.bundle.min.js'; */




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);


