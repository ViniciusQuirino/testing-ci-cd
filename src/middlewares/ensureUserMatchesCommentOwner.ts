import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/appError";
import { prisma } from "../prisma";

export const ensureUserMatchesCommentOwner = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const user = req.user;
	const id = req.params.id;

	if (user.is_adm) {
		return next();
	}

	if (req.originalUrl.includes("/comments/")) {
		const comment = await prisma.comments.findUnique({
			where: {
				id: req.params.id
			}
		});

		if (comment && comment.user_id !== user.id) {
			throw new AppError("Unauthorized", 401);
		}
	} else if (user.id !== id) {
		throw new AppError("Unauthorized", 401);
	}

	return next();
};