// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBO4r_QPtve_bUM0EHWm3jVGAqsoq30KLY",
  authDomain: "fun-room-e3277.firebaseapp.com",
  projectId: "fun-room-e3277",
  storageBucket: "fun-room-e3277.appspot.com",
  messagingSenderId: "741319116671",
  appId: "1:741319116671:web:eb78377d257b28e1dbfc4a"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();