import { NextFunction, Request, Response } from "express";
import { prisma } from "../prisma";
import { AppError } from "../errors/appError";

export const ensureCommentExistsMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const id = req.params.id;

	const comment_id = await prisma.comments.findUnique({
		where: {
			id: id,
		},
	});

	if (!comment_id) {
		throw new AppError("Comment not found", 404);
	}

	return next();
};
