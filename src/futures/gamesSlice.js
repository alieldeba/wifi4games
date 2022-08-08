import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    setApi: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export default gamesSlice.reducer;
export const { setApi } = gamesSlice.actions;
