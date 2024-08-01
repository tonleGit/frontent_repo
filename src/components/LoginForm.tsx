"use client";

import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../pre-start/firebase";
import {
  TextField,
  Button,
  Box,
  Container,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hook";
import {
  loginFailed,
  loginLoading,
  loginSuccess,
} from "../store/slice/authentication";
import { StateStatusEnum } from "../enums/api-status.enum";

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("charles@gmail.com");
  const [password, setPassword] = useState("charles123");

  const { loginResult } = useAppSelector((state) => state.authentication);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      dispatch(loginLoading());
      const result = await signInWithEmailAndPassword(auth, email, password);
      // @ts-ignore
      localStorage.setItem("accessToken", result.user.accessToken);
      dispatch(loginSuccess(result));
    } catch (error) {
      dispatch(loginFailed(error));
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="charles@gmail.com"
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="charles123"
          />
          {loginResult.status === StateStatusEnum.failed && (
            <Typography
              sx={{ color: "secondary.main", textAlign: "center" }}
              variant="body2"
            >
              {loginResult.error?.message}
            </Typography>
          )}
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {loginResult?.status === StateStatusEnum.loading ? (
              <CircularProgress />
            ) : (
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                Login
              </Button>
            )}
          </div>
        </form>
      </Box>
    </Container>
  );
};

export default LoginForm;
