import React from 'react';

export const Header1 = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
        <div className="container">
          <a className="navbar-brand fw-bold text-primary" href="#">
            Mi Proyecto
          </a>
          {/* <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link text-dark fw-semibold px-3"
                  aria-current="page"
                  href="#home"
                >
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fw-semibold px-3" href="#about">
                  Sobre Nosotros
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-dark fw-semibold px-3"
                  href="#services"
                >
                  Servicios
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-dark fw-semibold px-3"
                  href="#contact"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
