import axios from "axios";

const TMDB_KEY = "9d5292022d71a804fa8e6602ed886913";

const makeRequest = (path, params) =>
    axios.get(`https://api.themoviedb.org/3${path}`, {
        params: {
            ...params,
            api_key: TMDB_KEY
        }
    })

const getAnything = async (path, params = {}) => {
    try {
        const {
            data: {results}
        } = await makeRequest(path, params);
        return [results || data, null];
    } catch (error) {
        return [null, error]
    }
}


export const movieApi = {
    nowPlaying: () => getAnything("/movie/now_playing"),
    popular: () => getAnything("/movie/popular"),
    upcoming: () => getAnything("/movie/upcoming", {region: "jp"}),
    search: query => getAnything("/search/movie", {query}),
    movie: id => getAnything(`/movie/${id}`),
    discover: () => getAnything("/discover/movie"),
}


export const tvApi = {
    today: () => getAnything("/tv/airing_today"),
    thisWeek: () => getAnything("/tv/on_the_air"),
    topRated: () => getAnything("/tv/top_rated"),
    popular: () => getAnything("/tv/popular"),
    search: query => getAnything("/search/tv", {query}),
    show: id => getAnything(`/tv/${id}`),
}


