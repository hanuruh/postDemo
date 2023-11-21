import { configureStore } from '@reduxjs/toolkit'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import postReducer from './postStore'
import commentReducer from './commentStore'
import userReducer from './userStore'


const store = configureStore({
    reducer: {
        post: postReducer,
        comment: commentReducer,
        user: userReducer
    },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default store
