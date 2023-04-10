import { prisma } from "../../prisma";

export const listAdsService = async (page: number, limit: number) => {
  const adsList = await prisma.car.paginate(
    {
      select: {
        ...prisma.$exclude("car", ["user_id"]),
        images: { select: prisma.$exclude("image", ["car_id"]) },
        comments: true,
        user: {
          select: prisma.$exclude("user", ["cpf", "password"]),
        },
      },
    },
    { limit: limit ? limit : 12, page: page ? page : 1 }
  );

  return adsList;
};
