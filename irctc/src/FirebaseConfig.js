import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDhKQv419fEu0sXFhVQXI0vuY8h7371TVg",
  authDomain: "irctc-f3649.firebaseapp.com",
  databaseURL: "https://irctc-f3649-default-rtdb.firebaseio.com",
  projectId: "irctc-f3649",
  storageBucket: "irctc-f3649.appspot.com",
  messagingSenderId: "357030882331",
  appId: "1:357030882331:web:03de2ec21864c58fbbdcbe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);