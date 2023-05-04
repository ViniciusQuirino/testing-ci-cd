import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";

export const ensureIsOwnerOfAdsOrAdm = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const ads = req.ads;
  const user = req.user;

  if (!user.is_adm && user.id !== ads.user_id) {
    throw new AppError("Unauthorized", 401);
  }

  return next();
};