import express from "express";
import "reflect-metadata";
import "express-async-errors";
import handleErrorMiddleware from "./middlewares/handleError.middleware";
import userRoutes from "./routes/users/users.routes";
import sessionRoutes from "./routes/session/session.routes";

const app = express();

app.use(express.json());

app.use("/session", sessionRoutes);
app.use("/users", userRoutes);

app.use(handleErrorMiddleware);

export default app;
