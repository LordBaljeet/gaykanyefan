// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9LDjVbUHKDHBSZ6QUHNPdNsNM8YIUVQM",
  authDomain: "gaykanyefan.firebaseapp.com",
  projectId: "gaykanyefan",
  storageBucket: "gaykanyefan.appspot.com",
  messagingSenderId: "805568462912",
  appId: "1:805568462912:web:837c5f2948159f60d8dfa5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app)
export const firestore = getFirestore(app)

export const auth = getAuth();