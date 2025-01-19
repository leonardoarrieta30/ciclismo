import React from "react";

export const Inicio = () => {
  return (
    <section className="inicio-section position-relative text-light d-flex align-items-center">
      {/* Overlay con gradiente */}
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"></div>

      {/* Contenido principal */}
      <div className="container position-relative py-5">
        <div className="row min-vh-100 align-items-center">
          <div className="col-lg-8 mx-auto text-center">
            {/* Encabezado animado */}
            <div className="mb-4 animate-fade-down">
              <span className="text-warning text-uppercase fw-bold letter-spacing-3">
                Rimmchallenge 2025
              </span>
            </div>

            <h1 className="display-3 fw-bold mb-4 animate-fade-up">
              ¡Descubre el Mundo del{" "}
              <span className="text-warning position-relative">
                Ciclismo
                <svg className="position-absolute start-0 bottom-0" width="100%" height="10">
                  <path d="M0,5 Q50,0 100,5" stroke="#ffc107" strokeWidth="3" fill="none"/>
                </svg>
              </span>
            </h1>

            <p className="lead mb-5 text-light-emphasis fw-normal animate-fade-up" style={{fontSize: "1.3rem"}}>
              Experimenta la libertad, la velocidad y la emoción de pedalear por los
              paisajes más increíbles. Únete a una comunidad de apasionados 
              ciclistas como tú. 
            </p>

            {/* Contador */}
            <div className="row mb-5 g-3 animate-fade-up">
              <div className="col-6 col-md-3">
                <div className="bg-dark bg-opacity-50 rounded-3 p-3">
                  <h3 className="fw-bold mb-0 text-warning">50+</h3>
                  <p className="small mb-0">Rutas</p>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="bg-dark bg-opacity-50 rounded-3 p-3">
                  <h3 className="fw-bold mb-0 text-warning">1000+</h3>
                  <p className="small mb-0">Ciclistas</p>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="bg-dark bg-opacity-50 rounded-3 p-3">
                  <h3 className="fw-bold mb-0 text-warning">10</h3>
                  <p className="small mb-0">Años</p>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="bg-dark bg-opacity-50 rounded-3 p-3">
                  <h3 className="fw-bold mb-0 text-warning">30+</h3>
                  <p className="small mb-0">Premios</p>
                </div>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="d-flex justify-content-center gap-3 animate-fade-up">
              <a
                href="#quienes-somos"
                className="btn btn-warning btn-lg px-4 py-3 fw-semibold"
              >
                Conócenos
                <i className="bi bi-arrow-right ms-2"></i>
              </a>
              <a
                href="#comunidad"
                className="btn btn-outline-light btn-lg px-4 py-3 fw-semibold"
              >
                Únete a la Comunidad
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4 animate-bounce">
          <a href="#quienes-somos" className="text-light text-decoration-none">
            <div className="d-flex flex-column align-items-center">
              <span className="small mb-2">Scroll</span>
              <i className="bi bi-chevron-down"></i>
            </div>
          </a>
        </div>
      </div>

      {/* Estilos CSS */}
      <style>
        {`
          .inicio-section {
            background-image: url('/ruta-a-tu-imagen-de-fondo.jpg');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
          }

          .letter-spacing-3 {
            letter-spacing: 3px;
          }

          .animate-fade-down {
            animation: fadeDown 1s ease-out;
          }

          .animate-fade-up {
            animation: fadeUp 1s ease-out;
          }

          .animate-bounce {
            animation: bounce 2s infinite;
          }

          @keyframes fadeDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-15px);
            }
            60% {
              transform: translateY(-7px);
            }
          }
        `}
      </style>
    </section>
  );
};

