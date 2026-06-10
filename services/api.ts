import axios from "axios"

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "66303e7c047cae677004518b5c070514",
        language: "pt-BR"
    }
})