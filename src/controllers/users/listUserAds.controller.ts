import { Request, Response } from "express";
import listUserAdsService from "../../services/users/listUserAds.service";

export const listUserAdsControllers = async (req: Request, res: Response) => {
	const id: string = req.params.id;
	const data = await listUserAdsService(id);
	return res.status(200).json(data);
};
