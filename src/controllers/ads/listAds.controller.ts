import _ from "lodash";
import { Request, Response } from "express";
import { adsQueriesSerializer } from "../../serializers/ads/ads.serializer";
import exclude from "../../utils/excludeKeys";
import { listAdsService } from "../../services/ads/listAds.service";

export const listAdsController = async (req: Request, res: Response) => {
  const validatedQueries = await adsQueriesSerializer.validate(req.query, {
    stripUnknown: true,
  });

  const queryWithouthAnyKey = _.cloneDeep(validatedQueries);

  exclude(queryWithouthAnyKey, [
    "min_km",
    "max_km",
    "min_price",
    "max_price",
    "limit",
    "page",
  ]);

  const adsList = await listAdsService(validatedQueries, queryWithouthAnyKey);
  return res.status(200).json(adsList);
};
