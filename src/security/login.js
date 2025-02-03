import { api } from "../resources/api/configApi"


export const login = async (dataPost) => {

    try {
        const res = await api.post('auth/authentication', dataPost)


        if (res.status == 200) {
            return {
                message: res.data.message,
                status: res.data.status
            }
        }
    } catch (error) {
        if (error.status == 401) {
            return {
                message: error.response.data.message,
                status: error.response.data.status
            }
        }
        return {
            message: "Error en el servidor",
            status: 0
        }
    }
}