import jwt from "jsonwebtoken";
import { hash } from "bcrypt";
import { prisma } from "../prisma";
import { User } from "@prisma/client";

export const createUserService = async (payload: any) => {
  const password = await hash(payload.password, 10);
  const user = await prisma.user.create({ data: { ...payload, password } });

  return user;
};

export const userLoginService = async (payload: any) => {
  const user = (await prisma.user.findFirst({
    where: { email: payload.email },
  })) as User;

  const token = jwt.sign({}, process.env.SECRET_KEY as string, {
    subject: user.id,
  });

  return { token };
};
