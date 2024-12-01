// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0A5Ipi1pcts_LJ_6CCe99r72IusMGRtQ",
  authDomain: "coffee-store-dcb16.firebaseapp.com",
  projectId: "coffee-store-dcb16",
  storageBucket: "coffee-store-dcb16.firebasestorage.app",
  messagingSenderId: "1068122590020",
  appId: "1:1068122590020:web:2e70abba5dda5379ffa511"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);