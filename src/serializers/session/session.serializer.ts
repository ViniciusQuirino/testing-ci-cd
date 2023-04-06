import * as yup from "yup";
import { SchemaOf } from "yup";
import { ILoginRequest } from "../../interfaces/session/session.interface";

export const sessionRequestSerializer: SchemaOf<ILoginRequest> = yup.object({
	email: yup.string().email().required(),
	password: yup.string().required(),
});
