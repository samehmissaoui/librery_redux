import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  bookCount: 0,
  penCount: 0,
};
// Book slice
export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.bookCount+= parseInt( action.payload);
    },
    sellBook: (state, action) => {
      state.bookCount -= parseInt( action.payload);
    },
  },
});
// Pen slice 
export const penSlice = createSlice({
  name: 'pen',
  initialState,
  reducers: {
    addPen: (state, action) => {
      state.penCount += parseInt (action.payload);
    },
    removePen: (state, action) => {
      state.penCount -= parseInt (action.payload);
    },
  },
});
// Export actions
export const { addBook, sellBook } = bookSlice.actions;
export const { addPen, removePen } = penSlice.actions;
// Export reducers
export const bookReducer = bookSlice.reducer;
export const penReducer = penSlice.reducer;
