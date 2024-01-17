import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boardData: [],
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    displayBoard: (state, action) => {
      state.boardData = action.payload;
    },
    createBoard: (state, action) => {
      state.boardData.push(action.payload);
    },
  },
});

export const { displayBoard, createBoard } = boardSlice.actions;

export default boardSlice.reducer;
