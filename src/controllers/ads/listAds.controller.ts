import { Request, Response } from "express";
import { listAdsService } from "../../services/ads/listAds.service";

export const listAdsController = async (req: Request, res: Response) => {
  const { queries, outherQueries } = req.locals;

  const adsList = await listAdsService(queries, outherQueries);
  return res.status(200).json(adsList);
};
