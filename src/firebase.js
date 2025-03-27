// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "wesayblog-78349.firebaseapp.com",
  projectId: "wesayblog-78349",
  storageBucket: "wesayblog-78349.appspot.com",
  messagingSenderId: "1037662425943",
  appId: "1:1037662425943:web:0d056b7df3a1650d872412",
  measurementId: "G-90V5GE1CPW",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
