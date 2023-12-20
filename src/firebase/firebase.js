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
import { getFirestore, doc, setDoc, getDoc, collection, getDocs, query, where } from 'firebase/firestore';
import firebaseConfig from './config2';

class Firebase {
  constructor() {
    this.firebase = initializeApp(firebaseConfig);

    this.auth = getAuth();
    this.firestore = getFirestore();
  }

addUser = (uid, data) => setDoc(doc(this.firestore, 'users', uid), data);

getUser = uid => getDoc(doc(this.firestore, 'users', uid));

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

  getAllResumesOfUser = async (uid) => {
    const resumesCollection = collection(this.firestore, 'resumes');
    
    // Create a query to filter resumes based on userId
    const q = query(resumesCollection, where('userId', '==', uid));
  
    try {
      const querySnapshot = await getDocs(q);
  
      const resumes = [];
      querySnapshot.forEach((doc) => {
        resumes.push({ id: doc.id, ...doc.data() });
      });
  
      return resumes;
    } catch (error) {
      console.error('Error getting resumes:', error.message);
      throw error;
    }
  };

}

export default Firebase;