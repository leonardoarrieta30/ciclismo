import axios from 'axios'

export const api = axios.create({
    baseURL: "http://192.168.18.213:9000/api/v1/"
})


