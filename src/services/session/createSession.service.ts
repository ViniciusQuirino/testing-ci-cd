import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "../../prisma";
import { AppError } from "../../errors/appError";
import { ILoginRequest } from "../../interfaces/session";

const createSessionService = async ({ email, password }: ILoginRequest): Promise<string> => {
	const user = await prisma.user.findUnique({
		where: {
			email: email,
		},
	});

	if (!user) {
		throw new AppError("Invalid user or password", 401);
	}

	const passwordMatch = await compare(password, user.password);

	if (!passwordMatch) {
		throw new AppError("Invalid user or password", 401);
	}

	if (!user?.is_active) {
		throw new AppError("User account is disabled", 404);
	}

	const token = jwt.sign(
		{
			isAdm: user.is_adm,
			isSeller: user.is_seller,
		},
		process.env.SECRET_KEY as string,
		{
			expiresIn: "24h",
			subject: user.id,
		}
	);

	return token;
};

export { createSessionService };
