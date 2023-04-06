import * as express from "express";
import { IUserWithAddressResponse } from "../../interfaces/users/user.interface";

declare global {
	namespace Express {
		interface Request {
			user: IUserWithAddressResponse;
		}
	}
}
