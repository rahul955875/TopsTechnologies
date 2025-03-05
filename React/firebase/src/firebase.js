// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDa24RJuevK12Zyk1vi4LbvMSV7zUU7oQs",
  authDomain: "todos-app-5a2ba.firebaseapp.com",
  projectId: "todos-app-5a2ba",
  storageBucket: "todos-app-5a2ba.firebasestorage.app",
  messagingSenderId: "479115849339",
  appId: "1:479115849339:web:e94441af97307a0978fcde",
  measurementId: "G-M41KEC4ZBS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

