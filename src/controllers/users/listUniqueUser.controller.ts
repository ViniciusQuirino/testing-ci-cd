import { Request, Response } from "express";
import listUniqueUserService from "../../services/users/listUniqueUser.service";

export const listUniqueUserController = async (req: Request, res: Response) => {
	const id: string = req.params.id;
	const data = await listUniqueUserService(id);
	return res.status(200).json(data);
};
