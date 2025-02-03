
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

export const InscripcionEvento = () => {


    const { register, handleSubmit, formState: { errors } } = useForm({})


    const [esMenorDeEdad, setEsMenorDeEdad] = useState(false);

    const handleCheckboxChange = (event) => {
        setEsMenorDeEdad(event.target.checked);
    };



    const onSubmit = (data) => {
      //  console.log(data);        
    }


    return (
        <div className='container py-5'>
            <div className='row'>
                <h1>IV RALLY VUELTA AL SANTUARIO ECOLOGICO PACHACAMAC 2025</h1>
                <div className="container">
                    <div className="row">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="col-12">
                                <label htmlFor="" className='form-label'>Correo electronico</label>
                                <input type="email" id="" name="" className="form-control" {...register('correoElectronico', {
                                    required: 'Este campo es requerido',
                                })} />
                                {errors.correoElectronico && <span className='text-danger'>{errors.correoElectronico.message}</span>}
                            </div>
                            <div className="col-12 mt-2">
                                <label htmlFor="" className='form-label me-2'>Es menor de edad?</label>
                                <input class="form-check-input" type="checkbox" value="" aria-label="Checkbox for following text input"
                                    checked={esMenorDeEdad}  {...register('esMenorEdad')}
                                    onChange={handleCheckboxChange} />
                            </div>
                            {
                                esMenorDeEdad &&
                                <div className="container my-2 p-0">

                                    <div className="row">
                                        <h5>DATOS DEL APODERADO</h5>
                                        <div className="col-12 col-md-4 ">
                                            <label htmlFor="" className='form-label'>Nombres</label>
                                            <input type="text" id="" name="" className="form-control" {...register('nomApo', {
                                                required: 'Este campo es requerido',
                                            })} />
                                            {errors.nomApo && <span className='text-danger'>{errors.nomApo.message} </span>}
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <label htmlFor="" className='form-label'>Apellidos</label>
                                            <input type="text" id="" name="" className="form-control" {...register('apeApo', {
                                                required: 'Este campo es requerido',
                                            })} />
                                            {errors.apeApo && <span className='text-danger'>{errors.apeApo.message} </span>}
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <label htmlFor="" className='form-label'>Dni/Pasaporte</label>
                                            <input type="text" id="" name="" className="form-control" {...register('numDoc', {
                                                required: 'Este campo es requerido',
                                            })} />
                                            {errors.numDoc && <span className='text-danger'>{errors.numDoc.message} </span>}
                                        </div>
                                    </div>

                                </div>
                            }
                            <h5>DATOS DEL PARTICIPANTE</h5>
                            <div className="col-12">
                                <label htmlFor="" className='form-label'>Nombres y Apellidos del participante</label>
                                <input type="text" id="" name="" className="form-control" {...register('nomComPar', {
                                    required: "El campo es requerido"
                                })} />
                                {errors.nomComPar && <span className='text-danger'>{errors.nomComPar.message} </span>}
                            </div>
                            <div className="col-12">
                                <label htmlFor="" className='form-label'>Dni/Pasaporte del participante</label>
                                <input type="text" id="" name="" className="form-control" {...register('numDocPar', {
                                    required: "El campo es requerido"
                                })} />
                                {errors.numDocPar && <span className='text-danger'>{errors.numDocPar.message} </span>}
                            </div>
                            <div className="col-12">
                                <label htmlFor="" className='form-label'>Nombre del club/equipo</label>
                                <input type="text" id="" name="" className="form-control" {...register('nomClub', {
                                    required: "El campo es requerido"
                                })} />
                                {errors.nomClub && <span className='text-danger'>{errors.nomClub.message} </span>}
                            </div>
                            <div className="col-12">
                                <label htmlFor="" className='form-label'>Numero de celular</label>
                                <input type="text" id="" name="" className="form-control" {...register('numCel', {
                                    required: "El campo es requerido"
                                })} />
                                {errors.numCel && <span className='text-danger'>{errors.numCel.message} </span>}
                            </div>
                            <div className="col-12">
                                <label htmlFor="" className='form-label'>Provincia</label>
                                <input type="text" id="" name="" className="form-control" {...register('prov', {
                                    required: "El campo es requerido"
                                })} />
                                {errors.prov && <span className='text-danger'>{errors.prov.message} </span>}
                            </div>

                            <div className="col-12 mt-2">
                                <label htmlFor="" className='form-label'>Categorias promocionales - considerar la edad que tendra en el 2025</label>
                                <select class="form-select" aria-label="Default select example" defaultValue="" {...register('cat', {
                                    required: 'Este campo es requerido'
                                })} >
                                    <option value="" disabled>Seleccione una opcion</option>
                                    <option >PRE CADETES DAMAS  (13 - 14 AÑOS)</option>
                                    <option >PRE CADETES VARONES (13 - 14 AÑOS)</option>
                                    <option >TURISMO DAMAS (17 - 29 AÑOS)</option>
                                    <option >TURISMO VARONES (17 - 29 AÑOS)</option>
                                    <option >SPORT MASTER DAMAS (30 AÑOS A MÁS EDAD)</option>
                                    <option >SPORT MASTER VARONES A (30 - 39 AÑOS)</option>
                                    <option >SPORT MASTER VARONES B (40 - 49 AÑOS)</option >
                                    <option >SPORT MASTER VARONES C (50 - 59 AÑOS)</option >
                                    <option >SPORT MASTER VARONES D (60 AÑOS A MÁS EDAD)</option >
                                </select >
                                {errors.cat && <span className='text-danger'>{errors.cat.message} </span>}
                            </div >

                            <div className="col-12 mt-2">
                                <label htmlFor="" className='form-label'>Categorias pro - considerar la edad que tendra en el 2025</label>
                                <select class="form-select" aria-label="Default select example" defaultValue="" {...register('catPro', {
                                    required: 'Este campo es requerido'
                                })}>
                                    <option value="" disabled>Seleccione una opcion</option>
                                    <option >CADETES DAMAS (15 - 16 AÑOS)</option>
                                    <option > CADETES VARONES (15 - 16 AÑOS)</option>
                                    <option >OPEN DAMAS (+17 AÑOS)</option>
                                    <option >OPEN VARONES (+17 AÑOS)</option>
                                    <option >MASTER DAMAS (+30 AÑOS)</option>
                                    <option >MASTER A VARONES PRO  (30 - 39 AÑOS)</option>
                                    <option > MASTER B VARONES PRO (40 - 49 AÑOS)</option>
                                    <option > MASTER C VARONES PRO (+50 AÑOS)</option>
                                </select >
                                {errors.catPro && <span className='text-danger'>{errors.catPro.message} </span>}
                            </div >

                            <div className='col-12 mt-2 text-center'>
                                <button className='btn btn-success'>
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </div >
                </div >
            </div >
        </div >
    )
}
