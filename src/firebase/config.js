import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyDxpxwcFv5P9Gu27YKW3yy_gnQwJvhlZAQ",
//   authDomain: "resumeproject-b5b95.firebaseapp.com",
//   projectId: "resumeproject-b5b95",
//   storageBucket: "resumeproject-b5b95.appspot.com",
//   messagingSenderId: "475408043518",
//   appId: "1:475408043518:web:3ab637c93882e505ca84af",
//   measurementId: "G-J1G7L07ZCE"
// };

const firebaseConfig = {
  apiKey: "AIzaSyA7Zttpppe0xFE30at4kkjs99BPpeIVC_s",
  authDomain: "resume-921c7.firebaseapp.com",
  projectId: "resume-921c7",
  storageBucket: "resume-921c7.appspot.com",
  messagingSenderId: "953959621356",
  appId: "1:953959621356:web:25087ddd72de9d5b307bc9",
  measurementId: "G-W9SFLRN74J"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
