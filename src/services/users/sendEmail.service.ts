import { sign } from "jsonwebtoken";
import { prisma } from "../../prisma";
import {
  resetPasswordTemplate,
  sendPasswordResetEmail,
} from "../../utils/sendEmail.utils";

export const sendEmailService = async (user: any, protocol: string, host: string) => {
  const { id, email, name } = user;

  const token = sign({}, process.env.SECRET_KEY as any, {
    subject: id,
    expiresIn: "1h",
  });

  await prisma.user.update({ where: { email }, data: { reset_token: token } });

  const emailTemplate = resetPasswordTemplate(name, email, protocol, host, token);
  await sendPasswordResetEmail(emailTemplate);

  const response = { message: "Email successfully sent." };
  return response;
};
