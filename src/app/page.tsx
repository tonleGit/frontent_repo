"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../pre-start/firebase";
import LoginForm from "../components/LoginForm";
import { useRouter } from "next/navigation";

export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();

  if (user) {
    return router.push("/main");
  }

  return <LoginForm />;
}
