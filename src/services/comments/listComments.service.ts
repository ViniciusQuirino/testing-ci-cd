import { prisma } from "../../prisma";

export const listAdCommentService = async (id: string) => {
    const listComments = await prisma.comments.findMany({
        where: { 
            car: { id: id } 
        },
        include: {
            user: true,
        },
    });
    return listComments;
};