import { IUserWithAddressResponse } from "../../interfaces/users/user.interface";
import { prisma } from "../../prisma";
import { userWithAddressResponseSerializer } from "../../serializers/users/user.serializer";

export const retrieveUserService = async (userId: string): Promise<IUserWithAddressResponse> => {
	const usersList = await prisma.user.findUnique({
		where: {
			id: userId,
		},
		include: {
			address: true,
		},
	});

	const validatedData = await userWithAddressResponseSerializer.validate(usersList, {
		stripUnknown: true,
	});

	return validatedData!;
};
