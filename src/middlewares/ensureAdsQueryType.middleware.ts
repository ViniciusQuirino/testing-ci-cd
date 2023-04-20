import _ from "lodash";
import { Request, Response, NextFunction } from "express";
import { adsQueriesSerializer } from "../serializers/ads/ads.serializer";
import exclude from "../utils/excludeKeys";
import { AppError } from "../errors/appError";

export const ensureAdsQueryType = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const validatedQueries = await adsQueriesSerializer.validate(req.query, {
			stripUnknown: true,
		});

		const queryWithouthAnyKey = _.cloneDeep(validatedQueries);
		exclude(queryWithouthAnyKey, [
			"min_km",
			"max_km",
			"min_price",
			"max_price",
			"limit",
			"page",
		]);

		req.locals = { queries: validatedQueries, outherQueries: queryWithouthAnyKey };

		return next();
	} catch (error) {
		throw new AppError("Invalid query params", 400);
	}
};
