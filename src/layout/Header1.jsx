import React, { useState, useEffect } from "react";

export const Header1 = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Efecto para detectar el scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="bg-dark">
      <nav
        className={`navbar navbar-expand-lg navbar-dark ${
          isScrolled ? "py-2" : "py-3"
        } transition-all`}
      >
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              src="/images/rimmchallengelogo.png"
              alt="Rimmchallenge Logo"
              style={{
                maxHeight: isScrolled ? "90px" : "110px",
                transition: "max-height 0.3s ease-in-out",
              }}
              className="img-fluid w-50"
            />
          </a>

          {/* Botón hamburguesa con animación */}
          <button
            className="navbar-toggler border-0 p-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menú de navegación */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link text-light fw-semibold px-3 position-relative"
                  href="/"
                >
                  Inicio
                  <span className="position-absolute bottom-0 start-50 translate-middle-x border-bottom border-2 border-warning w-0 transition-width d-none d-lg-block"></span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light fw-semibold px-3 position-relative"
                  href="#quienes-somos"
                >
                  Sobre Nosotros
                  <span className="position-absolute bottom-0 start-50 translate-middle-x border-bottom border-2 border-warning w-0 transition-width d-none d-lg-block"></span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light fw-semibold px-3 position-relative"
                  href="#comunidad"
                >
                  Inscripción
                  <span className="position-absolute bottom-0 start-50 translate-middle-x border-bottom border-2 border-warning w-0 transition-width d-none d-lg-block"></span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light fw-semibold px-3 position-relative"
                  href="#resultados"
                >
                  Resultados
                  <span className="position-absolute bottom-0 start-50 translate-middle-x border-bottom border-2 border-warning w-0 transition-width d-none d-lg-block"></span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light fw-semibold px-3 position-relative"
                  href="#album"
                >
                  Álbum
                  <span className="position-absolute bottom-0 start-50 translate-middle-x border-bottom border-2 border-warning w-0 transition-width d-none d-lg-block"></span>
                </a>
              </li>
              {/*  <li className="nav-item ms-lg-3">
                <a
                  className="btn btn-warning fw-semibold px-4 mt-3 mt-lg-0"
                  href="#registro"
                >
                  Registrarse
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>

      {/* Estilos personalizados */}
      <style>
        {`
          .transition-all {
            transition: all 0.3s ease-in-out;
          }
          
          .transition-width {
            width: 0;
            transition: width 0.3s ease-in-out;
          }
          
          .nav-link:hover .border-bottom {
            width: 80% !important;
          }
          
          @media (min-width: 992px) {
            .navbar-nav .nav-link {
              padding-top: 1rem !important;
              padding-bottom: 1rem !important;
            }
          }
        `}
      </style>
    </header>
  );
};
