import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Comment} from "../types/Comment";

type commentState = {
    comments: Comment[][];
    suggestedTags: string[];
}

const initialState : commentState = {
    comments: [[]],
    suggestedTags: ["#animals", "#funny", "#christmas", "#computer", "#food", "#news", "#politics"]
};

const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        saveCommentFromPost: (state, action: PayloadAction<[Comment[], number]>) => {
            const [comments, postId] = action.payload;
            state.comments[postId] = comments;
        },
        addReply: (state, action: PayloadAction<[number, number, string]>) => {
            const [postId, commentId, reply] = action.payload;
            state.comments[postId].find((c: Comment) => c.id == commentId).replies.push(reply);
        },
        addTag: (state, action: PayloadAction<[number, number, string]>) => {
            const [postId, commentId, tag] = action.payload;
            const newTag = tag.includes("#") ? tag : "#" + tag;
            state.comments[postId].find((c: Comment) => c.id == commentId).tags.push(newTag);

            if(!state.suggestedTags.includes(newTag)){
                state.suggestedTags.push(newTag);
            }
        },
    },
});

export const {
    saveCommentFromPost,
    addReply,
    addTag
} = commentSlice.actions

export default commentSlice.reducer
