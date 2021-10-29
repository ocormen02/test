import { Express, Request, Response } from "express";
import { StatusCodes } from 'http-status-codes';
import { getPopularMoviesHandler } from "./controller/movies.controller";

function routes(app: Express) {
    app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(StatusCodes.OK));

    app.get('/api/popularmovies', getPopularMoviesHandler);
}

export default routes;