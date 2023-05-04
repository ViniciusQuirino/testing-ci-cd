import { Request, Response } from "express";
import { deleteAdsService } from "../../services/ads/deleteAds.service";

export const deleteAdsController = async (req: Request, res: Response) => {
  await deleteAdsService(req.params.id);
  return res.sendStatus(204);
};
