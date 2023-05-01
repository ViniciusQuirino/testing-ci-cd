import { Request, Response } from "express";
import { listAdCommentService } from "../../services/comments/listComments.service";

export const listAdCommentsController = async ( req: Request, res: Response, ) => {
    const id = req.params.id;
    const data = await listAdCommentService(id);
    return res.status(200).json(data);  
}
