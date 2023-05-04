import * as express from "express";
import { IUserResponse } from "../../interfaces/users/user.interface";
import { IAdsResponse, IAdsLocals } from "../../interfaces/ads/ads.interface";
import { Car } from "@prisma/client";

declare global {
	namespace Express {
		interface Request {
			user: IUserResponse;
			ads: IAdsResponse;
			locals: IAdsLocals;
		}
	}
}
