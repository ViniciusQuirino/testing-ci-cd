import { Request, Response } from 'express';
import { deleteCommentsService } from "../../services/comments/deleteComments.service";

export const deleteCommentsController = async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = await deleteCommentsService(id);
    return res.sendStatus(204);
};