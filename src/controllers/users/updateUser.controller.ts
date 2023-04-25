import { Request, Response } from "express";
import { updateUserService } from "../../services/users/updateUser.service";

export const updateUserController = async (req: Request, res: Response) => {
	const updatedUser = await updateUserService(req.params.id, req.body);
	return res.status(200).json(updatedUser);
};
