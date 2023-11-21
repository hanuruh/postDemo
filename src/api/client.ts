import {Post} from "../types/Post";
import {Comment} from "../types/Comment";
import {User} from "../types/User";

const API_URL = 'https://jsonplaceholder.typicode.com/';

const apiRequest = <T,>(params: string): Promise<T|null> => {
    return fetch(API_URL + params)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json() as Promise<T>
        })
        .catch(error => {
            console.error(error)
            return null;
        })
}

export const getAllUsers = async (): Promise<User[]> => {
    return (await apiRequest<User[]>('users')) ?? [];
}

export const getAllPosts = async (): Promise<Post[]> => {
    return (await apiRequest<Post[]>('posts')) ?? [];
}

export const getCommentsFromPost = async (postId: number): Promise<Comment[]> => {
    const comments = await apiRequest<Comment[]>(`posts/${postId}/comments`) ?? [];

    comments.map(c => {
        c.replies = [];
        c.tags = [];
    });

    return comments;
}
