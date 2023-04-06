import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/appError";

export const ensureIsAdminMiddleware = async (req: Request, res: Response, next: NextFunction) => {
	const user = req.user;

	if (!user.is_adm) {
		throw new AppError("Missing authorization", 401);
	}

	return next();
};
