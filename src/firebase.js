// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase config الوهمي
const firebaseConfig = {
  apiKey: "AIzaSyDUMMYKEY",
  authDomain: "dummy-app.firebaseapp.com",
  projectId: "dummy-app",
  storageBucket: "dummy-app.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:dummytoken",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
