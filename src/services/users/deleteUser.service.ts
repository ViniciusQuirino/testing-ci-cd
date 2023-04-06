import { prisma } from "../../prisma";

export const deleteUserService = async (userId: string): Promise<null> => {
	const user = await prisma.user.update({
		where: {
			id: userId,
		},
		data: {
			is_active: false,
		},
	});

	return null;
};
