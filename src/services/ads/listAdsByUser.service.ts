import { IAdsQueries } from "../../interfaces/ads/ads.interface";
import { prisma } from "../../prisma";

export const listAdsByUserService = async (userId: string, queries: IAdsQueries) => {
	const { page = 1, limit = 12 } = queries;

	const userAdsList = await prisma.car.paginate(
		{
			where: {
				user_id: userId,
			},
			select: {
				...prisma.$exclude("car", ["user_id"]),
				images: { select: prisma.$exclude("image", ["car_id"]) },
				comments: { select: prisma.$exclude("comments", ["car_id"]) },
				user: {
					select: prisma.$exclude("user", [
						"cpf",
						"password",
						"email",
						"birth_date",
						"is_adm",
						"is_seller",
						"reset_token",
					]),
				},
			},
		},
		{ limit: limit, page: page }
	);

	return userAdsList;
};
