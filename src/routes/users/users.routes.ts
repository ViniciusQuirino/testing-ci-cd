import express from "express";
import { createUserController } from "../../controllers/users/createUser.controller";
import { createSessionController } from "../../controllers/session/createSession.controller";

const userRoutes = express.Router();

userRoutes.post("", createUserController);
userRoutes.post("/session", createSessionController);

export default userRoutes;
