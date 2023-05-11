import { Request, Response } from "express";
import { listAdsByUserService } from "../../services/ads/listAdsByUser.service";

export const listAdsByUserController = async (req: Request, res: Response) => {
	const { queries } = req.locals;
	const userAdsList = await listAdsByUserService(req.params.id, queries);
	return res.status(200).json(userAdsList);
};
