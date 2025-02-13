import React, { useState, useEffect } from "react";
import { Header1 } from "../layout/Header1";
import { Footer } from "../layout/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import { App } from "../App";
import { QuienesSomos } from "../RimmChallenge/QuienesSomos";
import { Inscripcion } from "../RimmChallenge/Inscripcion";
import { Reglamento } from "../RimmChallenge/Reglamento";
import { Album } from "../RimmChallenge/Album";
import { Resultado } from "../RimmChallenge/Resultado";
import { InscripcionEvento } from "../RimmChallenge/formulario/InscripcionEvento";
import { Login } from "../RimmChallenge/Login";
import { ScrollToHash } from "../RimmChallenge/ScrollToHash";
import { InsertarAlbum } from "../RimmChallenge/dinamico/Web/InsertarAlbum";
import { SideBar } from "../RimmChallenge/dinamico/Sidebar";
import { InsertarBanner } from "../RimmChallenge/dinamico/Web/InsertarBanner";
import { Sponsor } from "../RimmChallenge/Sponsor";
import { Noticias } from "../RimmChallenge/Noticias";
import { MasNoticias } from "../RimmChallenge/MasNoticias";

export const AppRouter = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  // Rutas donde NO se mostrará Header y Footer
  const noHeaderFooterRoutes = [
    "/administrador/interfaz/insertarAlbum",
    "/administrador/interfaz/banner",
  ];
  const shouldShowHeaderFooter = !noHeaderFooterRoutes.includes(
    location.pathname
  );

  // Simulación de carga antes de mostrar el contenido
  useEffect(() => {
    setIsLoading(true); // Mostrar puntos suspensivos antes de cambiar de página
    const timeout = setTimeout(() => {
      setIsLoading(false); // Después de 1.2s, se renderiza el nuevo contenido
    }, 700);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      {/* 🔥 Si está cargando, mostramos SOLO los puntos suspensivos */}
      {isLoading ? (
        <div className="loading-overlay">
          <span className="loading-text">Cargando</span>
          <span className="dots-animation">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </div>
      ) : (
        <>
          {shouldShowHeaderFooter && <Header1 />}
          <ScrollToHash />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/quienesomos" element={<QuienesSomos />} />
            <Route path="/inscripcion" element={<Inscripcion />} />
            <Route path="/inscripcion-evento" element={<InscripcionEvento />} />
            <Route path="/reglamento" element={<Reglamento />} />
            <Route path="/resultados" element={<Resultado />} />
            <Route path="/album" element={<Album />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/mas-noticias" element={<MasNoticias />} />
            <Route path="/sponsors" element={<Sponsor />} />
            <Route path="/administrador/InicioSesion" element={<Login />} />

            {/* Ruta principal con Sidebar */}
            <Route path="/administrador/interfaz" element={<SideBar />}>
              <Route path="insertarAlbum" element={<InsertarAlbum />} />
              <Route path="banner" element={<InsertarBanner />} />
            </Route>
          </Routes>
          {shouldShowHeaderFooter && <Footer />}
        </>
      )}
    </>
  );
};
