// import { IAdsResponse, IAdsUpdateRequest } from "../../interfaces/ads/ads.interface";
// import { prisma } from "../../prisma";
// import { adsResponseSerializer } from "../../serializers/ads/ads.serializer";

// export const updateAdsService = async (
// 	{
// 		brand,
// 		car_color,
// 		description,
// 		fuel,
// 		fuel_type,
// 		images,
// 		km,
// 		launch_year,
// 		model,
// 		price,
// 	}: IAdsUpdateRequest,
// 	oldData: IAdsResponse
// ) => {
// 	const ads = await prisma.car.update({
// 		where: {
// 			id: oldData.id,
// 		},

// 		data: {
// 			brand,
// 			car_color,
// 			description,
// 			fuel,
// 			fuel_type,
// 			km,
// 			launch_year,
// 			model,
// 			price,
// 		},
// 	});

// 	if (images) {
// 		const newImages = await prisma.image.update({
// 			where: {
// 				id: oldData.images.id,
// 			},

// 			data: {
// 				main_image: images?.main_image,
// 				image_one: images?.image_one,
// 				image_two: images?.image_two,
// 				image_three: images?.image_three,
// 				image_four: images?.image_four,
// 				image_five: images?.image_five,
// 			},
// 		});
// 	}

// 	const validatedData = await adsResponseSerializer.validate(ads, {
// 		stripUnknown: true,
// 	});

// 	return validatedData;
// };
