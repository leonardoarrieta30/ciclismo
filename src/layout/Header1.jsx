import React from "react";

export const Header1 = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3">
        <div className="container">
          <a className="navbar-brand fw-bold text-warning" href="#">
            <img
              src="/images/RimmchallengeSinFondo.png"
              alt="Rimmchallenge Logo"
              style={{ maxHeight: "110px" }}
              className="img-fluid w-50"
            />
          </a>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link text-light fw-semibold px-3"
                  aria-current="page"
                  href="#home"
                >
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light fw-semibold px-3"
                  href="#about"
                >
                  Sobre Nosotros
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light fw-semibold px-3"
                  href="#services"
                >
                  Servicios
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light fw-semibold px-3"
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
