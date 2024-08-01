import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import * as firebaseConfig from "../config/firebaseConfig.json";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
