import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listData: [],
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    displayList: (state, action) => {
      console.log(action.payload);
      state.listData = action.payload;
    },
    createList: (state, action) => {
      state.listData.push(action.payload);
    },
    archiveList: (state, action) => {
      state.listData = state.listData.filter(({ id }) => id != action.payload);
    },
  },
});

export const { displayList, createList, archiveList } = listSlice.actions;

export default listSlice.reducer;
