import React from 'react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

export const Sponsor = () => {
  const sponsors = [
    { id: 1, src: '/images/sponsors/cst_tires.png', alt: 'Sponsor 1' },
    { id: 2, src: '/images/sponsors/DDK.png', alt: 'Sponsor 2' },
    { id: 3, src: '/images/sponsors/FP.jpg', alt: 'Sponsor 3' },
    { id: 4, src: '/images/sponsors/images (1).png', alt: 'Sponsor 4' },
    { id: 5, src: '/images/sponsors/images.png', alt: 'Sponsor 5' },
    { id: 6, src: '/images/sponsors/KMC.png', alt: 'Sponsor 6' },
    { id: 7, src: '/images/sponsors/LOGO ATOM.png', alt: 'Sponsor 7' },
    { id: 8, src: '/images/sponsors/LOGO NOVATEC.png', alt: 'Sponsor 8' },
    { id: 9, src: '/images/sponsors/logo_speedlab_proyect.jpg', alt: 'Sponsor 9' },
    { id: 10, src: '/images/sponsors/raf bike logo.png', alt: 'Sponsor 10' },
    { id: 11, src: '/images/sponsors/shimano logo.png', alt: 'Sponsor 11' },
    { id: 12, src: '/images/sponsors/SIGMA LOGO.png', alt: 'Sponsor 12' },
    { id: 13, src: '/images/sponsors/SR SUNTOUR.png', alt: 'Sponsor 13' },
    { id: 14, src: '/images/sponsors/CHEPARK (Palabra sola)-1.png', alt: 'Sponsor 14' },
    { id: 15, src: '/images/sponsors/MAXXIS-1.png', alt: 'Sponsor 15' },
  ];

  return (
    <div className="container my-5">
      {/* Título centrado y estilizado */}
      <div className="text-center mb-4">
        <h1 className="fw-bold text-uppercase">Ellos confían en nosotros</h1>
        <hr className="w-50 mx-auto border-primary" />
      </div>

      {/* Carrusel automático con imágenes del mismo tamaño */}
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay]}
        breakpoints={{
          576: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
      >
        {sponsors.map((sponsor) => (
          <SwiperSlide key={sponsor.id} className="d-flex justify-content-center">
            <img
              src={sponsor.src}
              alt={sponsor.alt}
              className="rounded shadow-sm"
              style={{
                width: '150px', // Ancho fijo
                height: '150px', // Alto fijo
                objectFit: 'contain', // Evita deformaciones
                backgroundColor: '#fff', // Fondo blanco para logos con transparencia
                padding: '10px', // Espaciado interno para que no se vean apretadas
                borderRadius: '10px', // Bordes redondeados
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
