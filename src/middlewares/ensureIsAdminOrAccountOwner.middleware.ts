import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/appError";

export const ensureIsAdminOrAccountOwnerMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const user = req.user;
	const id = req.params.id;

	if (user.is_adm) {
		return next();
	}

	if (user.id !== id) {
		throw new AppError("Unauthorized", 401);
	}

	return next();
};