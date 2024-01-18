import { configureStore } from "@reduxjs/toolkit";
import boardReducer from '../redux/slice/boardSlice'
import listReducer from '../redux/slice/listSlice'
import cardReducer from '../redux/slice/cardSlice'
import checklistReducer from '../redux/slice/checklistSlice'

export const store = configureStore({
    reducer: {
        boards: boardReducer,
        lists: listReducer,
        cards: cardReducer,
        checklists: checklistReducer
    }
})