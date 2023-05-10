import { format } from "date-fns";
import { prisma } from "../../prisma";

export const updateCommentsService = async (id: string, data: any, user_id: string) => {
    const updatedComment = await prisma.comments.update({
        where: { id },
        data: {
            ...data,
        },
        include: {
            user: true
        }
    });
    const date = new Date();
    const formattedComment = {
        ...updatedComment,
        created_at: format(date, 'dd/MM/yyyy HH:mm:ss')
    };

    return formattedComment;
};