import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";
import { prisma } from "../prisma";

export const ensureAdsExistsMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const id = req.params.id;

	const ads = await prisma.car.findUnique({
		where: {
			id: id,
		},

		include: {
			images: true,
		},
	});

	if (!ads) {
		throw new AppError("Ads not found", 404);
	}

	//req.ads = ads;

	return next();
};
