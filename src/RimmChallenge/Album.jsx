import React, { useState } from 'react';
import { resultados } from './data/resultados';

export const Album = () => {
    const [openModal, setOpenModal] = useState(false);
    const [selectedResult, setSelectedResult] = useState(null); // Para almacenar el resultado seleccionado

    // Función para manejar el clic en un card y abrir el modal con los detalles
    const handleCardClick = (resultado) => {
        setSelectedResult(resultado);
        setOpenModal(true);
    };

    return (
        <div className="container py-4">
            <h2 className="text-center mb-4">Resultados</h2>
            <div className="row g-4">
                {resultados.map((resultado) => (
                    <div
                        key={resultado.id}
                        className="col-12 col-lg-4 col-md-6 col-sm-12 clickable-card"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => handleCardClick(resultado)} // Llamamos a la función al hacer clic
                    >
                        <div className="card shadow-lg border-0 h-100 rounded-3 overflow-hidden">
                            {/* Mostrar la imagen dentro de la tarjeta */}
                            <img
                                src={resultado.imagen}
                                alt={resultado.nombre}
                                className="card-img-top"
                                style={{ objectFit: 'cover', height: '200px' }}
                            />
                            <div className="card-body text-center p-4">
                                <div className="row">
                                    <div className="col-6">
                                        <span className='fs-5'>Puesto</span>: <br /> <span className="fw-bold text-success fs-1">{resultado.puesto}</span>
                                    </div>
                                    <div className="col-6">
                                        <h5 className="card-title fw-bold text-primary">
                                            {resultado.nombre}
                                        </h5>
                                        <p className="card-text text-dark mb-2">
                                            <span className="fw-semibold">País:</span> {resultado.pais}
                                        </p>
                                        <p className="card-text text-dark">
                                            <span className="fw-semibold">Tiempo:</span> {resultado.tiempo} minutos
                                        </p>
                                    </div>

                                </div>

                            </div>
                            {/*  <div className="card-footer bg-light text-center py-3">
                                <small className="text-muted">
                                    Puesto: <span className="fw-bold text-success">{resultado.puesto}</span>
                                </small>
                            </div> */}
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal de Bootstrap */}
            <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                style={{ display: openModal ? 'block' : 'none' }} // Mostrar el modal solo cuando se ha seleccionado un ciclista
            >
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Detalles del Ciclista
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                onClick={() => setOpenModal(false)} // Cerrar el modal
                            ></button>
                        </div>
                        <div className="modal-body">
                            {selectedResult ? (
                                <div className="container">
                                    <div className="row">
                                        {/* Mostrar la imagen dentro del modal */}
                                        <div className="col-12 mb-3 text-center">
                                            <img
                                                src={selectedResult.imagen}
                                                alt={selectedResult.nombre}
                                                className="img-fluid rounded-3"
                                                style={{ maxHeight: '300px', objectFit: 'cover' }}
                                            />
                                        </div>
                                        {/* Columna 1: Datos en la izquierda */}
                                        <div className="col-md-6 mb-3">
                                            <h5 className='fs-4'>Nombre: <span className='fs-5'>{selectedResult.nombre}</span></h5>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <h5 className='fs-4'>País: <span className='fs-5'>{selectedResult.pais}</span></h5>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <h5 className='fs-4'>Tiempo: <span className='fs-5'>{selectedResult.tiempo}</span> minutos</h5>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <h5 className='fs-4'>Puesto: <span className='fs-5'>{selectedResult.puesto}</span></h5>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <h5 className='fs-4'>Categoría: <span className='fs-5'>{selectedResult.categoria}</span></h5>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <h5 className='fs-4'>Equipo: <span className='fs-5'>{selectedResult.equipo}</span></h5>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <h5 className='fs-4'>Fecha: <span className='fs-5'>{selectedResult.fecha}</span></h5>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <h5 className='fs-4'>Competición: <span className='fs-5'>{selectedResult.competicion}</span></h5>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <h5 className='fs-4'>Recorrido: <span className='fs-5'>{selectedResult.recorrido}</span></h5>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <h5 className='fs-4'>Condiciones Climáticas: <span className='fs-5'>{selectedResult.condicionesClimaticas}</span></h5>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <h5 className='fs-4'>Velocidad Promedio: <span className='fs-5'>{selectedResult.promedioVelocidad}</span> km/h</h5>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <h5 className='fs-4'>Puntos: <span className='fs-5'>{selectedResult.puntos}</span></h5>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <h5 className='fs-4'>Dorsal: <span className='fs-5'>{selectedResult.dorsal}</span></h5>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <p>Cargando detalles...</p>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};
