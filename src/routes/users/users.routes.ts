import express from "express";
import { createUserController } from "../../controllers/users/createUser.controller";
import { listUsersController } from "../../controllers/users/listUsers.controller";
import { ensureDataIsValidMiddleware } from "../../middlewares/ensureDataIsValid.middleware";
import {
	userCreateRequestSerializer,
	userUpdateRequestSerializer,
} from "../../serializers/users/user.serializer";
import { ensureAuthMiddleware } from "../../middlewares/ensureAuth.middleware";
import { ensureUniqueFieldsMiddleware } from "../../middlewares/ensureUniqueFields.middleware";
import { ensureIsAdminOrAccountOwnerMiddleware } from "../../middlewares/ensureIsAdminOrAccountOwner.middleware";
import { deleteUserController } from "../../controllers/users/deleteUser.controller";
import { ensureEmailMiddleware } from "../../middlewares/ensureEmailExists.middleware";
import { sendEmailController } from "../../controllers/users/sendEmail.controller";
import { resetPasswordController } from "../../controllers/users/resetPassword.controller";
import { ensureTokenExistsMiddleware } from "../../middlewares/ensureTokenExists.middleware";
import { listUniqueUserController } from "../../controllers/users/listUniqueUser.controller";
import { ensureUserExistsMiddleware } from "../../middlewares/ensureUserExists.middleware";
import { updateUserController } from "../../controllers/users/updateUser.controller";

export const userRoutes = express.Router();

userRoutes.post(
	"",
	ensureDataIsValidMiddleware(userCreateRequestSerializer),
	ensureUniqueFieldsMiddleware,
	createUserController
);

userRoutes.get("", listUsersController);
userRoutes.get("/:id", ensureUserExistsMiddleware, listUniqueUserController);

userRoutes.patch(
	"/:id",
	ensureAuthMiddleware,
	ensureUserExistsMiddleware,
	ensureIsAdminOrAccountOwnerMiddleware,
	ensureDataIsValidMiddleware(userUpdateRequestSerializer),
	ensureUniqueFieldsMiddleware,
	updateUserController
);

userRoutes.delete(
	"/:id",
	ensureAuthMiddleware,
	ensureIsAdminOrAccountOwnerMiddleware,
	deleteUserController
);

userRoutes.post("/resetpassword", ensureEmailMiddleware, sendEmailController);
userRoutes.patch(
	"/resetpassword/:token",
	ensureTokenExistsMiddleware,
	resetPasswordController
);
