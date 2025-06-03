// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "leetcode-clone-6b96c.firebaseapp.com",
  projectId: "leetcode-clone-6b96c",
  storageBucket: "leetcode-clone-6b96c.firebasestorage.app",
  messagingSenderId: "612128944477",
  appId: "1:612128944477:web:0e2e8075c18683292cf8b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);