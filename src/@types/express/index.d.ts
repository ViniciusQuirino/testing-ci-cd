import * as express from "express";
import { IUserResponse } from "../../interfaces/users/user.interface";

declare global {
	namespace Express {
		interface Request {
			user: IUserResponse;
		}
	}
}
