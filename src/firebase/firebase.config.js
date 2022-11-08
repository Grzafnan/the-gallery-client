// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDksti7C9GWRIbbnSjAy5wor0KtS74abgU",
  authDomain: "the-gallery-auth.firebaseapp.com",
  projectId: "the-gallery-auth",
  storageBucket: "the-gallery-auth.appspot.com",
  messagingSenderId: "81964375386",
  appId: "1:81964375386:web:95cbe62aba083e9d7b2763"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;