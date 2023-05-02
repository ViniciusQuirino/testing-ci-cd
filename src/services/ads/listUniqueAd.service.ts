import { prisma } from "../../prisma";
import { listUniqueAdSerializer } from "../../serializers/ads/ads.serializer";

export const listUniqueAdService = async (id: string) => {
	const ad = await prisma.car.findUnique({
		where: {
			id: id,
		},
		include: {
			images: true,
			user: true,
			comments: true,
		},
	});

	const validatedData = listUniqueAdSerializer.validate(ad, {
		stripUnknown: true,
	});

	return validatedData;
};
