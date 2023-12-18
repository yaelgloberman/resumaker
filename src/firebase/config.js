import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBNQ6oPJJD1EMaaEszwikISQJi4TEFb4DQ",
    authDomain: "resume-project-fb3b9.firebaseapp.com",
    projectId: "resume-project-fb3b9",
    storageBucket: "resume-project-fb3b9.appspot.com",
    messagingSenderId: "25891482220",
    appId: "1:25891482220:web:926080384d08545471c649",
    measurementId: "G-25JVB5F61T"
  };

initializeApp(firebaseConfig)
export const auth = getAuth();
export const database = getFirestore();

