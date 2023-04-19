import { Request, Response } from 'express';
import listUserAdsService from '../../services/ads/listUserAds.service';

export const listUserAdsControllers = async (req: Request, res: Response) => {
  
	const id: string = "75d5c336-4641-49cb-b186-fd26c93d3dfa";
	const car: object = req.body.car;

  const data: any = await listUserAdsService(id, car);
	
  console.log(data)

  return res.status(200).json(data);

};