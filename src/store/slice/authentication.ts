import { createSlice } from "@reduxjs/toolkit";
import { State, StateInterface } from "../types";
import { StateStatusEnum } from "../../enums/api-status.enum";

const initialState: Record<string, StateInterface> = {
  loginResult: new State(),
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: initialState,
  reducers: {
    loginLoading: (state) => {
      state.loginResult = {
        ...state.loginResult,
        status: StateStatusEnum.loading,
      };
    },
    loginSuccess: (state, action) => {
      state.loginResult = {
        ...state.loginResult,
        status: StateStatusEnum.success,
        value: action.payload,
      };
    },
    loginFailed: (state, action) => {
      state.loginResult = {
        ...state.loginResult,
        status: StateStatusEnum.failed,
        error: action.payload,
      };
    },
    loginReset: (state) => {
      state.loginResult = initialState.loginResult;
    },
  },
});

export const { loginLoading, loginSuccess, loginFailed, loginReset } =
  authenticationSlice.actions;

export default authenticationSlice.reducer;
