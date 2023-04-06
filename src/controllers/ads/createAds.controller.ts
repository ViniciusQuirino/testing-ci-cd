import { Request, Response } from "express";
import { createAdsService } from "../../services/ads/createAds.service";

export const createAdsController = async (req: Request, res: Response) => {
	const user = await createAdsService(req.body);
	return res.status(201).json(user);
};
