import * as yup from "yup";
import { SchemaOf } from "yup";
import { IAddressCreateRequest } from "../../interfaces/adresses";

export const addressCreateSerializer: SchemaOf<IAddressCreateRequest> = yup.object().shape({
	street: yup.string().required(),
	number: yup.string().required(),
	complement: yup.string().required(),
	zip_code: yup.string().required(),
	city: yup.string().required(),
	state: yup.string().required(),
	description: yup.string().required(),
});
