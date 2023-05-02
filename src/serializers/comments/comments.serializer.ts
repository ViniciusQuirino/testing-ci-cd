import * as yup from "yup";
import { SchemaOf } from "yup";
import { ICommentRequest } from "../../interfaces/comments/comments.interface";

export const commentRequestSerializer: SchemaOf<ICommentRequest> = yup.object({
	description: yup.string().required()
});

