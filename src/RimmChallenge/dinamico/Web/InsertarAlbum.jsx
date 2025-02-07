import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { insertarAlbum } from "../../../resources/api/serviciosApi";

export const InsertarAlbum = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset
  } = useForm({
    mode: "onChange",
  });

  const [imagenes, setImagenes] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const fileInputRef = useRef(null);
  const MAX_IMAGENES = 5;
  const usuarioId = 1;

  const handleDrop = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const archivos = Array.from(e.dataTransfer.files).filter((file) =>
      file.type.startsWith("image/")
    );

    if (imagenes.length + archivos.length > MAX_IMAGENES) {
      Swal.fire({
        title: `Solo puedes subir hasta ${MAX_IMAGENES} imágenes.`,
        icon: "error",
      });
      return;
    }

    setCargando(true);
    const nuevasImagenes = await Promise.all(
      archivos.map(async (archivo) => {
        const base64 = await convertirABase64(archivo);
        return { base64 };
      })
    );

    setImagenes((prevImagenes) => [...prevImagenes, ...nuevasImagenes]);
    setCargando(false);
  };

  const handleFileInputChange = async (e) => {
    const archivos = Array.from(e.target.files).filter((file) =>
      file.type.startsWith("image/")
    );

    if (imagenes.length + archivos.length > MAX_IMAGENES) {
      Swal.fire({
        title: `Solo puedes subir hasta ${MAX_IMAGENES} imágenes.`,
        icon: "error",
      });
      return;
    }

    setCargando(true);
    const nuevasImagenes = await Promise.all(
      archivos.map(async (archivo) => {
        const base64 = await convertirABase64(archivo);
        return { base64 };
      })
    );

    setImagenes((prevImagenes) => [...prevImagenes, ...nuevasImagenes]);
    setCargando(false);
  };

  const convertirABase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = reader.result.split(",")[1];
        resolve(base64String);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const handleClickAreaArrastre = () => {
    if (imagenes.length >= MAX_IMAGENES) {
      Swal.fire({
        title: `Solo puedes subir hasta ${MAX_IMAGENES} imágenes.`,
        icon: "error",
      });
      return;
    }
    fileInputRef.current.click();
  };

  const onSubmit = async (data) => {
  
    setMensaje("");

      imagenes.map(async (img, index) => {
        const datosImagen = {
          lugar: data.lugar[index],
          descripcion: data.descripcion[index],
          fecha: data.fecha[index],
          foto: img.base64,
          usuarioId,
        };

        const respuesta = await insertarAlbum(datosImagen);

        if (respuesta.status == 1) {
          Swal.fire({
            title: respuesta.message,
            //text: respuesta.message,
            icon: "success",
          });
          reset();
        } else {
          Swal.fire({
            title: respuesta.message,
            //text: respuesta.message,
            icon: "error",
          });
        }
      });


      setImagenes([]);

  };

  return (
    <div className="container mt-4">
      <div className="row">
        <h1>Hola Usuario Administrador</h1>
        <span>Aquí puedes insertar tus fotos del álbum de competencias</span>

        <form className="mt-3" onSubmit={handleSubmit(onSubmit)}>
          <div
            className={`col-12 mt-3 area-arrastre ${
              cargando ? "cargando" : ""
            }`}
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            onClick={handleClickAreaArrastre}
          >
            <p>
              Arrastra tus imágenes aquí o haz clic para seleccionar archivos
            </p>
            <p>(Máximo {MAX_IMAGENES} imágenes)</p>
          </div>

          <input
            type="file"
            ref={fileInputRef}
            multiple
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileInputChange}
          />

          <div className="col-12 mt-3">
            {cargando && <div className="loader"></div>}
            {mensaje && <div className="alert alert-success">{mensaje}</div>}

            <h5>
              Imágenes seleccionadas ({imagenes.length}/{MAX_IMAGENES}):
            </h5>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {imagenes.map((img, index) => (
                <div key={index} className="image-container text-center">
                  <img
                    src={`data:image/png;base64,${img.base64}`}
                    alt={`imagen-${index}`}
                    className="imagen-previa"
                  />
                  <div className="form-group mt-2 text-start">
                    <label>Lugar:</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register(`lugar.${index}`, {
                        required: "Este campo es obligatorio",
                      })}
                    />
                    {errors.lugar?.[index] && (
                      <span className="text-danger">
                        {errors.lugar[index].message}
                      </span>
                    )}
                  </div>

                  <div className="form-group mt-2 text-start">
                    <label>Descripción:</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register(`descripcion.${index}`, {
                        required: "Este campo es obligatorio",
                      })}
                    />
                    {errors.descripcion?.[index] && (
                      <span className="text-danger">
                        {errors.descripcion[index].message}
                      </span>
                    )}
                  </div>

                  <div className="form-group mt-2 text-start">
                    <label>Fecha:</label>
                    <input
                      type="date"
                      className="form-control"
                      {...register(`fecha.${index}`, {
                        required: "Este campo es obligatorio",
                      })}
                    />
                    {errors.fecha?.[index] && (
                      <span className="text-danger">
                        {errors.fecha[index].message}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {imagenes.length > 0 && (
            <div className="col-12 mt-3">
              <button type="submit" className="btn btn-primary">
                Guardar Álbum
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
