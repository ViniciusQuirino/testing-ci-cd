import { IAddressCreateRequest } from "../adresses/address.interface";
import { IAdsResponse } from "../ads/ads.interface";

export interface IUserLogin {
	email: string;
	password: string;
}

export interface IUserCreateRequest {
	name: string;
	cpf: string;
	email: string;
	password: string;
	phone_number: string;
	description?: string;
	birth_date: Date;
	image_url: string;
	is_seller: boolean;
	address: IAddressCreateRequest;
}

export interface IUserUpdateRequest {
	name?: string;
	cpf?: string;
	email?: string;
	password?: string;
	phone_number?: string;
	description?: string;
	birth_date?: Date;
	image_url?: string;
	is_seller?: boolean;
}

export interface IUserResponse {
	id: string;
	name: string;
	cpf: string;
	email: string;
	phone_number: string;
	description?: string;
	birth_date: Date;
	image_url: string;
	is_seller: boolean;
	is_adm: boolean;
}

export interface IUserWithAddressResponse extends IUserResponse {
	address: IAddressCreateRequest;
}

export interface IUserCompleteResponse extends IUserWithAddressResponse {
	cars: IAdsResponse[];
}

export interface ISendEmailRequest {
	to: string;
	subject: string;
	html: string;
}
