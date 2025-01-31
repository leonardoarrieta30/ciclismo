import React from 'react';
import { Header1 } from '../layout/Header1';
import { QuienesSomos } from '../RimmChallenge/QuienesSomos';
import { Inscripcion } from '../RimmChallenge/Inscripcion';
import { Reglamento } from '../RimmChallenge/Reglamento';
import { Album } from '../RimmChallenge/Album';
import { Resultado } from '../RimmChallenge/Resultado';
import { InscripcionEvento } from '../RimmChallenge/formulario/InscripcionEvento';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { App } from '../App';
import { Footer } from '../layout/Footer';
import { Login } from '../RimmChallenge/Login';
import { LandingAdministrador } from '../RimmChallenge/dinamico/LandingAdministrador';
import { ScrollToHash } from '../RimmChallenge/ScrollToHash';

export const AppRouter = () => {
    //console.log('Rendering AppRouter');
    return (
        <BrowserRouter>
            <Header1 />
            <ScrollToHash/>{
                <Routes>
                    <Route path='/' element={<App />} />
                    <Route path="/quienesomos" element={<QuienesSomos />} />
                    <Route path="/inscripcion" element={<Inscripcion />} />
                    <Route path="/inscripcion-evento" element={<InscripcionEvento />} />
                    <Route path="/reglamento" element={<Reglamento />} />
                    <Route path="/resultados" element={<Resultado />} />
                    <Route path="/album" element={<Album />} />
                    <Route path="/administrador/InicioSesion" element={<Login />} ></Route>
                    <Route path="/administrador/LandingAdministrador" element={<LandingAdministrador />} ></Route>
                </Routes>}
            <Footer />
        </BrowserRouter>
    )
}