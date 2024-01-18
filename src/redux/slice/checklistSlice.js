import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checklistData: [],
};

export const checklistSlice = createSlice({
  name: "checklist",
  initialState,
  reducers: {
    displayChecklist: (state, action) => {
      state.checklistData = action.payload;
    },
    checklistAdd: (state, action) => {
      state.checklistData.push(action.payload);
    },
    checklistDelete: (state, action) => {
      state.checklistData = state.checklistData.filter(
        ({ id }) => id != action.payload
      );
    },
  },
});

export const { displayChecklist, checklistAdd, checklistDelete } =
  checklistSlice.actions;

export default checklistSlice.reducer;
