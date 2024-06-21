// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArbs5CnGzY9v7_ORNR18X527xGnsfdeOE",
  authDomain: "backend-chatapp-fd379.firebaseapp.com",
  projectId: "backend-chatapp-fd379",
  storageBucket: "backend-chatapp-fd379.appspot.com",
  messagingSenderId: "680866586151",
  appId: "1:680866586151:web:41e32b22012bb77c387802"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
