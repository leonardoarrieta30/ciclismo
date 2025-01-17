import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center text-lg-start">
      <div className="container py-5">
        <div className="row">
          {/* About Us Section */}
          <div className="col-lg-6 col-md-6 mb-4">
            <h5 className="text-warning fw-bold">Rimmchallenge</h5>
            <p className="text-muted">
              Transformamos ideas en realidad, conectando personas y proyectos para construir el futuro.
            </p>
            <p className="text-light fw-bold">"Innovación que inspira"</p>
          </div>
          {/* Contact Section */}
          <div className="col-lg-6 col-md-6 mb-4">
            <h5 className="text-warning fw-bold">Contacto</h5>
            <ul className="list-unstyled text-muted">
              <li className="mb-3">
                <i className="bi bi-geo-alt-fill me-2 text-warning"></i>
                Calle Principal 123, Ciudad
              </li>
              <li className="mb-3">
                <i className="bi bi-telephone-fill me-2 text-warning"></i>
                +1 234 567 890
              </li>
              <li>
                <i className="bi bi-envelope-fill me-2 text-warning"></i>
                contacto@rimmchallenge.com
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="text-center py-3 border-top border-secondary">
        <small className="text-muted">
          © 2025 <span className="text-warning">Rimmchallenge</span>. Todos los derechos reservados.
        </small>
      </div>
    </footer>
  );
};
