import { prisma } from "../../prisma";

const listUserAdsService = async (id: string, cars: object) => {
  
  const carAd = await prisma.user.findMany({
    where: { 
      id: "9ade970e-d45d-41d6-b256-53fbafe0cbdd" 
    },
    include: {
      cars: true
    },
  });

  console.log(carAd)
  return carAd;
};


export default listUserAdsService;