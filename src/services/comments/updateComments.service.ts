import { AppError } from "../../errors/appError";
import { prisma } from "../../prisma";

export const updateCommentsService = async (id: string, data: any, user_id: string) => {
    const existingComment = await prisma.comments.findUnique({
        where: { id: id}
    });

    if (!existingComment) {
        throw new Error(`Comment with id ${id} not found`);
    }

    if(existingComment.user_id !== user_id){
        throw new AppError("User doesn't have permission", 404)
    }

    const updatedComment = await prisma.comments.update({
        where: { id },
        data,
    });

    return updatedComment;
};