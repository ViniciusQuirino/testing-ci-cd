import express from "express";
import { ensureDataIsValidMiddleware } from "../../middlewares/ensureDataIsValid.middleware";
import { createAdsController } from "../../controllers/ads/createAds.controller";
import {
  adsCreateRequestSerializer,
  adsUpdateRequestSerializer,
} from "../../serializers/ads/ads.serializer";
import { deleteAdsController } from "../../controllers/ads/deleteAds.controller";
import { listAdsController } from "../../controllers/ads/listAds.controller";
import { ensureAdsExistsMiddleware } from "../../middlewares/ensureAdsExists.middleware";
import { updateAdsController } from "../../controllers/ads/updateAds.controller";
import { ensureAdsQueryType } from "../../middlewares/ensureAdsQueryType.middleware";
import { ensureAuthMiddleware } from "../../middlewares/ensureAuth.middleware";
import { ensureIsOwnerOfAdsOrAdm } from "../../middlewares/ensureIsOwnerOfAdsOrAdm.middleware";

export const adsRoutes = express.Router();

adsRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureDataIsValidMiddleware(adsCreateRequestSerializer),
  createAdsController
);
adsRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureAdsExistsMiddleware,
  ensureIsOwnerOfAdsOrAdm,
  deleteAdsController
);
adsRoutes.get("", ensureAdsQueryType, listAdsController);
adsRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureDataIsValidMiddleware(adsUpdateRequestSerializer),
  ensureAdsExistsMiddleware,
  ensureIsOwnerOfAdsOrAdm,
  updateAdsController
);
