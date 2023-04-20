import { prisma } from "../../prisma";
import {
	userResponseSerializer,
	userWithCarsResponseSerializer,
} from "../../serializers/users/user.serializer";

const listUserAdsService = async (id: string) => {
	const carAd = await prisma.user.findUnique({
		where: {
			id: id,
		},
		include: {
			cars: {
				include: {
					images: true,
				},
			},
		},
	});

	const validatedData = await userWithCarsResponseSerializer.validate(carAd, {
		stripUnknown: true,
	});

	return validatedData;
};

export default listUserAdsService;
