// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEU18ehR1RjMsk_m2qVRmaEOZv28aS6dQ",
  authDomain: "megatech-55c62.firebaseapp.com",
  projectId: "megatech-55c62",
  storageBucket: "megatech-55c62.appspot.com",
  messagingSenderId: "558490163257",
  appId: "1:558490163257:web:ad774f11721251c15595e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const db = getFirestore (app);