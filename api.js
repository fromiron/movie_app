import axios from "axios";

const TMDB_KEY = "9d5292022d71a804fa8e6602ed886913";

const makeRequest = (path, params) =>
    axios.get(`https://api.themoviedb.org/3${path}`, {
        params: {
            ...params,
            api_key: TMDB_KEY
        }
    })


export const movieApi = {
    nowPlaying: () => makeRequest(),
    popular: () => makeRequest(),
    upcoming: () => makeRequest(),
    search: (word) => makeRequest(),
    movie: (id) => makeRequest(),
    discover: () => makeRequest(),
}


export const tvApi = {
    today: () => makeRequest(),
    thisWeek: () => makeRequest(),
    topRated: () => makeRequest(),
    popular: () => makeRequest(),
    search: (word) => makeRequest(),
    show: (id) => makeRequest(),
}

