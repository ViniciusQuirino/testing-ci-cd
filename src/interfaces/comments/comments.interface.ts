export interface ICommentRequest {
    description: string;
}

export interface IComment {
    id: string;
    description: string;
    user_id: string;
    car_id: string;
    created_at: Date;
}
  
export interface ICommentUpdate {
    description?: string;
}