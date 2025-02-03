import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CloudUpload, XCircle, Upload } from "react-bootstrap-icons";

export const InsertarBanner = () => {
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    handleFile(e.dataTransfer.files[0]);
  };

  const handleFile = (file) => {
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(file);
      setImageFile(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleFileChange = (e) => {
    handleFile(e.target.files[0]);
  };

  const removeImage = () => {
    setImage(null);
    setImageFile(null);
  };

  const handleUpload = () => {
    if (imageFile) {
      alert(`Imagen "${imageFile.name}" subida correctamente 🚀`);
      // Aquí puedes agregar lógica para subir la imagen a un servidor
    }
  };

  return (
    <div className="container mt-4">
      <h1>Hola Usuario Administrador</h1>
      <span>Aca podras insertar una foto para el banner</span>
      <h3 className="text-center">Sube una imagen</h3>
      <div
        className="border border-primary rounded p-4 text-center position-relative d-flex flex-column justify-content-center align-items-center"
        style={{
          height: "250px",
          cursor: "pointer",
          backgroundColor: "#f8f9fa",
          borderStyle: "dashed",
        }}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={handleClick}
      >
        {image ? (
          <>
            <img
              src={image}
              alt="Vista previa"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "100%" }}
            />
            <button
              className="btn btn-danger btn-sm position-absolute top-0 end-0 m-2"
              onClick={(e) => {
                e.stopPropagation();
                removeImage();
              }}
            >
              <XCircle size={20} /> Eliminar
            </button>
          </>
        ) : (
          <>
            <CloudUpload size={50} className="text-primary mb-2" />
            <p className="text-muted">Haz clic o arrastra una imagen aquí</p>
          </>
        )}
      </div>

      <input
        type="file"
        id="fileInput"
        className="d-none"
        accept="image/*"
        onChange={handleFileChange}
      />

      {image && (
        <div className="text-center mt-3">
          <button className="btn btn-success" onClick={handleUpload}>
            <Upload size={20} className="me-2" /> Subir imagen
          </button>
        </div>
      )}
    </div>
  );
};
