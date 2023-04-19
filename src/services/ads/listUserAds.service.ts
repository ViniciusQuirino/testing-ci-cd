import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const listUserAdsService = async (id: string) => {
  const carAd = await prisma.car.findUnique({
    where: { id: id },
  });

  return carAd;
};


export default listUserAdsService;