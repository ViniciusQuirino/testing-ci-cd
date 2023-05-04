import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/appError";
import { verify } from "jsonwebtoken";
import { JsonWebTokenError } from "jsonwebtoken";

export const ensureTokenExistsMiddleware = async (req: Request, _: Response, next: NextFunction) => {
  const { token } = req.params;

  try {
    verify(token, process.env.SECRET_KEY as string);
  } catch (error) {
    if (error instanceof JsonWebTokenError) {
      throw new AppError(error.message, 400);
    }
  }

  return next();
};