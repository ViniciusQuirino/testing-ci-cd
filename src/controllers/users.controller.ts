import { Request, Response } from "express";
import { createUserService, userLoginService } from "../services/users.service";

export const createUserController = async (req: Request, res: Response) => {
  const user = await createUserService(req.body);

  return res.status(201).json(user);
};

export const userLoginController = async (req: Request, res: Response) => {
  const token = await userLoginService(req.body);

  return res.status(200).json(token);
};
