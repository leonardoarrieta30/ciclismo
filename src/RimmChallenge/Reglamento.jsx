import React from "react";

export const Reglamento = () => {
  return (
    <section className="bg-light text-dark py-5" id="rules">
      <div className="container">
        <h2 className="text-center display-5 fw-bold mb-4">Reglamento</h2>
        <p className="lead text-center mb-5">
          Conoce nuestras normas y directrices para garantizar una experiencia segura, inclusiva y emocionante para todos los participantes.
        </p>
        <div className="row">
          <div className="col-md-6">
            <ul className="list-group shadow-sm">
              <li className="list-group-item">
                <span className="fw-bold text-primary">1.</span> Uso obligatorio de casco y equipo de protección.
              </li>
              <li className="list-group-item">
                <span className="fw-bold text-primary">2.</span> Respetar las señales de tránsito y las indicaciones del equipo organizador.
              </li>
              <li className="list-group-item">
                <span className="fw-bold text-primary">3.</span> Mantener una conducta respetuosa con otros participantes y el medio ambiente.
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="list-group shadow-sm">
              <li className="list-group-item">
                <span className="fw-bold text-primary">4.</span> No se permite el uso de auriculares durante las rutas.
              </li>
              <li className="list-group-item">
                <span className="fw-bold text-primary">5.</span> Los menores de edad deben estar acompañados por un adulto responsable.
              </li>
              <li className="list-group-item">
                <span className="fw-bold text-primary">6.</span> Está prohibido participar bajo los efectos de alcohol o sustancias nocivas.
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-5">
          <a href="#contact" className="btn btn-primary btn-lg shadow">
            Más Información
          </a>
        </div>
      </div>
    </section>
  );
};


