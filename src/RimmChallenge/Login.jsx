import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { login } from "../security/login";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    const dataPost = {
      user: data.username,
      password: data.password,
    };

    const res = await login(dataPost);
    if (res.status === 1) {
      Swal.fire({
        icon: "success",
        title: res.message,
        confirmButtonText: "Aceptar",
      }).then(() => {
        navigate("/administrador/interfaz/insertarAlbum");
      });
    } else {
      Swal.fire({
        icon: "error",
        title: res.message,
        text: "Por favor, verifica tus credenciales.",
        confirmButtonText: "Aceptar",
      });
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="shadow p-4" style={{ width: "100%", maxWidth: "400px" }}>
        <h3 className="text-center mb-4 text-primary">Iniciar Sesión</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Usuario
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Ingresa tu usuario"
              {...register("username", {
                required: "El usuario es requerido",
              })}
            />
            {errors.username && (
              <span className="text-danger">{errors.username.message}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                id="password"
                placeholder="Ingresa tu contraseña"
                {...register("password", {
                  required: "La contraseña es requerida",
                })}
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.password && (
              <span className="text-danger">{errors.password.message}</span>
            )}
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Iniciar Sesión
          </button>
        </form>
        <p className="text-center mt-3">
          <a href="#" className="text-decoration-none">
            ¿Olvidaste tu contraseña?
          </a>
        </p>
      </div>
    </div>
  );
};
