import express from "express";
import { ensureDataIsValidMiddleware } from "../../middlewares/ensureDataIsValid.middleware";
import { createAdsController } from "../../controllers/ads/createAds.controller";
import { adsCreateRequestSerializer } from "../../serializers/ads/ads.serializer";

export const adsRoutes = express.Router();

adsRoutes.post("", ensureDataIsValidMiddleware(adsCreateRequestSerializer), createAdsController);
