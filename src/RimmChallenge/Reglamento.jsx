import React from "react";

export const Reglamento = () => {


  const descargarBases = () => {
    //console.log('Descargando bases');
  }




  return (
    <div className="d-flex min-vh-100 container py-5">
      <div className="container">
        <div className="row">
          <h2 className="text-center display-5 fw-bold mb-4">Reglamento</h2>
          <p className="lead text-center mb-5">
            Conoce nuestras normas y directrices para garantizar una experiencia segura, inclusiva y emocionante para todos los participantes.
          </p>
          <div className="text-center" onClick={descargarBases}>
            <button className="btn btn-primary">
              Descarga las bases aqui
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};


