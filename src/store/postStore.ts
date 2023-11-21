import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Post} from "../types/Post";

const postSlice = createSlice({
    name: 'post',
    initialState: {
        posts: []
    },
    reducers: {
        saveAllPosts: (state, action: PayloadAction<Post[]>) =>{
            state.posts = action.payload;
        },
    },
});

export const {saveAllPosts} = postSlice.actions

export default postSlice.reducer
