import { configureStore } from "@reduxjs/toolkit";
import imageState from "../reducers/imageState";
import favoriteState from "../reducers/favoriteState";
import basketState from "../reducers/basketState";
import userState from "../reducers/userState";

export const store = configureStore({
  reducer: {
    pictures: imageState,
    favorites: favoriteState,
    baskets: basketState,
    user: userState,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
