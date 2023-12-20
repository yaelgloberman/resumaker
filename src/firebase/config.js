import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxpxwcFv5P9Gu27YKW3yy_gnQwJvhlZAQ",
  authDomain: "resumeproject-b5b95.firebaseapp.com",
  projectId: "resumeproject-b5b95",
  storageBucket: "resumeproject-b5b95.appspot.com",
  messagingSenderId: "475408043518",
  appId: "1:475408043518:web:3ab637c93882e505ca84af",
  measurementId: "G-J1G7L07ZCE"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
