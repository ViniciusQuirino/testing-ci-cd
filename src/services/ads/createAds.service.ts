import { IAdsCreateRequest } from "../../interfaces/ads/ads.interface";
import { prisma } from "../../prisma";
import { adsResponseSerializer } from "../../serializers/ads/ads.serializer";

export const createAdsService = async ({
	brand,
	model,
	launch_year,
	car_color,
	fuel,
	fuel_type,
	km,
	price,
	description,
}: IAdsCreateRequest) => {
	const newAds = await prisma.car.create({
		data: {
			brand,
			model,
			launch_year,
			car_color,
			fuel,
			fuel_type,
			km,
			price,
			description,
			user_id: "77e25c52-7e69-425e-a558-4b4128a0c3b3", //colocar id de algum usuário já criado
		},
	});

	const validatedData = adsResponseSerializer.validate(newAds, {
		stripUnknown: true,
	});

	return validatedData;
};
