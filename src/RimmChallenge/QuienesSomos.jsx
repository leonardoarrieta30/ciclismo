import React from "react";

export const QuienesSomos = () => {
  return (
    <section className="bg-light text-dark py-5" id="about-us">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-6">
            <h2 className="fw-bold display-3 mb-4">¿Quiénes Somos?</h2>
            <p className="lead mb-4">
              Somos una empresa promotora de eventos deportivos de ciclismo
            </p>
            <p className="mb-4">
              Con años de experiencia en la organización de rutas, talleres y eventos,
              hemos creado un espacio donde ciclistas de todos los niveles pueden crecer,
              aprender y conectar con otros amantes del ciclismo.
            </p>
            {/* <a href="#contact" className="btn btn-outline-dark btn-lg shadow mt-3">
              Contáctanos
            </a> */}
          </div>
          <div className="col-md-5">
            <div className="bg-primary text-white p-4 rounded-lg shadow-lg">
              <h3 className="fw-bold">Nuestro Compromiso</h3>
              <p>
                Nos dedicamos a las actividades sociales, deportivas privadas y publicas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
