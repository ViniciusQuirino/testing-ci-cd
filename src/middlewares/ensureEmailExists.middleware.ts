import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/appError";
import { prisma } from "../prisma";
import { userResponseSerializer } from "../serializers/users/user.serializer";

export const ensureEmailMiddleware = async (req: Request, _: Response, next: NextFunction) => {
  const { email } = req.body;
  const user = await prisma.user.findFirst({ where: { email } });

  if (!user) {
    throw new AppError("E-mail not found.", 404);
  }

  const response = await userResponseSerializer.validate(user, {
    stripUnknown: true,
  });

  req.user = response;

  return next();
};
