import { IAdsQueries } from "../../interfaces/ads/ads.interface";
import { prisma } from "../../prisma";

export const listAdsService = async (queries: IAdsQueries, outherQueries: IAdsQueries) => {
  const { min_km, max_km, min_price, max_price, limit, page } = queries;

  const adsList = await prisma.car.paginate(
    {
      where: {
        AND:
          Object.keys(outherQueries).length || Object.keys(queries).length
            ? [
              outherQueries,
              { km: { gte: min_km } },
              { km: { lte: max_km } },
              { price: { gte: min_price } },
              { price: { lte: max_price } },
              ]
            : undefined,
      },
      select: {
        ...prisma.$exclude("car", ["user_id"]),
        images: { select: prisma.$exclude("image", ["car_id"]) },
        comments: { select: prisma.$exclude("comments", ["car_id"]) },
        user: {
          select: prisma.$exclude("user", ["cpf", "password"]),
        },
      },
    },
    { limit: limit ? limit : 12, page: page ? page : 1 }
  );

  return adsList;
};
