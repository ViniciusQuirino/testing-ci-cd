import { IAdsResponse, IAdsUpdateRequest } from "../../interfaces/ads/ads.interface";
import { prisma } from "../../prisma";
import { adsResponseSerializer } from "../../serializers/ads/ads.serializer";

export const updateAdsService = async (
	{
		brand,
		car_color,
		description,

		fuel_type,
		images,
		km,
		launch_year,
		model,
		price,
	}: IAdsUpdateRequest,
	adsId: string
) => {
	const newAds = await prisma.car.update({
		where: {
			id: adsId,
		},

		data: {
			brand,
			car_color,
			description,

			fuel_type,
			km,
			launch_year,
			model,
			price,
		},
		include: {
			images: true,
		},
	});

	if (images) {
		await prisma.image.update({
			where: {
				id: newAds.images?.id,
			},

			data: {
				main_image: images.main_image,
				image_one: images.image_one,
				image_two: images.image_two,
				image_three: images.image_three,
				image_four: images.image_four,
				image_five: images.image_five,
			},
		});
	}

	const result = await prisma.car.findUnique({
		where: {
			id: newAds.id,
		},
		include: {
			images: true,
		},
	});

	const validatedData = await adsResponseSerializer.validate(result, {
		stripUnknown: true,
	});

	return validatedData;
};
