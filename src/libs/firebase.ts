// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAYdJdHuKHIBz0mNoSf85ITIhLah1IgwHs",
    authDomain: "backend-chithanh.firebaseapp.com",
    projectId: "backend-chithanh",
    storageBucket: "backend-chithanh.appspot.com",
    messagingSenderId: "689304772072",
    appId: "1:689304772072:web:87b28e0e27dc1c90b4d85d",
    measurementId: "G-E0X7RKLKNE"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
