import { useState } from "react";
import { database } from "../firebase/config";
import { signOut } from "firebase/auth";

const useLogout = () => {
  const [error, setError] = useState(null);

  const logout = async () => {
    try {
      setError(null);
      await signOut(database);
      console.log("User logged out");
    } catch (err) {
      setError(err.message);
    }
  };

  return { error, logout };
};

export default useLogout;
