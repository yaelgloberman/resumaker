import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc, collection, getDocs } from 'firebase/firestore';
import { auth, database } from '../firebase/config';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setIsAuthenticated(!!user);

      if (user) {
        // If the user is authenticated, fetch the role from Firestore
        const userDoc = await getDoc(doc(database, 'users', user.email));
        if (userDoc.exists()) {
          setRole(userDoc.data().role);
        }
      } else {
        // If not authenticated, reset the role
        setRole(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in");
      setIsAuthenticated(true);
    } catch (err) {
      console.error("Login error:", err.message);
      setIsAuthenticated(false);
      throw err;
    }
  };

  const signup = async (email, password) => {
    try {
      const uid = email;
      await createUserWithEmailAndPassword(auth, email, password);
      await addUser(uid, { email, password, role: "user" });
      console.log("User signed up");
      setIsAuthenticated(true);
      setRole("user");
    } catch (err) {
      console.error("Signup error:", err.message);
      setIsAuthenticated(false);
      throw err;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out");
      setIsAuthenticated(false);
      setRole(null);
    } catch (err) {
      console.error("Logout error:", err.message);
    }
  };

  const addUser = (uid, data) => setDoc(doc(database, 'users', uid), data);

  return (
    <AuthContext.Provider value={{ isAuthenticated, role, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
