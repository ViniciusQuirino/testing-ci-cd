import express from "express";
import { createUserController } from "../../controllers/users/createUser.controller";
import { listUsersController } from "../../controllers/users/listUsers.controller";
import { ensureDataIsValidMiddleware } from "../../middlewares/ensureDataIsValid.middleware";
import { userCreateRequestSerializer } from "../../serializers/users/user.serializer";
import { ensureAuthMiddleware } from "../../middlewares/ensureAuth.middleware";
import { ensureUniqueFieldsMiddleware } from "../../middlewares/ensureUniqueFields.middleware";
import { ensureIsAdminOrAccountOwnerMiddleware } from "../../middlewares/ensureIsAdminOrAccountOwner.middleware";
import { deleteUserController } from "../../controllers/users/deleteUser.controller";
import { listUserAdsControllers } from "../../controllers/users/listUserAds.controller";

export const userRoutes = express.Router();

userRoutes.post(
	"",
	ensureDataIsValidMiddleware(userCreateRequestSerializer),
	ensureUniqueFieldsMiddleware,
	createUserController
);
userRoutes.get("", listUsersController);
userRoutes.get("/:id", listUserAdsControllers);

userRoutes.delete(
	"",
	ensureAuthMiddleware,
	ensureIsAdminOrAccountOwnerMiddleware,
	deleteUserController
);
