import { Request, Response } from 'express';
import listUserAdsService from '../../services/ads/listUserAds.service';

export const listUserAdsControllers = async (req: Request, res: Response) => {
  
	try {
    const id = req.params.id;
    const listAd = await listUserAdsService(id);

    return res.json(listAd);
  } 
	catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({message: error.message,});
    }
  }
};