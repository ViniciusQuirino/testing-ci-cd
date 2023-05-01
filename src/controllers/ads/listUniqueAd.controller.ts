import { Request, Response } from "express";
import { listUniqueAdService } from "../../services/ads/listUniqueAd.service";

export const listUniqueAdController = async (req: Request, res: Response) => {
	const id: string = req.params.id;
	const data = await listUniqueAdService(id);
	return res.status(200).json(data);
};
