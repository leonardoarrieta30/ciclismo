import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#2990C3", paddingTop: "40px" }}>
      <div className="container">
        <div className="row">
          {/* Sección de Información */}
          <div className="col-lg-6 col-md-12">
            <div className="p-2 rounded-3 h-100">
              <h3 className="fw-bold mb-3">
                <span style={{ color: "#FFFFFF" }}>Rimm</span>
                <span style={{ color: "#FFFFFF" }}>challenge</span>
              </h3>
              <p className="text-dark pe-lg-5">
                Transformamos ideas en realidad, conectando personas y proyectos
                para construir el futuro del ciclismo. Únete a nuestra comunidad
                y sé parte de esta gran aventura.
              </p>
              {/* Redes Sociales */}
              <div className="d-flex gap-3 mt-3">
                <a
                  href="https://www.facebook.com/profile.php?id=100076352971096"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FaFacebookF style={{ color: "#ffffff" }} />
                </a>
                <a
                  href="https://www.tiktok.com/@rimmchallenge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FaTiktok style={{ color: "#ffffff" }} />
                </a>
                <a
                  href="https://www.instagram.com/rimms_challenger/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FaInstagram style={{ color: "#ffffff" }} />
                </a>
              </div>
            </div>
          </div>

          {/* Sección de Contacto */}
          <div className="col-lg-6 col-md-6">
            <div className="p-2 rounded-3 h-100">
              <h5 className="fw-bold mb-3 text-dark">Contacto</h5>
              <div className="row g-3">
                <div className="col-12 d-flex align-items-center">
                  <FaPhone
                    className="icono-contacto"
                    style={{ color: "#ffffff" }}
                  />
                  <div className="text-dark">
                    <span>+51 934 567 890</span>
                  </div>
                </div>
                <div className="col-12 d-flex align-items-center">
                  <FaPhone
                    className="icono-contacto"
                    style={{ color: "#ffffff" }}
                  />
                  <div className="text-dark">
                    <span>+51 934 567 890</span>
                  </div>
                </div>
                <div className="col-12 d-flex align-items-center">
                  <FaEnvelope
                    style={{
                      color: "#ffffff",
                      fontSize: "1.3rem",
                      marginRight: "10px",
                    }}
                  />
                  <div className="text-dark">
                    <span>rimmchallenge.inscripciones@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright y Enlaces */}
      <div
        style={{
          backgroundColor: "#F8F9FA",
          padding: "15px 0",
          marginTop: "30px",
          borderTop: "1px solid #E0E0E0",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start text-muted small">
              © {new Date().getFullYear()}{" "}
              <span style={{ color: "#2990C3" }}>Rimmchallenge</span>
            </div>
            <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
              <a href="#" className="footer-link">
                Privacidad
              </a>
              <a href="#" className="footer-link">
                Términos
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
