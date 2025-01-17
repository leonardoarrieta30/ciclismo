import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Datos de ejemplo: lista de imágenes de ciclistas
const ciclistas = [
    {
        id: 1,
        nombre: 'Competencia 1',
        lugar: 'Villa El Salvador, Perú',
        fecha: '23 Julio 2000',
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThdKyk7zo5l1cmGOHw0d0593WYuZ9bm6586A&s'
    },
    {
        id: 2,
        nombre: 'Competencia 2',
        lugar: 'Pachacámac, Perú',
        fecha: '30 Agosto 2024',
        imagen: 'https://media.glamour.mx/photos/61907bbf2d97bd4c522a896c/16:9/w_2784,h_1566,c_limit/211792.jpg'
    },
    {
        id: 3,
        nombre: 'Competencia 3',
        lugar: 'Arequipa, Perú',
        fecha: '15 Mayo 2023',
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpf7g_bLZcgA-zYxjvyPAZhujrtJBxfV8miw&s'
    },
    {
        id: 4,
        nombre: 'Competencia 4',
        lugar: 'Cusco, Perú',
        fecha: '12 Octubre 2025',
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMTcpyZTUMJZXo5PNfzDAdamn6QFXNSb2cYg&s'
    },
    {
        id: 5,
        nombre: 'Competencia 5',
        lugar: 'Lima, Perú',
        fecha: '18 Marzo 2022',
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWsq7gN7soHUBI2utWzcs-HMUL5g4HrduBOw&s'
    }
];

// Configuración del carrusel
const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 1024 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 1024, min: 768 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 768, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export const Resultados = () => {
    return (
        <div 
            className="container" 
            style={{
                paddingTop: '40px',  // Padding superior
                paddingBottom: '40px',  // Padding inferior
                backgroundColor: '#f8f9fa',
            }}
        >
            <h2 
                className="text-center mb-4" 
                style={{
                    paddingBottom: '10px',  // Padding inferior en el título
                }}
            >
                Álbum de Competencias
            </h2>
            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                showDots={true}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                itemClass="px-2 py-3"                
                style={{                    
                    paddingBottom: '20px',  // Padding inferior para el carrusel
                }}
            >
                {ciclistas.map(ciclista => (
                    <div 
                        key={ciclista.id} 
                        className="card shadow-lg border-0 d-flex flex-column" 
                        style={{
                            marginTop: '20px',  // Aumento del espacio entre las tarjetas
                            marginBottom: '80px',  // Aumento del espacio entre las tarjetas
                            padding: '15px',  // Padding dentro de las tarjetas
                            minHeight: '400px',  // Altura mínima fija para las tarjetas
                            cursor: 'default',  
                        }}
                    >
                        <img
                            src={ciclista.imagen}
                            className="card-img-top"
                            alt={`Imagen de ${ciclista.nombre}`}
                            style={{
                                objectFit: 'cover', // Asegura que la imagen se recorte bien si es necesario
                                height: '200px',  // Altura fija para la imagen
                            }}
                        />
                        <div 
                            className="card-body d-flex flex-column justify-content-between" 
                            style={{
                                padding: '15px',  // Padding dentro del cuerpo de la tarjeta
                                flexGrow: 1,  // Hace que el cuerpo crezca para llenar el espacio disponible
                            }}
                        >
                            <h5 className="card-title fw-bold" style={{ paddingBottom: '15px' }}>
                                {ciclista.nombre}
                            </h5>
                            <p className="card-text" style={{ paddingBottom: '10px' }}>
                                <span className="fw-semibold">Lugar:</span> {ciclista.lugar}
                            </p>
                            <p className="card-text">
                                <span className="fw-semibold">Fecha:</span> {ciclista.fecha}
                            </p>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};
