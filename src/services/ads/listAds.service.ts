import { prisma } from "../../prisma";

export const listAdsService = async (page: number, limit: number) => {
  const adsList = await prisma.car.paginate(
    { include: { images: true } },
    { limit: limit ? limit : 12, page: page ? Number(page) : 1 }
  );
  
  return adsList;
};
