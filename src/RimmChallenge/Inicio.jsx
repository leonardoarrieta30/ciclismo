import React, { useEffect, useState } from "react";
import { obtenerBannerApi } from "../resources/api/serviciosApi";

export const Inicio = () => {
  const [imageBase64, setImageBase64] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getImageType = (base64String) => {
    if (!base64String) return "image/jpeg";

    // Detectar tipo de imagen basado en el string base64
    if (base64String.startsWith("iVBO")) return "image/png";
    if (base64String.startsWith("PHN2")) return "image/svg+xml";
    if (base64String.startsWith("R0lG")) return "image/gif";
    if (base64String.startsWith("UklG")) return "image/webp";
    if (base64String.startsWith("Qk0=")) return "image/bmp";

    return "image/jpeg"; // Por defecto
  };

  const getBackgroundImage = (base64String) => {
    if (!base64String) return "none";
    const mimeType = getImageType(base64String);
    return `url(data:${mimeType};base64,${base64String})`;
  };

  useEffect(() => {
    const obtenerBanner = async () => {
      try {
        setIsLoading(true);
        const res = await obtenerBannerApi();
        setImageBase64(res.banner.imagen);
      } catch (error) {
        setError("Error al cargar la imagen");
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    obtenerBanner();
  }, []); // Quité imageBase64 de las dependencias para evitar bucles infinitos

  return (
    <section
      className="inicio-section position-relative text-light d-flex align-items-center"
      style={{
        backgroundImage: getBackgroundImage(imageBase64),
      }}
    >
      {/*       {isLoading && <div>Cargando...</div>}
      {error && <div>Error: {error}</div>} */}
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
                <svg
                  className="position-absolute start-0 bottom-0"
                  width="100%"
                  height="10"
                >
                  <path
                    d="M0,5 Q50,0 100,5"
                    stroke="#ffc107"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </span>
            </h1>

            <p
              className="lead mb-5 text-light-emphasis fw-normal animate-fade-up"
              style={{ fontSize: "1.3rem" }}
            >
              Experimenta la libertad, la velocidad y la emoción de pedalear por
              los paisajes más increíbles. Únete a una comunidad de apasionados
              ciclistas como tú.
            </p>

            {/* Botones de acción */}
            <div className="d-flex justify-content-center gap-3 animate-fade-up">
              <a href="#quienes-somos" className="btn btn-warning col-xl-3">
                Conócenos
              </a>
              <a href="#comunidad" className="btn btn-outline-light col-xl-3">
                Únete a la Comunidad
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        {/*   <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4 animate-bounce">
          <a href="#quienes-somos" className="text-light text-decoration-none">
            <div className="d-flex flex-column align-items-center">
              <span className="small mb-2">Scroll</span>
              <i className="bi bi-chevron-down"></i>
            </div>
          </a>
        </div> */}
      </div>

      {/* Estilos CSS */}
      <style>
        {`
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
