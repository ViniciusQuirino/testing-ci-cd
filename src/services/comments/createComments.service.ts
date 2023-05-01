import { prisma } from "../../prisma";
import { ICommentRequest } from "../../interfaces/comments/comments.interface";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export const createCommentsService = async (data: ICommentRequest, id: string, user_id: string) => {

   const { description } = data;
    const newComment = await prisma.comments.create({
        data: {
            car:  { connect: { id: id } },
            description,
            user:  { connect: { id: user_id } },
            created_at: new Date()
        },
         include: {
             user: true,
         },
    });

    const formattedComment = {
        ...newComment,
        created_at: format(newComment.created_at, 'dd/MM/yyyy HH:mm:ss')
    };
    
    if(!formattedComment){
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'Invalid comment data' }),
          }; 
    }

    return formattedComment;
};