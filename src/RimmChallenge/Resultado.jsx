import React, { useState } from 'react';
import { FaMedal, FaFlag, FaClock, FaUserAlt, FaThermometerHalf, FaTachometerAlt, FaCalendarAlt, FaMapMarkedAlt } from 'react-icons/fa';
import { resultados } from './data/resultados';

export const Resultado = () => {
    const [openModal, setOpenModal] = useState(false);
    const [selectedResult, setSelectedResult] = useState(null);
    const [filterCategory, setFilterCategory] = useState('Todas');
    const [sortBy, setSortBy] = useState('puesto');

    const categories = ['Todas', ...new Set(resultados.map(r => r.categoria))];

    const getMedalColor = (puesto) => {
        switch(puesto) {
            case 1: return 'text-warning'; // Oro
            case 2: return 'text-secondary'; // Plata
            case 3: return 'text-bronze'; // Bronce
            default: return 'text-dark';
        }
    };

    const filteredResults = resultados
        .filter(r => filterCategory === 'Todas' || r.categoria === filterCategory)
        .sort((a, b) => {
            if (sortBy === 'puesto') return a.puesto - b.puesto;
            if (sortBy === 'tiempo') return a.tiempo - b.tiempo;
            if (sortBy === 'nombre') return a.nombre.localeCompare(b.nombre);
            return 0;
        });

    return (
        <section className="py-5" id="resultados">
            <div className="container">
                {/* Header Section */}
                <div className="text-center mb-5">
                    <h2 className="display-4 fw-bold">Resultados</h2>
                    <p className="lead text-muted">Descubre los logros de nuestros ciclistas más destacados</p>
                </div>

                {/* Filters Section */}
                <div className="row mb-4">
                    <div className="col-md-6 mb-3">
                        <select 
                            className="form-select form-select-lg"
                            value={filterCategory}
                            onChange={(e) => setFilterCategory(e.target.value)}
                        >
                            {categories.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-6 mb-3">
                        <select 
                            className="form-select form-select-lg"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option value="puesto">Ordenar por Puesto</option>
                            <option value="tiempo">Ordenar por Tiempo</option>
                            <option value="nombre">Ordenar por Nombre</option>
                        </select>
                    </div>
                </div>

                {/* Results Grid */}
                <div className="row g-4">
                    {filteredResults.map((resultado) => (
                        <div key={resultado.id} className="col-12 col-lg-4 col-md-6">
                            <div 
                                className="card h-100 shadow-lg border-0 hover-card"
                                onClick={() => {
                                    setSelectedResult(resultado);
                                    setOpenModal(true);
                                }}
                            >
                                <div className="position-relative">
                                    <img
                                        src={resultado.imagen}
                                        alt={resultado.nombre}
                                        className="card-img-top"
                                        style={{ height: '250px', objectFit: 'cover' }}
                                    />
                                    <div className="position-absolute top-0 end-0 p-3">
                                        <span className="badge bg-primary">{resultado.categoria}</span>
                                    </div>
                                </div>
                                <div className="card-body p-4">
                                    <div className="d-flex justify-content-between align-items-start mb-3">
                                        <div>
                                            <h4 className="card-title mb-1">{resultado.nombre}</h4>
                                            <p className="text-muted mb-0">{resultado.equipo}</p>
                                        </div>
                                        <div className="text-center">
                                            <FaMedal className={`fs-1 ${getMedalColor(resultado.puesto)}`} />
                                            <div className="fs-4 fw-bold">{resultado.puesto}º</div>
                                        </div>
                                    </div>
                                    <div className="row g-3">
                                        <div className="col-6">
                                            <div className="d-flex align-items-center">
                                                <FaFlag className="text-primary me-2" />
                                                <span>{resultado.pais}</span>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="d-flex align-items-center">
                                                <FaClock className="text-primary me-2" />
                                                <span>{resultado.tiempo} min</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Detailed Modal */}
                {openModal && selectedResult && (
                    <div className="modal show fade" tabIndex="-1" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <div className="modal-dialog modal-xl modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header border-0 bg-dark text-white">
                                    <h4 className="modal-title">{selectedResult.nombre}</h4>
                                    <button type="button" className="btn-close btn-close-white" onClick={() => setOpenModal(false)}></button>
                                </div>
                                <div className="modal-body p-0">
                                    <div className="row g-0">
                                        <div className="col-md-5">
                                            <img
                                                src={selectedResult.imagen}
                                                alt={selectedResult.nombre}
                                                className="img-fluid h-100 w-100"
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                        <div className="col-md-7 p-4">
                                            <div className="mb-4">
                                                <div className="d-flex justify-content-between align-items-center mb-3">
                                                    <h3 className="mb-0">Detalles de la Carrera</h3>
                                                    <FaMedal className={`fs-1 ${getMedalColor(selectedResult.puesto)}`} />
                                                </div>
                                                <div className="row g-3">
                                                    <div className="col-md-6">
                                                        <div className="card bg-light">
                                                            <div className="card-body">
                                                                <div className="d-flex align-items-center">
                                                                    <FaUserAlt className="text-primary me-2" />
                                                                    <div>
                                                                        <small className="text-muted">Dorsal</small>
                                                                        <p className="mb-0 fw-bold">{selectedResult.dorsal}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="card bg-light">
                                                            <div className="card-body">
                                                                <div className="d-flex align-items-center">
                                                                    <FaThermometerHalf className="text-primary me-2" />
                                                                    <div>
                                                                        <small className="text-muted">Clima</small>
                                                                        <p className="mb-0 fw-bold">{selectedResult.condicionesClimaticas}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="card bg-light">
                                                            <div className="card-body">
                                                                <div className="d-flex align-items-center">
                                                                    <FaTachometerAlt className="text-primary me-2" />
                                                                    <div>
                                                                        <small className="text-muted">Velocidad Promedio</small>
                                                                        <p className="mb-0 fw-bold">{selectedResult.promedioVelocidad} km/h</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="card bg-light">
                                                            <div className="card-body">
                                                                <div className="d-flex align-items-center">
                                                                    <FaCalendarAlt className="text-primary me-2" />
                                                                    <div>
                                                                        <small className="text-muted">Fecha</small>
                                                                        <p className="mb-0 fw-bold">{selectedResult.fecha}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="mb-4">
                                                <h5 className="mb-3">Detalles del Recorrido</h5>
                                                <div className="d-flex align-items-start mb-3">
                                                    <FaMapMarkedAlt className="text-primary me-2 mt-1" />
                                                    <p className="mb-0">{selectedResult.recorrido}</p>
                                                </div>
                                            </div>

                                            <div className="border-top pt-3">
                                                <div className="row">
                                                    <div className="col-6">
                                                        <small className="text-muted">Puntos Obtenidos</small>
                                                        <h4 className="mb-0">{selectedResult.puntos}</h4>
                                                    </div>
                                                    <div className="col-6 text-end">
                                                        <small className="text-muted">Competición</small>
                                                        <h4 className="mb-0">{selectedResult.competicion}</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <style jsx>{`
                    .hover-card {
                        cursor: pointer;
                        transition: transform 0.3s ease;
                    }
                    .hover-card:hover {
                        transform: translateY(-5px);
                    }
                    .text-bronze {
                        color: #cd7f32;
                    }
                `}</style>
            </div>
        </section>
    );
};

