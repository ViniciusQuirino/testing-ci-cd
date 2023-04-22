import { prisma } from "../../prisma";

export const deleteUserService = async (userId: string): Promise<null> => {
  await prisma.user.delete({
    where: {
      id: userId,
    },
  });

  return null;
};
