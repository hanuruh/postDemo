import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User} from "../types/User";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: []
    },
    reducers: {
        saveAllUsers: (state, action: PayloadAction<User[]>) =>{
            state.users = action.payload.map(u => u.username);
        },
    },
});

export const {saveAllUsers} = userSlice.actions

export default userSlice.reducer
