import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { inscripcionApi } from "../../resources/api/serviciosApi";
import Swal from "sweetalert2";

export const InscripcionEvento = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({});

  const [esMenorDeEdad, setEsMenorDeEdad] = useState(false);

  const handleCheckboxChange = (event) => {
    setEsMenorDeEdad(event.target.checked);
  };

  const onSubmit = async (data) => {
    const file = data.fotoTrans[0]; // Obtener el archivo seleccionado

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file); // Convierte el archivo a Base64

      reader.onload = async () => {
        const base64String = reader.result;
        const base64Data = base64String.slice(base64String.indexOf(",") + 1); // Tomar solo el contenido después de la coma

        let dataPost = {
          nombreEvento: data.evento,
          correoElectronico: data.correoElectronico,
          nombreCompleto: data.nomComPar,
          documentoIdentidad: data.numDocPar,
          nombreEquipo: data.nomClub,
          celular: data.numCel,
          provincia: data.prov,
          categoriaPromocional: data.cat,
          categoriaPro: data.catPro,
          imagenPago: base64Data, // Enviar solo la parte base64
          usuarioId: 1,
        };

        if (watch("esMenorEdad")) {
          dataPost = {
            ...dataPost,
            esMenorEdad: data.esMenorEdad,
            nombrePadre: data.nomApo,
            apellidoPadre: data.apeApo,
            documentoIdentidadPadre: data.numDoc,
          };
        }

        try {
          //console.log("dataPost", dataPost);

          const resultado = await inscripcionApi(dataPost);
          Swal.fire({
            title:
              resultado.status === 1
                ? "Inscripción realizada con éxito"
                : "Error en la inscripción",
            text: resultado.message,
            icon: resultado.status === 1 ? "success" : "error",
          });

          resultado.status === 1 && reset();
        } catch (error) {
          Swal.fire({
            title: "Error en la inscripción",
            text: "Hubo un problema con el servidor.",
            icon: "error",
          });
        }
      };

      reader.onerror = (error) => {
        console.error("Error al leer el archivo:", error);
        Swal.fire({
          title: "Error al procesar la imagen",
          text: "No se pudo procesar la imagen seleccionada.",
          icon: "error",
        });
      };
    } else {
      Swal.fire({
        title: "Archivo requerido",
        text: "Debe subir una constancia de transacción.",
        icon: "warning",
      });
    }
  };

  return (
    <div className="container py-5">
      <div className="row">
        <h1 className="">Inscripcion para evento RimmChallenge</h1>
        <div className="container">
          <div className="row">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="col-12">
                <label htmlFor="" className="form-label fs-5">
                  Nombre del Evento
                </label>
                <input
                  type="text"
                  className="form-control"
                  {...register("evento", {
                    required: "Este campo es requerido",
                  })}
                />
                {errors.evento && (
                  <span className="text-danger">{errors.evento.message}</span>
                )}
              </div>
              <div className="col-12">
                <label htmlFor="" className="form-label fs-5">
                  Correo electronico
                </label>
                <input
                  type="email"
                  id=""
                  name=""
                  className="form-control"
                  {...register("correoElectronico", {
                    required: "Este campo es requerido",
                  })}
                />
                {errors.correoElectronico && (
                  <span className="text-danger">
                    {errors.correoElectronico.message}
                  </span>
                )}
              </div>
              <div className="col-12 mt-2">
                <label htmlFor="" className="form-label me-2 fs-5">
                  Es menor de edad?
                </label>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  aria-label="Checkbox for following text input"
                  checked={esMenorDeEdad}
                  {...register("esMenorEdad")}
                  onChange={handleCheckboxChange}
                />
              </div>
              {esMenorDeEdad && (
                <div className="container my-2 p-0">
                  <div className="row">
                    <h5>DATOS DEL APODERADO</h5>
                    <div className="col-12 col-md-4 ">
                      <label htmlFor="" className="form-label fs-5">
                        Nombres
                      </label>
                      <input
                        type="text"
                        id=""
                        name=""
                        className="form-control"
                        {...register("nomApo", {
                          required: "Este campo es requerido",
                        })}
                      />
                      {errors.nomApo && (
                        <span className="text-danger">
                          {errors.nomApo.message}{" "}
                        </span>
                      )}
                    </div>
                    <div className="col-12 col-md-4">
                      <label htmlFor="" className="form-label fs-5">
                        Apellidos
                      </label>
                      <input
                        type="text"
                        id=""
                        name=""
                        className="form-control"
                        {...register("apeApo", {
                          required: "Este campo es requerido",
                        })}
                      />
                      {errors.apeApo && (
                        <span className="text-danger">
                          {errors.apeApo.message}{" "}
                        </span>
                      )}
                    </div>
                    <div className="col-12 col-md-4">
                      <label htmlFor="" className="form-label fs-5">
                        Dni/Pasaporte
                      </label>
                      <input
                        type="text"
                        id=""
                        name=""
                        className="form-control"
                        {...register("numDoc", {
                          required: "Este campo es requerido",
                        })}
                      />
                      {errors.numDoc && (
                        <span className="text-danger">
                          {errors.numDoc.message}{" "}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )}
              <h5>DATOS DEL PARTICIPANTE</h5>
              <div className="col-12">
                <label htmlFor="" className="form-label fs-5">
                  Nombres y Apellidos del participante
                </label>
                <input
                  type="text"
                  id=""
                  name=""
                  className="form-control"
                  {...register("nomComPar", {
                    required: "El campo es requerido",
                  })}
                />
                {errors.nomComPar && (
                  <span className="text-danger">
                    {errors.nomComPar.message}{" "}
                  </span>
                )}
              </div>
              <div className="col-12">
                <label htmlFor="" className="form-label fs-5">
                  Dni/Pasaporte del participante
                </label>
                <input
                  type="text"
                  id=""
                  name=""
                  className="form-control"
                  {...register("numDocPar", {
                    required: "El campo es requerido",
                  })}
                />
                {errors.numDocPar && (
                  <span className="text-danger">
                    {errors.numDocPar.message}{" "}
                  </span>
                )}
              </div>
              <div className="col-12">
                <label htmlFor="" className="form-label fs-5">
                  Nombre del club/equipo
                </label>
                <input
                  type="text"
                  id=""
                  name=""
                  className="form-control"
                  {...register("nomClub", {
                    required: "El campo es requerido",
                  })}
                />
                {errors.nomClub && (
                  <span className="text-danger">{errors.nomClub.message} </span>
                )}
              </div>
              <div className="col-12">
                <label htmlFor="" className="form-label fs-5">
                  Numero de celular
                </label>
                <input
                  type="text"
                  id=""
                  name=""
                  className="form-control"
                  {...register("numCel", {
                    required: "El campo es requerido",
                  })}
                />
                {errors.numCel && (
                  <span className="text-danger">{errors.numCel.message} </span>
                )}
              </div>
              <div className="col-12">
                <label htmlFor="" className="form-label fs-5">
                  Provincia
                </label>
                <input
                  type="text"
                  id=""
                  name=""
                  className="form-control"
                  {...register("prov", {
                    required: "El campo es requerido",
                  })}
                />
                {errors.prov && (
                  <span className="text-danger">{errors.prov.message} </span>
                )}
              </div>

              <div className="col-12 mt-2">
                <label htmlFor="" className="form-label fs-5">
                  Categorias promocionales - considerar la edad que tendra en el
                  2025
                </label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  defaultValue=""
                  {...register("cat", {
                    required: "Este campo es requerido",
                  })}
                >
                  <option value="" disabled>
                    Seleccione una opcion
                  </option>
                  <option>PRE CADETES DAMAS (13 - 14 AÑOS)</option>
                  <option>PRE CADETES VARONES (13 - 14 AÑOS)</option>
                  <option>TURISMO DAMAS (17 - 29 AÑOS)</option>
                  <option>TURISMO VARONES (17 - 29 AÑOS)</option>
                  <option>SPORT MASTER DAMAS (30 AÑOS A MÁS EDAD)</option>
                  <option>SPORT MASTER VARONES A (30 - 39 AÑOS)</option>
                  <option>SPORT MASTER VARONES B (40 - 49 AÑOS)</option>
                  <option>SPORT MASTER VARONES C (50 - 59 AÑOS)</option>
                  <option>SPORT MASTER VARONES D (60 AÑOS A MÁS EDAD)</option>
                </select>
                {errors.cat && (
                  <span className="text-danger">{errors.cat.message} </span>
                )}
              </div>

              <div className="col-12 mt-2">
                <label htmlFor="" className="form-label fs-5">
                  Categorias pro - considerar la edad que tendra en el 2025
                </label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  defaultValue=""
                  {...register("catPro", {
                    required: "Este campo es requerido",
                  })}
                >
                  <option value="" disabled>
                    Seleccione una opcion
                  </option>
                  <option>CADETES DAMAS (15 - 16 AÑOS)</option>
                  <option> CADETES VARONES (15 - 16 AÑOS)</option>
                  <option>OPEN DAMAS (+17 AÑOS)</option>
                  <option>OPEN VARONES (+17 AÑOS)</option>
                  <option>MASTER DAMAS (+30 AÑOS)</option>
                  <option>MASTER A VARONES PRO (30 - 39 AÑOS)</option>
                  <option> MASTER B VARONES PRO (40 - 49 AÑOS)</option>
                  <option> MASTER C VARONES PRO (+50 AÑOS)</option>
                </select>
                {errors.catPro && (
                  <span className="text-danger">{errors.catPro.message} </span>
                )}
              </div>
              <div className="col-12 mt-2">
                <label className="form-label fs-5">
                  Subir constancia de transacción
                </label>
                <input
                  type="file"
                  className="form-control"
                  accept="image/*"
                  {...register("fotoTrans", {
                    required: "Este campo es requerido",
                  })}
                />
                {errors.fotoTrans && (
                  <span className="text-danger">
                    {errors.fotoTrans.message}
                  </span>
                )}
              </div>

              <div className="col-12 mt-2 text-center">
                <button className="btn btn-success">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
