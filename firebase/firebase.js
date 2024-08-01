// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZQgyxYDQ4HQpPSqhNVH9UZan2lmqIW90",
  authDomain: "reactdemoproject-ffa2e.firebaseapp.com",
  projectId: "reactdemoproject-ffa2e",
  storageBucket: "reactdemoproject-ffa2e.appspot.com",
  messagingSenderId: "518902246918",
  appId: "1:518902246918:web:5381efc7759c781a235d87",
  measurementId: "G-NTQK4BQ3L8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}

