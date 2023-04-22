import { Request, Response } from "express";
import { sendEmailService } from "../../services/users/sendEmail.service";

export const sendEmailController = async (req: Request, res: Response) => {
  const { protocol, user } = req;
  const host = req.get("host");

  const response = await sendEmailService(user, protocol, host!);
  return res.status(200).json(response);
};
