import { JwtPayload, decode } from "jsonwebtoken";
import { hash } from "bcrypt";
import { prisma } from "../../prisma";

export const resetPasswordService = async (newPassword: string, token: string) => {
  const { sub } = decode(token) as JwtPayload;

  const password = await hash(newPassword, 10);

  await prisma.user.update({
    where: { id: sub },
    data: { password, reset_token: null },
  });

  const response = { message: "Password changed successfully." };
  return response;
};
