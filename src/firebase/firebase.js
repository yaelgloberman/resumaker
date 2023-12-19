import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
  updatePassword,
} from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc, collection, getDocs } from 'firebase/firestore';

import firebaseConfig from './config2';

class Firebase {
  constructor() {
    this.firebase = initializeApp(firebaseConfig);

    this.auth = getAuth();
    this.firestore = getFirestore();
  }

//   signUp = (email, password) =>
//     createUserWithEmailAndPassword(this.auth, email, password);

//   signIn = (email, password) =>
//     signInWithEmailAndPassword(this.auth, email, password);

//   signOut = () => signOut(this.auth);

//   sendEmailVerificationLink = () =>
//     sendEmailVerification(this.auth.currentUser, {
//       url: process.env.REACT_APP_EMAIL_CONFIRMATION_REDIRECT,
//     });

//   resetPassword = email => sendPasswordResetEmail(this.auth, email);

//   updatePassword = password => updatePassword(this.auth.currentUser, password);

//   addUser = (uid, data) => setDoc(doc(this.firestore, 'users', uid), data);

//   getUser = uid => getDoc(doc(this.firestore, 'users', uid));

// to change to this after adding email addResume = (data) => setDoc(doc(this.firestore, 'resumes', `${data.dateCreated}_${data.email}`), data);
  addResume = (data) => setDoc(doc(this.firestore, 'resumes', `${data.dateCreated}_${data.firstName}`), data);

  getResume = rid => getDoc(doc(this.firestore, 'resumes', rid));

  getAllResumes = async () => {
    const resumesCollection = collection(this.firestore, 'resumes');
    const querySnapshot = await getDocs(resumesCollection);

    const resumes = [];
    querySnapshot.forEach((doc) => {
      resumes.push({ id: doc.id, ...doc.data() });
    });

    return resumes;
  };

}

export default Firebase;