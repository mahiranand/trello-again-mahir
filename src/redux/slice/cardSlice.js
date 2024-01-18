import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardsData: [],
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    displayCard: (state, action) => {
      const isolatedCards = action.payload.filter(
        (card) => !state.cardsData.some((existCard) => existCard.id === card.id)
      );
      state.cardsData = [...state.cardsData, ...isolatedCards];
    },
    createCard: (state, action) => {
      state.cardsData.push(action.payload);
    },
    deleteThisCard: (state, action) => {
      state.cardsData = state.cardsData.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { displayCard, createCard, deleteThisCard } = cardSlice.actions;

export default cardSlice.reducer;
