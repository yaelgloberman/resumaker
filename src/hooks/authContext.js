import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { database } from '../firebase/config';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(database, (user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(database, email, password);
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
      await createUserWithEmailAndPassword(database, email, password);
      console.log("User signed up");
      setIsAuthenticated(true);
    } catch (err) {
      console.error("Signup error:", err.message);
      setIsAuthenticated(false);
      throw err;
    }
  };

  const logout = async () => {
    try {
      await signOut(database);
      console.log("User logged out");
      setIsAuthenticated(false);
    } catch (err) {
      console.error("Logout error:", err.message);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, signup, logout }}>
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