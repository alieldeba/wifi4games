import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "../futures/gamesSlice";

export const store = configureStore({
  reducer: {
    games: gamesReducer,
  },
});
