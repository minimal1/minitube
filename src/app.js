/** @format */

import express from "express";
import pug from "pug";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import routes from "./routes";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import { localMiddleware } from "./middleware";

const app = express();

app.use(helmet());
app.set("views", "./src/views");
app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(localMiddleware);
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
