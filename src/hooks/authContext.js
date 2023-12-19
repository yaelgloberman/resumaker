// authContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth'; // Import necessary functions from Firebase auth
import {database} from "../firebase/config"


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check the authentication state using Firebase or your chosen authentication mechanism
    const unsubscribe = onAuthStateChanged(database, (user) => {
      // If the user is logged in, set isAuthenticated to true; otherwise, set it to false
      setIsAuthenticated(!!user);
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, []); // Ensure the useEffect runs only once on component mount

  const login = () => {
    // Implement the logic to handle login and set isAuthenticated to true
  };

  const logout = () => {
    // Implement the logic to handle logout and set isAuthenticated to false
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
