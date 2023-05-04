import { Request, Response } from "express";
import { createCommentsService } from "../../services/comments/createComments.service";

export const createCommentsController = async (req: Request, res: Response) => {
	const id = req.params.id;
	const { ...data } = req.body;
	const user_id = req.user.id
	const comment = await createCommentsService(data, id, user_id);
	return res.status(201).json(comment);
};