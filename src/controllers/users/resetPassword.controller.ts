import { Request, Response } from "express";
import { resetPasswordService } from "../../services/users/resetPassword.service";

export const resetPasswordController = async (req: Request, res: Response) => {
  const { password } = req.body;
  const { token } = req.params;

  const response = await resetPasswordService(password, token);
  return res.status(200).json(response);
};
