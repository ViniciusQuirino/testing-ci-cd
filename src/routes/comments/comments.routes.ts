import { Router } from "express";
import { createCommentsController } from "../../controllers/comments/createComments.controller";
import { ensureAuthMiddleware } from "../../middlewares/ensureAuth.middleware";
import { deleteCommentsController } from "../../controllers/comments/deleteComments.controller";
import { updateCommentsController } from "../../controllers/comments/updateComments.controller";
import { listAdCommentsController } from "../../controllers/comments/listComments.controller";
import { ensureCommentExistsMiddleware } from "../../middlewares/ensureCommentExistsMiddleware";
import { ensureUserMatchesCommentOwner } from "../../middlewares/ensureUserMatchesCommentOwner";
import { ensureDataIsValidMiddleware } from "../../middlewares/ensureDataIsValid.middleware";
import { commentRequestSerializer } from "../../serializers/comments/comments.serializer";
import { ensureAdsExistsMiddleware } from "../../middlewares/ensureAdsExists.middleware";

export const commentsRoutes = Router();

commentsRoutes.post(
    "/:id", 
    ensureAuthMiddleware, 
    ensureDataIsValidMiddleware(commentRequestSerializer),
    ensureAdsExistsMiddleware,
    createCommentsController
);
commentsRoutes.get(
    "/:id",
    ensureAdsExistsMiddleware,
    listAdCommentsController
);
commentsRoutes.patch(
    "/:id",
    ensureAuthMiddleware,
    ensureCommentExistsMiddleware,
    ensureUserMatchesCommentOwner,
    ensureDataIsValidMiddleware(commentRequestSerializer),
    updateCommentsController
);
commentsRoutes.delete(
    "/:id",
    ensureAuthMiddleware,
    ensureCommentExistsMiddleware,
    ensureUserMatchesCommentOwner,
    deleteCommentsController
);