import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaMapMarkerAlt, FaCalendarAlt, FaTrophy, FaSearch } from 'react-icons/fa';

// Datos de ejemplo ampliados
const ciclistas = [
    {
        id: 1,
        nombre: 'Competencia 1',
        lugar: 'Villa El Salvador, Perú',
        fecha: '23 Julio 2000',
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThdKyk7zo5l1cmGOHw0d0593WYuZ9bm6586A&s',
        participantes: 150,
        categoria: 'Profesional',
        distancia: '80km'
    },
    {
        id: 2,
        nombre: 'Competencia 2',
        lugar: 'Pachacámac, Perú',
        fecha: '30 Agosto 2024',
        imagen: 'https://media.glamour.mx/photos/61907bbf2d97bd4c522a896c/16:9/w_2784,h_1566,c_limit/211792.jpg',
        participantes: 200,
        categoria: 'Amateur',
        distancia: '50km'
    },
    {
        id: 3,
        nombre: 'Competencia 3',
        lugar: 'Arequipa, Perú',
        fecha: '15 Mayo 2023',
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpf7g_bLZcgA-zYxjvyPAZhujrtJBxfV8miw&s',
        participantes: 300,
        categoria: 'Elite',
        distancia: '100km'
    },
    {
        id: 4,
        nombre: 'Competencia 4',
        lugar: 'Cusco, Perú',
        fecha: '12 Octubre 2025',
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMTcpyZTUMJZXo5PNfzDAdamn6QFXNSb2cYg&s',
        participantes: 250,
        categoria: 'Mixto',
        distancia: '60km'
    },
    {
        id: 5,
        nombre: 'Competencia 5',
        lugar: 'Lima, Perú',
        fecha: '18 Marzo 2022',
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWsq7gN7soHUBI2utWzcs-HMUL5g4HrduBOw&s',
        participantes: 180,
        categoria: 'Amateur',
        distancia: '40km'
    }
];

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

export const Album = () => {
    const [modalImage, setModalImage] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Todas');

    const categories = ['Todas', 'Profesional', 'Amateur', 'Elite', 'Mixto'];

    const filteredCiclistas = ciclistas.filter(ciclista => {
        const matchesSearch = ciclista.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            ciclista.lugar.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'Todas' || ciclista.categoria === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <section className="py-5 bg-dark" id="album">
            <div className="container">
                {/* Header Section */}
                <div className="text-center mb-5">
                    <h2 className="display-4 fw-bold mb-3 text-light">Álbum de Competencias</h2>
                    <p className="lead text-muted">
                        Revive los mejores momentos de nuestras competencias a través del tiempo
                    </p>
                </div>

                {/* Search and Filter Section */}
                <div className="row mb-4">
                    <div className="col-md-6 mb-3 mb-md-0">
                        <div className="input-group">
                            <span className="input-group-text bg-white">
                                <FaSearch />
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Buscar competencia..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <select
                            className="form-select"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            {categories.map(category => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Carousel Section */}
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    showDots={true}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    itemClass="px-3"
                    containerClass="pb-5"
                >
                    {filteredCiclistas.map(ciclista => (
                        <div
                            key={ciclista.id}
                            className="card h-100 shadow-lg border-0 hover-effect"
                        >
                            <div className="position-relative">
                                <img
                                    src={ciclista.imagen}
                                    className="card-img-top cursor-pointer"
                                    alt={ciclista.nombre}
                                    style={{ height: '200px', objectFit: 'cover' }}
                                    onClick={() => setModalImage(ciclista)}
                                />
                                <span className="position-absolute top-0 end-0 badge bg-primary m-2">
                                    {ciclista.categoria}
                                </span>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title fw-bold mb-3">{ciclista.nombre}</h5>
                                <div className="d-flex align-items-center mb-2">
                                    <FaMapMarkerAlt className="text-primary me-2" />
                                    <span>{ciclista.lugar}</span>
                                </div>
                                <div className="d-flex align-items-center mb-2">
                                    <FaCalendarAlt className="text-primary me-2" />
                                    <span>{ciclista.fecha}</span>
                                </div>
                                <div className="d-flex align-items-center mb-2">
                                    <FaTrophy className="text-primary me-2" />
                                    <span>{ciclista.distancia} - {ciclista.participantes} participantes</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>

                {/* Image Modal */}
                {modalImage && (
                    <div
                        className="modal fade show"
                        style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
                        onClick={() => setModalImage(null)}
                    >
                        <div className="modal-dialog modal-lg modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">{modalImage.nombre}</h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        onClick={() => setModalImage(null)}
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <img
                                        src={modalImage.imagen}
                                        className="img-fluid"
                                        alt={modalImage.nombre}
                                    />
                                    <div className="mt-3">
                                        <p className="mb-2">
                                            <strong>Lugar:</strong> {modalImage.lugar}
                                        </p>
                                        <p className="mb-2">
                                            <strong>Fecha:</strong> {modalImage.fecha}
                                        </p>
                                        <p className="mb-2">
                                            <strong>Categoría:</strong> {modalImage.categoria}
                                        </p>
                                        <p className="mb-0">
                                            <strong>Participantes:</strong> {modalImage.participantes}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <style jsx>{`
                    .hover-effect {
                        transition: transform 0.3s ease;
                    }
                    .hover-effect:hover {
                        transform: translateY(-5px);
                    }
                    .cursor-pointer {
                        cursor: pointer;
                    }
                `}</style>
            </div>
        </section>
    );
};

