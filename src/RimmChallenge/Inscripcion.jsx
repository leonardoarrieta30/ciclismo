import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {
  FaBiking,
  FaCalendarAlt,
  FaMedal,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

export const Inscripcion = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("principiante");

  const beneficios = [
    {
      icon: <FaBiking className="text-warning mb-3 text-3xl" />,
      title: "Rutas Exclusivas",
      description:
        "Acceso a rutas especialmente diseñadas para diferentes niveles",
    },
    {
      icon: <FaCalendarAlt className="text-warning mb-3 text-3xl" />,
      title: "Eventos Especiales",
      description: "Prioridad en la inscripción a eventos y competencias",
    },
    {
      icon: <FaMedal className="text-warning mb-3 text-3xl" />,
      title: "Entrenamientos",
      description: "Sesiones de entrenamiento con ciclistas expertos",
    },
    {
      icon: <FaUsers className="text-warning mb-3 text-3xl" />,
      title: "Comunidad",
      description: "Conexión con ciclistas apasionados como tú",
    },
  ];


  const descargarCalendario = () => {
    const link = document.createElement("a");
    link.href = "/images/calendario/CALENDARIO 2025.jpg"; // Ruta relativa en `public`
    link.download = "CALENDARIO 2025.jpg"; // Nombre del archivo al descargar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container my-5" id="inscripcion">
  

        <div className="container text-center">
          <div className="row">
            <div className="col-12">
              <h1 className="fw-bold mb-4">
                ¡Únete a la Mejor Comunidad Ciclista!
              </h1>
              <p className="fs-5 mb-5">
                Descubre un mundo de aventuras, conocimiento y pasión por el
                ciclismo. Forma parte de una comunidad que comparte tu misma
                pasión.
              </p>
            </div>
          </div>
        </div>
    

    
        <div className="container text-center">
          <div className="row">
            <div className="col-12 col-xl-6 col-lg-6 col-md-12 mb-3 ">
              <h2 >Calendario 2025</h2>              
              <span className="lead text-muted">
                Enterate de eventos de Rimm Challenge este 2025
              </span>
              <br />
              <button
                className="btn btn-warning text-dark mt-3"
                onClick={() => descargarCalendario()}
              >
                Descargar Calendario
              </button>
            </div>
            <div className="col-12 col-xl-6 col-lg-6 col-md-12">
              <h2 >¿Listo para comenzar tu aventura?</h2>
              <span className="lead mb-3">
                Únete hoy y obtén acceso a tu primer evento gratuito
              </span>
              <br />
              <button
                className="btn btn-warning text-dark mt-3"
                onClick={() => navigate("inscripcion-evento")}
              >
                ¡Inscríbete Ahora!
              </button>
            </div>
          </div>
        </div>


      {/* Testimonials Section */}
      {/* <section className="py-5 text-dark">
        <div className="container">
          <h2 className="text-center mb-5 ">
            Lo que dice nuestra comunidad
          </h2>
          <div className="row g-4">
            {[
              {
                nombre: "Ana García",
                comentario:
                  "La mejor decisión que he tomado. He mejorado muchísimo mi técnica.",
                nivel: "Principiante",
              },
              {
                nombre: "Carlos Ruiz",
                comentario:
                  "Excelentes rutas y mejor comunidad. Los eventos son increíbles.",
                nivel: "Intermedio",
              },
              {
                nombre: "Laura Martínez",
                comentario:
                  "El nivel de profesionalismo y organización es excepcional.",
                nivel: "Avanzado",
              },
            ].map((testimonio, index) => (
              <div key={index} className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <p className="card-text font-italic mb-3">
                      "{testimonio.comentario}"
                    </p>
                    <div className="d-flex align-items-center">
                      <div className="ms-3">
                        <h6 className="mb-1">{testimonio.nombre}</h6>
                        <small className="text-muted">
                          Nivel {testimonio.nivel}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Planes Section */}
     {/*  <section className="py-4">
        <div className="container">
          <h2 className="text-center mb-3">Pagos</h2>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body text-center p-4">
                      <h3 className="card-title mb-4">YAPE</h3>
                      <p className="mb-4">902 046 868</p>
                      <p className="text-muted">
                        Coloca como descripción el nombre del deportista
                        participante.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body text-center p-4">
                      <h3 className="card-title mb-4">
                        Depósito en agentes BCP
                      </h3>
                      <p className="mb-4">Cuenta BCP: 194-9865439-0-96</p>
                      <p className="text-muted">
                        A nombre de RIMM CHALLENGE PERU SAC.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body text-center p-4">
                      <h3 className="card-title mb-4">Transferencias CCI</h3>
                      <p className="mb-4">CCI: 002 194 00986543909696</p>
                      <p className="text-muted">
                        A nombre de RIMM CHALLENGE PERU SAC.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};
