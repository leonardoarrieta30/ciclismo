import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { createorUpdateEnlace, insertarAlbum } from "../../../resources/api/serviciosApi";

export const InsertarAlbum = () => {
  const { handleSubmit, reset } = useForm();
  const [imagenes, setImagenes] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [imagenURL, setImagenURL] = useState(""); // Estado para la URL de la imagen
  const fileInputRef = useRef(null);
  const MAX_IMAGENES = 5;
  const usuarioId = 1;
  const [error, setError] = useState("");

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
      archivos.map(async (archivo) => ({
        base64: await convertirABase64(archivo),
        nombre: archivo.name,
      }))
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
      archivos.map(async (archivo) => ({
        base64: await convertirABase64(archivo),
        nombre: archivo.name,
      }))
    );

    setImagenes((prevImagenes) => [...prevImagenes, ...nuevasImagenes]);
    setCargando(false);
  };

  const convertirABase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result); // Mantenemos la estructura completa
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

  const eliminarImagen = (index) => {
    setImagenes((prevImagenes) => prevImagenes.filter((_, i) => i !== index));
  };

  const agregarImagenDesdeURL = async () => {
    if (!imagenURL.trim()) {
      setError("Por favor, ingresa un enlace válido.");
      return;
    }

    setError("");
    const dataPost = {
      url: imagenURL,
      usuarioId: 1,
    };
    const response = await createorUpdateEnlace(dataPost);
    if (response.status === 1) {
      Swal.fire({
        title: response["message"],
        icon: "success",
      });
    } else {
      Swal.fire({
        title: response["message"],
        icon: "error",
      });
    }
  };

  const onSubmit = async () => {
    for (const img of imagenes) {
      const datosImagen = { foto: img.base64, usuarioId };
      const respuesta = await insertarAlbum(datosImagen);

      Swal.fire({
        title: respuesta.message,
        icon: respuesta?.status === 1 ? "success" : "error",
      });

      if (respuesta.status == -1) {
        Swal.fire({
          title: "Error del servidor",
          icon: "error",
        });
      }

      if (respuesta.status === 1) reset();
    }
    setImagenes([]);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <h1>Hola Usuario Administrador</h1>
        <span>Aquí puedes insertar tus fotos del álbum de competencias</span>

        <form className="mt-3" onSubmit={handleSubmit(onSubmit)}>
          <div
            className={`col-12 mt-3 area-arrastre ${cargando ? "cargando" : ""}`}
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            onClick={handleClickAreaArrastre}
          >
            <p>Arrastra tus imágenes aquí o haz clic para seleccionar archivos</p>
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

          {/* Campo para ingresar un enlace de imagen */}
          <div className="col-12 mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Ingresa el enlace del album..."
              value={imagenURL}
              onChange={(e) => setImagenURL(e.target.value)}
            />
            {error && <div className="text-danger mt-1">{error}</div>}
            <button type="button" className="btn btn-success mt-2" onClick={agregarImagenDesdeURL}>
              Guardar Enlace
            </button>
          </div>

          <div className="col-12 mt-3">
            {cargando && <div className="loader"></div>}

            <h5>Imágenes seleccionadas ({imagenes.length}/{MAX_IMAGENES}):</h5>
            <div className="imagenes-grid">
              {imagenes.map((img, index) => (
                <div key={index} className="image-container">
                  <img src={img.base64} alt={`imagen-${index}`} className="imagen-previa" />
                  <button className="btn-eliminar" onClick={() => eliminarImagen(index)}>
                    X
                  </button>
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
