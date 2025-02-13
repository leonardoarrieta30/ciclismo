import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { getNoticias } from "../resources/api/serviciosApi";

const noticiasData = [
  {
    id: 1,
    titulo: "Descubren un nuevo planeta",
    imagen:
      "https://img.redbull.com/images/c_crop,x_940,y_0,h_3264,w_2611/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2018/11/27/325118c5-1118-4dfb-82b5-4e5958acaa40/red-bull-zera-o-pico-2018-guaratinga-brasil",
    descripcion:
      "Astrónomos han detectado un exoplaneta con condiciones similares a la Tierra.",
  },
  {
    id: 2,
    titulo: "Avances en la IA",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlZSDflnJGnu1YPm3FI9j4nWj_acO3duOQJA&s",
    descripcion:
      "Nuevos algoritmos de inteligencia artificial están revolucionando la industria.",
  },
  {
    id: 3,
    titulo: "Crisis climática global",
    imagen: "https://source.unsplash.com/400x450/?climate,earth",
    descripcion:
      "Expertos advierten sobre el aumento de temperaturas y sus consecuencias.",
  },
  {
    id: 4,
    titulo: "Descubrimiento en la Antártida",
    imagen: "https://source.unsplash.com/400x600/?antarctica,snow",
    descripcion: "Científicos hallan nuevas especies bajo el hielo milenario.",
  },
  {
    id: 5,
    titulo: "Innovación en transporte",
    imagen: "https://source.unsplash.com/400x350/?transport,car",
    descripcion: "Autos eléctricos y autónomos dominan el mercado en 2025.",
  },
  {
    id: 6,
    titulo: "Misterio en el océano",
    imagen: "https://source.unsplash.com/400x400/?ocean,deepsea",
    descripcion:
      "Exploradores descubren estructuras inexplicables en el fondo marino.",
  },
];

export const MasNoticias = () => {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Reemplaza esta URL con la API real
    const obtenerNoticias = async () => {
        const res = await getNoticias();
        setNoticias(res.noticias);
        console.log(res);
        
    }

    obtenerNoticias();
  }, []);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">📢 Últimas Noticias</h1>

      <Masonry
        breakpointCols={{ default: 3, 992: 2, 768: 1 }}
        className="masonry-grid"
        columnClassName="masonry-column"
      >
        {noticias.map((noticia) => (
          <div key={noticia.id} className="card mb-4 shadow-sm">
            <img
              src={noticia.foto}
              alt={noticia.titulo}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title text-primary">{noticia.titulo}</h5>
              <p className="card-text">{noticia.descripcionTotal}</p>
            </div>
          </div>
        ))}
      </Masonry>
    </div>
  );
};
