import { configureStore } from "@reduxjs/toolkit";
import songsReducer from './songSlice';

export const store = configureStore({
    reducer: {
       songs: songsReducer,
    },
})