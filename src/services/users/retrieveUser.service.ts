import { IUserResponse, IUserWithAddressResponse } from "../../interfaces/users/user.interface";
import { prisma } from "../../prisma";
import { userResponseSerializer } from "../../serializers/users/user.serializer";

const retriveUserService = async (id: string) => {
	const user = await prisma.user.findUnique({
		where: {
			id: id,
		},
	});

	console.log("@@@@@@@@@@@@@@@@@@@@@@\n", user);

	const validatedData = await userResponseSerializer.validate(user, {
		stripUnknown: true,
	});

	return validatedData;
};

export default retriveUserService;
