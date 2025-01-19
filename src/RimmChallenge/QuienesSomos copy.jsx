import React from "react";
import { FaBiking, FaUsers, FaTrophy, FaMapMarkedAlt } from "react-icons/fa";

export const QuienesSomos = () => {
  const servicios = [
    {
      icon: <FaBiking className="display-4 text-primary mb-3" />,
      title: "Rutas Ciclistas",
      description: "Organizamos rutas para todos los niveles, desde principiantes hasta expertos, con guías profesionales y soporte técnico."
    },
    {
      icon: <FaUsers className="display-4 text-primary mb-3" />,
      title: "Comunidad",
      description: "Creamos espacios para conectar con otros ciclistas, compartir experiencias y formar amistades duraderas."
    },
    {
      icon: <FaTrophy className="display-4 text-primary mb-3" />,
      title: "Eventos",
      description: "Competencias, talleres y eventos especiales diseñados para promover el ciclismo y mejorar tus habilidades."
    },
    {
      icon: <FaMapMarkedAlt className="display-4 text-primary mb-3" />,
      title: "Aventuras",
      description: "Descubre nuevas rutas y destinos emocionantes con nuestra comunidad ciclista."
    }
  ];

  const stats = [
    { number: "500+", text: "Eventos Realizados" },
    { number: "5000+", text: "Ciclistas Activos" },
    { number: "50+", text: "Rutas Únicas" },
    { number: "10+", text: "Años de Experiencia" }
  ];

  return (
    <section className="py-5" id="quienes-somos">
      {/* Hero Section */}
      <div className="container mb-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold mb-4">¿Quiénes Somos?</h1>
            <p className="lead text-primary fw-bold mb-4">
              Somos una empresa promotora de eventos deportivos de ciclismo
            </p>
            <p className="mb-4 fs-5">
              Con años de experiencia en la organización de rutas, talleres y eventos,
              hemos creado un espacio donde ciclistas de todos los niveles pueden crecer,
              aprender y conectar con otros amantes del ciclismo.
            </p>
            <button className="btn btn-primary btn-lg px-4 me-3">
              Únete a Nosotros
            </button>
            <button className="btn btn-outline-primary btn-lg px-4">
              Ver Eventos
            </button>
          </div>
          <div className="col-lg-6">
            <div className="bg-primary text-white p-5 rounded-3 shadow-lg">
              <h3 className="fw-bold mb-4">Nuestro Compromiso</h3>
              <p className="fs-5 mb-4">
                Nos dedicamos a crear experiencias únicas que combinan:
              </p>
              <ul className="list-unstyled">
                <li className="mb-3">✓ Actividades sociales enriquecedoras</li>
                <li className="mb-3">✓ Eventos deportivos de alta calidad</li>
                <li className="mb-3">✓ Rutas seguras y bien planificadas</li>
                <li>✓ Comunidad activa y participativa</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-light py-5 mb-5">
        <div className="container">
          <div className="row g-4">
            {stats.map((stat, index) => (
              <div key={index} className="col-md-3 text-center">
                <h2 className="display-4 fw-bold text-primary">{stat.number}</h2>
                <p className="text-muted">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container">
        <h2 className="text-center mb-5">Nuestros Servicios</h2>
        <div className="row g-4">
          {servicios.map((servicio, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  {servicio.icon}
                  <h5 className="card-title mb-3">{servicio.title}</h5>
                  <p className="card-text text-muted">
                    {servicio.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mt-5">
        <div className="bg-primary text-white p-5 rounded-3 text-center">
          <h2 className="fw-bold mb-4">¿Listo para unirte a nuestra comunidad?</h2>
          <p className="fs-5 mb-4">
            Descubre todo lo que tenemos preparado para ti y tu pasión por el ciclismo
          </p>
          <button className="btn btn-light btn-lg px-5">
            Comenzar Ahora
          </button>
        </div>
      </div>
    </section>
  );
};

