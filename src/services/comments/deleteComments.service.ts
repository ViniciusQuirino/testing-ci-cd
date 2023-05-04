import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const deleteCommentsService = async (id: string) => {
    const deleteComment = await prisma.comments.delete({
        where: { id: id },
    });
    return null;
};
