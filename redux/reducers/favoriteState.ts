import {
  clearFavoritesFromStorage,
  getFavoritesFromStorage,
  saveFavoritesToStorage,
} from "@/local-storage/favorites-storage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface favoriteIdsType {
  favoriteIds: string[];
}

const initialState: favoriteIdsType = {
  favoriteIds: getFavoritesFromStorage(),
};

const favoriteState = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggelFavorite: (state, action: PayloadAction<string>) => {
      const exists = state.favoriteIds.includes(action.payload);
      if (exists) {
        state.favoriteIds = state.favoriteIds.filter(
          (id) => id !== action.payload,
        );
      } else {
        state.favoriteIds.push(action.payload);
      }
      saveFavoritesToStorage(state.favoriteIds);
    },
    removeAllFavorites: (state) => {
      state.favoriteIds = [];
      clearFavoritesFromStorage();
    },
  },
});
export const { toggelFavorite, removeAllFavorites } = favoriteState.actions;

export default favoriteState.reducer;
