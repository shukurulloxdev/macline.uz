import { configureStore } from "@reduxjs/toolkit";
import imageState from "../reducers/imageState";

export const store = configureStore({
  reducer: {
    pictures: imageState,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
