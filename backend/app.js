import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import routes from "./routes";
import path from "path"

import router from "./routers/router"
import { localsMiddleware } from "./middlewares";

const app = express();

app.use(helmet());
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads/images"));
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(localsMiddleware);

app.use(routes.home, router);

export default app;