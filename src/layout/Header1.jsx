import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const Header1 = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Obtiene la ruta actual

  // Detectar el scroll para ajustar la apariencia del navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función para hacer scroll suave a una sección
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const navbarHeight = document.querySelector("nav")?.offsetHeight || 0;
      const sectionPosition = section.offsetTop - navbarHeight - 10;
      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }
  };

  // Función que decide si hacer scroll o navegar
  const handleNavigation = (pathOrId) => {
    if (location.pathname === "/" && document.getElementById(pathOrId)) {
      scrollToSection(pathOrId); // Si está en la página principal, hace scroll
    } else {
      navigate(pathOrId); // Si está en otra página, usa navigate
    }
  };

  return (
    <header
      style={{
        backgroundColor: "#FFFFFF",
        transition: "background-color 0.3s ease-in-out",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <nav
        className={`navbar navbar-expand-lg navbar-dark ${
          isScrolled ? "py-2 shadow-sm" : "py-3"
        } transition-all`}
      >
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img
              src="/images/rimmchallengelogo.png"
              alt="Rimmchallenge Logo"
              style={{
                maxHeight: isScrolled ? "80px" : "100px",
                transition: "max-height 0.3s ease-in-out",
              }}
              className="img-fluid w-50"
            />
          </a>

          <button
            className="navbar-toggler border-0 p-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-label="Toggle navigation"
          >
            <span
              className="navbar-toggler-icon"
              style={{ filter: "invert(1)" }}
            ></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button
                  className="nav-link fw-semibold px-3 border-0 bg-transparent text-dark"
                  onClick={() => handleNavigation("inscripcion")}
                >
                  Inscripciones
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link fw-semibold px-3 border-0 bg-transparent text-dark"
                  onClick={() => navigate("/reglamento")}
                >
                  Reglamento
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link fw-semibold px-3 border-0 bg-transparent text-dark"
                  onClick={() => handleNavigation("noticias")}
                >
                  Noticias
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link fw-semibold px-3 border-0 bg-transparent text-dark"
                  onClick={() => handleNavigation("album")}
                >
                  Álbum
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link fw-semibold px-3 border-0 bg-transparent text-dark"
                  onClick={() => handleNavigation("clasificaciones")}
                >
                  Clasificaciones
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
