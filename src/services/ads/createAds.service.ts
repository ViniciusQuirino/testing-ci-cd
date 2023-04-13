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
			user_id: "5d105c92-4b18-4361-a334-5eb9e15684e4", //colocar id de algum usuário já criado
		},
	});

	const newImages = await prisma.image.create({
		data: {
			main_image: images.main_image,
			image_one: images.image_one,
			image_two: images.image_two,
			image_three: images.image_three,
			image_four: images.image_four ? images.image_four : "",
			image_five: images.image_five ? images.image_five : "",
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
