import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checkitemsData: [],
};

export const checkitemSlice = createSlice({
  name: "checkitem",
  initialState,
  reducers: {
    displayCheckitem: (state, action) => {
      const isolatedItems = action.payload.filter(
        (item) =>
          !state.checkitemsData.some((existItem) => existItem.id === item.id)
      );
      state.checkitemsData = [...state.checkitemsData, ...isolatedItems];
    },
    checkitemAdd: (state, action) => {
      state.checkitemsData.push(action.payload);
    },
    checkitemDelete: (state, action) => {
      state.checkitemsData = state.checkitemsData.filter(
        ({ id }) => id !== action.payload
      );
    },
    checkitemUpdata: (state, action) => {
      state.checkitemsData.map((item) => {
        if (item.id == action.payload.id) {
          item.state = action.payload.status;
        }
      });
    },
  },
});

export const {
  displayCheckitem,
  checkitemAdd,
  checkitemDelete,
  checkitemUpdata,
} = checkitemSlice.actions;

export default checkitemSlice.reducer;
