import React from "react";
import { useForm } from "react-hook-form";

export const Inscripcion = () => {

  const { register, handleSubmit, formState: { errors } } = useForm({})


  const onSubmit = (data) => {

  }

  return (
    <section className="bg-primary text-white py-5" id="registration">
      <div className="container text-center">
        <h2 className="display-5 fw-bold mb-4">¡Inscríbete Ahora!</h2>
        <p className="lead">
          Únete a nuestra comunidad de ciclistas apasionados. Participa en rutas, talleres y eventos diseñados para todos los niveles.
          ¡Es el momento de formar parte de algo increíble!
        </p>
        <form className="row d-flex justify-content-center mt-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Nombre completo"
              {
                ...register("name", { required: "Para la inscripcion debera completar el campo nombre" })
              }
            />
            {errors.name && <span className="text-danger">{errors.name.message}</span>}
          </div>
          <div className="col-md-6">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Correo electrónico"
              {
                ...register("email", { required: "Para la inscripcion debera completar el campo correo" })
              }
            />
            {errors.email && <span className="text-danger">{errors.email.message}</span>}
          </div>
          <div className="col-md-4">
            <button type="submit" className="btn btn-light btn-lg w-100">
              Enviar Inscripción
            </button>
          </div>
        </form>
        <p className="mt-4">
          ¿Tienes dudas? <a href="#contact" className="text-light fw-bold">Contáctanos</a>
        </p>
      </div>
    </section>
  );
};


