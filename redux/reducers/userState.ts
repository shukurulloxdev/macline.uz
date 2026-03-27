import { getMe } from "@/actions/auth-actions";
import { Iuser } from "@/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk<Iuser | null>(
  "user/fetchUser",
  async () => {
    const res = await getMe();
    return res?.user ?? null;
  },
);

interface UserState {
  user: Iuser | null;
  isLoading: boolean;
  isInitialized: boolean;
}

const initialState: UserState = {
  user: null,
  isLoading: false,
  isInitialized: false,
};

const userState = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Iuser | null>) => {
      state.user = action.payload;
      state.isLoading = false;
      state.isInitialized = true;
    },
    deleteUser: (state) => {
      state.user = null;
      state.isLoading = false;
      state.isInitialized = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.isInitialized = true;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.user = null;
        state.isLoading = false;
        state.isInitialized = true;
      });
  },
});

export const { setUser, deleteUser } = userState.actions;
export default userState.reducer;
