import { configureStore } from "@reduxjs/toolkit";
import boardReducer from '../redux/slice/boardSlice'
import listReducer from '../redux/slice/listSlice'

export const store = configureStore({
    reducer: {
        boards: boardReducer,
        lists: listReducer,
    }
})