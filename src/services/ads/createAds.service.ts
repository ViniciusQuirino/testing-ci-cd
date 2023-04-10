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
	images,
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
			user_id: "3e83d72a-c1cd-4c09-80bc-fe9c26574192", //colocar id de algum usuário já criado
		},
	});

	const newImages = await prisma.image.create({
		data: {
			main_image: images.main_image,
			image_one: images.main_image,
			image_two: images.main_image,
			image_three: images.main_image,
			image_four: images.main_image,
			image_five: images.main_image,
			car_id: newAds.id,
		},
	});

	const result = {
		...newAds,
		images: newImages,
	};

	const validatedData = adsResponseSerializer.validate(result, {
		stripUnknown: true,
	});

	return validatedData;
};
