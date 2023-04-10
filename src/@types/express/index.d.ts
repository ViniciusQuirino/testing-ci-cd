import * as express from "express";
import { IUserResponse } from "../../interfaces/users/user.interface";
import { IAdsResponse } from "../../interfaces/ads/ads.interface";
import { Car } from "@prisma/client";

declare global {
	namespace Express {
		interface Request {
			user: IUserResponse;
		}
	}
}
