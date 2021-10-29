import express, { Request, Response } from "express";
import config from "../config/config";
import logger from "./utils/logger";
import routes from "./routes";
import responseTime from "response-time";
import { restResponseTimeHistogram, startMetricsServer } from "./utils/metrics";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use(
    responseTime((req: Request, res: Response, time: number) => {
      if (req?.route?.path) {
        restResponseTimeHistogram.observe(
          {
            method: req.method,
            route: req.route.path,
            status_code: res.statusCode,
          },
          time * 1000
        );
      }
    })
  );

  app.listen(config.port, async () => {
    logger.info(`App is running at http://localhost:${config.port}`);

    routes(app);

    startMetricsServer();
  });