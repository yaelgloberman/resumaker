import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage'



// const firebaseConfig = {
//   apiKey: "AIzaSyA7Zttpppe0xFE30at4kkjs99BPpeIVC_s",
//   authDomain: "resume-921c7.firebaseapp.com",
//   projectId: "resume-921c7",
//   storageBucket: "resume-921c7.appspot.com",
//   messagingSenderId: "953959621356",
//   appId: "1:953959621356:web:25087ddd72de9d5b307bc9",
//   measurementId: "G-W9SFLRN74J"
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
export const storage = getStorage(app);
export const auth = getAuth(app);
export const database = getFirestore(app);

