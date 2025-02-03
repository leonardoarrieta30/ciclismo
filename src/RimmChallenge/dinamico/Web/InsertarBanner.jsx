import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CloudUpload, XCircle, Upload } from "react-bootstrap-icons";
import Swal from "sweetalert2";
import { subirBanner } from "../../../resources/api/serviciosApi";

const convertToBase64 = (file) => {
  return new Promise((resolve) => {
    if (!file) {
      resolve({ nombreArchivo: "", base64Value: null });
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      resolve({
        nombreArchivo: file.name,
        base64Value: e.target.result,
      });
    };
    reader.readAsDataURL(file);
  });
};

export const InsertarBanner = () => {
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const handleFile = async (file) => {
    if (file && file.type.startsWith("image/")) {
      const base64Data = await convertToBase64(file);
      setImage(base64Data.base64Value);
      setImageFile(file);
      setValue("file", file);
    }
  };

  const handleFileChange = (e) => {
    handleFile(e.target.files[0]);
  };

  const removeImage = () => {
    setImage(null);
    setImageFile(null);
    setValue("file", null);
  };

  const onSubmit = async () => {
    if (imageFile) {
      const { nombreArchivo, base64Value } = await convertToBase64(imageFile);
      // Aquí puedes enviar nombreArchivo y base64Value a tu API
      const commaIndex = base64Value.indexOf(",");
      const base64Data = base64Value.slice(commaIndex + 1);
      console.log({ nombreArchivo, base64Value });
      console.log({ nombreArchivo, base64Data });

      const dataPost = {
        imagen: base64Data,
        usuarioId: 1,
      };

      const respuesta = await subirBanner(dataPost);
      if (respuesta.status == 1) {
        Swal.fire({
          title: "Imagen subida correctamente",
          text: respuesta.message,
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Error al subir imagen",
          text: "Hubo un error al subir la imagen al servidor",
          icon: "error",
        });
      }
    }
  };

  return (
    <div className="container mt-4">
      <h1>Hola Usuario Administrador</h1>
      <span>Aca podras insertar una foto para el banner</span>
      <h3 className="text-center">Sube una imagen</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          className="border border-primary rounded p-4 text-center position-relative d-flex flex-column justify-content-center align-items-center"
          style={{
            height: "250px",
            cursor: "pointer",
            backgroundColor: "#f8f9fa",
            borderStyle: "dashed",
          }}
          onClick={() => document.getElementById("fileInput").click()}
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
                type="button"
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
          {...register("file", {
            validate: {
              fileType: (value) =>
                value?.type.startsWith("image/") || "Solo se permiten imágenes",
              fileSize: (value) =>
                value?.size < 2 * 1024 * 1024 ||
                "El archivo debe ser menor a 2MB",
            },
          })}
          onChange={handleFileChange}
        />

        {errors.file && (
          <div className="text-danger text-center mt-2">
            {errors.file.message}
          </div>
        )}

        {image && (
          <div className="text-center mt-3">
            <button type="submit" className="btn btn-success">
              <Upload size={20} className="me-2" /> Subir imagen
            </button>
          </div>
        )}
      </form>
    </div>
  );
};
