import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getAlbums, getEnlaceApi } from "../resources/api/serviciosApi";
import Swal from "sweetalert2";

// **Componente de Tarjeta para cada Imagen del Álbum**
const AlbumCard = ({ foto, index }) => (
  <div className="card h-100 shadow-sm hover-shadow card1">
    <div className="card-img-container">
      <img
        src={foto}
        className="card-img-top"
        alt={`Imagen ${index + 1}`}
        style={{
          height: "200px",
          objectFit: "contain",
          transition: "transform 0.3s ease-in-out",
        }}
      />
    </div>
  </div>
);

export const Album = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [enlace, setEnlace] = useState("");

  // Obtener las imágenes del álbum
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await getAlbums();
        console.log("response", response);

        if (response.status === 1 && response.fotos?.length > 0) {
          setImages(response.fotos);
        } else {
          setImages([]);
        }
      } catch (err) {
        setError("Error al cargar las imágenes");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();

    // Obtener el enlace del álbum
    const getEnlace = async () => {
      try {
        const res = await getEnlaceApi();
        console.log("res", res);

        if (res.status === 1 && res.enlace?.url) {
          setEnlace(res.enlace.url);
        }
      } catch (error) {
        Swal.fire({
          title: "Error al obtener el enlace.",
          icon: "error",
        });
      }
    };

    getEnlace();
  }, []);

  // **Carga en proceso**
  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "400px" }}
      >
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  // **Error en la carga**
  if (error) {
    return (
      <div className="text-center text-danger py-5">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="container my-5" id="album">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold text-dark">📸 Álbum de Imágenes</h1>
        <div
          className="mx-auto"
          style={{
            width: "80px",
            height: "4px",
            backgroundColor: "#0d6efd",
            marginTop: "1rem",
          }}
        />
      </div>

      {/* Si no hay imágenes */}
      {images.length === 0 && (
        <p className="text-center text-muted">No hay fotos disponibles.</p>
      )}

      {/* **Grid de Imágenes** */}
      <div className="row g-4">
        {images.map((img, index) => (
          <div className="col-12 col-md-6 col-lg-4" key={index}>
            <AlbumCard foto={img} index={index} />
          </div>
        ))}
      </div>

      {/* **Botón para ver el álbum en Google Drive** */}
      {enlace && (
        <div className="d-flex justify-content-center">
          <a
            href={enlace}
            className="mt-3"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#212529", // Negro moderno
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "8px", // Bordes redondeados
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.3s ease",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)", // Sombra sutil
              textDecoration: "none",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#343a40")} // Cambio de color en hover
            onMouseOut={(e) => (e.target.style.backgroundColor = "#212529")}
            onMouseDown={(e) => (e.target.style.transform = "scale(0.95)")} // Efecto de presión
            onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
          >
            Ver Drive de fotos
          </a>
        </div>
      )}
    </div>
  );
};
