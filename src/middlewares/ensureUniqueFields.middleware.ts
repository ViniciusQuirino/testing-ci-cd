import { NextFunction, Request, Response } from "express";
import { prisma } from "../prisma";
import { AppError } from "../errors/appError";

export const ensureUniqueFieldsMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { email, phone_number, cpf } = req.body;

	if (email) {
		const user = await prisma.user.findUnique({
			where: {
				email: email,
			},
		});

		if (user) {
			throw new AppError("There is already an account with this email", 409);
		}
	}

	if (phone_number) {
		const user = await prisma.user.findUnique({
			where: {
				phone_number: phone_number,
			},
		});

		if (user) {
			throw new AppError("There is already an account with this phone number", 409);
		}
	}

	if (cpf) {
		const user = await prisma.user.findUnique({
			where: {
				cpf: cpf,
			},
		});

		if (user) {
			throw new AppError("There is already an account with this cpf", 409);
		}
	}

	return next();
};
