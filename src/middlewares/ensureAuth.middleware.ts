import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/appError";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { prisma } from "../prisma";
import { userResponseSerializer } from "../serializers/users/user.serializer";

export const ensureAuthMiddleware = async (req: Request, res: Response, next: NextFunction) => {
	let token = req.headers.authorization;

	if (!token) {
		throw new AppError("Invalid token", 401);
	}

	token = token.split(" ")[1];

	jwt.verify(token, process.env.SECRET_KEY as string, async (error, decoded: any) => {
		if (error) {
			return res.status(401).json({ message: "Invalid Token" });
		}

		const user = await prisma.user.findUnique({
			where: {
				id: decoded.sub as string,
			},
		});

		if (!user) {
			return res.status(401).json({ message: "Invalid Token" });
		}

		const filteredUser = await userResponseSerializer.validate(user, {
			stripUnknown: true,
		});

		req.user = filteredUser;

		return next();
	});
};
