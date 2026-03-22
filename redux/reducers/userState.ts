import { Iuser } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialStateType {
  user: Iuser | null | undefined;
  setUser: () => void;
}

const initialState: initialStateType = {
  user: undefined,
  setUser: () => {},
};

const userState = createSlice({
  initialState,
  name: "user",
  reducers: {
    setUser: (state, action: PayloadAction<Iuser>) => {
      state.user = action.payload;
    },
    deleteUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, deleteUser } = userState.actions;
export default userState.reducer;
