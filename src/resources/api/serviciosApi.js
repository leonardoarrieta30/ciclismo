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

    if (res.data.status == 1) {
      return {
        status: res.data.status,
        message: res?.data?.message,
      };
    }
  } catch (error) {
    /*     Swal.fire({
      title: error.response,
      icon: "success",
    }); */
    return {
      status: -1,
      message: "Error del servidor",
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
    if (res.data.status == 1) {
      return {
        status: res.data.status,
        message: res.data.message,
      };
    }
    if (res.data.status == 0) {
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
    console.log("res", res);

    if (res.data.status == 1) {
      return {
        status: res.data.status,
        message: res.data.message,
        //album: res.data.album,
      };
    } else {
      return {
        status: 0,
        message: res.data.message,
      };
    }
  } catch (error) {
    console.log(error);
    /*  if (error.response.status) {
      return {
        status:  error.response.data.status,
        message: error.response.data.message,
      };
    } */
    return {
      status: -1,
      message: "Error del servidor",
    };
  }
};

export const getAlbums = async () => {
  try {
    const res = await api.get("albums");
    if (res.data.status == 1) {
      return {
        status: 1,
        fotos: res.data.fotos,
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

export const createorUpdateEnlace = async (dataPost) => {
  console.log("dataPost", dataPost);

  try {
    const res = await api.post("enlaces/insertarEnlace", dataPost);
    if (res.data.status == 1) {
      return {
        status: res.data.status,
        enlace: res.data.enlace,
        message: res.data.message,
      };
    }
  } catch (error) {
    console.error(error);
    return {
      status: -1,
      message: "Error del servidor",
    };
  }
};

export const getEnlaceApi = async () => {
  try {
    const res = await api.get("enlaces");
    if (res.data.status == 1) {
      return {
        status: res.data.status,
        enlace: res.data.enlace,
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
      status: -1,
      message: "Error del servidor",
    };
  }
};

export const getInscripcionByDni = async (dni) => {
  try {
    const res = await api.get(`inscripcion/obtenerInscripcionByDni/${dni}`);
    console.log("res", res);

    return res.data;
  } catch (error) {
    return {
      status: -1,
      message: "Error del servidor",
    };
  }
};
