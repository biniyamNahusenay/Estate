// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_API_KEY,
  authDomain: "mern-realestate-7e68a.firebaseapp.com",
  projectId: "mern-realestate-7e68a",
  storageBucket: "mern-realestate-7e68a.appspot.com",
  messagingSenderId: "648795394431",
  appId: "1:648795394431:web:9a8e57a4ebe7a9809b0a4a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);