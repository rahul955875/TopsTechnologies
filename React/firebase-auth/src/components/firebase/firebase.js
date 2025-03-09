import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAU0p_thLauzSIFiVFaRaqI6fUF29DymMo",
  authDomain: "user-auth-6b827.firebaseapp.com",
  projectId: "user-auth-6b827",
  storageBucket: "user-auth-6b827.firebasestorage.app",
  messagingSenderId: "945608356536",
  appId: "1:945608356536:web:3ef876081af140bfa77a4d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)