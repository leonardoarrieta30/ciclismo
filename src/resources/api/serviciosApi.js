import { api } from "./configApi";
import Swal from "sweetalert2";

export const obtenerBannerApi = async () => {
  try {
    const res = await api.get("banner");
    if (res.data.status == 1) {
      return {
        status: 1,
        banner: res.data.banner,
        message: res.data.message,
      };
    } else {
      return {
        status: 0,
        message: res.data.message,
      };
    }
  } catch (error) {
    return {
      status: 0,
      message: error.response.data.message,
    };
  }
};

export const subirBanner = async (dataPost) => {
  try {
    const res = await api.put("banner/insert", dataPost);

    if (res?.status == 200) {
      return {
        status: 1,
        message: res?.data?.message,
      };
    }
  } catch (error) {
    Swal.fire({
      title: error.response,
      icon: "success",
    });
    return {
      status: 0,
      message: error.response.data.message,
    };
  }
};

export const getNoticias = async () => {
  try {
    const res = await api.get("noticias");
    if (res.data.status == 1) {
      return {
        status: 1,
        noticias: res.data.noticias,
        message: res.data.message,
      };
    } else {
      return {
        status: 0,
        message: res.data.message,
      };
    }
  } catch (error) {
    return {
      status: 0,
      message: error.response.data.message,
    };
  }
};

export const inscripcionApi = async (dataPost) => {
  try {
    const res = await api.post("inscripcion/enviarInscripcion", dataPost);
    if (res.status == 201) {
      return {
        status: res.data.status,
        message: res.data.message,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      status: -1,
      message: "Error del servidor",
    };
  }
};



export const insertarAlbum = async (dataPost) => {
  console.log("dataPost", dataPost);
  
  try {
    const res = await api.post("albums/insertarAlbum", dataPost);
    if (res.status == 201) {
      return {
        status: res.data.status,
        message: res.data.message,
        //album: res.data.album,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      status: -1,
      message: "Error del servidor",
    };
  }
}