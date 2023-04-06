import { IUserWithAddressResponse } from "../../interfaces/users/user.interface";
import { prisma } from "../../prisma";
import { listUsersResponseSerializer } from "../../serializers/users/user.serializer";

export const listUsersService = async (): Promise<IUserWithAddressResponse[]> => {
	const usersList = await prisma.user.findMany({
		include: {
			address: true,
		},
	});

	const validatedData = await listUsersResponseSerializer.validate(usersList, {
		stripUnknown: true,
	});

	return validatedData!;
};
