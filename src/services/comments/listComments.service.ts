import { prisma } from "../../prisma";
import { format } from "date-fns";

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

    const formattedComments = listComments.map(comment => {
        return {
            ...comment,
            created_at: format(new Date(comment.created_at), 'dd/MM/yyyy HH:mm:ss')
        }
    });

    return formattedComments;
};