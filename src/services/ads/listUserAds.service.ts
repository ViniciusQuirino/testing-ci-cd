import { prisma } from "../../prisma";

const listUserAdsService = async (id: string, cars: object) => {
  
  const carAd = await prisma.user.findMany({
    where: { 
      id: "75d5c336-4641-49cb-b186-fd26c93d3dfa" 
    },
    include: {
      cars: true
    },
  });

  console.log(carAd)
  return carAd;
};


export default listUserAdsService;