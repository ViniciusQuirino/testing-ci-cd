import { Request, Response } from "express";
import { sendEmailService } from "../../services/users/sendEmail.service";

export const sendEmailController = async (req: Request, res: Response) => {
  const response = await sendEmailService(req.user);
  return res.status(200).json(response);
};
