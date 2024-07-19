// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-8ae2a.firebaseapp.com",
  projectId: "mern-estate-8ae2a",
  storageBucket: "mern-estate-8ae2a.appspot.com",
  messagingSenderId: "1029233137499",
  appId: "1:1029233137499:web:428817c8e415c6b35dec7e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
