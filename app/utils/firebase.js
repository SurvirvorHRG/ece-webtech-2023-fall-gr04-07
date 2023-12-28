// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "webtechapp-e8ec9.firebaseapp.com",
  projectId: "webtechapp-e8ec9",
  storageBucket: "webtechapp-e8ec9.appspot.com",
  messagingSenderId: "879996147804",
  appId: "1:879996147804:web:de592ba277d728b1c06e99",
  measurementId: "G-H4ML28BZJ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);