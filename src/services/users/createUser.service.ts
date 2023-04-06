import jwt from "jsonwebtoken";
import { hash } from "bcrypt";
import { prisma } from "../../prisma";
import {
	IUserCreateRequest,
	IUserWithAddressResponse,
} from "../../interfaces/users/user.interface";
import { userWithAddressResponseSerializer } from "../../serializers/users/user.serializer";

export const createUserService = async ({
	name,
	email,
	password,
	birth_date,
	cpf,
	image_url,
	is_seller,
	phone_number,
	description,
	address,
}: IUserCreateRequest): Promise<IUserWithAddressResponse> => {
	const hashPassword = await hash(password, 10);

	const newUser = await prisma.user.create({
		data: {
			name,
			email,
			password: hashPassword,
			birth_date,
			cpf,
			image_url,
			is_seller,
			phone_number,
			description,
		},
	});

	const newAddress = await prisma.address.create({
		data: {
			city: address.city,
			description: address.description,
			number: address.number,
			state: address.state,
			street: address.state,
			zip_code: address.zip_code,
			complement: address.complement,
			user_id: newUser.id,
		},
	});

	const result = {
		...newUser,
		address: newAddress,
	};

	const validatedData = userWithAddressResponseSerializer.validate(result, {
		stripUnknown: true,
	});

	return validatedData;
};
