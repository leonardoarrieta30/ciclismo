import { api } from "./configApi";

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
        status: 1,
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
