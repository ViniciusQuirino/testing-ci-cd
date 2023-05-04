import { Request, Response } from 'express';
import { updateCommentsService } from '../../services/comments/updateComments.service';

export const updateCommentsController = async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = req.body;
    const user_id = req.user.id
    const updatedComment = await updateCommentsService(id, data, user_id);
    return  res.status(200).json(updatedComment);
};