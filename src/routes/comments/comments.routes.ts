import { Router } from "express";
import { createCommentsController } from "../../controllers/comments/createComments.controller";
import { ensureAuthMiddleware } from "../../middlewares/ensureAuth.middleware";
import { deleteCommentsController } from "../../controllers/comments/deleteComments.controller";
import { updateCommentsController } from "../../controllers/comments/updateComments.controller";
import { listAdCommentsController } from "../../controllers/comments/listComments.controller";

export const commentsRoutes = Router();

commentsRoutes.post(
    "/:id", 
    ensureAuthMiddleware, 
    createCommentsController
);
commentsRoutes.get(
    "/:id",
    listAdCommentsController
);
commentsRoutes.patch(
    "/:id",
    ensureAuthMiddleware,
    updateCommentsController
);
commentsRoutes.delete(
    "/:id",
    ensureAuthMiddleware,
    deleteCommentsController
);