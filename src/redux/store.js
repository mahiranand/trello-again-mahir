import { configureStore } from "@reduxjs/toolkit";
import boardReducer from '../redux/slice/boardSlice'

export const store = configureStore({
    reducer: {
        boards: boardReducer,
    }
})