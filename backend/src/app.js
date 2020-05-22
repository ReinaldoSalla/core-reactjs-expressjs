import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { clientDir } from "./properties/app-properties";
import configureRoutes from "./controllers/products-controller";

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(clientDir));

configureRoutes(app);

export default app;