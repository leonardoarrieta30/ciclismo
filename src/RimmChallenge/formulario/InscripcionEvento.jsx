import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  getInscripcionByDni,
  inscripcionApi,
} from "../../resources/api/serviciosApi";
import Swal from "sweetalert2";
import Select from "react-select";
import { FaFlagCheckered, FaBicycle } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const options = [
  {
    value: "02 FEB - RALLY VUELTA AL SANTUARIO PACHACAMAC",
    label: (
      <>
        <FaFlagCheckered /> 02 FEB - RALLY VUELTA AL SANTUARIO PACHACAMAC
      </>
    ),
  },
  {
    value: "23 MAR - I FECHA SUPER CUP MTB",
    label: (
      <>
        <FaBicycle /> 23 MAR - I FECHA SUPER CUP MTB
      </>
    ),
  },
  {
    value: "25 MAY - II FECHA SUPER CUP MTB",
    label: (
      <>
        <FaBicycle /> 25 MAY - II FECHA SUPER CUP MTB
      </>
    ),
  },
  {
    value: "3 JUL - III FECHA SUPER CUP MTB",
    label: (
      <>
        <FaBicycle /> 13 JUL - III FECHA SUPER CUP MTB
      </>
    ),
  },
  {
    value: "31 AGO - IV FECHA SUPER CUP MTB",
    label: (
      <>
        <FaBicycle /> 31 AGO - IV FECHA SUPER CUP MTB
      </>
    ),
  },
  {
    value: "26 OCT - V FECHA SUPER CUP MTB",
    label: (
      <>
        <FaBicycle /> 26 OCT - V FECHA SUPER CUP MTB
      </>
    ),
  },
];

const categoriasPromocionalesOptions = [
  { value: "pre-cadetes-damas", label: "PRE CADETES DAMAS (13 - 14 AÑOS)" },
  { value: "pre-cadetes-varones", label: "PRE CADETES VARONES (13 - 14 AÑOS)" },
  { value: "turismo-damas", label: "TURISMO DAMAS (17 - 29 AÑOS)" },
  { value: "turismo-varones", label: "TURISMO VARONES (17 - 29 AÑOS)" },
  {
    value: "sport-master-damas",
    label: "SPORT MASTER DAMAS (30 AÑOS A MÁS EDAD)",
  },
  {
    value: "sport-master-varones-a",
    label: "SPORT MASTER VARONES A (30 - 39 AÑOS)",
  },
  {
    value: "sport-master-varones-b",
    label: "SPORT MASTER VARONES B (40 - 49 AÑOS)",
  },
  {
    value: "sport-master-varones-c",
    label: "SPORT MASTER VARONES C (50 - 59 AÑOS)",
  },
  {
    value: "sport-master-varones-d",
    label: "SPORT MASTER VARONES D (60 AÑOS A MÁS EDAD)",
  },
];

const categoriasProOptions = [
  { value: "cadetes-damas", label: "CADETES DAMAS (15 - 16 AÑOS)" },
  { value: "cadetes-varones", label: "CADETES VARONES (15 - 16 AÑOS)" },
  { value: "open-damas", label: "OPEN DAMAS (+17 AÑOS)" },
  { value: "open-varones", label: "OPEN VARONES (+17 AÑOS)" },
  { value: "master-damas", label: "MASTER DAMAS (+30 AÑOS)" },
  { value: "master-a-varones", label: "MASTER A VARONES PRO (30 - 39 AÑOS)" },
  { value: "master-b-varones", label: "MASTER B VARONES PRO (40 - 49 AÑOS)" },
  { value: "master-c-varones", label: "MASTER C VARONES PRO (+50 AÑOS)" },
];

export const InscripcionEvento = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
    reset,
    setValue,
  } = useForm({});

  const [esMenorDeEdad, setEsMenorDeEdad] = useState(false);

  const [cargandoDni, setCargandoDni] = useState(false); // Estado para indicar carga
  const [errorDni, setErrorDni] = useState(""); // Estado para errores

  useEffect(() => {
    toast.info("Para autocompletar tus datos ingrese su DNI o Pasaporte", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });

    /*   setTimeout(() => {
      toast.success("Recuerda verificar tu información antes de enviarla", {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    }, 10000); // ⏳ Espera 5 segundos antes de mostrar el siguiente toast */
  }, []);

  useEffect(() => {
    if (cargandoDni) {
      toast.warning("Complete los datos faltantes para la inscripcion", {
        position: "bottom-left",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    }
  }, [cargandoDni]);

  const handleCheckboxChange = (event) => {
    setEsMenorDeEdad(event.target.checked);
  };

  // Buscar datos del participante por DNI
  const buscarPorDNI = async (dni) => {
    if (dni.length >= 8) {
      setCargandoDni(true);
      setErrorDni("");
      try {
        const response = await getInscripcionByDni(dni);
        console.log("response", response);

        const datos = response;

        // Asignar automáticamente los valores al formulario
        //setValue("evento", datos.nombreEvento);
        setValue("nomComPar", datos.nombreCompleto);
        setValue("correoElectronico", datos.correoElectronico);
        setValue("nomClub", datos.nombreEquipo);
        setValue("numCel", datos.celular);
        setValue("prov", datos.provincia);
        //setValue("cat", datos.categoriaPromocional);
        //setValue("catPro", datos.categoriaPro);
      } catch (error) {
        setErrorDni("No se encontró una inscripción con ese DNI.");
        setValue("nomComPar", "");
        setValue("correoElectronico", "");
        setValue("nomClub", "");
        setValue("numCel", "");
        setValue("prov", "");
      } finally {
        setCargandoDni(false);
      }
    }
  };

  const onSubmit = async (data) => {
    const file = data.fotoTrans[0]; // Obtener el archivo seleccionado

    if (!file) {
      Swal.fire({
        title: "Archivo requerido",
        text: "Debe subir una constancia de transacción.",
        icon: "warning",
      });
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file); // Convierte el archivo a Base64

    reader.onload = async () => {
      const base64String = reader.result;
      const base64Data = base64String.slice(base64String.indexOf(",") + 1); // Tomar solo el contenido después de la coma

      let dataPost = {
        nombreEvento: data.evento.value,
        correoElectronico: data.correoElectronico,
        nombreCompleto: data.nomComPar,
        documentoIdentidad: data.numDocPar,
        nombreEquipo: data.nomClub,
        celular: data.numCel,
        provincia: data.prov,
        categoriaPromocional: data.cat.value,
        categoriaPro: data.catPro.value,
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

      console.log("dataPost", dataPost);

      // 🔥 Agregar alerta de confirmación antes de enviar
      const result = await Swal.fire({
        title: "Verifique sus datos antes de inscribirse",
        text: "Asegúrese de que toda la información ingresada es correcta.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, confirmar",
        cancelButtonText: "Cancelar",
      });

      if (!result.isConfirmed) {
        return; // ⛔ Si el usuario cancela, no se ejecuta la inscripción
      }

      try {
        const resultado = await inscripcionApi(dataPost);
        console.log("resultado", resultado);

        Swal.fire({
          title:
            resultado.status === 1
              ? "Inscripción realizada con éxito"
              : "Error en la inscripción",
          text: resultado.message,
          icon: resultado.status === 1 ? "success" : "error",
        });

        if (resultado.status === 1) {
          reset({
            evento: null, // 🔥 Resetea el Select de evento
            cat: null, // 🔥 Resetea el Select de categoría promocional
            catPro: null, // 🔥 Resetea el Select de categoría Pro
            correoElectronico: "",
            nomComPar: "",
            numDocPar: "",
            nomClub: "",
            numCel: "",
            prov: "",
            fotoTrans: null, // 🔥 Resetea el archivo subido
          });
        }
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
  };

  return (
    <div className="container-fluid py-5">
      <ToastContainer /> {/* Contenedor para los toasts */}
      <div className="container border border-3 p-3">
        <div className="row">
          <h1 className="text-center">Inscripciones RimmChallenge</h1>
          <div className="container">
            <div className="row">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="col-12">
                  <label htmlFor="evento" className="form-label fs-5">
                    Seleccione el evento
                  </label>

                  <Controller
                    name="evento"
                    control={control} // <-- Viene de useForm()
                    rules={{ required: "El evento es obligatorio" }} // <-- Validación
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={options}
                        placeholder="Selecciona una carrera..."
                        isSearchable
                        styles={{
                          control: (base) => ({
                            ...base,
                            fontSize: "16px",
                            padding: "5px",
                          }),
                        }}
                      />
                    )}
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
                    type="text"
                    className="custom-input"
                    placeholder="Correo electronico"
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
                <div className="col-12 my-2 d-flex align-items-center">
                  <span className="form-label me-2 mb-0 fs-5">
                    Es menor de edad?
                  </span>
                  <input
                    className="form-check-input mt-0"
                    type="checkbox"
                    style={{ width: "20px", height: "20px" }}
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
                          className="custom-input"
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
                          className="custom-input"
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
                          className="custom-input"
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
                    className="custom-input"
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
                  <label htmlFor="numDocPar" className="form-label fs-5">
                    DNI/Pasaporte del participante
                  </label>
                  <input
                    type="text"
                    className="custom-input"
                    {...register("numDocPar", {
                      required: "El campo es requerido",
                      onChange: (e) => buscarPorDNI(e.target.value), // Llamar a la función al escribir
                    })}
                  />
                  {errors.numDocPar && (
                    <span className="text-danger">
                      {errors.numDocPar.message}
                    </span>
                  )}
                  {cargandoDni && (
                    <span className="text-warning">Buscando...</span>
                  )}
                  {errorDni && <span className="text-danger">{errorDni}</span>}
                </div>
                <div className="col-12">
                  <label htmlFor="" className="form-label fs-5">
                    Nombre del club/equipo
                  </label>
                  <input
                    type="text"
                    id=""
                    name=""
                    className="custom-input"
                    {...register("nomClub", {
                      required: "El campo es requerido",
                    })}
                  />
                  {errors.nomClub && (
                    <span className="text-danger">
                      {errors.nomClub.message}{" "}
                    </span>
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
                    className="custom-input"
                    {...register("numCel", {
                      required: "El campo es requerido",
                    })}
                  />
                  {errors.numCel && (
                    <span className="text-danger">
                      {errors.numCel.message}{" "}
                    </span>
                  )}
                </div>
                <div className="col-12">
                  <label htmlFor="" className="form-label fs-5">
                    Provincia
                  </label>
                  <input
                    type="text"
                    className="custom-input"
                    {...register("prov", {
                      required: "El campo es requerido",
                    })}
                  />
                  {errors.prov && (
                    <span className="text-danger">{errors.prov.message} </span>
                  )}
                </div>

                <div className="col-12 mt-2">
                  <label htmlFor="cat" className="form-label fs-5">
                    Categorías promocionales - considerar la edad que tendrá en
                    2025
                  </label>

                  <Controller
                    name="cat"
                    control={control} // <-- Asegúrate de definir "control" en useForm()
                    rules={{ required: "Debes seleccionar una categoría" }} // <-- Validación
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={categoriasPromocionalesOptions}
                        placeholder="Selecciona una categoría..."
                        isSearchable
                        styles={{
                          control: (base) => ({
                            ...base,
                            fontSize: "16px",
                            padding: "5px",
                          }),
                        }}
                      />
                    )}
                  />

                  {errors.cat && (
                    <span className="text-danger">{errors.cat.message}</span>
                  )}
                </div>

                <div className="col-12 mt-2">
                  <label htmlFor="catPro" className="form-label fs-5">
                    Categorías Pro - considerar la edad que tendrá en 2025
                  </label>

                  <Controller
                    name="catPro"
                    control={control} // <-- Lo obtienes de useForm()
                    rules={{ required: "Debes seleccionar una categoría Pro" }} // <-- Validación
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={categoriasProOptions}
                        placeholder="Selecciona una categoría..."
                        isSearchable
                        styles={{
                          control: (base) => ({
                            ...base,
                            fontSize: "16px",
                            padding: "5px",
                          }),
                        }}
                      />
                    )}
                  />

                  {errors.catPro && (
                    <span className="text-danger">{errors.catPro.message}</span>
                  )}
                </div>
                <div className="col-12 mt-2">
                  <label className="form-label fs-5">
                    Subir constancia de transacción
                  </label>
                  <input
                    type="file"
                    className="form-control fs-5"
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

                <div className="col-12 d-flex justify-content-center">
                  <button
                    className="mt-3"
                    style={{
                      backgroundColor: "#212529", // Negro moderno
                      color: "white",
                      padding: "10px 20px",
                      border: "none",
                      borderRadius: "8px", // Bordes redondeados
                      cursor: "pointer",
                      fontSize: "16px",
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      transition: "all 0.3s ease",
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)", // Sombra sutil
                    }}
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = "#343a40")
                    } // Cambio de color en hover
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor = "#212529")
                    }
                    onMouseDown={(e) =>
                      (e.target.style.transform = "scale(0.95)")
                    } // Efecto de presión
                    onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
