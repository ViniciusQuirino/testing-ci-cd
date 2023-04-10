import { Request, Response } from "express";
import { listAdsService } from "../../services/ads/listAds.service";

export const listAdsController = async (req: Request, res: Response) => {
  const adsList = await listAdsService(Number(req.query.page), Number(req.query.limit));
  return res.status(200).json(adsList);
};
