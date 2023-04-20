import { prisma } from "../../prisma";

const listUserAdsService = async (id: string) => {
	const carAd = await prisma.user.findUnique({
		where: {
			id: id,
		},
		include: {
			cars: true,
		},
	});

	return carAd;
};

export default listUserAdsService;
