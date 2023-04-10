import * as express from "express";
import { IUserResponse } from "../../interfaces/users/user.interface";
import { IAdsResponse } from "../../interfaces/ads/ads.interface";

declare global {
	namespace Express {
		interface Request {
			user: IUserResponse;
			ads: IAdsResponse;
		}
	}
}
