import { Iuser } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: Iuser | null;
  isLoading: boolean;
}

const initialState: UserState = {
  user: null,
  isLoading: false,
};

const userState = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setUser: (state, action: PayloadAction<Iuser | null>) => {
      state.user = action.payload;
    },
    deleteUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, deleteUser, userLoading } = userState.actions;
export default userState.reducer;
