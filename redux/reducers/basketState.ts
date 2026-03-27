import {
  getBasketIdsStorage,
  removeBasketIdsStorage,
  setBasketIdsStorage,
} from "@/local-storage/basket-storage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface basketIdsTyp {
  id: string;
  count: number;
}

interface basketIdsType {
  basketIds: basketIdsTyp[];
}

const initialState: basketIdsType = {
  basketIds: getBasketIdsStorage(),
};

const basketState = createSlice({
  name: "basketIds",
  initialState,
  reducers: {
    toggleBasket: (state, action: PayloadAction<string>) => {
      const isBasket = state.basketIds.find(
        (item) => item.id === action.payload,
      );
      if (isBasket) {
        state.basketIds = state.basketIds.filter(
          (product) => product.id !== action.payload,
        );
      } else {
        state.basketIds.push({ count: 1, id: action.payload });
      }
      setBasketIdsStorage(state.basketIds);
    },
    basketIncer: (state, action: PayloadAction<string>) => {
      const item = state.basketIds.find((item) => item.id === action.payload);

      if (item) item.count += 1;
      setBasketIdsStorage(state.basketIds);
    },
    addManyToBasket: (state, action: PayloadAction<string[]>) => {
      action.payload.forEach((item) => {
        const exist = state.basketIds.find((pro) => pro.id === item);
        if (!exist) {
          state.basketIds.push({ id: item, count: 1 });
        }
      });
      setBasketIdsStorage(state.basketIds);
    },
    basketDecre: (state, action: PayloadAction<string>) => {
      const item = state.basketIds.find((item) => item.id === action.payload);
      if (item) item.count += -1;
      setBasketIdsStorage(state.basketIds);
    },

    removeBasketIds: (state) => {
      state.basketIds = [];
      removeBasketIdsStorage();
    },
  },
});
export const {
  toggleBasket,
  basketIncer,
  addManyToBasket,
  basketDecre,
  removeBasketIds,
} = basketState.actions;

export default basketState.reducer;
