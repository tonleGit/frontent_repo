import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "./api";

const userPrefixPath = "/users";

export const fetchUsers = createAsyncThunk(
  "user/fetchAll",
  async (_, thunkApi) => {
    try {
      const response = await api.get(`${userPrefixPath}/fetch-user-data`);
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const updateUserData = createAsyncThunk(
  "user/updateData",
  async (data: any, thunkApi) => {
    try {
      await api.post(`${userPrefixPath}/update-user-data`, data);
      return true;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);
