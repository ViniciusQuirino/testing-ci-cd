import { Request, Response } from "express";
import retriveUserService from "../../services/users/retrieveUser.service";

export const retrieveUserController = async (req: Request, res: Response) => {
	const data = await retriveUserService(req.user.id);
	return res.status(200).json(data);
};
