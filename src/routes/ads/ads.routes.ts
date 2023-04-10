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
//import { updateAdsController } from "../../controllers/ads/updateAds.controller";

export const adsRoutes = express.Router();

adsRoutes.post("", ensureDataIsValidMiddleware(adsCreateRequestSerializer), createAdsController);
adsRoutes.delete("/:id", deleteAdsController);
adsRoutes.get("", listAdsController);
// adsRoutes.patch(
// 	"/:id",
// 	ensureDataIsValidMiddleware(adsUpdateRequestSerializer),
// 	ensureAdsExistsMiddleware,
// 	updateAdsController
// );
