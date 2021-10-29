import config from "../config/config";
import axios from "axios";


export async function getPopularMovies(page:number) {
    axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
    return axios.get(`${config.serviceUrl}?page=${page}`)
}