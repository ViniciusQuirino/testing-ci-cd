import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserCreateRequest, IUserResponse } from "../../interfaces/users";

export const userCreateRequestSerializer: SchemaOf<IUserCreateRequest> = yup.object().shape({
	name: yup.string().required(),
	email: yup.string().email().required(),
	cpf: yup.string().required(),
	password: yup.string().required(),
	birth_date: yup.date().required(),
	phone_number: yup.string().required(),
	description: yup.string().required(),
	image_url: yup.string().required(),
	is_seller: yup.boolean().required(),
	address: yup.object().shape({
		street: yup.string().required(),
		number: yup.string().required(),
		complement: yup.string().required(),
		zip_code: yup.string().required(),
		city: yup.string().required(),
		state: yup.string().required(),
		description: yup.string().required(),
	}),
});

export const userResponseSerializer: SchemaOf<IUserResponse> = yup.object().shape({
	name: yup.string().required(),
	email: yup.string().email().required(),
	cpf: yup.string().required(),
	password: yup.string().required(),
	birth_date: yup.date().required(),
	phone_number: yup.string().required(),
	description: yup.string().required(),
	image_url: yup.string().required(),
	is_seller: yup.boolean().required(),
});
