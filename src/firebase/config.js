import {initializeApp} from "firebase/app"
// import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth";

// const firebaseConfig = {
//     apiKey: "AIzaSyBNQ6oPJJD1EMaaEszwikISQJi4TEFb4DQ",
//     authDomain: "resume-project-fb3b9.firebaseapp.com",
//     projectId: "resume-project-fb3b9",
//     storageBucket: "resume-project-fb3b9.appspot.com",
//     messagingSenderId: "25891482220",
//     appId: "1:25891482220:web:926080384d08545471c649",
//     measurementId: "G-25JVB5F61T"
//   };

const firebaseConfig = {
  apiKey: "AIzaSyDxpxwcFv5P9Gu27YKW3yy_gnQwJvhlZAQ",
  authDomain: "resumeproject-b5b95.firebaseapp.com",
  projectId: "resumeproject-b5b95",
  storageBucket: "resumeproject-b5b95.appspot.com",
  messagingSenderId: "475408043518",
  appId: "1:475408043518:web:3ab637c93882e505ca84af",
  measurementId: "G-J1G7L07ZCE"
};
// initializeApp(firebaseConfig)
// export const auth = getAuth();
// export const database = getFirestore();


const app = initializeApp(firebaseConfig);
export const database = getAuth(app)