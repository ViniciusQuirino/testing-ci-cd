import express from "express";
import { createUserController } from "../../controllers/users/createUser.controller";
import { listUsersController } from "../../controllers/users/listUsers.controller";
import ensureDataIsValidMiddleware from "../../middlewares/ensureDataIsValid.middleware";
import { userCreateRequestSerializer } from "../../serializers/users/user.serializer";

const userRoutes = express.Router();

userRoutes.post("", ensureDataIsValidMiddleware(userCreateRequestSerializer), createUserController);
userRoutes.get("/all", listUsersController);

export default userRoutes;
