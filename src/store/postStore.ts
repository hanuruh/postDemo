import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Post} from "../types/Post";

type postState = {
    posts: Post[];
}

const initialState: postState = {
    posts: []
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        saveAllPosts: (state, action: PayloadAction<Post[]>) =>{
            state.posts = action.payload;
        },
    },
});

export const {saveAllPosts} = postSlice.actions

export default postSlice.reducer
