// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-4a22b.firebaseapp.com",
  projectId: "mern-blog-4a22b",
  storageBucket: "mern-blog-4a22b.appspot.com",
  messagingSenderId: "1015691295957",
  appId: "1:1015691295957:web:9a3a891407774a962db65c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);