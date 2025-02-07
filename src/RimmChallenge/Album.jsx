import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const images = [
  "https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

export const Album = () => {
  return (
    <div className="container-fluid my-5" id="album">
      <h2 className="text-center mb-4 fw-bold text-dark">
        📸 Álbum de Imágenes
      </h2>
      <div className="">
        <div
          id="albumCarousel"
          className="carousel slide rounded overflow-hidden"
          data-bs-ride="carousel"
        >
          {/* Indicadores */}
          <div className="carousel-indicators">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#albumCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0}
                aria-label={`Slide ${index + 1}`}
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: "#000002",
                  opacity: "0.6",
                }}
              ></button>
            ))}
          </div>

          {/* Imágenes */}
          <div className="carousel-inner">
            {images.map((img, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <img
                  src={img}
                  className="d-block w-100 rounded carousel-img"
                  alt={`Imagen ${index + 1}`}
                  style={{ height: "500px", objectFit: "contain" }}
                />
              </div>
            ))}
          </div>

          {/* Controles */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#albumCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon p-3"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.68)",
                borderRadius: "50%",
              }}
              aria-hidden="true"
            ></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#albumCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon p-3"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderRadius: "50%",
              }}
              aria-hidden="true"
            ></span>
          </button>
        </div>
      </div>
    </div>
  );
};
