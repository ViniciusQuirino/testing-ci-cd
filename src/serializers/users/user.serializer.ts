import * as yup from "yup";
import { SchemaOf } from "yup";
import {
	IUserCompleteResponse,
	IUserCreateRequest,
	IUserResponse,
	IUserWithAddressResponse,
} from "../../interfaces/users/user.interface";
import { adsResponseSerializer } from "../ads/ads.serializer";

export const userCreateRequestSerializer: SchemaOf<IUserCreateRequest> = yup.object().shape({
	name: yup.string().required(),
	email: yup.string().email().required(),
	cpf: yup
		.string()
		.required()
		.matches(/^[0-9]+$/, "CPF possue apenas números")
		.min(11, "CPF precisa ter 11 dígitos")
		.max(11, "CPF precisa ter 11 dígitos"),
	password: yup.string().required(),
	birth_date: yup.date().required(),
	phone_number: yup
		.string()
		.required()
		.matches(/^[0-9]+$/, "utilize apenas números")
		.min(11, "O número precisa ter 11 dígitos")
		.max(11, "O número precisa ter 11 dígitos"),
	description: yup.string().required(),
	image_url: yup.string().required(),
	is_seller: yup.boolean().required(),
	address: yup.object().shape({
		street: yup.string().required(),
		number: yup.string().required(),
		complement: yup.string().notRequired(),
		zip_code: yup.string().required(),
		city: yup.string().required(),
		state: yup.string().required(),
	}),
});
export const userWithAddressResponseSerializer: SchemaOf<IUserWithAddressResponse> = yup
	.object()
	.shape({
		id: yup.string().required(),
		name: yup.string().required(),
		email: yup.string().email().required(),
		cpf: yup.string().required(),
		birth_date: yup.date().required(),
		phone_number: yup.string().required(),
		description: yup.string().notRequired(),
		image_url: yup.string().required(),
		is_seller: yup.boolean().required(),
		is_adm: yup.boolean().required(),
		address: yup.object().shape({
			id: yup.string().required(),
			street: yup.string().required(),
			number: yup.string().required(),
			complement: yup.string().nullable(),
			zip_code: yup.string().required(),
			city: yup.string().required(),
			state: yup.string().required(),
		}),
	});

export const listUsersResponseSerializer: SchemaOf<IUserWithAddressResponse[]> = yup.array(
	userWithAddressResponseSerializer
);

export const userResponseSerializer: SchemaOf<IUserResponse> = yup.object().shape({
	id: yup.string().required(),
	name: yup.string().required(),
	email: yup.string().email().required(),
	cpf: yup.string().required(),
	birth_date: yup.date().required(),
	phone_number: yup.string().required(),
	description: yup.string(),
	image_url: yup.string().required(),
	is_seller: yup.boolean().required(),
	is_adm: yup.boolean().required(),
});

export const userCompleteResponseSerializer: SchemaOf<IUserCompleteResponse> = yup.object().shape({
	id: yup.string().required(),
	name: yup.string().required(),
	email: yup.string().email().required(),
	cpf: yup.string().required(),
	birth_date: yup.date().required(),
	phone_number: yup.string().required(),
	description: yup.string(),
	image_url: yup.string().required(),
	is_seller: yup.boolean().required(),
	is_adm: yup.boolean().required(),
	address: yup.object().shape({
		id: yup.string().required(),
		street: yup.string().required(),
		number: yup.string().required(),
		complement: yup.string().nullable(),
		zip_code: yup.string().required(),
		city: yup.string().required(),
		state: yup.string().required(),
	}),
	cars: yup.array(adsResponseSerializer),
});
