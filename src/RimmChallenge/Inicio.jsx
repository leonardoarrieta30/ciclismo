import React from "react";


export const Inicio = () => {
  return (
    <section className="inicio-section text-light d-flex align-items-center">
      <div className="container text-center">
        <h1 className="display-4 fw-bold">
          ¡Descubre el Mundo del <span className="text-primary">Ciclismo!</span>
        </h1>
        <p className="lead mt-3">
          Experimenta la libertad, la velocidad y la emoción de pedalear por los paisajes más increíbles.
          Únete a una comunidad de apasionados ciclistas como tú. 🚴‍♂️🚴‍♀️
        </p>
        <div className="d-flex justify-content-center gap-3 mt-4">
          <a href="#explore" className="btn btn-primary btn-lg shadow">
            Explorar Rutas
          </a>
          <a href="#community" className="btn btn-outline-light btn-lg shadow">
            Únete a la Comunidad
          </a>
        </div>
      </div>
    </section>
  );
};
