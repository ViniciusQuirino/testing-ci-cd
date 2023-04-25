import { add } from "lodash";
import { IUserResponse, IUserUpdateRequest } from "../../interfaces/users/user.interface";
import { prisma } from "../../prisma";
import {
	userCompleteResponseSerializer,
	userResponseSerializer,
} from "../../serializers/users/user.serializer";

export const updateUserService = async (
	userId: string,
	{
		address,
		birth_date,
		cpf,
		description,
		email,
		image_url,
		is_seller,
		name,
		phone_number,
	}: IUserUpdateRequest
): Promise<IUserResponse> => {
	if (!address) {
		const updatedUser = await prisma.user.update({
			where: {
				id: userId,
			},
			data: {
				name,
				birth_date,
				cpf,
				email,
				description,
				image_url,
				is_seller,
				phone_number,
			},
		});

		const validatedData = userResponseSerializer.validate(updatedUser, {
			stripUnknown: true,
		});

		return validatedData;
	}

	await prisma.user.update({
		where: {
			id: userId,
		},
		data: {
			name,
			birth_date,
			cpf,
			email,
			description,
			image_url,
			is_seller,
			phone_number,
		},
	});
	const { city, complement, number, state, street, zip_code } = address;

	await prisma.address.update({
		where: {
			user_id: userId,
		},
		data: {
			city,
			complement,
			number,
			state,
			street,
			zip_code,
		},
	});

	const updatedUser = await prisma.user.findUnique({
		where: {
			id: userId,
		},
	});

	const validatedData = userResponseSerializer.validate(updatedUser, {
		stripUnknown: true,
	});

	return validatedData;
};
