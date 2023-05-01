import { prisma } from "../../prisma";

export const listUniqueAdService = async (id: string) => {
	const ad = await prisma.car.findUnique({
		where: {
			id: id,
		},
	});

	return ad;
};
