
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyArzBq9Y1PPo9CBuStxwLtJtBBXDL0ygt0",
  authDomain: "auth-822f8.firebaseapp.com",
  projectId: "auth-822f8",
  storageBucket: "auth-822f8.firebasestorage.app",
  messagingSenderId: "336107073512",
  appId: "1:336107073512:web:b0b63c0d7b7b1404aafe5d",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)