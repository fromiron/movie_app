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
    nowPlaying: () => makeRequest("/movie/now_playing"),
    popular: () => makeRequest("/movie/popular"),
    upcoming: () => makeRequest("/movie/upcoming", {region: "jp"}),
    search: query => makeRequest("/search/movie", {query}),
    movie: id => makeRequest(`/movie/${id}`),
    discover: () => makeRequest("/discover/movie"),
}


export const tvApi = {
    today: () => makeRequest("/tv/airing_today"),
    thisWeek: () => makeRequest("/tv/on_the_air"),
    topRated: () => makeRequest("/tv/top_rated"),
    popular: () => makeRequest("/tv/popular"),
    search: query => makeRequest("/search/tv", {query}),
    show: id => makeRequest(`/tv/${id}`),
}


