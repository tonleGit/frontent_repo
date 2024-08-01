import { fetchUsers, updateUserData } from "@/apis/userApi";
import { StateStatusEnum } from "@/enums/api-status.enum";
import { createSlice } from "@reduxjs/toolkit";
import { State, StateInterface } from "../types";

const initialState: Record<string, StateInterface> = {
  updateUser: new State(),
  users: new State({ value: [] }),
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.users = {
        ...state.users,
        status: StateStatusEnum.loading,
      };
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = {
        ...state.users,
        status: StateStatusEnum.success,
        value: action.payload,
      };
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.users = {
        ...state.users,
        status: StateStatusEnum.failed,
      };
    });

    builder.addCase(updateUserData.pending, (state) => {
      state.updateUser = {
        ...state.updateUser,
        status: StateStatusEnum.loading,
      };
    });
    builder.addCase(updateUserData.fulfilled, (state, action) => {
      state.updateUser = {
        ...state.updateUser,
        status: StateStatusEnum.success,
      };
    });
    builder.addCase(updateUserData.rejected, (state, action) => {
      state.updateUser = {
        ...state.updateUser,
        status: StateStatusEnum.failed,
        error: action.payload as any,
      };
    });
  },
});

export default userSlice.reducer;
