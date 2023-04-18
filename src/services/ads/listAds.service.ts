import { IAdsQueries } from "../../interfaces/ads/ads.interface";
import { prisma } from "../../prisma";

export const listAdsService = async (queries: IAdsQueries, outherQueries: IAdsQueries) => {
  const { min_km, max_km, min_price, max_price, limit = 12, page = 1 } = queries;

  const adsList = await prisma.car.paginate(
    {
      where: {
        AND: [
          outherQueries,
          { km: { gte: min_km, lte: max_km } },
          { price: { gte: min_price, lte: max_price } },
        ],
      },
      select: {
        ...prisma.$exclude("car", ["user_id"]),
        images: { select: prisma.$exclude("image", ["car_id"]) },
        comments: { select: prisma.$exclude("comments", ["car_id"]) },
        user: { select: prisma.$exclude("user", ["cpf", "password"]) },
      },
    },
    { limit: limit, page: page }
  );

  return adsList;
};
