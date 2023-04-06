import "reflect-metadata";
import express from "express";
import "express-async-errors";
import handleErrorMiddleware from "./middlewares/handleError.middleware";
import users from "./routes/users/users.routes";

const app = express();

app.use("/users", users);

app.use(express.json());

app.use(handleErrorMiddleware);

export default app;
