import express from "express";
import { createSessionController } from "../../controllers/session/createSession.controller";

const sessionRoutes = express.Router();

sessionRoutes.post("", createSessionController);

export default sessionRoutes;
