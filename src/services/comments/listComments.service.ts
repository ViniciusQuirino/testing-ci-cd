import { prisma } from "../../prisma";

export const listAdCommentService = async (id: string) => {
    const listComments = await prisma.comments.findMany({
        where: { 
            car: { id: id } 
        },
        include: {
            user: {
              select: {
                id: true,
                name: true,
                cpf: false,
                email: false,
                phone_number: false,
                description: false,
                birth_date: false,
                image_url: true,
                is_adm: false,
                is_seller: false,
              },
            }
        }
    });

    return listComments;
};