export type Comment = {
    id: number;
    name: string;
    postId: number;
    body: string;
    email: string;
    replies: string[];
    isReply: boolean;
    tags: string[]
}
