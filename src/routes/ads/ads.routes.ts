import express from "express";
import { ensureDataIsValidMiddleware } from "../../middlewares/ensureDataIsValid.middleware";
import { createAdsController } from "../../controllers/ads/createAds.controller";
import { adsCreateRequestSerializer } from "../../serializers/ads/ads.serializer";
import { deleteAdsController } from "../../controllers/ads/deleteAds.controller";
import { listAdsController } from "../../controllers/ads/listAds.controller";

export const adsRoutes = express.Router();

adsRoutes.post("", ensureDataIsValidMiddleware(adsCreateRequestSerializer), createAdsController);
adsRoutes.delete("/:id",deleteAdsController);
adsRoutes.get("",  listAdsController);