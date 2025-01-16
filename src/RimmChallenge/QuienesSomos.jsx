import React from "react";

export const QuienesSomos = () => {
  return (
    <section className="bg-white text-dark py-5" id="about-us">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="fw-bold display-5 mb-4">¿Quiénes Somos?</h2>
            <p className="lead">
              Somos una comunidad apasionada por el ciclismo, dedicada a promover
              un estilo de vida saludable y sostenible. Nuestro objetivo es 
              inspirar a personas de todas las edades a descubrir la magia de las dos ruedas.  
            </p>
            <p>
              Con años de experiencia en la organización de rutas, talleres y eventos, 
              hemos creado un espacio donde ciclistas de todos los niveles pueden crecer, 
              aprender y conectar con otros amantes del ciclismo.
            </p>
            <a href="#contact" className="btn btn-primary btn-lg shadow mt-3">
              Contáctanos
            </a>
          </div>
        
        </div>
      </div>
    </section>
  );
};


