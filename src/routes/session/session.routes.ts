import express from "express";
import { createSessionController } from "../../controllers/session/createSession.controller";
import { ensureDataIsValidMiddleware } from "../../middlewares/ensureDataIsValid.middleware";
import { sessionRequestSerializer } from "../../serializers/session/session.serializer";

export const sessionRoutes = express.Router();

sessionRoutes.post(
	"",
	ensureDataIsValidMiddleware(sessionRequestSerializer),
	createSessionController
);
