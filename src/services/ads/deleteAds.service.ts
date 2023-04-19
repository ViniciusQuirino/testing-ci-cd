import { prisma } from "../../prisma";

export const deleteAdsService = async (id: string) => {
	await prisma.car.delete({ where: { id } });

	return;
};
