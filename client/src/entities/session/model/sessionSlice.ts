import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "@/entities/user/model/types";

type SessionState = {
  user: User | null;
  status: "authenticated" | "checking" | "unauthenticated";
};

const initialState: SessionState = {
  user: null,
  status: "unauthenticated",
};

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    sessionChecking(state) {
      state.status = "checking";
    },

    sessionReceived(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.status = "authenticated";
    },

    sessionCleared(state) {
      state.user = null;
      state.status = "unauthenticated";
    },
  },
});

export const { sessionChecking, sessionReceived, sessionCleared } =
  sessionSlice.actions;

export const sessionReducer = sessionSlice.reducer;
