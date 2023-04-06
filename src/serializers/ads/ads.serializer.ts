import * as yup from "yup";
import { SchemaOf } from "yup";
import { IAdsCreateRequest, IAdsResponse } from "../../interfaces/ads/ads.interface";

export const adsCreateRequestSerializer: SchemaOf<IAdsCreateRequest> = yup.object().shape({
	brand: yup.string().required(),
	car_color: yup.string().required(),
	fuel: yup.number().required(),
	fuel_type: yup.string().required(),
	description: yup.string().required(),
	km: yup.number().required(),
	launch_year: yup.date().required(),
	model: yup.string().required(),
	price: yup.number().required(),
});

export const adsResponseSerializer: SchemaOf<IAdsResponse> = yup.object().shape({
	id: yup.string().required(),
	brand: yup.string().required(),
	car_color: yup.string().required(),
	fuel: yup.number().required(),
	fuel_type: yup.string().required(),
	description: yup.string().required(),
	km: yup.number().required(),
	launch_year: yup.date().required(),
	model: yup.string().required(),
	price: yup.number().required(),
	is_active: yup.boolean().required(),
	sold: yup.boolean().required(),
});

export const listAdsResponseSerializer: SchemaOf<IAdsResponse[]> = yup.array(adsResponseSerializer);
