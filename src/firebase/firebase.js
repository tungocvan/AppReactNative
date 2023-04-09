// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJkUSqmU6p_7f-oXX6QeIsKRgiQbgszXo",
  authDomain: "app-ntd-8cbef.firebaseapp.com",
  projectId: "app-ntd-8cbef",
  storageBucket: "app-ntd-8cbef.appspot.com",
  messagingSenderId: "543197382633",
  appId: "1:543197382633:web:f91e627d6e91eac2a1ed78",
  measurementId: "G-XCBH1V466S",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };

// Initialize Firebase
