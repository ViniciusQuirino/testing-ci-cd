import express from "express";
import { createUserController } from "../../controllers/users/createUser.controller";

const userRoutes = express.Router();

userRoutes.post("", createUserController);

export default userRoutes;
