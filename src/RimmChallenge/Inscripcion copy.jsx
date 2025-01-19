import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FaBiking, FaCalendarAlt, FaMedal, FaUsers, FaArrowRight } from "react-icons/fa";

export const Inscripcion = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({});
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('principiante');

  const beneficios = [
    {
      icon: <FaBiking className="fs-1 text-primary mb-3" />,
      title: "Rutas Exclusivas",
      description: "Acceso a rutas especialmente diseñadas para diferentes niveles"
    },
    {
      icon: <FaCalendarAlt className="fs-1 text-primary mb-3" />,
      title: "Eventos Especiales",
      description: "Prioridad en la inscripción a eventos y competencias"
    },
    {
      icon: <FaMedal className="fs-1 text-primary mb-3" />,
      title: "Entrenamientos",
      description: "Sesiones de entrenamiento con ciclistas expertos"
    },
    {
      icon: <FaUsers className="fs-1 text-primary mb-3" />,
      title: "Comunidad",
      description: "Conexión con ciclistas apasionados como tú"
    }
  ];

  const niveles = {
    principiante: {
      titulo: "Principiante",
      precio: "29.99",
      caracteristicas: ["Acceso a rutas básicas", "1 evento mensual", "Soporte básico", "Comunidad online"]
    },
    intermedio: {
      titulo: "Intermedio",
      precio: "49.99",
      caracteristicas: ["Acceso a rutas avanzadas", "2 eventos mensuales", "Soporte prioritario", "Comunidad online", "Descuentos en equipamiento"]
    },
    avanzado: {
      titulo: "Avanzado",
      precio: "79.99",
      caracteristicas: ["Acceso a todas las rutas", "Eventos ilimitados", "Soporte 24/7", "Comunidad VIP", "Descuentos exclusivos", "Entrenador personal"]
    }
  };

  const onSubmit = (data) => {
    navigate("inscripcion-evento");
  };

  return (
    <div className="bg-light">
      {/* Hero Section */}
      <section className="bg-primary text-white py-5" id="comunidad">
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-4">
            ¡Únete a la Mejor Comunidad Ciclista!
          </h1>
          <p className="lead fs-4 mb-5">
            Descubre un mundo de aventuras, conocimiento y pasión por el ciclismo.
            Forma parte de una comunidad que comparte tu misma pasión.
          </p>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="bg-white p-4 rounded-3 shadow-lg text-dark">
                <h3 className="mb-4">¿Por qué unirte a nosotros?</h3>
                <div className="row g-4">
                  {beneficios.map((beneficio, index) => (
                    <div key={index} className="col-md-6">
                      <div className="p-3 h-100">
                        {beneficio.icon}
                        <h4 className="h5 mb-2">{beneficio.title}</h4>
                        <p className="text-muted mb-0">{beneficio.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planes Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Elige tu Plan</h2>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row g-4">
                {Object.entries(niveles).map(([key, nivel]) => (
                  <div key={key} className="col-md-4">
                    <div 
                      className={`card h-100 shadow-sm ${activeTab === key ? 'border-primary' : ''}`}
                      onClick={() => setActiveTab(key)}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="card-body text-center p-4">
                        <h3 className="card-title mb-4">{nivel.titulo}</h3>
                        <div className="display-6 fw-bold mb-4">
                          ${nivel.precio}
                          <span className="text-muted fs-6">/mes</span>
                        </div>
                        <ul className="list-unstyled">
                          {nivel.caracteristicas.map((caracteristica, index) => (
                            <li key={index} className="mb-3">
                              <FaArrowRight className="text-primary me-2" />
                              {caracteristica}
                            </li>
                          ))}
                        </ul>
                        <button 
                          className={`btn ${activeTab === key ? 'btn-primary' : 'btn-outline-primary'} btn-lg mt-4 w-100`}
                          onClick={() => navigate("inscripcion-evento")}
                        >
                          Seleccionar Plan
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dark text-white py-5">
        <div className="container text-center">
          <h2 className="mb-4">¿Listo para comenzar tu aventura?</h2>
          <p className="lead mb-4">
            Únete hoy y obtén acceso a tu primer evento gratuito
          </p>
          <button 
            className="btn btn-primary btn-lg px-5"
            onClick={() => navigate("inscripcion-evento")}
          >
            ¡Inscríbete Ahora!
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Lo que dice nuestra comunidad</h2>
          <div className="row g-4">
            {[
              {
                nombre: "Ana García",
                comentario: "La mejor decisión que he tomado. He mejorado muchísimo mi técnica.",
                nivel: "Principiante"
              },
              {
                nombre: "Carlos Ruiz",
                comentario: "Excelentes rutas y mejor comunidad. Los eventos son increíbles.",
                nivel: "Intermedio"
              },
              {
                nombre: "Laura Martínez",
                comentario: "El nivel de profesionalismo y organización es excepcional.",
                nivel: "Avanzado"
              }
            ].map((testimonio, index) => (
              <div key={index} className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <p className="card-text font-italic mb-3">"{testimonio.comentario}"</p>
                    <div className="d-flex align-items-center">
                      <div className="ms-3">
                        <h6 className="mb-1">{testimonio.nombre}</h6>
                        <small className="text-muted">Nivel {testimonio.nivel}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

