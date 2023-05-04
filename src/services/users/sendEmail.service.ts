import { sign } from "jsonwebtoken";
import { prisma } from "../../prisma";
import {
  resetPasswordTemplate,
  sendPasswordResetEmail,
} from "../../utils/sendEmail.utils";
import { IUserResponse } from "../../interfaces/users/user.interface";

export const sendEmailService = async (user: IUserResponse) => {
  const { id, email, name } = user;

  const token = sign({}, process.env.SECRET_KEY as any, {
    subject: id,
    expiresIn: "1h",
  });

  await prisma.user.update({ where: { email }, data: { reset_token: token } });

  const emailTemplate = resetPasswordTemplate(name, email, token);
  await sendPasswordResetEmail(emailTemplate);

  const response = { message: "Email successfully sent." };
  return response;
};
