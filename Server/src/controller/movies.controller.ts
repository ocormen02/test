import { Request, Response } from "express";
import axios from "axios";
import config from "../../config/config";
import log from "../utils/logger";
import { StatusCodes } from "http-status-codes";

export async function getPopularMoviesHandler(
    request: Request,
    response: Response
) {
    const page: number = request.query?.page === undefined ? 1 : Number(request.query.page);
    const url: string = `https://api.themoviedb.org/3/movie/popular?api_key=${config.apiKey}&page=${page}`;

    log.info(`call to ${url}`);

    axios.get(url).then(function(result){
        log.info('call succeeded');
        return response.send(result.data);
    }).catch(function (error){
        log.error(error)
        return response.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    })
}