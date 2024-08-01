"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../pre-start/firebase";
import { signOut } from "firebase/auth";
import {
  Box,
  Button,
  Container,
  Divider,
  Snackbar,
  Typography,
} from "@mui/material";
import UpdateButton from "../../components/UpdateButton";
import { useRouter } from "next/navigation";
import UserList from "../../components/UserList";
import { handleLogout } from "@/utils/authenticationUtil";

export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();

  const logout = () => {
    router.push("/");
    signOut(auth);
    handleLogout();
  };

  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        textAlign="center"
      >
        <Typography variant="h1" component="h1" gutterBottom>
          Main Page
        </Typography>
        <Typography variant="body1" gutterBottom>
          Welcome, {user?.email}
        </Typography>
        <Divider />
        <Button onClick={logout}>Sign out</Button>
        <Divider />
        <UpdateButton />
        <Divider />
        <UserList />
      </Box>
    </Container>
  );
}
