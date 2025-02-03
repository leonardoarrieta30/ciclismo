import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';


export const InsertarAlbum = () => {
    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm();
    const [imagenes, setImagenes] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState('');
    const fileInputRef = useRef(null);

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const archivos = e.dataTransfer.files;
        const archivosValidos = [];

        for (let i = 0; i < archivos.length; i++) {
            const archivo = archivos[i];
            if (archivo.type.startsWith('image/')) {
                archivosValidos.push(archivo); // Agregamos los archivos válidos (no URLs, sino archivos)
            } else {
                setError('Solo se pueden cargar imágenes.');
            }
        }

        if (archivosValidos.length > 0) {
            setCargando(true);
            setImagenes((prevImagenes) => [...prevImagenes, ...archivosValidos]);
            setValue("imagenes", archivosValidos); // Establecemos las imágenes en el formulario
            setTimeout(() => setCargando(false), 2000);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleFileInputChange = (e) => {
        const archivos = e.target.files;
        const archivosValidos = [];

        for (let i = 0; i < archivos.length; i++) {
            const archivo = archivos[i];
            if (archivo.type.startsWith('image/')) {
                archivosValidos.push(archivo);
            } else {
                setError('Solo se pueden cargar imágenes.');
            }
        }

        if (archivosValidos.length > 0) {
            setCargando(true);
            setImagenes((prevImagenes) => [...prevImagenes, ...archivosValidos]);
            setValue("imagenes", archivosValidos);
            setTimeout(() => setCargando(false), 2000);
        }
    };

    const handleClickAreaArrastre = () => {
        fileInputRef.current.click();
    };

    const onSubmit = async (data) => {
        setCargando(true);
        const formData = new FormData();

        // Agregamos los campos del formulario al FormData
        formData.append('titulo', data.titulo);
        formData.append('lugar', data.lugar);
        formData.append('fecha', data.fecha);

        // Agregamos las imágenes al FormData
        imagenes.forEach((imagen, index) => {
            formData.append('imagenes', imagen);
        });

        console.log(data);
        console.log(formData);



        /*   try {
              const response = await fetch('/api/guardarAlbum', {
                  method: 'POST',
                  body: formData,
              });
  
              if (response.ok) {
                  console.log('Formulario enviado exitosamente');
                  alert('Formulario enviado exitosamente');
              } else {
                  console.error('Error al enviar el formulario');
                  alert('Error al enviar el formulario');
              }
          } catch (error) {
              console.error('Error de red:', error);
              alert('Error de red');
          } finally {
              setCargando(false);
          } */
    };

    useEffect(() => {
        console.log("insertar album");
    }, []);

    return (
        <div className='container mt-4'>
            <div className="row">
                <h1>Hola Usuario Administrador</h1>
                <span>Aca podras insertar tus fotos del album de competencias</span>

                <form className='mt-3' onSubmit={handleSubmit(onSubmit)}>

                   {/*  <div className="col-12">
                        <label className="form-label">Título de la foto</label>
                        <input
                            type="text"
                            className="form-control"
                            {...register('titulo', { required: 'Este campo es obligatorio' })}
                        />
                        {errors.titulo && <p className="text-danger">{errors.titulo.message}</p>}
                    </div>

                    <div className="col-12">
                        <label className="form-label">Dónde se realizó la competencia</label>
                        <input
                            type="text"
                            className="form-control"
                            {...register('lugar', { required: 'Este campo es obligatorio' })}
                        />
                        {errors.lugar && <p className="text-danger">{errors.lugar.message}</p>}
                    </div>

                    <div className="col-12">
                        <label className="form-label">Fecha de la competencia</label>
                        <input
                            type="text"
                            className="form-control"
                            {...register('fecha', { required: 'Este campo es obligatorio' })}
                        />
                        {errors.fecha && <p className="text-danger">{errors.fecha.message}</p>}
                    </div> */}

                    <div
                        className={`col-12 mt-3 area-arrastre ${cargando ? 'cargando' : ''}`}
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        onClick={handleClickAreaArrastre}
                    >
                        <p>Arrastra tus imágenes aquí o haz clic para seleccionar archivos</p>
                        <p>(Puedes arrastrar varias imágenes a la vez)</p>
                    </div>

                    <input
                        type="file"
                        ref={fileInputRef}
                        multiple
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handleFileInputChange}
                    />

                    <div className="col-12 mt-3">
                        {cargando && <div className="loader"></div>}
                        {error && <div className="alert alert-danger">{error}</div>}
                        <h5>Imágenes seleccionadas:</h5>
                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                            {imagenes.map((img, index) => (
                                <img key={index} src={URL.createObjectURL(img)} alt={`imagen-${index}`} className="imagen-previa" />
                            ))}
                        </div>
                    </div>

                    <div className="col-12 mt-3">
                        <button type="submit" className="btn btn-primary">Guardar Album</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
