import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-dark pt-4">
      {/* Wave Separator */}
      {/* <div className="text-light">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="bg-body" >
          <path
            fill="#212529"
            fillOpacity="1"
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,90.7C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"            
          ></path>
        </svg>
      </div> */}

      <div className="container">
        {/* Main Content */}
        <div className="row">
          {/* Brand Column */}
          <div className="col-lg-6 col-md-12 ">
            <div className="bg-dark bg-opacity-25 p-2 rounded-3 h-100">
              <h3 className="fw-bold mb-3">
                <span className="text-warning">Rimm</span>
                <span className="text-light">challenge</span>
              </h3>
              <p className="text-muted  pe-lg-5">
                Transformamos ideas en realidad, conectando personas y proyectos
                para construir el futuro del ciclismo. Únete a nuestra comunidad
                y sé parte de esta gran aventura.
              </p>
              {/*  <div className="d-flex gap-3">
                <a href="#" className="btn btn-outline-light btn-sm rounded-circle">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="btn btn-outline-light btn-sm rounded-circle">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="btn btn-outline-light btn-sm rounded-circle">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="btn btn-outline-light btn-sm rounded-circle">
                  <i className="bi bi-strava"></i>
                </a>
              </div> */}
            </div>
          </div>

          {/* Links Column */}
          {/* <div className="col-lg-3 col-md-6">
            <div className="bg-dark bg-opacity-25 p-4 rounded-3 h-100">
              <h5 className="text-warning fw-bold mb-3">Enlaces Directos</h5>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <a href="#" className="text-muted text-decoration-none hover-warning">
                    <i className="bi bi-chevron-right me-2 text-warning"></i>
                    Inicio
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#about" className="text-muted text-decoration-none">
                    <i className="bi bi-chevron-right me-2 text-warning"></i>
                    Nosotros
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#rules" className="text-muted text-decoration-none">
                    <i className="bi bi-chevron-right me-2 text-warning"></i>
                    Reglamento
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#register" className="text-muted text-decoration-none">
                    <i className="bi bi-chevron-right me-2 text-warning"></i>
                    Inscripción
                  </a>
                </li>
              </ul>
            </div>
          </div> */}

          {/* Contact Column */}
          <div className="col-lg-6 col-md-6">
            <div className="bg-dark bg-opacity-25 p-2 rounded-3 h-100">
              <h5 className="text-warning fw-bold mb-3">Contacto</h5>
              <div className="row g-3">
                <div className="col-12 d-flex align-items-center">
                  <div className="bg-warning p-2 rounded-circle me-3"></div>
                  <div className="text-muted">
                    <span> Calle Principal 123, </span>
                    <span>Ciudad, País</span>
                  </div>
                </div>
                <div className="col-12 d-flex align-items-center">
                  <div className="bg-warning p-2 rounded-circle me-3"></div>
                  <div className="text-muted">
                    <span>+1 234 567 890</span>
                  </div>
                </div>
                <div className="col-12 d-flex align-items-center">
                  <div className="bg-warning p-2 rounded-circle me-3"></div>
                  <div className="text-muted">
                    <span>contacto@rimmchallenge.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-dark bg-opacity-50 py-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start text-muted small">
              © {new Date().getFullYear()}{" "}
              <span className="text-warning">Rimmchallenge</span>
            </div>
            <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
              <a
                href="#"
                className="text-muted text-decoration-none small me-3"
              >
                Privacidad
              </a>
              <a
                href="#"
                className="text-muted text-decoration-none small me-3"
              >
                Términos
              </a>
              <a href="#" className="text-muted text-decoration-none small">
                FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
