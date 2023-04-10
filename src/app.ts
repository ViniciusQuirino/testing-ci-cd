import express from "express";
import "express-async-errors";
import "reflect-metadata";
import cors from "cors";
import handleErrorMiddleware from "./middlewares/handleError.middleware";
import { userRoutes } from "./routes/users/users.routes";
import { sessionRoutes } from "./routes/session/session.routes";
import { adsRoutes } from "./routes/ads/ads.routes";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/session", sessionRoutes);
app.use("/users", userRoutes);
app.use("/ads", adsRoutes);

app.use(handleErrorMiddleware);

export default app;
