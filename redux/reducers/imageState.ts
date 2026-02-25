import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialStateeTip {
  images: string[];
}

const initialStatee = <initialStateeTip>{
  images: [],
};

const imageState = createSlice({
  name: "pictures",
  initialState: initialStatee,
  reducers: {
    addImage: (state, action: PayloadAction<string>) => {
      state.images.push(action.payload);
    },
    removeImage: (state, action: PayloadAction<string>) => {
      state.images = state.images.filter((url) => url !== action.payload);
    },
    removeAllImages: (state) => {
      state.images = [];
    },
  },
});

export const { addImage, removeImage, removeAllImages } = imageState.actions;
export default imageState.reducer;
