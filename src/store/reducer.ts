import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import authenticationSlice from "./slice/authentication";

export const rootReducer = combineReducers({
  user: userSlice,
  authentication: authenticationSlice,
});
