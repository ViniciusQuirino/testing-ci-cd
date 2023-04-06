import { prisma } from "../../prisma";

export const listAdsService = async (page: any) => {
  const adsList = await prisma.car.paginate(
    { include: { images: true } },
    { limit: 12, page: page ? Number(page) : 1 }
  );
  return adsList;
};
