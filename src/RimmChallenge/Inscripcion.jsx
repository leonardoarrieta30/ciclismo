import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

export const Inscripcion = () => {

  const { register, handleSubmit, formState: { errors } } = useForm({})

  const navigate = useNavigate()

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

        <button className="btn btn-secondary" onClick={()=> navigate("inscripcion-evento")} >
          Inscribete aqui
        </button>

      </div>
    </section>
  );
};


