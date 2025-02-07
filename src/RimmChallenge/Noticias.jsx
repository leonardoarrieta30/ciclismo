import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getNoticias } from "../resources/api/serviciosApi";

const NewsCard = ({ titulo, descripcion, foto, link }) => (
  <div className="card h-100 shadow-sm hover-shadow card1">
    <div className="card-img-container">
      <img 
        src={foto} 
        className="card-img-top" 
        alt={titulo}
        style={{ 
          height: '200px', 
          objectFit: 'contain',
          transition: 'transform 0.3s ease-in-out'
        }}
      />
    </div>
    <div className="card-body d-flex flex-column">
      <h5 className="card-title text-truncate">{titulo}</h5>
      <p className="card-text" style={{
        display: '-webkit-box',
        WebkitLineClamp: '3',
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        flex: '1'
      }}>
        {descripcion}
      </p>
      <a href={link} className="btn btn-primary mt-auto">
        Leer más
      </a>
    </div>
  </div>
);

export const Noticias = () => {
  const navigate = useNavigate();
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const res = await getNoticias();
        setNoticias(res.noticias);
      } catch (err) {
        setError("Error al cargar las noticias");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNoticias();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-danger py-5">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="container-fluid my-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold text-dark">Noticias</h1>
        <div className="mx-auto" style={{ 
          width: '80px', 
          height: '4px', 
          backgroundColor: '#0d6efd',
          marginTop: '1rem' 
        }} />
      </div>

      <div className="row g-4">
        {noticias.slice(0, 6).map((noticia) => (
          <div className="col-12 col-md-6 col-lg-4" key={noticia.id}>
            <NewsCard {...noticia} />
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <button
          className="btn btn-secondary btn-lg"
          onClick={() => navigate("/mas-noticias")}
        >
          Ver más noticias
        </button>
      </div>
    </div>
  );
};

export default Noticias;